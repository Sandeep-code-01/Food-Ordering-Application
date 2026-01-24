/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
};
