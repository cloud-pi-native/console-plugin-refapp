import type { Project, StepCall } from '@cpn-console/hooks'
import type { GetApplicationDto } from './api/Api.js'
import { parseError } from '@cpn-console/hooks'
import getConfig from './config.js'
import { getApi } from './utils.js'

let refAppId: string | undefined

/**
 * Create with add event type 'in_production' or update Application to reférentiel application api
 *
 * @param payload
 */
export const upsertProject: StepCall<Project> = async (payload) => {
  try {
    let message: string = ''
    const project = payload.args
    const api = await getApi()
    refAppId = payload.args.store.refapp?.['refapp-id']
    const consoleUrl = getConfig().consoleUrl
    let isCreated: boolean = false

    // check if application exist
    if (refAppId) {
      const application = await api.api.applicationControllerFindOne(refAppId, {
        validateStatus: status => [200, 404].includes(status),
      })

      if (application.status === 200) {
        await api.api.applicationControllerUpdate(application.data.id, {
          label: project.name,
          description: project.description ?? '',
        })
        isCreated = true
        refAppId = application.data.id ?? ''
        message = 'Application mis à jour'

        const events = await api.api.eventsControllerFindAll(refAppId)
        const eventproduction = events.data.filter(e => e.type.toString() === 'in_production')
        if (eventproduction.length === 0) {
          // add new in_production event type for the Application
          await api.api.eventsControllerCreate(application.data.id, {
            start: new Date().toISOString(),
            end: undefined,
            type: String('in_production'),
            description: project.description ?? '',
          })
        }

        const links = await api.api.linksControllerFindAll(refAppId)
        const linksService = links.data.filter(e => e.type.toString() === 'service')
        if (linksService.length === 0) {
          // add new link for the Application
          await api.api.linksControllerCreate(application.data.id, {
            link: `${consoleUrl}/admin/projects/${project.slug}`,
            type: String('service'),
            description: 'Administration du projet sur la console Cloud Pi Native',
          })
        }
      }
    }

    if (!isCreated) {
      const application = await api.api.applicationControllerCreate({
        label: project.name,
        shortName: project.slug,
        description: project.description ?? '',
        compliances: [],
        labels: [],
      }) as unknown as { data: GetApplicationDto }
      message = 'Application créée'
      refAppId = application.data.id ?? ''

      const events = await api.api.eventsControllerFindAll(refAppId)
      const eventproduction = events.data.filter(e => e.type.toString() === 'in_production')
      if (eventproduction.length === 0) {
        // add new in_production event type for the Application
        await api.api.eventsControllerCreate(application.data.id, {
          start: new Date().toISOString(),
          end: undefined,
          type: String('in_production'),
          description: project.description ?? '',
        })
      }

      const links = await api.api.linksControllerFindAll(refAppId)
      const linksService = links.data.filter(e => e.type.toString() === 'service')
      if (linksService.length === 0) {
        // add new link for the Application
        await api.api.linksControllerCreate(application.data.id, {
          link: `${consoleUrl}/admin/projects/${project.slug}`,
          type: String('service'),
          description: 'Administration du projet sur la console Cloud Pi Native',
        })
      }
    }

    return {
      status: {
        result: 'OK',
        message,
      },
      store: {
        'refapp-id': refAppId ?? '',
      },
    }
  } catch (error) {
    return {
      status: {
        result: 'WARNING',
        message: 'Can\'t update Ref App application',
      },
      store: {
        'refapp-id': refAppId ?? '',
      },
      error: parseError(error),
    }
  }
}

/**
 * Decommissioned a reférentiel application
 *
 * @param payload
 */
export const deleteProject: StepCall<Project> = async (payload) => {
  try {
    const project = payload.args
    const api = await getApi()
    refAppId = payload.args.store.refapp?.['refapp-id']
    if (refAppId) {
      const application = await api.api.applicationControllerFindOne(refAppId)
      // update application
      if (application) {
        await api.api.applicationControllerUpdate(application.data.id, {
          label: project.name,
          description: project.description ?? '',
        })
        const events = await api.api.eventsControllerFindAll(application.data.id)
        const eventproduction = events.data.filter(e => e.type.toString() === 'in_production')
        await eventproduction.forEach((e) => {
          if (e.type === 'in_production') {
            api.api.eventsControllerUpdate(application.data.id, e.id, {
              type: String('in_production'),
              end: new Date().toISOString(),
              description: project.description ?? '',
            })
          }
        })

        // Add new decommissioned event type for application
        await api.api.eventsControllerCreate(application.data.id, {
          start: new Date().toISOString(),
          end: undefined,
          type: String('decommissioned'),
          description: project.description ?? '',
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
      store: {
        'refapp-id': refAppId ?? '',
      },
      error: parseError(error),
    }
  }
}
