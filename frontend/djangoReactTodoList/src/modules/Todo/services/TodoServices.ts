import { myTodoAxios } from '../../../axios/axios.config';
import { Todo } from '../models/Todo';
class TodoDataService {

    async getAll(token: string) {

        return await myTodoAxios.get('todos/', { headers: { 'Authorization': 'Token ' + token, } });

    }

    async createTodo(data: Todo, token: string) {

        return await myTodoAxios.post('todos/', data, { headers: { 'Authorization': 'Token ' + token } })

    }

    async updateTodo(id: string, data: Todo, token: string) {

        return await myTodoAxios.put(`todos/${id}`, data, { headers: { 'Authorization': 'Token ' + token } });
    }

    async deleteTodo(id: string, token: string) {

        return await myTodoAxios.delete(`todos/${id}`, { headers: { 'Authorization': 'Token ' + token } });

    }

    async completeTodo(id: string, token: string) {

        return await myTodoAxios.put(`todos/${id}/complete`, { headers: { 'Authorization': 'Token ' + token } });
    }

}
export default new TodoDataService(); 