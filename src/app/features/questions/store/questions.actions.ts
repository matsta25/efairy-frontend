import { createAction, props } from '@ngrx/store'
import { Question } from '../model/questions.model'

export const readQuestions = createAction('[Questions/API] Read Questions')
export const readQuestionsSuccess = createAction('[Questions/API] Read Questions Success', props<{ questions: Question[] }>())
export const readQuestionsFail = createAction('[Questions/API] Read Questions Fail')
export const clearQuestions = createAction('[Questions/API] Clear Questions')

export const readQuestion = createAction('[Questions/API] Read Question', props<{ id: number }>())
export const readQuestionSuccess = createAction('[Questions/API] Read Question Success', props<{ question: Question }>())
export const readQuestionFail = createAction('[Questions/API] Read Question Fail')

export const createQuestion = createAction('[Questions/API] Create Question', props<{ content: string }>())
export const createQuestionSuccess = createAction('[Questions/API] Create Question Success')
export const createQuestionFail = createAction('[Questions/API] Create Question Fail')

