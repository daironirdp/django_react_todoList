import axios from 'axios';

export const myTodoAxios = axios.create({
  baseURL: "",
});


export const myUserAxios = axios.create({
  baseURL: "http://localhost:8000/api/",
});

