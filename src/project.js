import { Task } from "./task";
let uniqid = require("uniqid");

let PROJECTS = [];

class Project {
  constructor(projectName) {
    this.projectId = uniqid();
    this.projectName = projectName;
    this.task = [];
  }

  addNewProject() {
    PROJECTS.push(this);
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
}

const projectFunction = (() => {
  function initializePROJECTS() {
    const firstProject = new Project("First Project");
    PROJECTS.push(firstProject);
  }

  return {
    initializePROJECTS,
  };
})();

export { PROJECTS, Project, projectFunction };
