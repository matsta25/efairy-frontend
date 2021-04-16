import { createAction, props } from '@ngrx/store'
import { Horoscope } from '../models/horoscope.model'
import { ZodiacSign } from '../models/zodiac-sign.model'

export const readDailyHoroscope = createAction('[Horoscope/API] Read Daily Horoscope', props<{ zodiacSign: ZodiacSign }>())
export const readDailyHoroscopeSuccess = createAction('[Horoscope/API] Read Daily Horoscope Success', props<{ horoscope: Horoscope }>())
export const readDailyHoroscopeFail = createAction('[Horoscope/API] Read Daily Horoscope Fail')
