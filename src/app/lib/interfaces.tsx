import { LibLogInterface } from "./log/interfaces"
import { LibConfigInterface } from "./config/interfaces"

export interface LibInterface {
  LibLog: LibLogInterface
  LibConfig: LibConfigInterface
}
