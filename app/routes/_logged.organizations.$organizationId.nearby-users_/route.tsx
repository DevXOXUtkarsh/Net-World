import React, { useState, useEffect } from 'react'
import { Typography, Card, Modal, Button } from 'antd'
import { UserOutlined, MessageOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NearbyUsersMapPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const [nearbyUsers, setNearbyUsers] = useState<any[]>([])
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: users, isLoading } = Api.user.findMany.useQuery({
    where: {
      id: { not: user?.id },
    },
  })

  useEffect(() => {
    if (users) {
      // Simulating nearby users with random coordinates
      const simulatedNearbyUsers = users.map(u => ({
        ...u,
        lat: Math.random() * 0.1 + 51.5,
        lng: Math.random() * 0.1 - 0.1,
      }))
      setNearbyUsers(simulatedNearbyUsers)
    }
  }, [users])

  const handleUserClick = (user: any) => {
    setSelectedUser(user)
    setIsModalVisible(true)
  }

  const handleStartChat = () => {
    if (selectedUser) {
      navigate(`/organizations/${organizationId}/chats/${selectedUser.id}`)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Nearby Users Map</Title>
      <Text>Discover and connect with Networld users in your area.</Text>

      <div
        style={{
          marginTop: 20,
          height: '60vh',
          position: 'relative',
          border: '1px solid #ccc',
        }}
      >
        {isLoading ? (
          <Text>Loading nearby users...</Text>
        ) : (
          nearbyUsers.map(user => (
            <div
              key={user.id}
              style={{
                position: 'absolute',
                left: `${(user.lng + 0.1) * 500}px`,
                top: `${(51.6 - user.lat) * 500}px`,
                cursor: 'pointer',
              }}
              onClick={() => handleUserClick(user)}
            >
              <UserOutlined style={{ fontSize: 24, color: '#1890ff' }} />
            </div>
          ))
        )}
      </div>

      <Modal
        title="User Profile"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
          <Button
            key="chat"
            type="primary"
            icon={<MessageOutlined />}
            onClick={handleStartChat}
          >
            Start Chat
          </Button>,
        ]}
      >
        {selectedUser && (
          <Card>
            <Card.Meta
              avatar={<UserOutlined style={{ fontSize: 48 }} />}
              title={selectedUser.name}
              description={selectedUser.email}
            />
          </Card>
        )}
      </Modal>
    </PageLayout>
  )
}
