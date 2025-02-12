import type { Project, StepCall } from '@cpn-console/hooks'
import type { GetApplicationDto } from './api/Api.js'
import { parseError } from '@cpn-console/hooks'
import getConfig from './config.js'
import { getApi } from './utils.js'

export const upsertProject: StepCall<Project> = async (payload) => {
  try {
    let message: string
    const project = payload.args
    const api = await getApi()
    let refAppId = payload.args.store.refapp?.['refapp-id']
    const consoleUrl = getConfig().consoleUrl

    if (!refAppId) {
      const application = await api.api.applicationControllerCreate({
        lifecycle: {
          status: 'in_production',
        },
        label: project.name,
        shortName: project.slug,
        description: project.description ?? '',
        compliances: [],
        actors: project.users.map(user => ({
          role: 'Autre',
          email: user.email,
        })),
        externalRessource: consoleUrl
          ? [{
              link: `${consoleUrl}/admin/projects/${project.slug}`,
              type: 'service',
              description: 'Administration du projet sur la console Cloud Pi Native',
            }]
          : undefined,
      }) as unknown as { data: GetApplicationDto }
      refAppId = application.data.id ?? ''
      message = 'Application créée'
    } else {
      const application = await api.api.applicationControllerFindOne(refAppId, {
        validateStatus: status => [200, 404].includes(status),
      })
      if (application.status === 200) {
        await api.api.applicationControllerUpdate(refAppId, {
          label: project.name,
          description: project.description ?? '',
          actors: project.users.map(user => ({
            role: 'Autre',
            email: user.email,
          })),
        })
        message = 'Application mis à jour'
      } else {
        message = 'Application manquante sur le refApp'
      }
    }
    return {
      status: {
        result: 'OK',
        message,
      },
      store: {
        'refapp-id': refAppId,
      },
    }
  } catch (error) {
    return {
      status: {
        result: 'WARNING',
        message: 'Can\'t update Ref App application',
      },
      error: parseError(error),
    }
  }
}

export const deleteProject: StepCall<Project> = async (payload) => {
  try {
    const project = payload.args
    const api = await getApi()
    const refAppId = payload.args.store.refapp?.['refapp-id']
    if (refAppId) {
      const application = await api.api.applicationControllerFindOne(refAppId)
      if (application) {
        await api.api.applicationControllerUpdate(refAppId, {
          label: project.name,
          description: project.description ?? '',
          lifecycle: {
            status: 'decommissioned',
          },
        })
      }
    }
    return {
      status: {
        result: 'OK',
      },
    }
  } catch (error) {
    return {
      status: {
        result: 'OK',
        message: 'Can\'t update Ref App application',
      },
      error: parseError(error),
    }
  }
}
