import { createAction, props } from '@ngrx/store'
import { ModeratorQuestion } from '../model/moderator.model'
import { Question } from '../../questions/model/questions.model'

export const readModeratorQuestions = createAction('[Moderator/API] Moderator Read Questions')
export const readModeratorQuestionsSuccess = createAction('[Moderator/API] Read Moderator Questions Success',
  props<{ moderatorQuestions: ModeratorQuestion[] }>())
export const readModeratorQuestionsFail = createAction('[Moderator/API] Read Moderator Questions Fail')
export const clearModeratorQuestions = createAction('[Moderator/API] Clear Moderator Questions')

export const readModeratorQuestion = createAction('[Questions/API] Read Moderator Question', props<{ id: number }>())
export const readModeratorQuestionSuccess = createAction('[Questions/API] Read Moderator Question Success',
  props<{ moderatorQuestion: ModeratorQuestion }>())
export const readModeratorQuestionFail = createAction('[Questions/API] Read Moderator Question Fail')

export const createModeratorAnswer = createAction('[Moderator/API] Create Moderator Answer', props<{ id: number, content: string }>())
export const createModeratorAnswerSuccess = createAction('[Moderator/API] Create Moderator Answer Success')
export const createModeratorAnswerFail = createAction('[Moderator/API] Create Moderator Answer Fail')

