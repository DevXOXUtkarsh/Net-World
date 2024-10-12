import React, { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Button,
  List,
  Avatar,
  Space,
  Spin,
  Upload,
  message,
} from 'antd'
import {
  SendOutlined,
  PictureOutlined,
  FileOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ChatViewPage() {
  const { user } = useUserContext()
  const { organizationId, chatId } = useParams()
  const navigate = useNavigate()
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [conversation, setConversation] = useState<any>(null)

  const { data: conversationData, isLoading: conversationLoading } =
    Api.conversation.findUnique.useQuery({
      where: { id: chatId },
      include: { conversationParticipants: { include: { user: true } } },
    })

  const { data: messagesData, isLoading: messagesLoading } =
    Api.message.findMany.useQuery(
      {
        where: { conversationId: chatId },
        include: { senderUser: true, messageReceipts: true },
      },
      { enabled: !!chatId },
    )

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()
  const { mutateAsync: updateMessageReceipt } =
    Api.messageReceipt.update.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const { emit } = SocketClient.useEvent(
    'new-message',
    (payload: { conversationId: string; message: any }) => {
      if (payload.conversationId === chatId) {
        setMessages(prevMessages => [...prevMessages, payload.message])
        updateMessageReceipt({
          where: { id: payload.message.messageReceipts[0].id },
          data: { status: 'DELIVERED', statusAt: new Date().toISOString() },
        })
      }
    },
  )

  useEffect(() => {
    if (conversationData) {
      setConversation(conversationData)
      setLoading(false)
    }
  }, [conversationData])

  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData)
      setLoading(false)
    }
  }, [messagesData])

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return

    const message = await sendMessage({
      data: {
        content: newMessage,
        messageType: 'TEXT',
        conversationId: chatId,
        senderUserId: user?.id,
      },
    })

    setMessages([...messages, message])
    setNewMessage('')

    emit({
      payload: { message, conversationId: chatId },
      userIds: conversation?.conversationParticipants
        ?.map((p: any) => p.userId)
        .filter((id: string) => id !== user?.id),
    })
  }

  const handleFileUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      const message = await sendMessage({
        data: {
          content: file.name,
          messageType: file.type.startsWith('image/') ? 'IMAGE' : 'FILE',
          mediaUrl: url,
          conversationId: chatId,
          senderUserId: user?.id,
        },
      })

      setMessages([...messages, message])

      emit({
        payload: { message, conversationId: chatId },
        userIds: conversation?.conversationParticipants
          ?.map((p: any) => p.userId)
          .filter((id: string) => id !== user?.id),
      })
    } catch (error) {
      message.error('Failed to upload file')
    }
  }

  const renderMessage = (msg: any) => (
    <List.Item key={msg.id}>
      <Space>
        <Avatar src={msg.senderUser.pictureUrl} />
        <div>
          <Text strong>{msg.senderUser.name}</Text>
          <Text type="secondary"> {dayjs(msg.createdAt).format('HH:mm')}</Text>
          {msg.messageType === 'TEXT' && <Paragraph>{msg.content}</Paragraph>}
          {msg.messageType === 'IMAGE' && (
            <img src={msg.mediaUrl} alt="Image" style={{ maxWidth: '200px' }} />
          )}
          {msg.messageType === 'FILE' && (
            <a href={msg.mediaUrl} target="_blank" rel="noopener noreferrer">
              <FileOutlined /> {msg.content}
            </a>
          )}
        </div>
      </Space>
    </List.Item>
  )

  if (loading || conversationLoading || messagesLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{conversation?.name || 'Chat'}</Title>
      <List
        dataSource={messages}
        renderItem={renderMessage}
        style={{ height: '60vh', overflowY: 'auto', marginBottom: '20px' }}
      />
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Type a message..."
        />
        <Upload
          accept="image/*,application/pdf"
          showUploadList={false}
          beforeUpload={file => {
            handleFileUpload(file)
            return false
          }}
        >
          <Button icon={<PictureOutlined />} />
        </Upload>
        <Button
          icon={<SmileOutlined />}
          onClick={() => message.info('Emoji picker not implemented')}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Space.Compact>
    </PageLayout>
  )
}
