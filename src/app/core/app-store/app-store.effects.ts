import { PostsEffects } from '../../features/posts/store/posts.effects'
import { SharedEffects } from '../../shared/store/shared.effects'
import { TodosEffects } from '../../features/todos/store/todos.effects'
import { UsersEffects } from '../../features/users/store/users.effects'
import { HoroscopeEffects } from '../../features/horoscope/store/horoscope.effects'
import { AuthEffects } from '../auth/store/auth.effects'
import { Type } from '@angular/core'


export const appEffects: Type<any>[] = [
  SharedEffects,
  HoroscopeEffects,
  AuthEffects,
  PostsEffects,
  TodosEffects,
  UsersEffects,
]
