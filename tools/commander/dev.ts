import { spawnSync } from 'child_process'
import { Command } from 'commander'
import path from 'path'
import { SERVER_PATH, TOOLS_PATH } from '~config/paths'

const SERVER_INDEX_PATH = path.resolve(SERVER_PATH, 'src', 'index.ts')
const NODEMON_CONFIG_PATH = path.resolve(TOOLS_PATH, 'nodemon', 'config.json')

type RunDevOptions = { d?: boolean; debug?: boolean }

function runDev(options: RunDevOptions) {
  const { debug } = options

  const command = `yarn nodemon --config ${NODEMON_CONFIG_PATH}`

  let finalCommand = `${command} ${SERVER_INDEX_PATH}`

  if (debug) {
    finalCommand = `${command} --inspect ${SERVER_INDEX_PATH}`
    process.env.DEBUG = 'true'
  }

  spawnSync(finalCommand, { shell: true, stdio: 'inherit' })
}

const main = () => {
  const program = new Command()

  program
    .name('dev')
    .option('-d, --debug', 'run the server with --inspect flag')
    .action(runDev)

  program.parse(process.argv)
}

main()
