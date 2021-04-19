import { Injectable } from '@angular/core'
import { AuthenticateRequestModel, LogoutRequestModel } from '../model/auth.model'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

  public authenticate(authenticateRequestModel: AuthenticateRequestModel): Observable<object> {
    const body = new URLSearchParams()
    body.set('grant_type', authenticateRequestModel.grant_type)
    body.set('client_id', authenticateRequestModel.client_id)
    body.set('client_secret', authenticateRequestModel.client_secret)
    body.set('code', authenticateRequestModel.code)

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
