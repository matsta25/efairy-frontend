import { ModeratorQuestion } from '../model/moderator.model'

export interface ModeratorState {
  moderatorQuestions: ModeratorQuestion[]
  moderatorQuestion: ModeratorQuestion
}

export const initialModeratorState: ModeratorState = {
  moderatorQuestions: [],
  moderatorQuestion: null,
}
