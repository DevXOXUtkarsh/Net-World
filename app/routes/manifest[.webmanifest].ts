import type { WebAppManifest } from '@remix-pwa/dev'
import { json } from '@remix-run/node'

export const loader = () => {
  return json(
    {
      short_name: 'Net World',
      name: 'Net World',
      orientation: 'portrait',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#000000',
      icons: [
        {
          src: '/pwa/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    } as WebAppManifest,
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    },
  )
}
