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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("const canvas = document.querySelector('#canvas');\nconst screenWidth = window.innerWidth;\nconst screenHeight = window.innerHeight;\ncanvas.width = screenWidth;\ncanvas.height = screenHeight - 100;\nconst context = canvas.getContext('2d');\nconst alienImage = document.querySelector('#alien');\ncontext.drawImage(alienImage, (screenWidth - 64) / 2, screenHeight - 200, 64, 97);\ncanvas.addEventListener('touchmove', (e) => {\n    const distanceMoved = e.changedTouches[0].clientX - (screenWidth - 64);\n    context.clearRect(0, 0, screenWidth, screenHeight);\n    context.drawImage(alienImage, (screenWidth - 64 + distanceMoved) / 2, screenHeight - 200, 64, 97);\n});\n\n\n//# sourceURL=webpack://redball-aula-oo/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;