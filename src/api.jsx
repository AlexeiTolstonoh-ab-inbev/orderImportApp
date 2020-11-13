import axios from 'axios';
export const api = axios.create({
  baseURL: `https://abiukb2b.com.br/api/oms/pvt/orders`,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': 'vtexappkey-abiukb2b-CIHTAB'
  }
});


