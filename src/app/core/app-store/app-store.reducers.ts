import { ActionReducerMap } from '@ngrx/store'
import { AppState } from './app-store.state'
import { postsReducer } from '../../features/posts/store/posts.reducer'
import { sharedReducer } from '../../shared/store/shared.reducer'
import { todosReducer } from '../../features/todos/store/todos.reducer'
import { usersReducer } from '../../features/users/store/users.reducer'
import { horoscopeReducer } from '../../features/horoscope/store/horoscope.reducer'


export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
  horoscope: horoscopeReducer,
  posts: postsReducer,
  todos: todosReducer,
  users: usersReducer,
}
