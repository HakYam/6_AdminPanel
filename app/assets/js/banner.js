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

/***/ "./src/assets/js/banner.js":
/*!*********************************!*\
  !*** ./src/assets/js/banner.js ***!
  \*********************************/
/***/ (() => {

eval("(function () {\n  var closeBanners = document.querySelectorAll(\".js-banner__close\");\n  closeBanners.forEach(function (closeBanner) {\n    closeBanner.addEventListener(\"click\", function (event) {\n      var banner = event.target.parentNode;\n      banner.classList.add(\"collapse\");\n      banner.addEventListener(\"transitionend\", function (event) {\n        if (event.target === this) {\n          this.remove();\n        }\n      });\n    });\n  });\n})();\n\n//# sourceURL=webpack://6_adminpanel/./src/assets/js/banner.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/banner.js"]();
/******/ 	
/******/ })()
;