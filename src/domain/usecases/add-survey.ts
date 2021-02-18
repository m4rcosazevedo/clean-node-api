import { SurveyModel } from '@/domain/models/survey-model'

export type AddSurveyModel = Omit<SurveyModel, 'id'|'date'>

export interface AddSurvey {
  add (data: AddSurveyModel): Promise<void>
}
