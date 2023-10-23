export class ToDoFactory {
    todo;

    constructor(todo) {
        this.todo = todo;
    }

    createToDoCard() {
        const articletoDo = document.createElement('article')
        articletoDo.id = 'todo-card'

        const inputCheckBox = document.createElement('input')
        inputCheckBox.id = 'todo-checkbox'
        inputCheckBox.type = 'checkbox'

        const paragraphToDo = document.createElement('p')
        paragraphToDo.id = 'todo-paragraph'
        paragraphToDo.innerText = toDo.todo

        const toDoRemove = document.createElement('span')
        toDoRemove.id = 'todo-remove'
        toDoRemove.innerText = 'Remove'

        articletoDo.appendChild(inputCheckBox)
        articletoDo.appendChild(paragraphToDo)
        articletoDo.appendChild(toDoRemove)

        return articletoDo;
    }
}