import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AdminState } from './admin.state'

export const selectAdminState = createFeatureSelector<AdminState>('admin')

export const selectAdminResult = createSelector(
  selectAdminState,
  (state: AdminState) => state.result,
)
