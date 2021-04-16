import { PostsState } from '../../features/posts/store/posts.state'
import { SharedState } from '../../shared/store/shared.state'
import { TodosState } from '../../features/todos/store/todos.state'
import { UsersState } from '../../features/users/store/users.state'
import { HoroscopeState } from '../../features/horoscope/store/horoscope.state'


export interface AppState {
  shared: SharedState
  horoscope: HoroscopeState
  posts: PostsState
  todos: TodosState
  users: UsersState
}
