import { createAction, props } from '@ngrx/store'
import { ModeratorQuestion } from '../model/moderator.model'

export const readModeratorQuestions = createAction('[Moderator/API] Moderator Read Questions')
export const readModeratorQuestionsSuccess = createAction('[Moderator/API] Read Moderator Questions Success',
  props<{ moderatorQuestions: ModeratorQuestion[] }>())
export const readModeratorQuestionsFail = createAction('[Moderator/API] Read Moderator Questions Fail')
export const clearModeratorQuestions = createAction('[Moderator/API] Clear Moderator Questions')

export const createModeratorAnswer = createAction('[Moderator/API] Create Moderator Answer', props<{ id: number, content: string }>())
export const createModeratorAnswerSuccess = createAction('[Moderator/API] Create Moderator Answer Success')
export const createModeratorAnswerFail = createAction('[Moderator/API] Create Moderator Answer Fail')

