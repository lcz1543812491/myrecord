import { mkdirSync, writeFileSync } from 'fs'
import createTemplate from './createTemplate.js'

const inputConfig = {
  packageName: 'hei',
  port: '8080',
  middleware: {
    static1: true,
    views: true,
    router: true,
    body: true
  }
}

mkdirSync('./hei')
writeFileSync('./hei/index.ts', createTemplate(inputConfig))
writeFileSync('./hei/package.json', 'package')
