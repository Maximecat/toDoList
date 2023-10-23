export class ToDo {
    id;
    todo;
    completed;
    userId;

    constructor(ToDoElement) {
        this.id = ToDoElement.id;
        this.todo = ToDoElement.todo;
        this.completed = ToDoElement.completed;
        this.userId = ToDoElement.userId;
    }
}