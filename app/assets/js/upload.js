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

/***/ "./src/assets/js/upload.js":
/*!*********************************!*\
  !*** ./src/assets/js/upload.js ***!
  \*********************************/
/***/ (() => {

eval("(function () {\n  var uploaders = document.querySelectorAll('.js-upload');\n  Array.from(uploaders, function (uploader) {\n    var upload = uploader.querySelector('.js-upload-value'),\n      placeholder = uploader.querySelector('.js-upload-placeholder'),\n      remove = uploader.querySelector('.js-upload-remove');\n    upload.addEventListener('change', function (event) {\n      var img = this.files[0];\n      var reader = new FileReader();\n      reader.readAsDataURL(img);\n      reader.onloadend = function () {\n        uploader.classList.add('has-image');\n        placeholder.src = reader.result;\n      };\n    });\n    remove.addEventListener('click', function () {\n      upload.value = '';\n      uploader.classList.remove('has-image');\n      placeholder.src = '';\n    });\n  });\n})();\n\n//# sourceURL=webpack://6_adminpanel/./src/assets/js/upload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/upload.js"]();
/******/ 	
/******/ })()
;