import { LibContentfulEnvVarsInterface } from "./interfaces"

export const CONTENTFUL_CDN: string = `${process.env.CONTENTFUL_CDN}`
export const CONTENTFUL_SPACE_ID: string = `${process.env.CONTENTFUL_SPACE_ID}`
export const CONTENTFUL_ENVIRONMENT_ID: string = `${process.env.CONTENTFUL_ENVIRONMENT_ID}`
export const CONTENTFUL_ACCESS_TOKEN: string = `${process.env.CONTENTFUL_ACCESS_TOKEN}`
export const CONTENTFUL_TYPE_ID: string = `${process.env.CONTENTFUL_TYPE_ID}`
export const CONTENTFUL_TAG_ID: string = `${process.env.CONTENTFUL_TAG_ID}`
export const CONTENTFUL_LIMIT: string = `${process.env.CONTENTFUL_LIMIT}`
export const REVALIDATE: number = 1000 //3600 // in seconds

export const CONTENTFUL_DELIVERY_API_URL: string = `${CONTENTFUL_CDN}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}/entries`

const LibContentfulEnvVars: LibContentfulEnvVarsInterface = {
  CONTENTFUL_CDN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_TYPE_ID,
  CONTENTFUL_TAG_ID,
  CONTENTFUL_DELIVERY_API_URL,
  CONTENTFUL_LIMIT,
  REVALIDATE,
}

export default LibContentfulEnvVars
