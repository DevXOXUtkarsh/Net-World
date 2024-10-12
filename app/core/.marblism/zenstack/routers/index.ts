/* eslint-disable */
import type {
  unsetMarker,
  AnyRouter,
  AnyRootConfig,
  CreateRouterInner,
  Procedure,
  ProcedureBuilder,
  ProcedureParams,
  ProcedureRouterRecord,
  ProcedureType,
} from '@trpc/server'
import type { PrismaClient } from '@zenstackhq/runtime/models'
import createUserRouter from './User.router'
import createConversationRouter from './Conversation.router'
import createConversationParticipantRouter from './ConversationParticipant.router'
import createMessageRouter from './Message.router'
import createMessageReceiptRouter from './MessageReceipt.router'
import createStatusUpdateRouter from './StatusUpdate.router'
import createContactRouter from './Contact.router'
import createOrganizationRouter from './Organization.router'
import createOrganizationRoleRouter from './OrganizationRole.router'
import createPwaSubscriptionRouter from './PwaSubscription.router'
import { ClientType as UserClientType } from './User.router'
import { ClientType as ConversationClientType } from './Conversation.router'
import { ClientType as ConversationParticipantClientType } from './ConversationParticipant.router'
import { ClientType as MessageClientType } from './Message.router'
import { ClientType as MessageReceiptClientType } from './MessageReceipt.router'
import { ClientType as StatusUpdateClientType } from './StatusUpdate.router'
import { ClientType as ContactClientType } from './Contact.router'
import { ClientType as OrganizationClientType } from './Organization.router'
import { ClientType as OrganizationRoleClientType } from './OrganizationRole.router'
import { ClientType as PwaSubscriptionClientType } from './PwaSubscription.router'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>

export type UnsetMarker = typeof unsetMarker

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter(router, procedure),
    conversation: createConversationRouter(router, procedure),
    conversationParticipant: createConversationParticipantRouter(
      router,
      procedure,
    ),
    message: createMessageRouter(router, procedure),
    messageReceipt: createMessageReceiptRouter(router, procedure),
    statusUpdate: createStatusUpdateRouter(router, procedure),
    contact: createContactRouter(router, procedure),
    organization: createOrganizationRouter(router, procedure),
    organizationRole: createOrganizationRoleRouter(router, procedure),
    pwaSubscription: createPwaSubscriptionRouter(router, procedure),
  })
}

export interface ClientType<AppRouter extends AnyRouter> {
  user: UserClientType<AppRouter>
  conversation: ConversationClientType<AppRouter>
  conversationParticipant: ConversationParticipantClientType<AppRouter>
  message: MessageClientType<AppRouter>
  messageReceipt: MessageReceiptClientType<AppRouter>
  statusUpdate: StatusUpdateClientType<AppRouter>
  contact: ContactClientType<AppRouter>
  organization: OrganizationClientType<AppRouter>
  organizationRole: OrganizationRoleClientType<AppRouter>
  pwaSubscription: PwaSubscriptionClientType<AppRouter>
}
