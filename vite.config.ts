import { vitePlugin as remix } from '@remix-run/dev'
import esbuild from 'esbuild'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { remixPWA } from '@remix-pwa/dev'

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      serverBuildFile: 'remix.js',
      buildEnd: async () => {
        await esbuild
          .build({
            alias: { '~': './app', '@': './app' },
            outfile: 'build/server/index.js',
            entryPoints: ['server/index.ts'],
            external: ['./build/server/*'],
            platform: 'node',
            format: 'esm',
            packages: 'external',
            bundle: true,
            logLevel: 'info',
          })
          .catch((error: unknown) => {
            console.error('Error building server:', error)
            process.exit(1)
          })
      },
    }),
    tsconfigPaths(),
    
    remixPWA(),
    
  ],
  optimizeDeps: {
    exclude: [
      
      '@remix-pwa/push/client',

'socket.io-client',
      
    ],
  },
})
