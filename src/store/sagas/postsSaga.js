import { call, put, fork, takeLatest } from 'redux-saga/effects'

import * as Types from 'Types'
import * as PostsActions from 'Actions/postsActions'
import { getPosts } from 'Gateways/postsGateway'

function* processGetPosts() {
	try {
		const { data } = yield call(() => getPosts())

		yield put(PostsActions.getPostsSuccess(data))
	} catch (error) {
		yield put(PostsActions.getPostsFailure())
	}
}

function* postsListener() {
	yield takeLatest(Types.POSTS_GET_REQUEST, processGetPosts)
}

export default function* postsSaga() {
	yield fork(postsListener)
}
