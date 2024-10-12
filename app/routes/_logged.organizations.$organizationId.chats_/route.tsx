import React, { useState } from 'react'
import { Typography, Input, List, Avatar, Button, Space } from 'antd'
import {
  SearchOutlined,
  MessageOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ChatsListPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const [searchTerm, setSearchTerm] = useState('')

  const { data: conversations, isLoading } = Api.conversation.findMany.useQuery(
    {
      where: {
        conversationParticipants: {
          some: {
            userId: user?.id,
          },
        },
      },
      include: {
        conversationParticipants: {
          include: {
            user: true,
          },
        },
        messages: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    },
  )

  const filteredConversations = conversations?.filter(
    conv =>
      conv.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.conversationParticipants.some(participant =>
        participant.user?.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()),
      ),
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleConversationClick = (conversationId: string) => {
    navigate(`/organizations/${organizationId}/chats/${conversationId}`)
  }

  const handleInvite = () => {
    // Generate invite link
    const inviteLink = `${window.location.origin}/invite/${user?.id}`
    navigator.clipboard.writeText(inviteLink)
    alert('Invite link copied to clipboard!')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Title level={2}>Your Conversations</Title>
        <Text>View and search through your chat conversations</Text>

        <Input
          placeholder="Search conversations"
          prefix={<SearchOutlined />}
          onChange={handleSearch}
          style={{ marginBottom: 16 }}
        />

        <Button icon={<UserAddOutlined />} onClick={handleInvite}>
          Invite Friends
        </Button>

        <List
          loading={isLoading}
          dataSource={filteredConversations}
          renderItem={conversation => (
            <List.Item
              key={conversation.id}
              onClick={() => handleConversationClick(conversation.id)}
              style={{ cursor: 'pointer' }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      conversation.iconUrl || 'https://i.imgur.com/ZdJSK3Y.jpeg'
                    }
                  />
                }
                title={
                  conversation.name ||
                  conversation.conversationParticipants
                    .map(p => p.user?.name)
                    .join(', ')
                }
                description={
                  conversation.messages?.[0]?.content || 'No messages yet'
                }
              />
              {conversation.messages?.[0] && (
                <Text type="secondary">
                  {dayjs(conversation.messages[0].createdAt).format(
                    'MMM D, YYYY',
                  )}
                </Text>
              )}
            </List.Item>
          )}
        />

        <Button
          type="primary"
          icon={<MessageOutlined />}
          onClick={() =>
            navigate(`/organizations/${organizationId}/groups/new`)
          }
        >
          Create New Group Chat
        </Button>
      </Space>
    </PageLayout>
  )
}
