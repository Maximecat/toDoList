import { ToDoService } from "../service/ToDoService.js";

class App {
    toDoService;
    toDoContainer;
    todos;

    constructor() {
        this.toDoService = new ToDoService();
        this.toDoContainer = document.querySelector('#main')
        this.todos = [];
        this.getToDoDatas();
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

            const clickForChecked = todoCheckbox.addEventListener("click", () => {
                if (todoCheckbox.checked === false) {
                    todoText.style.cssText = "text-decoration: none;"
                } else {
                    todoText.style.cssText = "text-decoration: line-through;"
                }
            })

            if (todoCheckbox.checked === true) {
                todoText.style.cssText = "text-decoration: line-through;"
            } else {
                clickForChecked;
            }

            todoRemoveButton.addEventListener("click", () => {
                if (todoCheckbox.checked === false) {
                    console.log("You must validate the checkbox to remove the todo");
                } else {
                    toDoCard.remove()
                    console.log("Remove todo : " + toDoCard.id)
                }
            });

            this.toDoContainer.appendChild(toDoCard)
        }
    }

    // addTodo() {
    //     const addInput = document.querySelector('.input-add-todo')
    //     console.log(addInput);
    //     const toDoContainer = document.querySelector('#main')
    //     console.log(toDoContainer);
    //     const addButton = document.querySelector('.button-add-todo')
    //     console.log(addButton);

    //     addButton.addEventListener("click", () => {
    //         if (addInput.value === '') {
    //             console.log("Nothing is written");
    //         } else {
    //             const article = document.createElement("article");
    //             article.classList.add('todo-card')

    //             const inputcheck = document.createElement('input')
    //             inputcheck.classList.add('todo-checkbox')
    //             inputcheck.type = 'checkbox'

    //             const paragraph = document.createElement('p')
    //             paragraph.classList.add('todo-paragraph')
    //             paragraph.innerHTML = addInput.value;

    //             const remove = document.createElement('button')
    //             remove.classList.add('todo-remove')
    //             remove.innerText = 'Remove'

    //             toDoContainer.appendChild(article);
    //             article.appendChild(inputcheck)
    //             article.appendChild(paragraph);
    //             article.appendChild(remove)
    //         }
    //     });
    // }
}

new App();