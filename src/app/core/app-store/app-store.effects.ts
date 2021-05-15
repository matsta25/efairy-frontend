import { SharedEffects } from '../../shared/store/shared.effects'
import { HoroscopeEffects } from '../../features/horoscope/store/horoscope.effects'
import { AuthEffects } from '../auth/store/auth.effects'
import { Type } from '@angular/core'
import { QuestionsEffects } from '../../features/questions/store/questions.effects'
import { ModeratorEffects } from '../../features/moderator/store/moderator.effects'
import { AdminEffects } from '../../features/admin/store/admin.effects'


export const appEffects: Type<any>[] = [
  SharedEffects,
  HoroscopeEffects,
  AuthEffects,
  QuestionsEffects,
  ModeratorEffects,
  AdminEffects,
]
