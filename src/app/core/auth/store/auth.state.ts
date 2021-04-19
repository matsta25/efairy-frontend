export interface AuthState {
  access_token: string | null
  refresh_token: string | null
}

export const initialAuthState: AuthState = {
  access_token: null,
  refresh_token: null,
}
