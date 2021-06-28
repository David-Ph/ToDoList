import { modalFunction } from "./newTaskModal";
import { PROJECTS, Project } from "./project";

// * execute function
modalFunction();

// *testing stuff

let newProject = new Project("First new project");
let newerProject = new Project("Second new project");
let newTask = {
  title: "New Task",
  description: "New Description",
  dueDate: "New DueDate",
  priority: "New Priority",
};
let newerTask = {
  title: "Newer Task",
  description: "Newer Description",
  dueDate: "Newer DueDate",
  priority: "Newer Priority",
};

newProject.addTask(newTask);
newProject.addTask(newerTask);
newerProject.addTask(newTask);
newerProject.addTask(newerTask);
PROJECTS.push(newProject);
PROJECTS.push(newerProject);

PROJECTS.forEach((project) => {
  project.printProject();
});
