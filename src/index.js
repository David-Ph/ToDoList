import { modalFunction, modalMethods } from "./newTaskModal";
import { projectFunction } from "./project";

// * cache DOM
const newProjectInput = document.getElementById("new-project-input");
const addProjectBtn = document.getElementById("add-project-btn");
const projectBlock = document.getElementById("project-block");
const deleteProjectBtn = document.getElementById("delete-project-btn");
const taskBlock = document.querySelector(".task-block");

const submitNewProject = document.getElementById("submit-new-project-btn");
const newTaskTitle = document.getElementById("new-task-title");
const newTaskDescription = document.getElementById("new-task-description");
const newTaskPriority = document.getElementById("new-task-priority");
const newTaskDueDate = document.getElementById("new-task-due-date");

const submitEditBtn = document.getElementById("submit-edit-project-btn");
const editTaskTitle = document.getElementById("edit-task-title");
const editTaskDescription = document.getElementById("edit-task-description");
const editTaskPriority = document.getElementById("edit-task-priority");
const editTaskDueDate = document.getElementById("edit-task-due-date");

// * bind events
addProjectBtn.addEventListener("click", onAddNewProject);
deleteProjectBtn.addEventListener("click", onDeleteProject);
projectBlock.addEventListener("click", onProjectClick);

submitNewProject.addEventListener("click", onSubmitNewTask);
taskBlock.addEventListener("click", onDeleteTask);

taskBlock.addEventListener("click", onEditTask);
submitEditBtn.addEventListener("click", onSubmitEditTask);

// * global variable
let taskToEditId;

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

function onSubmitNewTask() {
  addTaskToActiveProject();
  modalMethods.clearAllModalInputs();
  modalMethods.closeAllModal();
  renderActiveProjectTask();
}

function addTaskToActiveProject() {
  const newTask = {
    title: newTaskTitle.value,
    description: newTaskDescription.value,
    priority: newTaskPriority.value,
    dueDate: newTaskDueDate.value,
  };
  const activeProject = projectFunction.getActiveProject();
  activeProject.addTask(newTask);
}

function onDeleteTask(event) {
  if (event.target.classList.contains("task-delete")) {
    deleteTask(event.target);
    renderActiveProjectTask();
  }
}

function deleteTask(event) {
  const taskToDeleteId =
    event.parentNode.parentNode.querySelector(".task-id").value;

  const activeProject = projectFunction.getActiveProject();
  activeProject.deleteTask(taskToDeleteId);
}

function onEditTask(event) {
  if (event.target.classList.contains("task-edit")) {
    modalFunction.toggleEditTaskModal();
    fillEditTaskModal(event.target);
  }
}

function fillEditTaskModal(event) {
  taskToEditId = event.parentNode.parentNode.querySelector(".task-id").value;
  const taskToEditTitle =
    event.parentNode.parentNode.querySelector(".task-title").innerHTML;
  const taskToEditDescription =
    event.parentNode.parentNode.querySelector(".task-description").innerHTML;
  const taskToEditPriority =
    event.parentNode.parentNode.querySelector(".task-priority").innerHTML;
  const taskToEditDueDate =
    event.parentNode.parentNode.querySelector(".task-dueDate").innerHTML;

  editTaskTitle.value = taskToEditTitle;
  editTaskDescription.value = taskToEditDescription;
  editTaskPriority.value = taskToEditPriority;
  editTaskDueDate.value = taskToEditDueDate;
}

function onSubmitEditTask() {
  editTask();
  modalMethods.closeAllModal();
  renderActiveProjectTask();
}

function editTask() {
  const activeProject = projectFunction.getActiveProject();

  const editedTask = {
    title: editTaskTitle.value,
    description: editTaskDescription.value,
    priority: editTaskPriority.value,
    dueDate: editTaskDueDate.value,
  };

  activeProject.editTask(taskToEditId, editedTask);
}

// * execute function
// modalFunction();
projectFunction.initializePROJECTS();
renderAllProject();
