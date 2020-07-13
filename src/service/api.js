import axios from 'axios';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJ2YWxpZCI6dHJ1ZSwiYXV0b3JpemFjYW8iOiJST0xFX1VTRVIiLCJzdWIiOiJhdWd1c3RvLm1vZGVzdG9AbGl2ZS5jb20iLCJvcmdhbyI6IkZ1bmRhw6fDo28gVW5pdmVyc2lkYWRlIGRlIEJyYXPDrWxpYSAoVU5CKSIsImV4cGlyZWQiOmZhbHNlLCJpZFVzdWFyaW8iOjE1OTM0LCJub21lIjoiQXVndXN0byBNb2Rlc3RvIiwiZXhwIjoxNTk1NjcyMTcxLCJpYXQiOjE1OTQ2NjczNzF9.WFDq4wi5YRrXchFInc1ZHRi-tIAVVr235UXora8kwdlLmR7LNaL61HMR8mocDwAmRL4F-jn3FSFRcxNSbSe2IQ';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
