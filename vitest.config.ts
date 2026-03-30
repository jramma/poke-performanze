import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    globals: false,
  },
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './app/lib'),
      '@components': path.resolve(__dirname, './app/components'),
      '@hooks': path.resolve(__dirname, './app/hooks'),
      '@styles': path.resolve(__dirname, './app/styles'),
      '@api': path.resolve(__dirname, './app/api'),
    },
  },
})
