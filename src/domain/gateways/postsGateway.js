import { request } from 'Utils/request'
import * as ApiPath from '../apiPath'

export const getPosts = () => request.get(ApiPath.POSTS)
