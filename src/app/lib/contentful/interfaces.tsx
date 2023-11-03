import { ContentfulClientApi } from "contentful"

export interface LibContentfulEnvVarsInterface {
  CONTENTFUL_CDN: string
  CONTENTFUL_ACCESS_TOKEN: string
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ENVIRONMENT_ID: string
  CONTENTFUL_TYPE_ID: string
  CONTENTFUL_TAG_ID: string
  CONTENTFUL_DELIVERY_API_URL: string
  CONTENTFUL_LIMIT: string
  REVALIDATE: number
}

export interface LibContentfulSdkInterface {
  client: ContentfulClientApi<undefined>
  getEntries(slug: string): any
}

export interface LibContentfulInterface {
  LibContentfulEnvVars: LibContentfulEnvVarsInterface
  LibContentfulSdk: LibContentfulSdkInterface
}
