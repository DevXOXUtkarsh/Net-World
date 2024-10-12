import React, { useState } from 'react'
import { Input, List, Button, Modal, Form, message, Typography } from 'antd'
import {
  UserOutlined,
  PhoneOutlined,
  PlusOutlined,
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

export default function ContactsListPage() {
  const { user } = useUserContext()
  const { organizationId } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: contacts,
    isLoading,
    refetch,
  } = Api.contact.findMany.useQuery({
    where: { userId: user?.id },
    include: { contactUser: true },
  })

  const { mutateAsync: addContact } = Api.contact.create.useMutation()

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const filteredContacts = contacts?.filter(contact =>
    contact.contactUser?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleAddContact = async (values: {
    phoneNumber: string
    name: string
  }) => {
    try {
      await addContact({
        data: {
          userId: user?.id,
          contactUserId: values.phoneNumber, // Assuming phone number is used as user ID
          contactName: values.name,
        },
      })
      message.success('Contact added successfully')
      refetch()
      handleCancel()
    } catch (error) {
      message.error('Failed to add contact')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>Contacts</Title>
        <Text>View and manage your contacts</Text>

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Input
            placeholder="Search contacts"
            prefix={<SearchOutlined />}
            onChange={e => handleSearch(e.target.value)}
            style={{ marginBottom: 16 }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Add New Contact
          </Button>
        </div>

        <List
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={filteredContacts}
          renderItem={contact => (
            <List.Item>
              <List.Item.Meta
                avatar={<UserOutlined style={{ fontSize: 24 }} />}
                title={contact.contactUser?.name || 'Unknown'}
                description={contact.contactUser?.email || 'No email'}
              />
            </List.Item>
          )}
        />

        <Modal
          title="Add New Contact"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleAddContact}>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: 'Please input the phone number!' },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Please input the contact name!' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Contact Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Contact
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
