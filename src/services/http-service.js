import axios from 'axios';

export default new axios.create({
  baseURL: 'http://contacts.local:8000/api',
  headers: {
    Accept: 'application/json'
  }
});