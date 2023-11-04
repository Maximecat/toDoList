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

            let newTodoValue = e.srcElement[0].value
            console.log(newTodoValue);

            this.toDoService.createTodoElement(newTodoValue)
                .then(createdTodo => {
                    console.log(createdTodo);

                    createdTodo.completed = false;
                    createdTodo.todo = newTodoValue;

                    if (newTodoValue) {
                        const newTodoAdded = createdTodo.createToDoCard()
                        this.toDoContainer.appendChild(newTodoAdded)
                    } else {
                        console.log("Aucune todo ajouter");
                    }
                })
        })
    }
}

new App();