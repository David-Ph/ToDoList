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
    let newTask = new Task(
      uniqid(),
      task.title,
      task.description,
      task.priority,
      task.dueDate
    );
    this.task.push(newTask);
  }

  deleteTask(taskID) {
    this.task = this.task.filter((task) => {
      return task.taskId !== taskID;
    });
  }
}

const projectFunction = (() => {
  function getAllProjects() {
    return PROJECTS;
  }

  function getActiveProject() {
    PROJECTS.forEach((project) => {
      if (project.isActive) {
        return project;
      }
    });
  }

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

  function deleteActiveProject() {
    PROJECTS.forEach((project, index) => {
      if (project.isActive) {
        PROJECTS.splice(index, 1);
      }
    });
    // set the first project to be active next
    if (PROJECTS.length) {
      PROJECTS[0].isActive = true;
    }
  }

  return {
    getAllProjects,
    initializePROJECTS,
    clearActiveProject,
    switchProject,
    addNewProject,
    deleteActiveProject,
    getActiveProject,
  };
})();

export { Project, projectFunction };
