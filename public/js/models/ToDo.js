export class ToDo {
    id;
    todo;
    completed;
    userId;

    constructor(toDoElement) {
        this.id = toDoElement.id;
        this.todo = toDoElement.todo;
        this.completed = toDoElement.completed;
        this.userId = toDoElement.userId;
    }

    createToDoCard() {
        const articletoDo = document.createElement('article')
        articletoDo.classList.add('todo-card')
        articletoDo.id = this.id

        const inputCheckBox = document.createElement('input')
        inputCheckBox.classList.add('todo-checkbox')
        inputCheckBox.type = 'checkbox'
        inputCheckBox.checked = this.completed

        const paragraphToDo = document.createElement('p')
        paragraphToDo.classList.add('todo-paragraph')
        paragraphToDo.innerText = this.todo

        const toDoRemove = document.createElement('button')
        toDoRemove.classList.add('todo-remove')
        toDoRemove.innerText = 'Remove'

        articletoDo.appendChild(inputCheckBox)
        articletoDo.appendChild(paragraphToDo)
        articletoDo.appendChild(toDoRemove)

        return articletoDo;
    }
}