/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://09_todolist/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskModal */ \"./src/newTaskModal.js\");\n/* harmony import */ var _newTaskModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_newTaskModal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n// * cache DOM\r\nconst newProjectInput = document.getElementById(\"new-project-input\");\r\nconst addProjectBtn = document.getElementById(\"add-project-btn\");\r\nconst projectBlock = document.getElementById(\"project-block\");\r\nconst deleteProjectBtn = document.getElementById(\"delete-project-btn\");\r\nconst taskBlock = document.querySelector(\".task-block\");\r\n\r\nconst submitNewProject = document.getElementById(\"submit-new-project-btn\");\r\nconst newTaskTitle = document.getElementById(\"new-task-title\");\r\nconst newTaskDescription = document.getElementById(\"new-task-description\");\r\nconst newTaskPriority = document.getElementById(\"new-task-priority\");\r\nconst newTaskDueDate = document.getElementById(\"new-task-due-date\");\r\n\r\nconst submitEditBtn = document.getElementById(\"submit-edit-project-btn\");\r\nconst editTaskTitle = document.getElementById(\"edit-task-title\");\r\nconst editTaskDescription = document.getElementById(\"edit-task-description\");\r\nconst editTaskPriority = document.getElementById(\"edit-task-priority\");\r\nconst editTaskDueDate = document.getElementById(\"edit-task-due-date\");\r\n\r\n// * bind events\r\naddProjectBtn.addEventListener(\"click\", onAddNewProject);\r\ndeleteProjectBtn.addEventListener(\"click\", onDeleteProject);\r\nprojectBlock.addEventListener(\"click\", onProjectClick);\r\n\r\nsubmitNewProject.addEventListener(\"click\", onSubmitNewTask);\r\ntaskBlock.addEventListener(\"click\", onDeleteTask);\r\n\r\ntaskBlock.addEventListener(\"click\", onEditTask);\r\nsubmitEditBtn.addEventListener(\"click\", onSubmitEditTask);\r\n\r\n// * global variable\r\nlet taskToEditId;\r\n\r\n//? PROJECT DOM FUNCTION\r\nfunction onAddNewProject() {\r\n  let newProjectName = newProjectInput.value;\r\n\r\n  _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.addNewProject(newProjectName);\r\n  renderAllProject();\r\n  resetNewProjectInput();\r\n}\r\n\r\nfunction resetNewProjectInput() {\r\n  newProjectInput.value = \"\";\r\n}\r\n\r\nfunction renderAllProject() {\r\n  projectBlock.innerHTML = \"\";\r\n  let allProjects = _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.getAllProjects();\r\n  allProjects.forEach((project) => {\r\n    let newProjectRow = document.createElement(\"article\");\r\n    newProjectRow.classList.add(\"project-item\");\r\n    if (project.isActive === true) {\r\n      newProjectRow.classList.add(\"active-project\");\r\n    }\r\n    newProjectRow.innerHTML = `\r\n        <input type=\"hidden\" class=\"project-id\" value=\"${project.projectId}\">\r\n        <h2 class=\"title is-6\">${project.projectName}</h2>\r\n    `;\r\n    projectBlock.appendChild(newProjectRow);\r\n  });\r\n}\r\n\r\nfunction onProjectClick(event) {\r\n  if (event.target.classList.contains(\"project-item\")) {\r\n    _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.clearActiveProject();\r\n    switchProject(event);\r\n    renderAllProject();\r\n    renderActiveProjectTask();\r\n  }\r\n}\r\n\r\nfunction switchProject(event) {\r\n  let projectId = event.target.querySelector(\".project-id\");\r\n  _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.switchProject(projectId.value);\r\n}\r\n\r\nfunction renderActiveProjectTask() {\r\n  taskBlock.innerHTML = \"\";\r\n  let activeProject = _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.getActiveProject();\r\n  activeProject.task.forEach((task) => {\r\n    let newTaskRow = document.createElement(\"article\");\r\n    newTaskRow.className = \"task-item has-background-warning-light\";\r\n    newTaskRow.innerHTML = `\r\n      <input type=\"hidden\" class=\"task-id\" value=\"${task.taskId}\">\r\n      <div class=\"w30 task-title\">${task.title}</div>\r\n      <div class=\"w30 task-description\">\r\n        ${task.description}\r\n      </div>\r\n      <div class=\"w15 task-priority\">${task.priority}</div>\r\n      <div class=\"w15 task-dueDate\">${task.dueDate}</div>\r\n      <div class=\"buttons are-small\">\r\n        <button class=\"button is-success task-edit\">Edit</button>\r\n        <button class=\"button is-danger task-delete\">X</button>\r\n      </div>\r\n    `;\r\n    taskBlock.appendChild(newTaskRow);\r\n  });\r\n}\r\n\r\nfunction onDeleteProject() {\r\n  _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.deleteActiveProject();\r\n  renderAllProject();\r\n}\r\n\r\nfunction onSubmitNewTask() {\r\n  addTaskToActiveProject();\r\n  _newTaskModal__WEBPACK_IMPORTED_MODULE_0__.modalMethods.clearAllModalInputs();\r\n  _newTaskModal__WEBPACK_IMPORTED_MODULE_0__.modalMethods.closeAllModal();\r\n  renderActiveProjectTask();\r\n}\r\n\r\nfunction addTaskToActiveProject() {\r\n  const newTask = {\r\n    title: newTaskTitle.value,\r\n    description: newTaskDescription.value,\r\n    priority: newTaskPriority.value,\r\n    dueDate: newTaskDueDate.value,\r\n  };\r\n  const activeProject = _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.getActiveProject();\r\n  activeProject.addTask(newTask);\r\n}\r\n\r\nfunction onDeleteTask(event) {\r\n  if (event.target.classList.contains(\"task-delete\")) {\r\n    deleteTask(event.target);\r\n    renderActiveProjectTask();\r\n  }\r\n}\r\n\r\nfunction deleteTask(event) {\r\n  const taskToDeleteId =\r\n    event.parentNode.parentNode.querySelector(\".task-id\").value;\r\n\r\n  const activeProject = _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.getActiveProject();\r\n  activeProject.deleteTask(taskToDeleteId);\r\n}\r\n\r\nfunction onEditTask(event) {\r\n  if (event.target.classList.contains(\"task-edit\")) {\r\n    _newTaskModal__WEBPACK_IMPORTED_MODULE_0__.modalFunction.toggleEditTaskModal();\r\n    fillEditTaskModal(event.target);\r\n  }\r\n}\r\n\r\nfunction fillEditTaskModal(event) {\r\n  taskToEditId = event.parentNode.parentNode.querySelector(\".task-id\").value;\r\n  const taskToEditTitle =\r\n    event.parentNode.parentNode.querySelector(\".task-title\").innerHTML;\r\n  const taskToEditDescription =\r\n    event.parentNode.parentNode.querySelector(\".task-description\").innerHTML;\r\n  const taskToEditPriority =\r\n    event.parentNode.parentNode.querySelector(\".task-priority\").innerHTML;\r\n  const taskToEditDueDate =\r\n    event.parentNode.parentNode.querySelector(\".task-dueDate\").innerHTML;\r\n\r\n  editTaskTitle.value = taskToEditTitle;\r\n  editTaskDescription.value = taskToEditDescription;\r\n  editTaskPriority.value = taskToEditPriority;\r\n  editTaskDueDate.value = taskToEditDueDate;\r\n}\r\n\r\nfunction onSubmitEditTask() {\r\n  editTask();\r\n  _newTaskModal__WEBPACK_IMPORTED_MODULE_0__.modalMethods.closeAllModal();\r\n  renderActiveProjectTask();\r\n}\r\n\r\nfunction editTask() {\r\n  const activeProject = _project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.getActiveProject();\r\n\r\n  const editedTask = {\r\n    title: editTaskTitle.value,\r\n    description: editTaskDescription.value,\r\n    priority: editTaskPriority.value,\r\n    dueDate: editTaskDueDate.value,\r\n  };\r\n\r\n  activeProject.editTask(taskToEditId, editedTask);\r\n}\r\n\r\n// * execute function\r\n// modalFunction();\r\n_project__WEBPACK_IMPORTED_MODULE_1__.projectFunction.initializePROJECTS();\r\nrenderAllProject();\r\n\n\n//# sourceURL=webpack://09_todolist/./src/index.js?");

