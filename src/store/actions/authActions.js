import * as Types from 'Types'

export const authRequest = () => ({ type: Types.AUTH_REQUEST })
export const authSuccess = token => ({ type: Types.AUTH_SUCCESS, token })

export const signIn = (email, password) => ({ type: Types.SIGN_IN, email, password })
export const signOut = () => ({ type: Types.SIGN_OUT })
