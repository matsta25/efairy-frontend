import { createAction, props } from '@ngrx/store'
import { LogoutRequestModel, AuthenticateResponseModel, AuthenticateRequestModel } from '../model/auth.model'

export const authenticate = createAction('[Auth] Authenticate', props<{ authenticateRequestModel: AuthenticateRequestModel }>())
export const authenticateSuccess = createAction('[Auth] Authenticate Success',
  props<{ authenticateResponseModel: AuthenticateResponseModel }>())
export const authenticateFail = createAction('[Auth] Authenticate Fail')

export const logout = createAction('[Auth] Logout', props<{ logoutRequestModel: LogoutRequestModel }>())
export const logoutSuccess = createAction('[Auth] Logout Success')
export const logoutFail = createAction('[Auth] Logout Fail')