/***/ }),

/***/ "./src/newTaskModal.js":
/*!*****************************!*\
  !*** ./src/newTaskModal.js ***!
  \*****************************/
/***/ ((module) => {

eval("const modalFunction = (function () {\r\n  // * cache DOM\r\n  const newTaskBtn = document.getElementById(\"add-task-btn\");\r\n  const newTaskModal = document.getElementById(\"new-task-modal\");\r\n  const editTaskModal = document.getElementById(\"edit-task-modal\");\r\n\r\n  // * bind events\r\n  newTaskBtn.addEventListener(\"click\", toggleNewTaskModal);\r\n  newTaskModal.addEventListener(\"click\", closeModal);\r\n  editTaskModal.addEventListener(\"click\", closeEditTaskModal);\r\n\r\n  function toggleNewTaskModal() {\r\n    if (newTaskModal.classList.contains(\"is-active\")) {\r\n      newTaskModal.classList.remove(\"is-active\");\r\n    } else {\r\n      newTaskModal.classList.add(\"is-active\");\r\n    }\r\n  }\r\n\r\n  function toggleEditTaskModal() {\r\n    if (editTaskModal.classList.contains(\"is-active\")) {\r\n      editTaskModal.classList.remove(\"is-active\");\r\n    } else {\r\n      editTaskModal.classList.add(\"is-active\");\r\n    }\r\n  }\r\n  function closeModal(event) {\r\n    if (\r\n      event.target.classList.contains(\"modal-background\") ||\r\n      event.target.classList.contains(\"modal-close\")\r\n    ) {\r\n      if ((event.target.parentNode.id = \"new-task-modal\")) {\r\n        toggleNewTaskModal();\r\n      }\r\n    }\r\n  }\r\n  function closeEditTaskModal(event) {\r\n    if (\r\n      event.target.classList.contains(\"modal-background\") ||\r\n      event.target.classList.contains(\"modal-close\")\r\n    ) {\r\n      if ((event.target.parentNode.id = \"edit-task-modal\")) {\r\n        toggleEditTaskModal();\r\n      }\r\n    }\r\n  }\r\n\r\n  return {\r\n    toggleNewTaskModal,\r\n    toggleEditTaskModal,\r\n  };\r\n})();\r\n\r\nconst modalMethods = (() => {\r\n  function closeAllModal() {\r\n    const modals = Array.from(document.querySelectorAll(\".modal\"));\r\n    modals.forEach((modal) => {\r\n      if (modal.classList.contains(\"is-active\")) {\r\n        modal.classList.remove(\"is-active\");\r\n      }\r\n    });\r\n  }\r\n  function clearAllModalInputs() {\r\n    const modalInputs = Array.from(document.querySelectorAll(\".modal input\"));\r\n    const modalTextAreas = Array.from(\r\n      document.querySelectorAll(\".modal textarea\")\r\n    );\r\n    const modalSelects = Array.from(document.querySelectorAll(\".modal select\"));\r\n    const allInputs = [...modalInputs, ...modalTextAreas, ...modalSelects];\r\n\r\n    allInputs.forEach((input) => {\r\n      input.value = \"\";\r\n    });\r\n  }\r\n\r\n  return {\r\n    closeAllModal,\r\n    clearAllModalInputs,\r\n  };\r\n})();\r\n\r\nmodule.exports = {\r\n  modalFunction,\r\n  modalMethods,\r\n};\r\n\n\n//# sourceURL=webpack://09_todolist/./src/newTaskModal.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectFunction\": () => (/* binding */ projectFunction)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\nlet uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\r\n\r\nlet PROJECTS = [];\r\n\r\nclass Project {\r\n  constructor(projectName) {\r\n    this.projectId = uniqid();\r\n    this.projectName = projectName;\r\n    this.task = [];\r\n    this.isActive = false;\r\n  }\r\n\r\n  addTask(task) {\r\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(\r\n      uniqid(),\r\n      task.title,\r\n      task.description,\r\n      task.priority,\r\n      task.dueDate\r\n    );\r\n    this.task.push(newTask);\r\n  }\r\n\r\n  deleteTask(taskID) {\r\n    this.task = this.task.filter((task) => {\r\n      return task.taskId !== taskID;\r\n    });\r\n  }\r\n\r\n  editTask(taskId, newTask) {\r\n    this.task.forEach((task) => {\r\n      if (task.taskId === taskId) {\r\n        task.title = newTask.title;\r\n        task.description = newTask.description;\r\n        task.priority = newTask.priority;\r\n        task.dueDate = newTask.dueDate;\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nconst projectFunction = (() => {\r\n  function getAllProjects() {\r\n    return [...PROJECTS];\r\n  }\r\n\r\n  function getActiveProject() {\r\n    let activeProject;\r\n    PROJECTS.forEach((project) => {\r\n      if (project.isActive) {\r\n        activeProject = project;\r\n      }\r\n    });\r\n    return activeProject;\r\n  }\r\n\r\n  function addNewProject(projectName) {\r\n    if (projectName === \"\") {\r\n      return;\r\n    }\r\n    const newProject = new Project(projectName);\r\n    PROJECTS.push(newProject);\r\n  }\r\n\r\n  function initializePROJECTS() {\r\n    const firstProject = new Project(\"First Project\");\r\n    firstProject.isActive = true;\r\n    PROJECTS.push(firstProject);\r\n  }\r\n\r\n  function clearActiveProject() {\r\n    PROJECTS.forEach((project) => {\r\n      project.isActive = false;\r\n    });\r\n  }\r\n\r\n  function switchProject(projectId) {\r\n    PROJECTS.forEach((project) => {\r\n      if (project.projectId === projectId) {\r\n        project.isActive = true;\r\n      }\r\n    });\r\n  }\r\n\r\n  function deleteActiveProject() {\r\n    PROJECTS.forEach((project, index) => {\r\n      if (project.isActive) {\r\n        PROJECTS.splice(index, 1);\r\n      }\r\n    });\r\n    // set the first project to be active next\r\n    if (PROJECTS.length) {\r\n      PROJECTS[0].isActive = true;\r\n    }\r\n  }\r\n\r\n  return {\r\n    getAllProjects,\r\n    initializePROJECTS,\r\n    clearActiveProject,\r\n    switchProject,\r\n    addNewProject,\r\n    deleteActiveProject,\r\n    getActiveProject,\r\n  };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://09_todolist/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(id, title, description, priority, dueDate) {\r\n    this.taskId = id;\r\n    this.title = title;\r\n    this.description = description;\r\n    this.priority = priority;\r\n    this.dueDate = dueDate;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://09_todolist/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;