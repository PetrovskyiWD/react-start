import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as AppActions from 'Actions/appActions'

class App extends Component {
	componentDidMount = () => {
		const { appLoaded } = this.props
		appLoaded()
	}

	render() {
		return <div />
	}
}

App.propTypes = {
	appLoaded: PropTypes.func.isRequired,
}

export default connect(
	null,
	{
		appLoaded: AppActions.appLoaded,
	},
)(App)
