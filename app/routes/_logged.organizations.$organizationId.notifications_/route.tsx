import React, { useState, useEffect } from 'react'
import { Typography, List, Switch, Card, Space, Spin, message } from 'antd'
import { BellOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NotificationsPage() {
  const { user } = useUserContext()
  const [notifications, setNotifications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [notificationSettings, setNotificationSettings] = useState({
    messages: true,
    statusUpdates: true,
  })

  const { data: messages } = Api.message.findMany.useQuery({
    where: { senderUserId: { not: user?.id } },
    include: { senderUser: true },
    orderBy: { createdAt: 'desc' },
  })

  const { data: statusUpdates } = Api.statusUpdate.findMany.useQuery({
    where: { userId: { not: user?.id } },
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  useEffect(() => {
    if (messages && statusUpdates) {
      const combinedNotifications = [
        ...(messages?.map(message => ({
          type: 'message',
          content: message.content,
          sender: message.senderUser?.name,
          createdAt: message.createdAt,
        })) || []),
        ...(statusUpdates?.map(status => ({
          type: 'status',
          content: status.content,
          sender: status.user?.name,
          createdAt: status.createdAt,
        })) || []),
      ].sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf(),
      )

      setNotifications(combinedNotifications)
      setLoading(false)
    }
  }, [messages, statusUpdates])

  const handleSettingChange = (setting: string) => (checked: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: checked }))
    message.success(
      `${setting} notifications ${checked ? 'enabled' : 'disabled'}`,
    )
  }

  const renderIcon = (type: string) => {
    switch (type) {
      case 'message':
        return (
          <MessageOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
        )
      case 'status':
        return <UserOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
      default:
        return <BellOutlined style={{ fontSize: '24px', color: '#faad14' }} />
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Notifications</Title>
        <Text>
          Stay informed about recent activities and manage your notification
          settings.
        </Text>

        <Card title="Notification Settings">
          <Space direction="vertical">
            <Space>
              <Switch
                checked={notificationSettings.messages}
                onChange={handleSettingChange('messages')}
              />
              <Text>Message Notifications</Text>
            </Space>
            <Space>
              <Switch
                checked={notificationSettings.statusUpdates}
                onChange={handleSettingChange('statusUpdates')}
              />
              <Text>Status Update Notifications</Text>
            </Space>
          </Space>
        </Card>

        {loading ? (
          <Spin size="large" />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={renderIcon(item.type)}
                  title={`${item.sender} - ${
                    item.type === 'message' ? 'New Message' : 'Status Update'
                  }`}
                  description={
                    <>
                      <Text>{item.content}</Text>
                      <br />
                      <Text type="secondary">
                        {dayjs(item.createdAt).format('MMMM D, YYYY h:mm A')}
                      </Text>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Space>
    </PageLayout>
  )
}
