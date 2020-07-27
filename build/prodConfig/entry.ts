import { Entry } from 'webpack'
const resolve: Function = require('../utils/resolve')

const entryConfig: Entry = {
  vendor: ['react'],
  app: resolve('src/main.tsx')
}

module.exports = entryConfig

export {}
