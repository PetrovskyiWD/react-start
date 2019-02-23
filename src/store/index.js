import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'

import Reducers from './reducers'
import Middleware from './middleware'
import Sagas from './sagas'

const History = createBrowserHistory()
const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		whitelist: ['auth'],
	},
	Reducers(History),
)
const sagaMiddleware = createSagaMiddleware()
const listOfMiddleware = [routerMiddleware(History), ...Middleware, sagaMiddleware]
const storeEnhancers = applyMiddleware(...listOfMiddleware)
const composedEnhancer = process.env.NODE_ENV !== 'production' ? composeWithDevTools(storeEnhancers) : storeEnhancers
const Store = createStore(persistedReducer, {}, compose(composedEnhancer))
const Persistor = persistStore(Store)

sagaMiddleware.run(Sagas)

export { History, Persistor, Store }
