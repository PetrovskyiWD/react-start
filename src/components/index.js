import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import { useRequest } from 'Hooks/request'

import * as AppActions from 'Actions/appActions'
import * as PostsActions from 'Actions/postsActions'

import { Loader } from 'Common'

const App = ({ posts }) => {
	useEffect(() => {
		// getPosts()
	}, [posts])

	if (!posts.length) return <Loader />

	console.log('posts', posts)

	return posts.map(post => (
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{posts.text}</p>
		</div>
	))
}

App.propTypes = {
	appLoaded: PropTypes.func.isRequired,
	getPosts: PropTypes.func.isRequired,
}

export default connect(
	({ posts: { data } }) => ({
		posts: data,
	}),
	{
		appLoaded: AppActions.appLoaded,
		getPosts: PostsActions.getPosts,
	},
)(App)
