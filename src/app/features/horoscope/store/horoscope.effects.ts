import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { readDailyHoroscope, readDailyHoroscopeFail, readDailyHoroscopeSuccess } from './horoscope.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HoroscopeApiService } from '../services/horoscope-api.service'
import { Horoscope } from '../models/horoscope.model'

@Injectable()
export class HoroscopeEffects {

  constructor(private horoscopeApiService: HoroscopeApiService, private actions$: Actions) {
  }

  readDailyHoroscope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readDailyHoroscope.type),
      mergeMap(({zodiacSign}) => this.horoscopeApiService.readHoroscope(zodiacSign).pipe(
        map((horoscope: Horoscope) => ({
          type: readDailyHoroscopeSuccess.type,
          horoscope,
        })),
        catchError(() => of({
          type: readDailyHoroscopeFail.type,
        })),
      )),
    ),
  )
}
