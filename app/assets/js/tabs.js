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

/***/ "./src/assets/js/tabs.js":
/*!*******************************!*\
  !*** ./src/assets/js/tabs.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var tabs = document.querySelectorAll('.js-tab-link');\n  var tabAreas = document.querySelectorAll('.js-tab-area');\n  function deactivateAllTabs() {\n    tabs.forEach(function (tab) {\n      tab.classList.remove('is-active');\n    });\n  }\n  function hideAllTabAreas() {\n    tabAreas.forEach(function (tabArea) {\n      tabArea.classList.remove('is-active');\n    });\n  }\n  function activateTab(tab) {\n    deactivateAllTabs();\n    hideAllTabAreas();\n    tab.classList.add('is-active');\n    var index = tab.dataset.index;\n    var activeTabArea = document.querySelector('.js-tab-area[data-indexed=\"' + index + '\"]');\n    if (activeTabArea) {\n      activeTabArea.classList.add('is-active');\n    }\n  }\n  tabs.forEach(function (tab) {\n    tab.addEventListener('click', function () {\n      activateTab(tab);\n    });\n  });\n\n  // Activate the first tab by default\n  if (tabs.length > 0) {\n    activateTab(tabs[0]);\n  }\n});\n\n//# sourceURL=webpack://6_adminpanel/./src/assets/js/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/tabs.js"]();
/******/ 	
/******/ })()
;