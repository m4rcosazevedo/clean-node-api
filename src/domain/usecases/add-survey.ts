export type SurveyAnswers = {
  image?: string
  answer: string
}

export type AddSurveyModel = {
  question: string
  answers: SurveyAnswers[]
}

export interface AddSurvey {
  add (data: AddSurveyModel): Promise<void>
}
