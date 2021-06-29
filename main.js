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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskModal */ \"./src/newTaskModal.js\");\n/* harmony import */ var _newTaskModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_newTaskModal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n// * execute function\r\n(0,_newTaskModal__WEBPACK_IMPORTED_MODULE_0__.modalFunction)();\r\n\r\n// *testing stuff\r\n\r\nlet newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\"First new project\");\r\nlet newerProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\"Second new project\");\r\nlet newTask = {\r\n  title: \"New Task\",\r\n  description: \"New Description\",\r\n  dueDate: \"New DueDate\",\r\n  priority: \"New Priority\",\r\n};\r\nlet newerTask = {\r\n  title: \"Newer Task\",\r\n  description: \"Newer Description\",\r\n  dueDate: \"Newer DueDate\",\r\n  priority: \"Newer Priority\",\r\n};\r\n\r\nnewProject.addTask(newTask);\r\nnewProject.addTask(newerTask);\r\nnewerProject.addTask(newTask);\r\nnewerProject.addTask(newerTask);\r\n_project__WEBPACK_IMPORTED_MODULE_1__.PROJECTS.push(newProject);\r\n_project__WEBPACK_IMPORTED_MODULE_1__.PROJECTS.push(newerProject);\r\nconsole.log(newerProject.task);\r\n\r\nnewerProject.deleteTask(newerProject.task[0].taskId);\r\nconsole.log(newerProject.task);\r\n// PROJECTS.forEach((project) => {\r\n//   project.printProject();\r\n// });\r\n\n\n//# sourceURL=webpack://09_todolist/./src/index.js?");

/***/ }),

/***/ "./src/newTaskModal.js":
/*!*****************************!*\
  !*** ./src/newTaskModal.js ***!
  \*****************************/
/***/ ((module) => {

eval("const modalFunction = function () {\r\n  // * cache DOM\r\n  const newTaskBtn = document.getElementById(\"add-task-btn\");\r\n  const newTaskModal = document.getElementById(\"new-task-modal\");\r\n  const taskBlock = document.querySelector(\".task-list\");\r\n\r\n  // * bind events\r\n  newTaskBtn.addEventListener(\"click\", toggleNewTaskModal);\r\n  newTaskModal.addEventListener(\"click\", closeModal);\r\n\r\n  function toggleNewTaskModal() {\r\n    if (newTaskModal.classList.contains(\"is-active\")) {\r\n      newTaskModal.classList.remove(\"is-active\");\r\n    } else {\r\n      newTaskModal.classList.add(\"is-active\");\r\n    }\r\n  }\r\n  function closeModal(event) {\r\n    if (\r\n      event.target.classList.contains(\"modal-background\") ||\r\n      event.target.classList.contains(\"modal-close\")\r\n    ) {\r\n      if ((event.target.parentNode.id = \"new-task-modal\")) {\r\n        toggleNewTaskModal();\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nmodule.exports = {\r\n  modalFunction,\r\n};\r\n\n\n//# sourceURL=webpack://09_todolist/./src/newTaskModal.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PROJECTS\": () => (/* binding */ PROJECTS),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\nlet uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\r\n\r\nlet PROJECTS = [];\r\n\r\nclass Project {\r\n  constructor(projectName) {\r\n    this.projectId = uniqid();\r\n    this.projectName = projectName;\r\n    this.task = [];\r\n  }\r\n\r\n  addTask(task) {\r\n    let newProject = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(\r\n      uniqid(),\r\n      task.title,\r\n      task.description,\r\n      task.priority,\r\n      task.dueDate\r\n    );\r\n    this.task.push(newProject);\r\n  }\r\n\r\n  deleteTask(taskID) {\r\n    console.log(taskID);\r\n    this.task = this.task.filter((task) => {\r\n      console.log(task.taskId !== taskID);\r\n      return task.taskId !== taskID;\r\n    });\r\n  }\r\n\r\n  printProject() {\r\n    console.log(this.projectName);\r\n    console.log(this.projectId);\r\n    console.log(this.task);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://09_todolist/./src/project.js?");

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