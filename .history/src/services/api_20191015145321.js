import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pm.pa.gov.br/'
});

const apiInternal = axios.create({
  baseURL: 'http://localhost:3333'
});

export { api, apiInternal };
