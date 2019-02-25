import * as Types from 'Types'

export const getPosts = () => ({ type: Types.POSTS_GET_REQUEST })
export const getPostsSuccess = payload => ({ type: Types.POSTS_GET_SUCCESS, payload })
export const getPostsFailure = () => ({ type: Types.POSTS_GET_FAILURE })
