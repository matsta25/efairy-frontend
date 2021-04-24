import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../app-store/app-store.state'
import { catchError, filter, switchMap, take } from 'rxjs/operators'
import { selectAccessToken, selectRefreshToken, selectRefreshTokenInProgress } from '../store/auth.selectors'
import { refreshToken } from '../store/auth.actions'
import { environment } from '../../../../environments/environment'
import { GRANT_TYPE_REFRESH_TOKEN } from '../components/auth-redirect-url/auth-redirect-url.component'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<AppState>,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = this.addBearerToken(request)

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error && error.status === 401) {
          if (this.getCurrentTokenRefreshingFlag() === false) {
            this.dispatchRefreshToken()
          }

          return this.store.pipe(
            select(selectRefreshTokenInProgress),
            filter(inProgress => !inProgress),
            take(1),
            switchMap(() => this.getCurrentAccessToken() ? next.handle(this.addBearerToken(request)) : throwError(error)),
          )
        } else {
          return throwError(error)
        }
      }),
    )
  }

  private dispatchRefreshToken() {
    let refreshTokenLocal = null
    this.store.pipe(select(selectRefreshToken)).subscribe(t => refreshTokenLocal = t)

    this.store.dispatch(refreshToken({
      refreshTokenRequestModel: {
        client_id: environment.CLIENT_ID,
        grant_type: GRANT_TYPE_REFRESH_TOKEN,
        client_secret: environment.CLIENT_SECRET,
        refresh_token: refreshTokenLocal,
      },
    }))
  }

  private addBearerToken(request: HttpRequest<any>) {
    const token = this.getCurrentAccessToken()

    return token ? request.clone({setHeaders: {Authorization: `Bearer ${token}`}}) : request
  }

  private getCurrentAccessToken() {
    let accessToken: string | null = null

    this.store
      .pipe(
        take(1),
        select(selectAccessToken),
      )
      .subscribe(token => accessToken = token)

    return accessToken
  }

  private getCurrentTokenRefreshingFlag(): boolean {
    let refreshingInProgress = false

    this.store
      .pipe(
        take(1),
        select(selectRefreshTokenInProgress),
      )
      .subscribe(inProgress => refreshingInProgress = inProgress)

    return refreshingInProgress
  }
}
