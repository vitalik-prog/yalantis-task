import { ContentType, HttpMethod } from '../../../../enums'

type HttpOptions = {
  method: HttpMethod
  contentType: ContentType
  query: Record<string, unknown>
}

export type { HttpOptions }
