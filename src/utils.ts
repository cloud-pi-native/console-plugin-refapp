import axios from 'axios'
import qs from 'qs'
import { Api } from './api/Api.js'
import getConfig from './config.js'

function getApiConfig(Authorization: string) {
  return {
    headers: {
      Authorization,
    },
    baseURL: `${getConfig().url}`,
  }
}

export type RefAppApi = Api<ReturnType<typeof getApiConfig>>
export async function getApi(): Promise<RefAppApi> {
  const data = qs.stringify({
    client_id: getConfig().keycloakClient,
    username: getConfig().keycloakUser,
    password: getConfig().keycloakPass,
    grant_type: 'password',
  })

  const token = await axios.post(`${getConfig().keycloakUrl}/realms/${getConfig().keycloakClient}/protocol/openid-connect/token`, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return new Api(getApiConfig(`${token.data.token_type} ${token.data.access_token}`))
}
