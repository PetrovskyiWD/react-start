import { all } from 'redux-saga/effects'

import appSaga from './appSaga'

export default function* root() {
	yield all([appSaga()])
}
