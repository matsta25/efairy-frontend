export interface AuthenticateRequestModel {
  grant_type: string
  client_id: string
  client_secret: string
  code: string
}

export interface AuthenticateResponseModel {
  access_token: string,
  expires_in: number,
  refresh_expires_in: number,
  refresh_token: string,
  token_type: string,
  'not-before-policy': number,
  scope: string
}

export interface LogoutRequestModel {
  client_id: string
  client_secret: string
  refresh_token: string
}
