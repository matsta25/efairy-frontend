import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import {
  authenticate,
  authenticateFail,
  authenticateSuccess,
  logout,
  logoutFail,
  logoutSuccess,
  refreshToken,
  refreshTokenFail,
} from './auth.actions'
import { AuthApiService } from '../services/auth-api.service'
import { AuthenticateResponseModel } from '../model/auth.model'
import { Router } from '@angular/router'


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthApiService,
    private router: Router,
  ) {
  }

  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticate.type),
      mergeMap(({authenticateRequestModel}) => this.authService.authenticate(authenticateRequestModel).pipe(
        map((authenticateResponseModel: AuthenticateResponseModel) => ({
          type: authenticateSuccess.type,
          authenticateResponseModel,
        })),
        catchError(() => of({
          type: authenticateFail.type,
        })),
      )),
    ),
  )

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(refreshToken.type),
      mergeMap(({refreshTokenRequestModel}) => this.authService.refreshToken(refreshTokenRequestModel).pipe(
        map((authenticateResponseModel: AuthenticateResponseModel) => ({
          type: authenticateSuccess.type,
          authenticateResponseModel,
        })),
        catchError(() => of({
          type: refreshTokenFail.type,
        })),
      )),
    ),
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout.type),
      mergeMap(({logoutRequestModel}) => this.authService.logout(logoutRequestModel).pipe(
        map(() => ({
          type: logoutSuccess.type,
        })),
        tap(() => this.router.navigate(['/'])),
        catchError(() => of({
          type: logoutFail.type,
        })),
      )),
    ),
  )
}
