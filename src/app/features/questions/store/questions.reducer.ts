import { createReducer, on } from '@ngrx/store'
import { initialQuestionsState } from './questions.state'
import { clearQuestions, readQuestionsSuccess, readQuestionSuccess } from './questions.actions'

export const questionsReducer = createReducer(
  initialQuestionsState,
  on(readQuestionsSuccess, (state, {questions}) => ({...state, questions})),
  on(readQuestionSuccess, (state, {question}) => ({...state, question})),
  on(clearQuestions, (state) => ({...state, questions: initialQuestionsState.questions})),
)
