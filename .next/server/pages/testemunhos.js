"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/testemunhos";
exports.ids = ["pages/testemunhos"];
exports.modules = {

/***/ "./src/pages/testemunhos.js":
/*!**********************************!*\
  !*** ./src/pages/testemunhos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction testemunhos() {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // dados dos testemunhos\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function fetchTestemunho() {\n            fetch(\"/api/testemunhos\").then((response)=>response.json()).then((json)=>setData(json));\n        }\n        fetchTestemunho();\n    }, []);\n    return data.map((testemunhos, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \"Aluno:\",\n                        testemunhos.aluno\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 25,\n                    columnNumber: 74\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \" Title:\",\n                        testemunhos.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 26,\n                    columnNumber: 75\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \"Body:\",\n                        testemunhos.description,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 27,\n                    columnNumber: 79\n                }, this)\n            ]\n        }, void 0, true);\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testemunhos);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdGVtdW5ob3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBR25ELFNBQVNHLGNBQWM7SUFFbkIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDLEVBQUUsR0FBRSx3QkFBd0I7SUFFN0RELGdEQUFTQSxDQUFDLElBQU07UUFDWixTQUFVSyxrQkFBaUI7WUFDdkJDLE1BQU0sb0JBQ2JDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRSxDQUFBQSxPQUFRTCxRQUFRSztRQUNsQjtRQUVBSjtJQUVKLEdBQUcsRUFBRTtJQUdMLE9BQ0lGLEtBQUtPLEdBQUcsQ0FBQyxDQUFDUixhQUFhUyxRQUFTO1FBQzVCLHFCQUVJOzs4QkFDQSw4REFBQ0M7b0JBQUVDLE9BQU87d0JBQUNDLE9BQU07b0JBQU87O3dCQUFHO3dCQUFPWixZQUFZYSxLQUFLOzs7Ozs7O2dCQUFLOzhCQUFDLDhEQUFDQzs7Ozs7OEJBQzFELDhEQUFDSjtvQkFBRUMsT0FBTzt3QkFBQ0MsT0FBTTtvQkFBTzs7d0JBQUc7d0JBQVFaLFlBQVllLEtBQUs7Ozs7Ozs7Z0JBQUs7OEJBQUMsOERBQUNEOzs7Ozs4QkFDM0QsOERBQUNKO29CQUFFQyxPQUFPO3dCQUFDQyxPQUFNO29CQUFPOzt3QkFBRzt3QkFBTVosWUFBWWdCLFdBQVc7d0JBQUM7Ozs7Ozs7OEJBQUssOERBQUNGOzs7Ozs7O0lBT3ZFO0FBR1I7QUFHQSxpRUFBZWQsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215X25ld19wcm9qLy4vc3JjL3BhZ2VzL3Rlc3RlbXVuaG9zLmpzP2JjYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXG5cblxuZnVuY3Rpb24gdGVzdGVtdW5ob3MoKSB7XG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7Ly8gZGFkb3MgZG9zIHRlc3RlbXVuaG9zXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICAgICAgZnVuY3Rpb24gIGZldGNoVGVzdGVtdW5obygpe1xuICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3Rlc3RlbXVuaG9zXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4gc2V0RGF0YShqc29uKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoVGVzdGVtdW5obygpO1xuXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybihcbiAgICAgICAgZGF0YS5tYXAoKHRlc3RlbXVuaG9zLCBpbmRleCk9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG5cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wifX0+QWx1bm86e3Rlc3RlbXVuaG9zLmFsdW5vfTwvcD4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT4gVGl0bGU6e3Rlc3RlbXVuaG9zLnRpdGxlfTwvcD4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5Cb2R5Ont0ZXN0ZW11bmhvcy5kZXNjcmlwdGlvbn0gPC9wPjxiciAvPlxuXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIClcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHRlc3RlbXVuaG9zOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidGVzdGVtdW5ob3MiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoVGVzdGVtdW5obyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsImluZGV4IiwicCIsInN0eWxlIiwiY29sb3IiLCJhbHVubyIsImJyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/testemunhos.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/testemunhos.js"));
module.exports = __webpack_exports__;

})();