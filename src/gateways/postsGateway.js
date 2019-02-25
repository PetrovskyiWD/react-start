import { request } from 'Utils/request'

export const getPosts = () => request.get('posts/')
