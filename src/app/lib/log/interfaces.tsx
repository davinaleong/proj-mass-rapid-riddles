export interface LibLogInterface {
  logFunction(name: string, params: any): void
  logValue(name: string, value: any): void
}
