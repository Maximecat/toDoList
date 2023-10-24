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
            console.log(toDoCard);
            console.log(toDoCard.querySelector(".todo-remove"));

            const todoRemoveButton = toDoCard.querySelector(".todo-remove");
            todoRemoveButton.addEventListener("click", (e) => {
                console.log("Remove todo : " + toDo.id)
            });

            // Je veut que quand tu clique sur le boutton de remove,
            // ca affiche dans la console "remove" et l'id de la carte sur laquelle j'ai cliqué
            this.toDoContainer.appendChild(toDoCard)
        }
    }
}

new App();