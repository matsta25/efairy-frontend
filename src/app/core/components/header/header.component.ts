import { Component, EventEmitter, Output } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpParams } from '@angular/common/http'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../app-store/app-store.state'
import { selectIsDarkMode } from '../../../shared/store/shared.selectors'
import { Observable } from 'rxjs'
import { isDarkModeOff, isDarkModeOn } from '../../../shared/store/shared.actions'
import { selectIsAuthenticated } from '../../auth/store/auth.selectors'

export const AUTHORIZE_ENDPOINT = '/auth/realms/efairy-realm/protocol/openid-connect/auth'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenavIconClick = new EventEmitter()

  public isDarkMode$: Observable<boolean>
  public isAuthenticated$: Observable<boolean>

  constructor(
    private store: Store<AppState>,
  ) {
    this.isDarkMode$ = store.pipe(select(selectIsDarkMode))
    this.isAuthenticated$ = store.pipe(select(selectIsAuthenticated))
  }

  public onLoginLogout(): void {
    let isAuthenticatedLocal = null
    this.isAuthenticated$.subscribe(isAuthenticated => isAuthenticatedLocal = isAuthenticated)
    isAuthenticatedLocal ? this.logout() : this.login()
  }

  public onChangeTheme(): void {
    let isDarkModeLocal = null
    this.isDarkMode$.subscribe(isDarkMode => isDarkModeLocal = isDarkMode)
    this.store.dispatch(isDarkModeLocal ? isDarkModeOff() : isDarkModeOn())
  }

  private logout(): void {
    console.log('logout()')
  }

  private login(): void {
    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', environment.CLIENT_ID)
      .set('redirect_uri', environment.REDIRECT_URL)

    window.location.href = environment.KEYCLOAK_AUTH_URL + AUTHORIZE_ENDPOINT + '?' + params.toString()
  }
}
