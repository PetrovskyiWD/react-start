import axios from 'axios'
import _ from 'lodash'

// Axios default config
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'

const get = (url, data = {}, params = {}) => {
	return axios.get(url + serialize(data), params)
}

const post = (url, data = {}) => {
	return axios.post(url, data)
}

const put = (url, data = {}) => {
	return axios.put(url, data)
}

const del = url => {
	return axios.delete(url)
}

const serialize = obj => {
	// return obj && _.isPlainObject(obj) ?
	return !_.isEmpty(obj)
		? '?' +
				Object.keys(obj)
					.reduce(function(array, key) {
						array.push(key + '=' + encodeURIComponent(obj[key]))
						return array
					}, [])
					.join('&')
		: ''
}

const generateValidationError = ({ data }) => {
	if (_.isPlainObject(data)) {
		return { _error: data.message, ...data.errors }
	}

	return { _error: data }
}

export const request = {
	get,
	post,
	put,
	generateValidationError,
	delete: del,
}
