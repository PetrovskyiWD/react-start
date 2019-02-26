import { createReducer } from 'Utils/reducer'
import * as Types from 'Types'

const initialState = {
	isLoaded: false,
}

export const appLoaded = state => {
	return { ...state, isLoaded: true }
}

export default createReducer(initialState, {
	[Types.APP_LOADED_SUCCESS]: appLoaded,
})
