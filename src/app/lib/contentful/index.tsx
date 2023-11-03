import { LibContentfulInterface } from "./interfaces"
import LibContentfulEnvVars from "./variables"
import LibContentfulSdk from "./sdk"

// export { default as LibContentfulEnvVars } from "./variables"
// export { default as LibContentfulSdk } from "./sdk"
// export { default as LibContentfulGraphQl } from "./graphql"

const LibContentful: LibContentfulInterface = {
  LibContentfulEnvVars,
  LibContentfulSdk,
}

export default LibContentful
