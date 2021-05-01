import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { invokeImportHoroscope, invokeImportHoroscopeFail, invokeImportHoroscopeSuccess } from './admin.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { AdminApiService } from '../services/admin-api.service'

@Injectable()
export class AdminEffects {

  constructor(
    private adminApiService: AdminApiService,
    private actions$: Actions,
    private router: Router,
  ) {
  }

  invokeImportHoroscope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeImportHoroscope.type),
      mergeMap(({file}) => this.adminApiService.invokeImportHoroscope(file).pipe(
        map(() => ({
          type: invokeImportHoroscopeSuccess.type,
        })),
        catchError(() => of({
          type: invokeImportHoroscopeFail.type,
        })),
      )),
    ),
  )
}
