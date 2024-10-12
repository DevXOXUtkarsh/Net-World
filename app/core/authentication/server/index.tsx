import { createTrpcContext } from './context'
import { getHttpContext, getHttpContextPublic } from './middleware'
import { AuthenticationRouter } from './router'
import { AuthenticationService } from './service'

import { createSocketContext } from './context'

export const AuthenticationServer = {
  createTrpcContext,

  createSocketContext,

  getHttpContext,
  getHttpContextPublic,
  trpcRouter: AuthenticationRouter,
  service: AuthenticationService,
}
