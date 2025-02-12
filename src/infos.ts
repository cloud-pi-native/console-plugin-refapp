import type { ServiceInfos } from '@cpn-console/hooks'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const imageData = Buffer.from((readFileSync(join(import.meta.dirname, '../files/logo.png'))).toString('base64'))

const infos = {
  name: 'refapp',
  // @ts-ignore retro compatibility
  title: 'Referentiel Application',
  imgSrc: `data:image/png;base64,${imageData}`,
  description: 'Le référentiel des applications représente l\'ensemble des produits numériques et logiciels utilisés au sein du système d\'information',
  config: {
    global: [],
    project: [{
      kind: 'text',
      key: 'refapp-id',
      permissions: {
        admin: { read: true, write: false },
        user: { read: false, write: false },
      },
      title: 'RefApp ID',
      value: '',
      description: 'Uuid dans le referentiel application',
    }],
  },
} as const satisfies ServiceInfos

export default infos
