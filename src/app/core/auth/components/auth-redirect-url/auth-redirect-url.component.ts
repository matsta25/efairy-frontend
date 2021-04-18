import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppState } from '../../../app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { authenticate } from '../../store/auth.actions'
import { environment } from '../../../../../environments/environment'
import { selectHoroscopeZodiacSigns } from '../../../../features/horoscope/store/horoscope.selectors'
import { selectIsAuthenticated, selectToken } from '../../store/auth.selectors'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-auth-redirect-url',
  templateUrl: './auth-redirect-url.component.html',
  styleUrls: ['./auth-redirect-url.component.scss'],
})
export class AuthRedirectUrlComponent implements OnInit {

  public token$: Observable<string>
  public isAuthenticated$: Observable<boolean>

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.token$ = store.pipe(select(selectToken))
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
