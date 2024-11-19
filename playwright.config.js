const { defineConfig, devices } = require ('@playwright/test');

export default defineConfig({
  // Directory where your tests are located
  testDir: './tests',

  // Timeout for each test (in ms)
  timeout: 30000,  // 30 seconds

  // Number of retries on test failure
  retries: 2,

  // Number of parallel workers (tests run in parallel)
  workers: 4,

  // Global settings for each test
  use: {
    //headless: true,  // Run tests in headless mode (set to true for CI)
    screenshot: 'only-on-failure',  // Capture screenshot only on failure
    video: 'retain-on-failure',  // Capture video on failure
    trace: 'retain-on-failure',  // Capture trace on failure
    baseURL: '',  // Set a base URL for your app
    // You can also configure device emulation here
    // For example, emulate mobile devices:
    // viewport: { width: 375, height: 667 },
    // device: devices['iPhone 12'],
  },

  // Define projects for different configurations (e.g., different browsers or devices)
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'desktop-firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 12'] },
    },*/
  ],

  // Optionally, configure test reporting
  reporter: [
    ['dot'],  // Simple dot reporter
    ['html', { open: 'always' }],  // HTML report that opens automatically after tests
  ],
});
