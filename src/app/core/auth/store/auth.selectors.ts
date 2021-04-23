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

export const selectExpiresIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.expires_in,
)

export const selectExpireDateTime = createSelector(
  selectAuthState,
  (state: AuthState) => state.expireDateTime,
)

export const selectUserRoles = createSelector(
  selectAuthState,
  (state: AuthState) => state.userRoles,
)

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => !!state.access_token,
)
