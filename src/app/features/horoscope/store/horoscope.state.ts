import { Horoscope } from '../../horoscope/models/horoscope.model'
import { ZODIAC_SIGNS, ZodiacSign } from '../models/zodiac-sign.model'

export interface HoroscopeState {
  horoscope: Horoscope
  zodiacSigns: ZodiacSign[]
}

export const initialHoroscopeState: HoroscopeState = {
  // TODO: fix null below
  horoscope: null,
  zodiacSigns: ZODIAC_SIGNS,
}
