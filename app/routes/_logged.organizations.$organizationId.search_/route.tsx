import React, { useState } from 'react'
import { Input, Tabs, List, Avatar, Typography, Space } from 'antd'
import {
  MessageOutlined,
  UserOutlined,
  TeamOutlined,
  SearchOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('1')
  const { organizationId } = useParams()
  const navigate = useNavigate()

  const { data: messages } = Api.message.findMany.useQuery({
    where: { content: { contains: searchTerm, mode: 'insensitive' } },
    include: { conversation: true, senderUser: true },
  })

  const { data: contacts } = Api.contact.findMany.useQuery({
    where: {
      OR: [
        { contactName: { contains: searchTerm, mode: 'insensitive' } },
        {
          contactUser: { name: { contains: searchTerm, mode: 'insensitive' } },
        },
      ],
    },
    include: { contactUser: true },
  })

  const { data: conversations } = Api.conversation.findMany.useQuery({
    where: {
      OR: [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { isGroup: true },
      ],
    },
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }

  const renderMessageItem = (item: any) => (
    <List.Item
      key={item.id}
      onClick={() =>
        navigate(
          `/organizations/${organizationId}/chats/${item.conversationId}`,
        )
      }
    >
      <List.Item.Meta
        avatar={<Avatar icon={<MessageOutlined />} />}
        title={item.senderUser.name}
        description={item.content}
      />
    </List.Item>
  )

  const renderContactItem = (item: any) => (
    <List.Item
      key={item.id}
      onClick={() => navigate(`/organizations/${organizationId}/contacts`)}
    >
      <List.Item.Meta
        avatar={
          <Avatar icon={<UserOutlined />} src={item.contactUser.pictureUrl} />
        }
        title={item.contactName || item.contactUser.name}
        description={item.contactUser.email}
      />
    </List.Item>
  )

  const renderGroupItem = (item: any) => (
    <List.Item
      key={item.id}
      onClick={() =>
        navigate(`/organizations/${organizationId}/chats/${item.id}`)
      }
    >
      <List.Item.Meta
        avatar={<Avatar icon={<TeamOutlined />} src={item.iconUrl} />}
        title={item.name}
        description={`Group chat`}
      />
    </List.Item>
  )

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Title level={2}>Search</Title>
        <Text>Search for messages, contacts, and groups</Text>

        <Input
          placeholder="Search..."
          onChange={e => handleSearch(e.target.value)}
          prefix={<SearchOutlined />}
          size="large"
        />

        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <Tabs.TabPane tab="Chats" key="1">
            <List
              itemLayout="horizontal"
              dataSource={messages}
              renderItem={renderMessageItem}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Contacts" key="2">
            <List
              itemLayout="horizontal"
              dataSource={contacts}
              renderItem={renderContactItem}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Groups" key="3">
            <List
              itemLayout="horizontal"
              dataSource={conversations?.filter(conv => conv.isGroup)}
              renderItem={renderGroupItem}
            />
          </Tabs.TabPane>
        </Tabs>
      </Space>
    </PageLayout>
  )
}
