import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../../erros'
import { EmailValidator } from '../../protocols/email-validator'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise<HttpResponse>(resolve => resolve(badRequest(new MissingParamError('email'))))
    }

    if (!httpRequest.body.password) {
      return new Promise<HttpResponse>(resolve => resolve(badRequest(new MissingParamError('password'))))
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return new Promise<HttpResponse>(resolve => resolve(badRequest(new InvalidParamError('email'))))
    }
  }
}
