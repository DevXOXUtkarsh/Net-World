import cookie, {
  type CookieParseOptions,
  type CookieSerializeOptions,
} from 'cookie'

import { Socket } from 'socket.io'

export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

const isProduction = process.env.NODE_ENV === 'production'

const getCookie = (
  req: Request,
  name: string,
  options?: CookieParseOptions,
) => {
  const cookieHeader = req.headers.get('Cookie')

  if (!cookieHeader) {
    return ''
  }

  const cookies = cookie.parse(cookieHeader, options)

  return cookies[name] as string
}

const getCookieFromSocket = (
  socket: Socket,
  name: string,
  options?: CookieParseOptions,
) => {
  const cookieHeader = socket.handshake.headers.cookie

  if (!cookieHeader) {
    return ''
  }

  const cookies = cookie.parse(cookieHeader, options)

  return cookies[name] as string
}

const setCookie = (
  resHeaders: Headers,
  name: string,
  value: string,
  options?: CookieSerializeOptions,
) => {
  resHeaders.set(
    'Set-Cookie',
    cookie.serialize(name, value, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: isProduction,
      path: '/',
      sameSite: 'lax',
      ...options,
    }),
  )
}

const deleteCookie = (
  resHeaders: Headers,
  name: string,
  options?: CookieSerializeOptions,
) => {
  resHeaders.set(
    'Set-Cookie',
    cookie.serialize(name, '', {
      maxAge: 0,
      httpOnly: true,
      secure: isProduction,
      path: '/',
      sameSite: 'lax',
      ...options,
    }),
  )
}

export const Cookies = {
  get: getCookie,
  set: setCookie,
  delete: deleteCookie,

  getFromSocket: getCookieFromSocket,
}
