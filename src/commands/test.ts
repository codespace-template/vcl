import { defineCommand } from 'citty'

export const testCommand = defineCommand({
  meta: {
    name: 'test',
    description: 'Run tests',
  },
  async run() {
    console.log('Test is Successful...')
  },
})
