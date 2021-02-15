import { HttpRequest, HttpResponse, Middleware } from '../protocols'
import { forbidden } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../erros'

export class AuthMiddleware implements Middleware {
  async handle (_httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return new Promise<HttpResponse>(resolve => resolve(error))
  }
}
