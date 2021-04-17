import { createAction, props } from '@ngrx/store'
import { AuthenticateRequestModel, AuthenticateResponseModel } from '../model/auth.model'

export const authenticate = createAction('[Auth] Authenticate', props<{ authenticateRequestModel: AuthenticateRequestModel }>())
export const authenticateSuccess = createAction('[Auth] Authenticate Success',
  props<{ authenticateResponseModel: AuthenticateResponseModel }>())
export const authenticateFail = createAction('[Auth] Authenticate Fail')
