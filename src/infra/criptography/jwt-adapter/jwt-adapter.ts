import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) { }

  async encrypt (value: string): Promise<string> {
    return await jwt.sign({ id: value }, this.secret)
  }

  async decrypt (token: string): Promise<string> {
    await jwt.verify(token, this.secret)
    return null
  }
}
