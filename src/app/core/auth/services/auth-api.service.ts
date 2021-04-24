import { Injectable } from '@angular/core'
import { AuthenticateRequestModel, LogoutRequestModel, RefreshTokenRequestModel } from '../model/auth.model'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../../../environments/environment'


export const AUTHORIZE_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/auth'
export const AUTHENTICATE_GET_TOKEN_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/token'
export const LOGOUT_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/logout'

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  public options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  }

  constructor(
    private http: HttpClient,
  ) {
  }

  public redirectToKeycloak(): void {
    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', environment.CLIENT_ID)
      .set('redirect_uri', environment.REDIRECT_URL)

    window.location.href = environment.KEYCLOAK_AUTH_URL + AUTHORIZE_ENDPOINT + '?' + params.toString()
  }

  public authenticate(authenticateRequestModel: AuthenticateRequestModel): Observable<object> {
    const body = new URLSearchParams()
    body.set('grant_type', authenticateRequestModel.grant_type)
    body.set('client_id', authenticateRequestModel.client_id)
    body.set('client_secret', authenticateRequestModel.client_secret)
    body.set('code', authenticateRequestModel.code)

    return this.http.post(`${AUTHENTICATE_GET_TOKEN_ENDPOINT}`, body.toString(), this.options)
  }

  public refreshToken(refreshTokenRequestModel: RefreshTokenRequestModel): Observable<object> {
    const body = new URLSearchParams()
    body.set('grant_type', refreshTokenRequestModel.grant_type)
    body.set('client_id', refreshTokenRequestModel.client_id)
    body.set('refresh_token', refreshTokenRequestModel.refresh_token)
    body.set('client_secret', refreshTokenRequestModel.client_secret)

    return this.http.post(`${AUTHENTICATE_GET_TOKEN_ENDPOINT}`, body.toString(), this.options)
  }

  public logout(logoutRequestModel: LogoutRequestModel): Observable<object> {
    const body = new URLSearchParams()
    body.set('client_id', logoutRequestModel.client_id)
    body.set('client_secret', logoutRequestModel.client_secret)
    body.set('refresh_token', logoutRequestModel.refresh_token)

    return this.http.post(`${LOGOUT_ENDPOINT}`, body.toString(), this.options)
  }
}
