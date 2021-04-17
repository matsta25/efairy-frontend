import { Injectable } from '@angular/core'
import { AuthenticateRequestModel } from '../model/auth.model'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'

export const AUTHENTICATE_GET_TOKEN_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/token'

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public authenticate(authenticateRequestModel: AuthenticateRequestModel): Observable<object> {
    return this.http.post(`${environment.KEYCLOAK_AUTH_URL}${AUTHENTICATE_GET_TOKEN_ENDPOINT}`, authenticateRequestModel)
  }
}
