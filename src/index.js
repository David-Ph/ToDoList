import { modalFunction } from "./newTaskModal";
import { PROJECTS, Project } from "./project";

// * execute function
modalFunction();

let newProject = new Project("First new project");
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
console.log(newProject);
