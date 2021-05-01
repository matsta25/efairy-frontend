import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AdminState } from './admin.state'

export const selectAdminState = createFeatureSelector<AdminState>('admin')
