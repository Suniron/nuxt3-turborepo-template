// Load .env file
import { config } from 'dotenv'

config()

// Ignore warning about conflict for env vars
globalThis.console.warn = (msg: string, ...optionalParams) => {
  if (msg.includes('Conflict for env vars')) {
    return
  }
  // eslint-disable-next-line no-console
  console.log('[warn] ', msg, ...optionalParams)
}

/**
 * Theese actions will be executed **before** each tests.
 *
 * It's used only when launch from vscode extension
 */
beforeAll(() => {
  jest.setTimeout(60 * 5 * 1000)
  process.env.JEST_STARTED_FROM_ROOT = 'true'
})
