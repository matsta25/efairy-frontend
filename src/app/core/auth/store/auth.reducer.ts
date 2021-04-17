import { createReducer, on } from '@ngrx/store'
import { initialAuthState } from './auth.state'
import { authenticateSuccess } from './auth.actions'

// TODO: find out is naming convention okey. Authentication or authorization ;)

export const authReducer = createReducer(
  initialAuthState,
  on(authenticateSuccess, (state, {authenticateResponseModel}) => {
    return {
      ...state,
      token: authenticateResponseModel.access_token,
    }
  }),
)
