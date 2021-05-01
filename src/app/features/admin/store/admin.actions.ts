import { createAction, props } from '@ngrx/store'

export const invokeImportHoroscope = createAction('[Admin/API] Admin Invoke Import Horoscope',
  props<{ file: File }>())
export const invokeImportHoroscopeSuccess = createAction('[Admin/API] Admin Invoke Import Horoscope Success',
  props<{ result: string }>())
export const invokeImportHoroscopeFail = createAction('[Admin/API] Admin Invoke Import Horoscope Fail')
export const invokeImportHoroscopeClear = createAction('[Admin/API] Admin Invoke Import Horoscope Clear')
