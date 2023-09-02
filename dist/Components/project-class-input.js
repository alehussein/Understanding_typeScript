import { Component } from "./base-class.js";
import { validate } from "../util/validation.js";
import { projectsState } from "../state/project-state-management.js";
// Project Class
export class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleInputElement = (this.element.querySelector("#title"));
        this.descriptionInputElement = (this.element.querySelector("#description"));
        this.peopleInputElement = (this.element.querySelector("#people"));
        this.configure();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 0,
            max: 6,
        };
        if (!validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert("Invalid Input, please Try again!");
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    // @autoBind
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectsState.addProject(title, description, people);
            this.clearInput();
        }
    }
    clearInput() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    renderContent() { }
}
