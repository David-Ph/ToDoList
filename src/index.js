import { modalFunction } from "./newTaskModal";
import { PROJECTS, Project, projectFunction } from "./project";

// * cache DOM
const newProjectInput = document.getElementById("new-project-input");
const addProjectBtn = document.getElementById("add-project-btn");
const projectBlock = document.getElementById("project-block");

// * bind events
addProjectBtn.addEventListener("click", onAddNewProject);
projectBlock.addEventListener("click", onProjectClick);

//? PROJECT DOM FUNCTION
function onAddNewProject() {
  let newProjectName = newProjectInput.value;
  if (newProjectName === "") {
    return;
  }
  let newProject = new Project(newProjectName);

  newProject.addNewProject();
  renderAllProject();
  resetNewProjectInput();
}

function resetNewProjectInput() {
  newProjectInput.value = "";
}

function renderAllProject() {
  projectBlock.innerHTML = "";
  let allProjects = PROJECTS;
  allProjects.forEach((project) => {
    let newProjectRow = `
      <article class="project-item active-project">
        <input type="hidden" class="project-id" value="${project.projectId}">
        <h2 class="title is-6">${project.projectName}</h2>
      </article>
    `;
    projectBlock.insertAdjacentHTML("beforeend", newProjectRow);
  });
}

function onProjectClick(event) {
  if (event.target.classList.contains("project-item")) {
    console.log("Clicking on project item!");
  }
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
