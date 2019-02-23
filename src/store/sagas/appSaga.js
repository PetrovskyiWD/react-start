import { call, put, fork, takeLatest } from 'redux-saga/effects'

import * as Types from 'Types'
import * as AppActions from 'Actions/appActions'

function* processAppLoaded() {
	try {
		yield call(() => AppActions.appLoaded())
		yield put(AppActions.appLoadedSucces())
	} catch (error) {
		console.log('error', error)
	}
}

function* appListener() {
	yield takeLatest(Types.APP_LOADED, processAppLoaded)
}

export default function* appSaga() {
	yield fork(appListener)
}
