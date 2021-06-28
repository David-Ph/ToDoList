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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskModal */ \"./src/newTaskModal.js\");\n/* harmony import */ var _newTaskModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_newTaskModal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n// * execute function\r\n(0,_newTaskModal__WEBPACK_IMPORTED_MODULE_0__.modalFunction)();\r\n\r\nlet newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\"First new project\");\r\nlet newTask = {\r\n  title: \"New Task\",\r\n  description: \"New Description\",\r\n  dueDate: \"New DueDate\",\r\n  priority: \"New Priority\",\r\n};\r\nlet newerTask = {\r\n  title: \"Newer Task\",\r\n  description: \"Newer Description\",\r\n  dueDate: \"Newer DueDate\",\r\n  priority: \"Newer Priority\",\r\n};\r\n\r\nnewProject.addTask(newTask);\r\nnewProject.addTask(newerTask);\r\nconsole.log(newProject);\r\n\n\n//# sourceURL=webpack://09_todolist/./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PROJECTS\": () => (/* binding */ PROJECTS),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nlet PROJECTS = [];\r\n\r\nclass Project {\r\n  constructor(projectName) {\r\n    this.projectName = projectName;\r\n    this.task = [];\r\n  }\r\n\r\n  addTask(task) {\r\n    let newProject = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(\r\n      task.title,\r\n      task.description,\r\n      task.priority,\r\n      task.dueDate\r\n    );\r\n    this.task.push(newProject);\r\n  }\r\n\r\n  printProject() {\r\n    console.log(this.projectName);\r\n    console.log(this.task);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://09_todolist/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(title, description, priority, dueDate) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.priority = priority;\r\n    this.dueDate = dueDate;\r\n    this.hasDone = false;\r\n  }\r\n}\r\n\r\n// module.exports = Task;\r\n\n\n//# sourceURL=webpack://09_todolist/./src/task.js?");

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