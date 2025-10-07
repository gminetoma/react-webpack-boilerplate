import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const ROOT_PATH = path.resolve(__dirname, '..')
export const TOOLS_PATH = path.resolve(ROOT_PATH, 'tools')

export const CONFIG_PATH = path.resolve(ROOT_PATH, 'config')

export const PACKAGES_PATH = path.resolve(ROOT_PATH, 'packages')

export const SHARED_PATH = path.resolve(PACKAGES_PATH, 'shared')

export const DIST_PATH = path.resolve(ROOT_PATH, 'dist')

export const APP_PATH = path.resolve(PACKAGES_PATH, 'app')
export const APP_DIST_PATH = path.resolve(DIST_PATH, 'app')

export const SERVER_PATH = path.resolve(PACKAGES_PATH, 'server')
export const SERVER_DIST_PATH = path.resolve(DIST_PATH, 'server')
