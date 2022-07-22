import { Models } from '@rematch/core'

import { golds } from './golds'

export interface RootModel extends Models<RootModel> {
  golds: typeof golds
}

export const models: RootModel = { golds }