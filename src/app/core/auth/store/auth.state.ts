export interface AuthState {
  access_token: string | null
  refresh_token: string | null
  expires_in: number | null
  expireDateTime: number | null
  userRoles: string[] | null
}

export const initialAuthState: AuthState = {
  access_token: null,
  refresh_token: null,
  expires_in: null,
  expireDateTime: null,
  userRoles: [],
}
