import dotenv from 'dotenv'
import path from 'path'

import { CONFIG_PATH } from './paths'

const ENV_PATH = path.resolve(CONFIG_PATH, '.env')

dotenv.config({ path: ENV_PATH, quiet: true })

const NodeEnvs = ['development', 'production'] as const
type NodeEnv = (typeof NodeEnvs)[number]

const getNodeEnv = (): NodeEnv => {
  const value = process.env.NODE_ENV

  const isAllowedNodeEnv = (value?: string): value is NodeEnv => {
    return NodeEnvs.includes(value as NodeEnv)
  }

  if (isAllowedNodeEnv(value)) return value
  return 'development'
}

export const SERVER_PORT = process.env.SERVER_PORT || 3000
export const NODE_ENV = getNodeEnv()

export const isProdEnv = () => {
  return NODE_ENV === 'production'
}

export const isDevEnv = () => {
  return NODE_ENV === 'development'
}
