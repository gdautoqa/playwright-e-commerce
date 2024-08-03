import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', 
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 2,
  reporter: [['html', { open: 'never' }]],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['chromium'] },
    },
    {
      name: 'firefox',
      use: { ...devices['firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['webkit'] },
    },
  ],
  outputDir: 'test-results/',
});