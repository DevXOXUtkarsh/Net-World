import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import { WorkspaceProvider } from './core/.marblism/workspace'
import { UserProvider } from './core/context'
import { TrpcClient } from './core/trpc'
import { DesignSystemProvider } from './designSystem'

import '~/designSystem/style/main.scss'

import { SocketClient } from './plugins/socket/client'

export const meta: MetaFunction = () => {
  return [
    { title: 'Net World' },
    {
      name: 'description',
      content: 'Net World',
    },
  ]
}

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  
  {
    rel: 'manifest',
    href: '/manifest.webmanifest',
  },
  
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <DesignSystemProvider>
          <TrpcClient.Provider>
            <WorkspaceProvider>
              <UserProvider>
                
                <SocketClient.Provider>{children}</SocketClient.Provider>

</UserProvider>
            </WorkspaceProvider>
          </TrpcClient.Provider>
        </DesignSystemProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
