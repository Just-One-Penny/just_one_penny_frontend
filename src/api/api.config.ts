import * as qs from 'qs';
import { PathLike } from 'fs';

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE || 'http://localhost:3000/v1';
export const apiConfig = () => {
  console.log('API_BASE_URL', API_BASE_URL);
  const token = localStorage.getItem('jop_auth_token');
  const config = {
    returnRejectedPromiseOnError: true,
    timeout: 30000,
    baseURL: API_BASE_URL,
    headers: {
      common: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    },
    paramsSerializer: (params: PathLike) =>
      qs.stringify(params, { indices: false }),
  };
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
};
