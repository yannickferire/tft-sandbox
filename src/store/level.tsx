import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export const level = createModel<RootModel>()({
	state: 7,
	reducers: {
		setLevel(payload: number) {
			return payload
		},
	}
})