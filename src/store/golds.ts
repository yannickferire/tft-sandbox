import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export const golds = createModel<RootModel>()({
	state: 50,
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