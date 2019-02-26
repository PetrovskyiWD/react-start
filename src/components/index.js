import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as AppActions from 'Actions/appActions'

import { Loader } from 'Common'

const App = ({ isLoaded, appLoading }) => {
	useEffect(() => {
		appLoading()
	}, [])

	if (!isLoaded) return <Loader />

	return null
}

App.propTypes = {
	isLoaded: PropTypes.bool.isRequired,
	appLoading: PropTypes.func.isRequired,
}

export default connect(
	({ app: { isLoaded } }) => ({
		isLoaded: isLoaded,
	}),
	{
		appLoading: AppActions.appLoading,
	},
)(App)
