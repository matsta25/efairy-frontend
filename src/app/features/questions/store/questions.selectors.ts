import { createFeatureSelector, createSelector } from '@ngrx/store'
import { QuestionsState } from './questions.state'

export const selectQuestionsState = createFeatureSelector<QuestionsState>('questions')

export const selectQuestions = createSelector(
  selectQuestionsState,
  (state: QuestionsState) => state.questions,
)

export const selectQuestion = createSelector(
  selectQuestionsState,
  (state: QuestionsState) => state.question,
)
