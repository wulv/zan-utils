module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  collectCoverage: true,
  coverageDirectory: "coverage",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: "http://localhost/",

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  coverageReporters: ["html", "json"],
  testMatch: [
    "**/__tests__/**/*.test.ts",
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
