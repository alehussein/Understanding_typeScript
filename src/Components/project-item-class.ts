import { Draggable } from '../models/drag-drop-interfaces'
import { Component } from './base-class';
import { Project } from '../models/project-model'

// Project Item Class


  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    private project: Project;

    get persons() {
      if (this.project.people === 1) {
        return "1 person";
      } else {
        return `${this.project.people} persons`;
      }
    }

    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }

    dragStartHandler(event: DragEvent): void {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    dragEndHandler(event: DragEvent): void {
      console.log("DragEnd");
    }

    configure() {
      this.element.addEventListener(
        "dragstart",
        this.dragStartHandler.bind(this)
      );
      this.element.addEventListener("dragend", this.dragEndHandler.bind(this));
    }

    renderContent() {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent =
        this.persons + " Assigned";
      this.element.querySelector("p")!.textContent = this.project.description;
    }
  }

