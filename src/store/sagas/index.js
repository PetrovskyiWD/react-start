import { all } from 'redux-saga/effects'

import appSaga from './appSaga'
import postsSaga from './postsSaga'

export default function* root() {
	yield all([appSaga(), postsSaga()])
}
