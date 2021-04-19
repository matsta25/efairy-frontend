import { createReducer, on } from '@ngrx/store'
import { initialAuthState } from './auth.state'
import { authenticateSuccess, logoutSuccess } from './auth.actions'

// TODO: find out is naming convention okey. Authentication or authorization ;)

export const authReducer = createReducer(
  initialAuthState,
  on(authenticateSuccess, (state, {authenticateResponseModel}) => {
    return {
      ...state,
      access_token: authenticateResponseModel.access_token,
      refresh_token: authenticateResponseModel.refresh_token,
    }
  }),
  on(logoutSuccess, (state) => {
    return {
      ...state,
      access_token: null,
      refresh_token: null,
    }
  }),
)
