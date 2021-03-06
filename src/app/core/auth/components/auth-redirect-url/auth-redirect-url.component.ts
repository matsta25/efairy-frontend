import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppState } from '../../../app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { authenticate, refreshToken } from '../../store/auth.actions'
import { environment } from '../../../../../environments/environment'
import { selectHoroscopeZodiacSigns } from '../../../../features/horoscope/store/horoscope.selectors'
import {
  selectAccessToken,
  selectExpireDateTime,
  selectExpiresIn,
  selectIsAuthenticated,
  selectRefreshToken, selectUserRoles
} from '../../store/auth.selectors'
import { Observable, Subscription } from 'rxjs'

export const GRANT_TYPE_CLIENT_CREDENTIALS = 'client_credentials'

export const GRANT_TYPE_REFRESH_TOKEN = 'refresh_token'

@Component({
  selector: 'app-auth-redirect-url',
  templateUrl: './auth-redirect-url.component.html',
  styleUrls: ['./auth-redirect-url.component.scss'],
})
export class AuthRedirectUrlComponent implements OnInit, OnDestroy {

  public accessToken$: Observable<string>
  public refreshToken$: Observable<string>
  public expiresIn$: Observable<number>
  public expireDateTime$: Observable<number>
  public userRoles$: Observable<string[]>
  public isAuthenticated$: Observable<boolean>
  private subscription: Subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.accessToken$ = store.pipe(select(selectAccessToken))
    this.refreshToken$ = store.pipe(select(selectRefreshToken))
    this.expiresIn$ = store.pipe(select(selectExpiresIn))
    this.expireDateTime$ = store.pipe(select(selectExpireDateTime))
    this.userRoles$ = store.pipe(select(selectUserRoles))
    this.isAuthenticated$ = store.pipe(select(selectIsAuthenticated))
  }

  ngOnInit(): void {
    this.store.dispatch(authenticate({
      authenticateRequestModel: {
        grant_type: GRANT_TYPE_CLIENT_CREDENTIALS,
        client_id: environment.CLIENT_ID,
        client_secret: environment.CLIENT_SECRET,
        code: this.route.snapshot.queryParams.code,
      },
    }))

    function checkTheYear(initYear, targetYear) {
      switch(targetYear) {
        case initYear - 30:
          console.log('I\'m sure in 1985, plutonium is available at every corner drugstore, but in 1955 it\'s a little hard to come by.');
          return true;
        case initYear - 100:
          console.log('A hundred years ago? But that\'s now!');
          return true;
        case initYear + 30:
          console.log('Nobody calls me chicken!')
          return true;
        default:
          console.log('Time traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: women!');
          return false;
      }
    }

    function backToTheFuture(targetYear) {
      var timeMachine = {
        model: 'DeLorean DMC-12',
        initYear: '1985'
      }
      if(checkTheYear(timeMachine.initYear, targetYear)) {
        // execute the secret code for time travel to the targetYear
      }
    }


  }

  public onRefreshToken(): void {
    let localRefreshToken = null
    this.subscription.add(
      this.refreshToken$.subscribe(refreshTokenValue => localRefreshToken = refreshTokenValue),
    )

    this.store.dispatch(refreshToken({
      refreshTokenRequestModel: {
        client_id: environment.CLIENT_ID,
        grant_type: GRANT_TYPE_REFRESH_TOKEN,
        client_secret: environment.CLIENT_SECRET,
        refresh_token: localRefreshToken,
      },
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
