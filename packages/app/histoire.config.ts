import { defineConfig } from 'histoire'

export default defineConfig({
  setupFile: '/src/histoire.setup.ts',
  vite: {
    server: {
      port: 3003,
    },
  },
})
