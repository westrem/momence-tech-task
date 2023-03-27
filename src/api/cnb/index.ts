import axios from 'axios'

// ------------------------------------------------------------------------------------------
// Base
// ------------------------------------------------------------------------------------------

const API_BASE_URL = 'https://cnb-api.westrem.sk/'

const client = axios.create({
  baseURL: API_BASE_URL,
  responseType: 'text',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj<T = any> = Record<PropertyKey, T>

type ApiRequestConfig = {
  endpoint: string
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'
  queryParams?: Obj
}

function apiRequestFactory(config: ApiRequestConfig) {
  const { endpoint, method = 'GET', queryParams = {} } = config

  return async function apiCall() {
    const response = await client({
      url: endpoint,
      method,
      params: queryParams,
    })

    return response.data ?? ''
  }
}

// ------------------------------------------------------------------------------------------
// Endpoints
// ------------------------------------------------------------------------------------------

const endpoints: Obj<string> = {
  daily: 'daily.php',
  yearly: 'yearly.php',
}

const getDailyFx = (queryParams: Obj = {}) =>
  apiRequestFactory({
    endpoint: endpoints['daily'],
    queryParams,
  })

const getYearlyFx = (queryParams: Obj = {}) =>
  apiRequestFactory({
    endpoint: endpoints['yearly'],
    queryParams,
  })

export { getDailyFx, getYearlyFx }
