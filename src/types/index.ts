export type Method =
  | 'GET'
  | 'get'
  | 'POST'
  | 'post'
  | 'PUT'
  | 'put'
  | 'DELETE'
  | 'delete'
  | 'PATCH'
  | 'patch'
  | 'HEAD'
  | 'head'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
