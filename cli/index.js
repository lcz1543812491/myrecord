import { mkdirSync, writeFileSync } from 'fs'
import createTemplate from './createTemplate.js'
import questions from './questions/index.js'
import { createConfig } from './config.js'
import createPackageTemplate from './createPackageTemplate.js'
import execa from 'execa'

const answer = await questions()
const inputConfig = createConfig(answer)

// const inputConfig = {
//   packageName: 'hei',
//   port: '8080',
//   middleware: {
//     static1: true,
//     views: true,
//     router: true,
//     body: true
//   }
// }

mkdirSync('./hei')
writeFileSync('./hei/index.ts', createTemplate(inputConfig))
writeFileSync('./hei/package.json', createPackageTemplate(inputConfig))
execa('yarn', { cwd: './hei', stdio: [2, 2, 2] })
