import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

import app from './appReducer'
import posts from './postsReducer'

export default history =>
	combineReducers({
		router: connectRouter(history),
		form,
		app,
		posts,
	})
