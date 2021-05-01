import { createReducer, on } from '@ngrx/store'
import { initialAdminState } from './admin.state'
import { invokeImportHoroscopeClear, invokeImportHoroscopeSuccess } from './admin.actions'

export const adminReducer = createReducer(
  initialAdminState,
  on(invokeImportHoroscopeSuccess, (state, {result}) => ({...state, result})),
  on(invokeImportHoroscopeClear, (state) => ({...state, result: initialAdminState.result})),
)
