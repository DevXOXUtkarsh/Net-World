// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const { organization } = useUserContext()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home Page',
      position: 'topbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/chats',
      label: 'Chats List',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/chats'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/contacts',
      label: 'Contacts List',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/contacts'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/groups/new',
      label: 'Create Group Chat',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/groups/new'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/statuses',
      label: 'Status Updates',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/statuses'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/statuses/new',
      label: 'Create Status Update',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/statuses/new'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/nearby-users',
      label: 'Nearby Users Map',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/nearby-users'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/notifications',
      label: 'Notifications',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/notifications'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/search',
      label: 'Search',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/search'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}
