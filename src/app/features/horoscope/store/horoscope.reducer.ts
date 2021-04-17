import { createReducer, on } from '@ngrx/store'
import { initialHoroscopeState } from './horoscope.state'
import { clearDailyHoroscope, readDailyHoroscopeSuccess } from './horoscope.actions'

export const horoscopeReducer = createReducer(
  initialHoroscopeState,
  on(readDailyHoroscopeSuccess, (state, {horoscope}) => ({...state, horoscope})),
  on(clearDailyHoroscope, (state) => ({...state, horoscope: initialHoroscopeState.horoscope})),
)
