import React, { useState } from 'react'
import { Typography, Form, Input, Button, Select, Upload, message } from 'antd'
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateGroupChatPage() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [groupIcon, setGroupIcon] = useState<string | null>(null)

  const { data: contacts } = Api.contact.findMany.useQuery({
    where: { userId: user?.id },
    include: { contactUser: true },
  })

  const { mutateAsync: createConversation } =
    Api.conversation.create.useMutation()
  const { mutateAsync: createParticipant } =
    Api.conversationParticipant.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const handleSubmit = async (values: any) => {
    try {
      const newConversation = await createConversation({
        data: {
          name: values.groupName,
          isGroup: true,
          iconUrl: groupIcon,
          createdById: user?.id || '',
        },
      })

      await createParticipant({
        data: {
          conversationId: newConversation.id,
          userId: user?.id || '',
          isAdmin: true,
        },
      })

      for (const contactId of selectedContacts) {
        await createParticipant({
          data: {
            conversationId: newConversation.id,
            userId: contactId,
            isAdmin: false,
          },
        })
      }

      message.success('Group chat created successfully!')
      navigate(`/organizations/${organizationId}/chats/${newConversation.id}`)
    } catch (error) {
      console.error('Error creating group chat:', error)
      message.error('Failed to create group chat. Please try again.')
    }
  }

  const handleIconUpload = async (options: any) => {
    const { file } = options
    try {
      const result = await upload({ file })
      setGroupIcon(result.url)
      message.success('Group icon uploaded successfully')
    } catch (error) {
      console.error('Error uploading group icon:', error)
      message.error('Failed to upload group icon')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Create New Group Chat</Title>
        <Text>Create a new group chat to message multiple people at once.</Text>
      </div>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="groupName"
          label="Group Name"
          rules={[{ required: true, message: 'Please enter a group name' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Enter group name" />
        </Form.Item>
        <Form.Item name="groupIcon" label="Group Icon">
          <Upload
            accept="image/*"
            customRequest={handleIconUpload}
            showUploadList={false}
          >
            <Button icon={<PlusOutlined />}>Upload Group Icon</Button>
          </Upload>
        </Form.Item>
        {groupIcon && (
          <img
            src={groupIcon}
            alt="Group Icon"
            style={{
              width: 100,
              height: 100,
              objectFit: 'cover',
              marginBottom: '1rem',
            }}
          />
        )}
        <Form.Item
          name="contacts"
          label="Add Contacts"
          rules={[
            { required: true, message: 'Please select at least one contact' },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Select contacts"
            onChange={values => setSelectedContacts(values)}
          >
            {contacts?.map(contact => (
              <Select.Option
                key={contact.contactUserId}
                value={contact.contactUserId}
              >
                {contact.contactUser?.name || contact.contactUser?.email}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create Group Chat
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
