/// <reference lib="WebWorker" />
import { PushManager } from '@remix-pwa/push/client'

export {}

declare let self: ServiceWorkerGlobalScope

self.addEventListener('install', event => {
  console.log('Service worker installed')

  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', event => {
  console.log('Service worker activated')

  event.waitUntil(self.clients.claim())
})

const pushManager = new PushManager({
  handlePushEvent: event => {
    // Handle incoming push event
    const data = event.data.json()

    const options = {
      body: data.body,
      icon: '/pwa/icon.png', // Add your icon here
      badge: '/pwa/badge.png', // Optional, add a badge image here
    }

    event.waitUntil(self.registration.showNotification(data.title, options))
  },
  handleNotificationClick: event => {
    // Handle notification click event
    console.log('handleNotificationClick')
    console.log(event)
  },
  handleNotificationClose: event => {
    // Handle notification close event
    console.log('handleNotificationClose')
    console.log(event)
  },
  handleNotificationError: event => {
    // Handle notification error event
    console.log('handleNotificationError')
    console.log(event)
  },
})
