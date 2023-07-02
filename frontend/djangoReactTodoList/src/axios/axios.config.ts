import axios from 'axios';

//This was changeed beacause the backend code was deployed in PythonAnyWhere for production phase
//but in the development branch is still as it was in deveplopment.

export const myTodoAxios = axios.create({
  baseURL: "https://daironirdp.pythonanywhere.com/api/",
});


export const myUserAxios = axios.create({
  baseURL: "https://daironirdp.pythonanywhere.com/api/",
});