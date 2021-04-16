import { createFeatureSelector, createSelector } from '@ngrx/store'
import { HoroscopeState } from './horoscope.state'

export const selectHoroscopeState = createFeatureSelector<HoroscopeState>('horoscope')

export const selectDailyHoroscope = createSelector(
  selectHoroscopeState,
  (state: HoroscopeState) => state.horoscope,
)

export const selectHoroscopeZodiacSigns = createSelector(
  selectHoroscopeState,
  (state: HoroscopeState) => state.zodiacSigns,
)
