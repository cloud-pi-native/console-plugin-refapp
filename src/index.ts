import type { DeclareModuleGenerator, Plugin } from '@cpn-console/hooks'
import getConfig from './config.js'
import { deleteProject, upsertProject } from './function.js'
import infos from './infos.js'

export const plugin: Plugin = {
  infos,
  subscribedHooks: {
    upsertProject: {
      steps: {
        pre: upsertProject,
      },
    },
    deleteProject: {
      steps: {
        main: deleteProject,
      },
    },
  },
  start: getConfig, // to check is the variable is set, unless it crashes the app
}

declare module '@cpn-console/hooks' {
  interface Config extends DeclareModuleGenerator<typeof infos, 'global'> { }
  interface ProjectStore extends DeclareModuleGenerator<typeof infos, 'project'> { }
}
