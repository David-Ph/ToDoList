import { modalFunction } from "./newTaskModal";
import { projectFunction } from "./project";

// * cache DOM
const newProjectInput = document.getElementById("new-project-input");
const addProjectBtn = document.getElementById("add-project-btn");
const projectBlock = document.getElementById("project-block");
const deleteProjectBtn = document.getElementById("delete-project-btn");
const taskBlock = document.querySelector("task-block");

// * bind events
addProjectBtn.addEventListener("click", onAddNewProject);
deleteProjectBtn.addEventListener("click", onDeleteProject);
projectBlock.addEventListener("click", onProjectClick);

//? PROJECT DOM FUNCTION
function onAddNewProject() {
  let newProjectName = newProjectInput.value;

  projectFunction.addNewProject(newProjectName);
  renderAllProject();
  resetNewProjectInput();
}

function resetNewProjectInput() {
  newProjectInput.value = "";
}

function renderAllProject() {
  projectBlock.innerHTML = "";
  let allProjects = projectFunction.getAllProjects();
  allProjects.forEach((project) => {
    let newProjectRow = document.createElement("article");
    newProjectRow.classList.add("project-item");
    if (project.isActive === true) {
      newProjectRow.classList.add("active-project");
    }
    newProjectRow.innerHTML = `
        <input type="hidden" class="project-id" value="${project.projectId}">
        <h2 class="title is-6">${project.projectName}</h2>
    `;
    projectBlock.appendChild(newProjectRow);
  });
}

function onProjectClick(event) {
  if (event.target.classList.contains("project-item")) {
    projectFunction.clearActiveProject();
    switchProject(event);
    renderAllProject();
    renderActiveProjectTask();
  }
}

function switchProject(event) {
  let projectId = event.target.querySelector(".project-id");
  projectFunction.switchProject(projectId.value);
}

function renderActiveProjectTask() {
  taskBlock.innerHTML = "";
  let activeProject = projectFunction.getActiveProject();
  activeProject.task.forEach((task) => {
    let newTaskRow = document.createElement("article");
    newTaskRow.className = "task-item has-background-warning-light";
    newTaskRow.innerHTML = `
      <input type="hidden" class="task-id" value="${task.taskId}">
      <div class="w30 task-title">${task.title}</div>
      <div class="w30 task-description">
        ${task.description}
      </div>
      <div class="w15 task-priority">${task.priority}</div>
      <div class="w15 task-dueDate">${task.dueDate}</div>
      <div class="buttons are-small">
        <button class="button is-success task-edit">Edit</button>
        <button class="button is-danger task-delete">X</button>
      </div>
    `;
    taskBlock.appendChild(newTaskRow);
  });
}

function onDeleteProject() {
  projectFunction.deleteActiveProject();
  renderAllProject();
}

// *testing stuff

// let newProject = new Project("First new project");
// let newerProject = new Project("Second new project");
// let newTask = {
//   title: "New Task",
//   description: "New Description",
//   dueDate: "New DueDate",
//   priority: "New Priority",
// };
// let newerTask = {
//   title: "Newer Task",
//   description: "Newer Description",
//   dueDate: "Newer DueDate",
//   priority: "Newer Priority",
// };

// newProject.addTask(newTask);
// newProject.addTask(newerTask);
// newerProject.addTask(newTask);
// newerProject.addTask(newerTask);
// PROJECTS.push(newProject);
// PROJECTS.push(newerProject);

// * execute function
modalFunction();
projectFunction.initializePROJECTS();
renderAllProject();
