import { createReducer } from 'Utils/reducer'
import * as Types from 'Types'

const initialState = {
	data: [],
}

export const getPosts = (state, data) => {
	return { ...state, data }
}

export default createReducer(initialState, {
	[Types.POSTS_GET_SUCCESS]: getPosts,
})
