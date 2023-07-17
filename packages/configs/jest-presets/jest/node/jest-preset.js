/** @type {import('jest').Config} */
module.exports = {
  detectOpenHandles: true,
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js', 'jsx', 'tsx', 'json', 'node', 'vue'],
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/.git',
    '<rootDir>/.output',
    '<rootDir>/build',
  ],
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/utils/setupTests.ts'],
  testMatch: [
    '**/__tests__/**/*test.ts',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },

}
