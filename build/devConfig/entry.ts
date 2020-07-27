import { Entry } from 'webpack'
const resolve: Function = require('../utils/resolve')

const entryConfig: Entry = {
  app: resolve('src/main.tsx'),
}

module.exports = entryConfig

export {}
