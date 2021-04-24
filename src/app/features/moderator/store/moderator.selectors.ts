import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ModeratorState } from './moderator.state'

export const selectModeratorState = createFeatureSelector<ModeratorState>('moderator')

export const selectModeratorQuestions = createSelector(
  selectModeratorState,
  (state: ModeratorState) => state.moderatorQuestions,
)
