import React, { useEffect } from 'react'
import { Typography, List, Badge, Space, Avatar } from 'antd'
import { MessageOutlined, UserOutlined, BellOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const { organizationId } = useParams()

  const { data: recentChats, refetch: refetchChats } =
    Api.conversation.findMany.useQuery({
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
      orderBy: {
        updatedAt: 'desc',
      },
      take: 5,
    })

  const { data: statusUpdates, refetch: refetchStatuses } =
    Api.statusUpdate.findMany.useQuery({
      where: {
        user: {
          id: {
            in: user?.contacts?.map(contact => contact.contactUserId) || [],
          },
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    })

  useEffect(() => {
    const { unsubscribe } = SocketClient.useEvent('new-message', () => {
      refetchChats()
    })

    return () => unsubscribe()
  }, [refetchChats])

  useEffect(() => {
    const { unsubscribe } = SocketClient.useEvent('new-status', () => {
      refetchStatuses()
    })

    return () => unsubscribe()
  }, [refetchStatuses])

  const handleChatClick = (chatId: string) => {
    navigate(`/organizations/${organizationId}/chats/${chatId}`)
  }

  const handleStatusClick = () => {
    navigate(`/organizations/${organizationId}/statuses`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Recent Activity</Title>
        <Text>
          Stay updated with your recent chats and contacts' status updates.
        </Text>

        <List
          header={<Title level={4}>Recent Chats</Title>}
          bordered
          dataSource={recentChats}
          renderItem={chat => (
            <List.Item
              onClick={() => handleChatClick(chat.id)}
              style={{ cursor: 'pointer' }}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<MessageOutlined />} />}
                title={
                  chat.name ||
                  chat.conversationParticipants
                    .map(p => p.user?.name)
                    .join(', ')
                }
                description={chat.messages[0]?.content || 'No messages yet'}
              />
              <Text type="secondary">
                {dayjs(chat.updatedAt).format('MMM D, YYYY')}
              </Text>
            </List.Item>
          )}
        />

        <List
          header={<Title level={4}>Recent Status Updates</Title>}
          bordered
          dataSource={statusUpdates}
          renderItem={status => (
            <List.Item
              onClick={handleStatusClick}
              style={{ cursor: 'pointer' }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={status.user?.pictureUrl}
                    icon={<UserOutlined />}
                  />
                }
                title={status.user?.name}
                description={status.content}
              />
              <Text type="secondary">
                {dayjs(status.createdAt).format('MMM D, YYYY')}
              </Text>
            </List.Item>
          )}
        />

        <Badge count={5} offset={[10, 0]}>
          <BellOutlined
            style={{ fontSize: 24 }}
            onClick={() =>
              navigate(`/organizations/${organizationId}/notifications`)
            }
          />
        </Badge>
      </Space>
    </PageLayout>
  )
}
