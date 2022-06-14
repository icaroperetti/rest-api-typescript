import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

/* estling-disalbe @typescript-eslint/no-empty-interface */
export interface RequestConfig extends AxiosRequestConfig {}

/* estling-disalbe @typescript-eslint/no-explicit-any */
export interface Response<T = any> extends AxiosResponse<T> {}

export class Request {
  constructor(protected request = axios) {}

  public async get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return this.request.get<T, Response<T>>(url, config)
  }

  public static isRequestError(error: AxiosError): boolean {
    return !!(error.response && error.response.status)
  }
}
