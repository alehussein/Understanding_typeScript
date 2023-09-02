import { Component } from './base-class.js';
import { projectsState } from '../state/project-state-management.js';
import { ProjectStatus } from '../models/project-model.js';
import { ProjectItem } from './project-item-class.js';
// Project List Class
export class ProjectList extends Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.dragOverHandler = this.dragOverHandler.bind(this);
        this.dragleaveHandler = this.dragleaveHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            const listElement = this.element.querySelector("ul");
            listElement.classList.add("droppable");
        }
    }
    dropHandler(event) {
        const prjId = event.dataTransfer.getData("text/plain");
        projectsState.moveProject(prjId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    dragleaveHandler(_) {
        const listElement = this.element.querySelector("ul"); /// OJO
        listElement.classList.remove("droppable");
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragleaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        projectsState.addListeners((projects) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-project-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + "PROJECTS";
    }
    renderProjects() {
        const listElement = (document.getElementById(`${this.type}-project-list`));
        listElement.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector("ul").id, prjItem);
        }
    }
}
