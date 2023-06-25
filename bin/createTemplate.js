import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { render } from 'ejs'
import { readFileSync } from 'fs'
import prettier from 'prettier'

export default function createTemplate(props) {
  const { middleware, port } = props
  const __dirname = fileURLToPath(import.meta.url)
  console.log('middleware', middleware)
  const templateCode = readFileSync(resolve(__dirname, '../template/index.ejs'))

  return prettier.format(render(templateCode.toString(), { middleware, port }), { parser: 'babel' })
}
