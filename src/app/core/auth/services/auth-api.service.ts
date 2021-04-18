import { Injectable } from '@angular/core'
import { AuthenticateRequestModel } from '../model/auth.model'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

export const AUTHENTICATE_GET_TOKEN_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/token'
export const LOGOUT_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/logout'

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

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

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    }

    return this.http.post(`${AUTHENTICATE_GET_TOKEN_ENDPOINT}`, body.toString(), options)
  }
}
