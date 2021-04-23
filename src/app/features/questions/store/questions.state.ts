import { Question } from '../model/questions.model'

export interface QuestionsState {
  questions: Question[]
}

export const initialQuestionsState: QuestionsState = {
  questions: [],
}
