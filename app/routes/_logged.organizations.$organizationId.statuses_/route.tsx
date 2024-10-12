import { Typography, List, Avatar, Input, Button, Space, message } from 'antd'
import { CommentOutlined, SendOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function StatusUpdatesPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [replyContent, setReplyContent] = useState<string>('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const {
    data: statusUpdates,
    isLoading,
    refetch,
  } = Api.statusUpdate.findMany.useQuery({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  const { mutateAsync: createMessage } = Api.message.create.useMutation()

  const handleReply = async (statusUpdateId: string) => {
    if (!replyContent.trim()) {
      message.error('Reply content cannot be empty')
      return
    }

    try {
      await createMessage({
        data: {
          content: replyContent,
          messageType: 'TEXT',
          sentAt: new Date().toISOString(),
          conversation: {
            connect: { id: statusUpdateId }, // Assuming status update ID can be used as conversation ID
          },
          senderUser: {
            connect: { id: user?.id },
          },
        },
      })

      message.success('Reply sent successfully')
      setReplyContent('')
      setReplyingTo(null)
      refetch()
    } catch (error) {
      message.error('Failed to send reply')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Status Updates</Title>
      <Paragraph>View and interact with your contacts' latest posts.</Paragraph>

      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={statusUpdates}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <Button
                key="reply"
                icon={<CommentOutlined />}
                onClick={() => setReplyingTo(item.id)}
              >
                Reply
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.user?.pictureUrl} />}
              title={<Text strong>{item.user?.name}</Text>}
              description={dayjs(item.createdAt).format('MMMM D, YYYY h:mm A')}
            />
            <Paragraph>{item.content}</Paragraph>
            {item.mediaUrl && (
              <img
                src={item.mediaUrl}
                alt="Status media"
                style={{ maxWidth: '100%', marginTop: 16 }}
              />
            )}
            {replyingTo === item.id && (
              <Space.Compact style={{ width: '100%', marginTop: 16 }}>
                <Input
                  placeholder="Type your reply..."
                  value={replyContent}
                  onChange={e => setReplyContent(e.target.value)}
                />
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={() => handleReply(item.id)}
                >
                  Send
                </Button>
              </Space.Compact>
            )}
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
