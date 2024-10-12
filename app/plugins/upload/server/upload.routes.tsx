import { ActionFunction, json } from '@remix-run/node'
import { zfd } from 'zod-form-data'
import { AuthenticationServer } from '~/core/authentication/server'
import { UploadService } from './upload.service'
import { UploadFileType } from './upload.type'

export const uploadPrivateAction: ActionFunction = async ({ request }) => {
  await AuthenticationServer.getHttpContext({ request })

  const schema = zfd.formData({
    file: zfd.file(),
  })

  try {
    const formData = await request.formData()

    const data = schema.parse({
      file: formData.get('file'),
    })

    const arrayBuffer = await data.file.arrayBuffer()

    const file: UploadFileType = {
      name: data.file.name,
      mimetype: data.file.type,
      buffer: Buffer.from(arrayBuffer),
    }

    const urls = await UploadService.uploadPrivate(file)

    return json(urls?.[0])
  } catch (error) {
    console.log(error)
    return json(`Could not upload file`, { status: 500 })
  }
}

export const uploadPublicAction: ActionFunction = async ({ request }) => {
  await AuthenticationServer.getHttpContext({ request })

  const schema = zfd.formData({
    file: zfd.file(),
  })

  try {
    const formData = await request.formData()

    const data = schema.parse({
      file: formData.get('file'),
    })

    const arrayBuffer = await data.file.arrayBuffer()

    const file: UploadFileType = {
      name: data.file.name,
      mimetype: data.file.type,
      buffer: Buffer.from(arrayBuffer),
    }
    const urls = await UploadService.uploadPublic(file)

    return json(urls?.[0])
  } catch (error) {
    console.log(error)
    return json(`Could not upload file`, { status: 500 })
  }
}
