import { ValidateResponse } from './Exceptions';
import AuthService from '../services/AuthService';

const baseUrl = window.location.origin;

export default async (method, endpoint, payload) => fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(await AuthService.getCurrent().getAuthHeaders()),
    },
    body: payload ? JSON.stringify(payload) : null,
  })
    .then(response => ValidateResponse(response))
    .catch((error) => { throw error; })
    .then(response => response)
