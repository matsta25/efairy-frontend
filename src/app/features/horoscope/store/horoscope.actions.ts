import { Horoscope } from '../models/horoscope.model'
import { ZodiacSign } from '../models/zodiac-sign.model'
import { createAction, props } from '@ngrx/store'

export const readDailyHoroscope = createAction('[Horoscope/API] Read Daily Horoscope', props<{ zodiacSign: ZodiacSign }>())
export const readDailyHoroscopeSuccess = createAction('[Horoscope/API] Read Daily Horoscope Success', props<{ horoscope: Horoscope }>())
export const readDailyHoroscopeFail = createAction('[Horoscope/API] Read Daily Horoscope Fail')
export const clearDailyHoroscope = createAction('[Horoscope/API] Clear Daily Horoscope')
