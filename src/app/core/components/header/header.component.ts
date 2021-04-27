import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpParams } from '@angular/common/http'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../app-store/app-store.state'
import { selectIsDarkMode } from '../../../shared/store/shared.selectors'
import { Observable, Subscription } from 'rxjs'
import { isDarkModeOff, isDarkModeOn } from '../../../shared/store/shared.actions'
import { selectIsAuthenticated, selectRefreshToken, selectUserRoles } from '../../auth/store/auth.selectors'
import { logout } from '../../auth/store/auth.actions'
import { AuthApiService } from '../../auth/services/auth-api.service'
import { UserRoles } from '../../auth/model/jwt.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {

  public isDarkMode$: Observable<boolean>
  public isAuthenticated$: Observable<boolean>
  public refreshToken$: Observable<string>
  public userRoles$: Observable<string[]>
  private subscription: Subscription = new Subscription()
  public userRoles = UserRoles

  constructor(
    private store: Store<AppState>,
    private authApi: AuthApiService,
  ) {
    this.isDarkMode$ = store.pipe(select(selectIsDarkMode))
    this.isAuthenticated$ = store.pipe(select(selectIsAuthenticated))
    this.refreshToken$ = store.pipe(select(selectRefreshToken))
    this.userRoles$ = store.pipe(select(selectUserRoles))
  }

  public onLoginLogout(): void {
    let isAuthenticatedLocal = null
    this.subscription.add(
      this.isAuthenticated$.subscribe(isAuthenticated => isAuthenticatedLocal = isAuthenticated)
    )
    isAuthenticatedLocal ? this.logout() : this.login()
  }

  public onChangeTheme(): void {
    let isDarkModeLocal = null
    this.subscription.add(
      this.isDarkMode$.subscribe(isDarkMode => isDarkModeLocal = isDarkMode)
    )
    this.store.dispatch(isDarkModeLocal ? isDarkModeOff() : isDarkModeOn())
  }

  private logout(): void {
    let refreshTokenLocal = null
    this.subscription.add(
      this.refreshToken$.subscribe(refreshToken => refreshTokenLocal = refreshToken)
    )
    this.store.dispatch(logout({
      logoutRequestModel: {
        client_id: environment.CLIENT_ID,
        client_secret: environment.CLIENT_SECRET,
        refresh_token: refreshTokenLocal,
      },
    }))
  }

  private login(): void {
    this.authApi.redirectToKeycloak()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
