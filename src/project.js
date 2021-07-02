import { Task } from "./task";
let uniqid = require("uniqid");

let PROJECTS = [];

class Project {
  constructor(projectName) {
    this.projectId = uniqid();
    this.projectName = projectName;
    this.task = [];
    this.isActive = false;
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
  function addNewProject(projectName) {
    if (projectName === "") {
      return;
    }
    const newProject = new Project(projectName);
    PROJECTS.push(newProject);
  }

  function initializePROJECTS() {
    const firstProject = new Project("First Project");
    firstProject.isActive = true;
    PROJECTS.push(firstProject);
  }

  function clearActiveProject() {
    PROJECTS.forEach((project) => {
      project.isActive = false;
    });
  }

  function switchProject(projectId) {
    PROJECTS.forEach((project) => {
      if (project.projectId === projectId) {
        project.isActive = true;
      }
    });
  }

  return {
    initializePROJECTS,
    clearActiveProject,
    switchProject,
    addNewProject,
  };
})();

export { PROJECTS, Project, projectFunction };
