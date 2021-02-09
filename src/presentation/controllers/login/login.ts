import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../erros'

export class LoginController implements Controller {
  async handle (_httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise<HttpResponse>(resolve => resolve(
      badRequest(new MissingParamError('email'))
    ))
  }
}
