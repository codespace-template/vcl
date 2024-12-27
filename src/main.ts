import { defineCommand } from 'citty'

export const testCommand = defineCommand({
  meta: {
    name: 'test',
    description: 'Run tests',
  },
  async run() {
    console.log("Test is Successful...")
  },
})

export const main = defineCommand({
  meta: {
    name: 'my-package',
    version: '1.0.0',
    description: 'My custom package',
  },
  subCommands: {
    test: testCommand,
  },
})