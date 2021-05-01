import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { invokeImportHoroscope, invokeImportHoroscopeFail, invokeImportHoroscopeSuccess } from './admin.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { AdminApiService } from '../services/admin-api.service'

@Injectable()
export class AdminEffects {

  constructor(
    private adminApiService: AdminApiService,
    private actions$: Actions,
  ) {
  }

  invokeImportHoroscope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeImportHoroscope.type),
      mergeMap(({file}) => this.adminApiService.invokeImportHoroscope(file).pipe(
        map((result: string) => {
          console.log(result)
          return ({
            type: invokeImportHoroscopeSuccess.type,
            result,
          })
        }),
        catchError(() => of({
          type: invokeImportHoroscopeFail.type,
        })),
      )),
    ),
  )
}
