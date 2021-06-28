import { Task } from "./task";

let PROJECTS = [];

class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.task = [];
  }

  addTask(task) {
    let newProject = new Task(
      task.title,
      task.description,
      task.priority,
      task.dueDate
    );
    this.task.push(newProject);
  }

  printProject() {
    console.log(this.projectName);
    console.log(this.task);
  }
}

export { PROJECTS, Project };
