module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  collectCoverage: true,
  coverageDirectory: "coverage",
  rootDir: './src',
  testMatch: [
    "**/__tests__/**/*.test.ts",
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};