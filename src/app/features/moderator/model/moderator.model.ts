export interface ModeratorQuestion {
  id: number
  userId: string
  content: string
  createdDate: Date
  answer: ModeratorAnswer
}

export interface ModeratorAnswer {
  id: number
  content: string
  createdDate: Date
}
