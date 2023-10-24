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
        return fetch('https://dummyjson.com/todos/' + id)
            .then(res => res.json())
            .then(data => {
                return new ToDo(data)
            });
    }
}