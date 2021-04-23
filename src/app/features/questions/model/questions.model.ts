export interface Question {
  id: number
  userId: string
  content: string
  createdDate: Date
  answer: Answer
}

export interface Answer {
  id: number
  content: string
  createdDate: Date
}
