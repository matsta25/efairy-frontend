import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppState } from '../../../app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { authenticate } from '../../store/auth.actions'
import { environment } from '../../../../../environments/environment'
import { selectHoroscopeZodiacSigns } from '../../../../features/horoscope/store/horoscope.selectors'
import { selectAccessToken, selectIsAuthenticated, selectRefreshToken } from '../../store/auth.selectors'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-auth-redirect-url',
  templateUrl: './auth-redirect-url.component.html',
  styleUrls: ['./auth-redirect-url.component.scss'],
})
export class AuthRedirectUrlComponent implements OnInit {

  public accessToken$: Observable<string>
  public refreshToken$: Observable<string>
  public isAuthenticated$: Observable<boolean>

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.accessToken$ = store.pipe(select(selectAccessToken))
    this.refreshToken$ = store.pipe(select(selectRefreshToken))
    this.isAuthenticated$ = store.pipe(select(selectIsAuthenticated))
  }

  ngOnInit(): void {
    this.store.dispatch(authenticate({
      authenticateRequestModel: {
        grant_type: 'client_credentials',
        client_id: environment.CLIENT_ID,
        client_secret: environment.CLIENT_SECRET,
        code: this.route.snapshot.queryParams.code,
      },
    }))
  }
}
