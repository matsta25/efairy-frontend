import { createAction, props } from '@ngrx/store'

export const invokeImportHoroscope = createAction('[Admin/API] Admin Invoke Import Horoscope',
  props<{ file: File }>())
export const invokeImportHoroscopeSuccess = createAction('[Admin/API] Admin Invoke Import Horoscope Success')
export const invokeImportHoroscopeFail = createAction('[Admin/API] Admin Invoke Import Horoscope Fail')
