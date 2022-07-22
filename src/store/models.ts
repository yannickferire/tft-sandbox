import { Models } from '@rematch/core'

import { golds } from './golds'
import { level } from './level'

export interface RootModel extends Models<RootModel> {
  golds: typeof golds
  level: typeof level
}

export const models: RootModel = { golds, level }