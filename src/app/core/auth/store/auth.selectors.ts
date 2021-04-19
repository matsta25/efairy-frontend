import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from './auth.state'


export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectAccessToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.access_token,
)

export const selectRefreshToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.refresh_token,
)

export const selectIsAuthenticated = createSelector(
  selectRefreshToken,
  (token: string) => !!token,
)
