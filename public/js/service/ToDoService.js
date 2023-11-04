import { ToDo } from "../models/ToDo.js";

export class ToDoService {
    constructor() { }

    async getToDoList() {
        return fetch('https://dummyjson.com/todos/?limit=6')
            .then(res => res.json())
            .then(data => {
                console.log(data.todos);
                return data.todos.map(todo => new ToDo(todo))
            });
    }

    async deleteTodoElement(id) {
        return fetch('https://dummyjson.com/todos/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                return new ToDo(data)
            });
    }

    async updateTodoElement(id, completed) {
        return fetch('https://dummyjson.com/todos/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: completed,
            })
        })
            .then(res => res.json())
            .then(data => {
                return new ToDo(data)
            });
    }

    async createTodoElement(todo) {
        return fetch('https://dummyjson.com/todos/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: todo,
            })
        })
            .then(res => res.json())
            .then(data => {
                return new ToDo(data)
            });
    }
}