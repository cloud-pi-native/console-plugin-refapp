import { removeTrailingSlash, requiredEnv } from '@cpn-console/shared'

class Config {
  keycloakUser: string
  keycloakPass: string
  url: string
  keycloakClient: string
  keycloakUrl: string
  consoleUrl?: string
  constructor() {
    this.url = removeTrailingSlash(requiredEnv('REFAPP__URL'))
    this.keycloakUrl = removeTrailingSlash(requiredEnv('REFAPP__KEYCLOAK_URL'))
    this.keycloakClient = requiredEnv('REFAPP__KEYCLOAK_CLIENT')
    this.keycloakUser = requiredEnv('REFAPP__KEYCLOAK_USER')
    this.keycloakPass = requiredEnv('REFAPP__KEYCLOAK_PASS')
    this.consoleUrl = process.env.KEYCLOAK_REDIRECT_URI
      ? removeTrailingSlash(process.env.KEYCLOAK_REDIRECT_URI)
      : undefined
  }
}

let config: Config | undefined

function getConfig() {
  if (!config) {
    config = new Config()
  }
  return config
}
export default getConfig
