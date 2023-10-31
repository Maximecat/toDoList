import { ToDoService } from "../service/ToDoService.js";

class App {
    toDoService;
    toDoContainer;
    todos;
    todoForm;

    constructor() {
        this.toDoService = new ToDoService();
        this.toDoContainer = document.querySelector('#main')
        this.todos = [];
        this.todoForm = document.querySelector('#form-todo')
        this.getToDoDatas();
        this.addTodo();
    }

    async getToDoDatas() {
        this.todos = await this.toDoService.getToDoList();
        this.displayToDo();
    }

    displayToDo() {
        // this.toDoContainer.innerHTML = ""

        for (const toDo of this.todos) {
            const toDoCard = toDo.createToDoCard();

            const todoRemoveButton = toDoCard.querySelector(".todo-remove");
            const todoCheckbox = toDoCard.querySelector('.todo-checkbox');
            const todoText = toDoCard.querySelector('.todo-paragraph')

            todoCheckbox.addEventListener("click", () => {
                this.toDoService.updateTodoElement(toDoCard.id, todoCheckbox.checked)
                    .then(updatedTodo => {
                        if (updatedTodo.completed === false) {
                            todoText.style.cssText = "text-decoration: none;"
                        } else {
                            todoText.style.cssText = "text-decoration: line-through;"
                        }
                    })
            })

            todoRemoveButton.addEventListener("click", () => {
                if (todoCheckbox.checked === false) {
                    alert("You must validate the checkbox to remove the todo");
                } else {
                    this.toDoService.deleteTodoElement(toDoCard.id)
                        .then(deletedTodo => {
                            toDoCard.remove()
                            console.log(deletedTodo);
                        })
                    console.log("Remove todo : " + toDoCard.id)
                }
            });

            this.toDoContainer.appendChild(toDoCard)
        }
    }

    addTodo() {
        this.todoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            console.log(e.srcElement[0].value);
        })
    }
}

new App();