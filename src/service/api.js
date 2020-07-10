import axios from 'axios';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJ2YWxpZCI6dHJ1ZSwiYXV0b3JpemFjYW8iOiJST0xFX1VTRVIiLCJzdWIiOiJhdWd1c3RvLm1vZGVzdG9AbGl2ZS5jb20iLCJvcmdhbyI6IkZ1bmRhw6fDo28gVW5pdmVyc2lkYWRlIGRlIEJyYXPDrWxpYSAoVU5CKSIsImV4cGlyZWQiOmZhbHNlLCJpZFVzdWFyaW8iOjE1OTM0LCJub21lIjoiQXVndXN0byBNb2Rlc3RvIiwiZXhwIjoxNTk1MzIwMDk5LCJpYXQiOjE1OTQzMTUyOTl9.TL5_gUgn1lBQjMgc7G2M86ICigHGRnrTHaxP19_Aohd4_pX7qLgizFEsh33AgWt6BPFbBovCyQkBRR-LxN_lFA';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
