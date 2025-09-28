import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/snake-game-react/',
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    restoreMocks: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: process.env.CI ? 'lcov' : 'html',
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: [],
      include: ['src/'],
    },
  },
})
