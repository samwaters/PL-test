/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  collectCoverage: true,
  coverageProvider: "v8",
  globals: {
    fetch: global.fetch,
  },
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "<rootDir>/src/testUtils/setupTests.ts"
  ],
  testMatch: [
    "**/__tests__/*.test.ts",
    "**/__tests__/*.test.tsx"
  ],
  testEnvironment: "jsdom",
  transform: {
    "\\.ts": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [151001]
        }
      }
    ]
  }
}
