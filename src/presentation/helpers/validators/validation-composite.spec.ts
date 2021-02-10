import { ValidationComposite } from './validation-composite'
import { MissingParamError } from '../../erros'
import { Validation } from './validation'

describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    class ValidationStub implements Validation {
      validate (_inputs: any): Error {
        return new MissingParamError('field')
      }
    }
    const validationStub = new ValidationStub()
    const sut = new ValidationComposite([validationStub])
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
