export interface JwtModel {
  exp: number
  iat: number
  jti: string
  iss: string
  aud: string
  sub: string
  typ: string
  azp: string
  session_state: string
  acr: string
  realm_access: UserRoleModel
  resource_access: {'efairy-backend': UserRoleModel, account: UserRoleModel}
  // authorization: {permissions: PermissionsModel[]}
  authorization: {permissions: string[]}
  scope: string
  email_verified: boolean
  name: string
  preferred_username: string
  given_name: string
  family_name: string
  email: string
}

interface UserRoleModel {
  roles: string[]
}

export enum UserRoles {
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
}
