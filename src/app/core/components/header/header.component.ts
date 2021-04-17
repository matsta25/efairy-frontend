import { Component, EventEmitter, Output } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpParams } from '@angular/common/http'

export const AUTHORIZE_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/auth'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenavIconClick = new EventEmitter()

  public onLogin(): void {
    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', environment.CLIENT_ID)
      .set('redirect_uri', environment.REDIRECT_URL)

    window.location.href = environment.KEYCLOAK_AUTH_URL + AUTHORIZE_ENDPOINT + '?' + params.toString()
  }
}
