export interface SurveyAnswers {
  image: string
  answer: string
}

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswers[]
}

export interface AddSurvey {
  add (data: AddSurveyModel): Promise<void>
}
