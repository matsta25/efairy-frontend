import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { authenticate, authenticateFail, authenticateSuccess, } from './auth.actions'
import { AuthApiService } from '../services/auth-api.service'
import { AuthenticateResponseModel } from '../model/auth.model'


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthApiService,
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
}