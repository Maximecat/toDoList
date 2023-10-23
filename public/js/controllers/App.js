import { ToDoFactory } from "../factories/ToDoFactory.js";
import { ToDoService } from "../service/ToDoService.js";

class App {
    apiService;
    toDoContainer;
    toDo;

    constructor() {
        this.apiService = new ToDoService();
        this.toDoContainer = document.querySelector('#main')
        this.toDo = [];
        this.getToDoDatas();
    }

    async getToDoDatas() {
        this.toDo = await this.apiService.getToDoList();
        this.displayToDo();
    }

    displayToDo() {
        for (const toDo of this.toDo) {
            const toDoFactory = new ToDoFactory(toDo)
            const toDoCard = toDoFactory.createToDoCard();

            this.toDoContainer.appendChild(toDoCard)
        }
    }
}

new App();