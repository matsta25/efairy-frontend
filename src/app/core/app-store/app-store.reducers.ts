import { AppState } from './app-store.state'
import { sharedReducer } from '../../shared/store/shared.reducer'
import { horoscopeReducer } from '../../features/horoscope/store/horoscope.reducer'
import { authReducer } from '../auth/store/auth.reducer'
import { ActionReducerMap } from '@ngrx/store'
import { questionsReducer } from '../../features/questions/store/questions.reducer'
import { moderatorReducer } from '../../features/moderator/store/moderator.reducer'
import { adminReducer } from '../../features/admin/store/admin.reducer'


export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
  horoscope: horoscopeReducer,
  questions: questionsReducer,
  auth: authReducer,
  moderator: moderatorReducer,
  admin: adminReducer,
}
