// Default environment file

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8083/api/v1',
  KEYCLOAK_AUTH_URL: 'http://localhost:8082',
  CLIENT_ID: 'efairy-backend',
  CLIENT_SECRET: '918f18fb-e5cc-46be-a851-4c1db652e462',
  REDIRECT_URL: 'http://localhost:8083/auth-redirect-url',
}
