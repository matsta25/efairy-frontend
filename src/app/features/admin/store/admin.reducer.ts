import { createReducer } from '@ngrx/store'
import { initialAdminState } from './admin.state'

export const adminReducer = createReducer(
  initialAdminState,
)
