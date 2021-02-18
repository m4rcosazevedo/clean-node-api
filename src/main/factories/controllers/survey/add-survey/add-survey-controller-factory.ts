import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'
import { makeDbAddSurvey } from '../../../usecases/survey/add-survey/db-add-survey-factory'
import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { Controller } from '@/presentation/protocols'

export const makeAddSurveyController = (): Controller => {
  return new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
}
