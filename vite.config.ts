import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { codecovVitePlugin } from '@codecov/vite-plugin'

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
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'snake-game-react',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    restoreMocks: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    reporters: process.env.CI ? 'junit' : 'default',
    outputFile: 'test-report.junit.xml',
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
