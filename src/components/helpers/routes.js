import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			rest.loggedIn ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)
		}
	/>
)

export const GuestRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			rest.loggedIn ? (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			) : (
				<Component {...props} />
			)
		}
	/>
)

PrivateRoute.propTypes = {
	component: PropTypes.objectOf.isRequired,
	location: PropTypes.string.isRequired,
}

GuestRoute.propTypes = {
	component: PropTypes.objectOf.isRequired,
	location: PropTypes.string.isRequired,
}
