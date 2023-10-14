import { LibContentfulInterface } from "./contentful/interfaces"
import { LibLogInterface } from "./log/interfaces"
import { LibConfigInterface } from "./config/interfaces"

export interface LibInterface {
  LibContentful: LibContentfulInterface
  LibLog: LibLogInterface
  LibConfig: LibConfigInterface
}
