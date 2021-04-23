import { createReducer, on } from '@ngrx/store'
import { initialAuthState } from './auth.state'
import { authenticateSuccess, logoutSuccess } from './auth.actions'
import { decodeToken } from '../services/jwt.functions'
import { JwtModel } from '../model/jwt.model'

// TODO: find out is naming convention okey. Authentication or authorization ;)

export const authReducer = createReducer(
  initialAuthState,
  on(authenticateSuccess, (state, {authenticateResponseModel}) => {
    const jwtDecoded: JwtModel = decodeToken(authenticateResponseModel.access_token)

    return {
      ...state,
      access_token: authenticateResponseModel.access_token,
      refresh_token: authenticateResponseModel.refresh_token,
      expires_in: authenticateResponseModel.expires_in,
      expireDateTime: jwtDecoded.exp,
      userRoles: jwtDecoded.resource_access['efairy-backend']?.roles,
    }
  }),
  on(logoutSuccess, (state) => {
    return {
      ...state,
      access_token: null,
      refresh_token: null,
      expires_in: null,
      expireDateTime: null,
      userRoles: null,
    }
  }),
)
