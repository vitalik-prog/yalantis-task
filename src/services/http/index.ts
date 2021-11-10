import { HttpMethod } from '../../enums';
import { GetHeadersProps, HttpOptions } from './common/types';
import { HttpHeader } from './common/enums';
import { HttpError } from './exceptions';
import { getStringifiedQuery } from './common/helpers';

class Http {
  load<T = unknown>(url: string, options: Partial<HttpOptions> = {}): Promise<T> {
    const { method = HttpMethod.GET, contentType, query } = options;
    const headers = this.getHeaders({
      contentType,
    });

    return fetch(this.getUrl(url, query), {
      method,
      headers,
    })
      .then(this.checkStatus)
      .then((res) => this.parseJSON<T>(res))
      .catch(this.throwError);
  }

  private getUrl(url: string, query?: Record<string, unknown>): string {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
  }

  private getHeaders({ contentType }: GetHeadersProps): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText,
      }));

      throw new HttpError({
        status: response.status,
        message: parsedException?.message,
      });
    }
    return response;
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(err: Error): never {
    throw err;
  }
}

export { Http };
