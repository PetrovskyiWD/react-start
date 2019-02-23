import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import * as serviceWorker from './serviceWorker'
import { Store, History } from './store'

import App from './components'

const AppWrap = () => (
	<Provider store={Store}>
		<ConnectedRouter history={History}>
			<App />
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(<AppWrap />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
