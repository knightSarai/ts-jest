/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json'
    }
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
};