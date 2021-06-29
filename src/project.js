import { Task } from "./task";
let uniqid = require("uniqid");

let PROJECTS = [];

class Project {
  constructor(projectName) {
    this.projectId = uniqid();
    this.projectName = projectName;
    this.task = [];
  }

  addTask(task) {
    let newProject = new Task(
      uniqid(),
      task.title,
      task.description,
      task.priority,
      task.dueDate
    );
    this.task.push(newProject);
  }

  deleteTask(taskID) {
    this.task = this.task.filter((task) => {
      return task.taskId !== taskID;
    });
  }

  printProject() {
    console.log(this.projectName);
    console.log(this.projectId);
    console.log(this.task);
  }
}

export { PROJECTS, Project };
