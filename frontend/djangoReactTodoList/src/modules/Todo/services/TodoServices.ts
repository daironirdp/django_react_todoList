import axios from 'axios';
class TodoDataService {

    getAll(token: string) {

        axios.defaults.headers.common["Authorization"] = "Token " + token; return axios.get('http://localhost:8000/api/todos/');
    }

    createTodo(data: Todo, token: string) {

        axios.defaults.headers.common["Authorization"] = "Token " + token; return axios.post("http://localhost:8000/api/todos/", data);
    }

    updateTodo(id: string, data: Todo, token: string) {

        axios.defaults.headers.common["Authorization"] = "Token " + token; return axios.put(`http://localhost:8000/api/todos/${id}`, data);
    }

    deleteTodo(id: string, token: string) {

        axios.defaults.headers.common["Authorization"] = "Token " + token; return axios.delete(`http://localhost:8000/api/todos/${id}`);

    }

    completeTodo(id: string, token: string) {

        axios.defaults.headers.common["Authorization"] = "Token " + token; return axios.put(`http://localhost:8000/api/todos/${id}/complete`);
    }

}
export default new TodoDataService(); 