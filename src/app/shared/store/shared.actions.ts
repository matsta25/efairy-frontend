import { createAction, props } from '@ngrx/store'


export const checkIsOnline = createAction('[Shared/isOnline] Check Is Online')
export const setIsOnline = createAction('[Shared/isOnline] Set Is Online', props<{ isOnline: boolean }>())

export const loadingOn = createAction('[Shared/Loading] API Loading...')
export const loadingOff = createAction('[Shared/Loading] API Loaded')

export const isDarkModeOn = createAction('[Shared/DarkMode] isDarkModeOn')
export const isDarkModeOff = createAction('[Shared/DarkMode] isDarkModeOff')
