import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { LoadSurveys } from '@/domain/usecases/load-surveys'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (_: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveys.load()
    return null
  }
}
