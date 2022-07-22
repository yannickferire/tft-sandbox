import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export const level = createModel<RootModel>()({
	state: 7,
	reducers: {
		spend(state, payload: number) {
			return state - payload
		},
	},
	effects: (dispatch) => ({
		spendAsync(payload: number, state) {
			dispatch.golds.spend(payload)
		},
	}),
})