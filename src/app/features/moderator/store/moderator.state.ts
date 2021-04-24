import { ModeratorQuestion } from '../model/moderator.model'

export interface ModeratorState {
  moderatorQuestions: ModeratorQuestion[]
}

export const initialModeratorState: ModeratorState = {
  moderatorQuestions: [],
}
