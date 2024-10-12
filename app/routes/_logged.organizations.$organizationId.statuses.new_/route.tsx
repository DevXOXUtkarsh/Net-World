import React, { useState } from 'react'
import { Typography, Form, Input, Select, Upload, Button, message } from 'antd'
import { UploadOutlined, SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { TextArea } = Input
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateStatusUpdatePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<any[]>([])
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: createStatusUpdate } =
    Api.statusUpdate.create.useMutation()

  const onFinish = async (values: any) => {
    try {
      let mediaUrl = ''
      if (fileList.length > 0) {
        const file = fileList[0].originFileObj
        const result = await uploadFile({ file })
        mediaUrl = result.url
      }

      await createStatusUpdate({
        data: {
          content: values.content,
          mediaUrl,
          privacySetting: values.privacySetting,
          userId: user?.id || '',
        },
      })

      message.success('Status update created successfully')
      navigate(`/organizations/${organizationId}/statuses`)
    } catch (error) {
      message.error('Failed to create status update')
    }
  }

  const handleFileChange = (info: any) => {
    setFileList(info.fileList.slice(-1))
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>Create New Status Update</Title>
        <Text>Share updates with your contacts</Text>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{ marginTop: 24 }}
        >
          <Form.Item
            name="content"
            label="Status Content"
            rules={[
              { required: true, message: 'Please enter your status content' },
            ]}
          >
            <TextArea rows={4} placeholder="What's on your mind?" />
          </Form.Item>
          <Form.Item name="mediaUrl" label="Upload Image or Video">
            <Upload
              beforeUpload={() => false}
              onChange={handleFileChange}
              fileList={fileList}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="privacySetting"
            label="Privacy Setting"
            rules={[
              { required: true, message: 'Please select privacy setting' },
            ]}
          >
            <Select placeholder="Select privacy setting">
              <Option value="public">Public</Option>
              <Option value="friends">Friends Only</Option>
              <Option value="private">Private</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
              Post Status Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
