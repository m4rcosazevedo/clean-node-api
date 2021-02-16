export interface Encrypter {
  encrypt (value: string): Promise<string>

  decrypt (value: string): Promise<string>
}
