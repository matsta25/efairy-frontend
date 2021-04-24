import { Question } from '../model/questions.model'

export interface QuestionsState {
  questions: Question[]
  question: Question
}

export const initialQuestionsState: QuestionsState = {
  questions: [],
  question: null,
}
