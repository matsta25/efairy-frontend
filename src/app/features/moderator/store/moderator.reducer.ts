import { createReducer, on } from '@ngrx/store'
import { initialModeratorState } from './moderator.state'
import { clearModeratorQuestions, readModeratorQuestionsSuccess } from './moderator.actions'

export const moderatorReducer = createReducer(
  initialModeratorState,
  on(readModeratorQuestionsSuccess, (state, {moderatorQuestions}) => ({...state, moderatorQuestions})),
  on(clearModeratorQuestions, (state) => ({...state, questions: initialModeratorState.moderatorQuestions})),
)
