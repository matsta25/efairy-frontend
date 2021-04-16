import { Type } from '@angular/core'
import { PostsEffects } from '../../features/posts/store/posts.effects'
import { SharedEffects } from '../../shared/store/shared.effects'
import { TodosEffects } from '../../features/todos/store/todos.effects'
import { UsersEffects } from '../../features/users/store/users.effects'
import { HoroscopeEffects } from '../../features/horoscope/store/horoscope.effects'


export const appEffects: Type<any>[] = [
  SharedEffects,
  HoroscopeEffects,
  PostsEffects,
  TodosEffects,
  UsersEffects,
]
