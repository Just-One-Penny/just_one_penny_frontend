import * as qs from 'qs';
import { PathLike } from 'fs';

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE ||
  'https://jop-production-api.herokuapp.com/v1';
export const apiConfig = {
  returnRejectedPromiseOnError: true,
  timeout: 30000,
  baseURL: API_BASE_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    Authorization: `Bearer ${localStorage.getItem('jop_auth_token')}`,
  },
  paramsSerializer: (params: PathLike) =>
    qs.stringify(params, { indices: false }),
};
