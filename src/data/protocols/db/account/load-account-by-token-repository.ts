import { AccountModel } from '../../../../domain/models/account-model'

export interface LoadAccountByTokenRepository {
  loadByToken (accessToken: string, role: string): Promise<AccountModel>
}
