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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default()))(({ theme  })=>({\n        backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n        ...theme.typography.body2,\n        padding: theme.spacing(2),\n        textAlign: \"center\",\n        color: theme.palette.text.secondary\n    }));\nfunction index() {\n    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //JSON representation [{nome: 'João', email: 'dycjh@example.com'}, \n    // { nome: 'Maria', email: 'dycjh@example.com' }] \n    // useEffect(() => {funcao}, [controle]) \n    // function nomedaFuncao(){corpo da funcao} \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function buscarAlunos() {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n            //Metódos HTTP psrs retornar dados - CRUD\n            //GET - recuperar dados\n            //POST - criar dados\n            //PUT - atualizar dados\n            //DELETE - apagar dados\n            //REST API\n            //Microservice\n            const data = await response.json();\n            setAlunos(data);\n        }\n        buscarAlunos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n        sx: {\n            flexGrow: 1,\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Alunos Matriculados\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                container: true,\n                spacing: {\n                    xs: 2,\n                    md: 3\n                },\n                columns: {\n                    xs: 4,\n                    sm: 8,\n                    md: 12\n                },\n                children: alunos.map((aluno)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Nome: \",\n                                            aluno.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Email: \",\n                                            aluno.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Phone: \",\n                                            aluno.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 18\n                            }, this),\n                            \" \"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 18\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDaUI7QUFDaEM7QUFBeUM7QUFDdkM7QUFFdEMsTUFBTVEsT0FBT0osd0VBQU1BLENBQUNFLDREQUFLQSxFQUFFLENBQUMsRUFBRUcsTUFBSyxFQUFFLEdBQU07UUFDdkNDLGlCQUFpQkQsTUFBTUUsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZLE1BQU07UUFBRSxHQUFHSCxNQUFNSSxVQUFVLENBQUNDLEtBQUs7UUFBRUMsU0FBU04sTUFBTU8sT0FBTyxDQUFDO1FBQUlDLFdBQVc7UUFBVUMsT0FBT1QsTUFBTUUsT0FBTyxDQUFDUSxJQUFJLENBQUNDLFNBQVM7SUFBRTtBQUFLLFNBQVNDLFFBQVE7SUFBRSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUU7SUFDaFAsbUVBQW1FO0lBQ25FLGtEQUFrRDtJQUNsRCx5Q0FBeUM7SUFDekMsNENBQTRDO0lBRTVDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQUUsZUFBZXVCLGVBQWU7WUFDNUMsTUFBTUMsV0FBVyxNQUFNQyxNQUFPO1lBRTlCLHlDQUF5QztZQUN6Qyx1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFFdkIsVUFBVTtZQUNWLGNBQWM7WUFNZCxNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFVBQVVJO1FBQU87UUFBRUg7SUFBZ0IsR0FBRyxFQUFFO0lBUXhDLHFCQUNBLDhEQUFDbkIsMERBQUdBO1FBQUN3QixJQUFJO1lBQUVDLFVBQVU7WUFBR2IsV0FBVztRQUFTOzswQkFDdkMsOERBQUNjOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUN4QiwyREFBSUE7Z0JBQUN5QixTQUFTO2dCQUFDaEIsU0FBUztvQkFBRWlCLElBQUk7b0JBQUdDLElBQUk7Z0JBQUU7Z0JBQUdDLFNBQVM7b0JBQUVGLElBQUk7b0JBQUdHLElBQUk7b0JBQUdGLElBQUk7Z0JBQUc7MEJBRTFFWixPQUFPZSxHQUFHLENBQUMsQ0FBQ0Msc0JBRWIsOERBQUMvQiwyREFBSUE7d0JBQUNnQyxJQUFJO3dCQUFDTixJQUFJO3dCQUFJRyxJQUFJO3dCQUFJRixJQUFJOzswQ0FFL0IsOERBQUMxQjs7a0RBQ0UsOERBQUNnQzs7NENBQUU7NENBQU9GLE1BQU1HLElBQUk7Ozs7Ozs7a0RBQ3BCLDhEQUFDRDs7NENBQUU7NENBQVFGLE1BQU1JLEtBQUs7Ozs7Ozs7a0RBQ3RCLDhEQUFDRjs7NENBQUU7NENBQVFGLE1BQU1LLEtBQUs7Ozs7Ozs7Ozs7Ozs7NEJBQ2Y7O3VCQU42QnRCOzs7Ozs7Ozs7Ozs7Ozs7O0FBYXhDO0FBRUosaUVBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9uZXdfcHJvai8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IFxuaW1wb3J0IHsgZXhwZXJpbWVudGFsU3R5bGVkIGFzIHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJzsgXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JzsgaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInOyBcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7IFxuXG5jb25zdCBJdGVtID0gc3R5bGVkKFBhcGVyKSgoeyB0aGVtZSB9KSA9PiAoeyBcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCIgPyBcIiMxQTIwMjdcIiA6IFwiI2ZmZlwiLCAuLi50aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LCB9KSk7IGZ1bmN0aW9uIGluZGV4KCkgeyBjb25zdCBbYWx1bm9zLCBzZXRBbHVub3NdID0gdXNlU3RhdGUoW10pOyBcbiAgICAgICAgLy9KU09OIHJlcHJlc2VudGF0aW9uIFt7bm9tZTogJ0pvw6NvJywgZW1haWw6ICdkeWNqaEBleGFtcGxlLmNvbSd9LCBcbiAgICAgICAgLy8geyBub21lOiAnTWFyaWEnLCBlbWFpbDogJ2R5Y2poQGV4YW1wbGUuY29tJyB9XSBcbiAgICAgICAgLy8gdXNlRWZmZWN0KCgpID0+IHtmdW5jYW99LCBbY29udHJvbGVdKSBcbiAgICAgICAgLy8gZnVuY3Rpb24gbm9tZWRhRnVuY2FvKCl7Y29ycG8gZGEgZnVuY2FvfSBcbiAgICAgICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IGFzeW5jIGZ1bmN0aW9uIGJ1c2NhckFsdW5vcygpIHsgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiICk7IFxuXG4gICAgICAgICAgICAvL01ldMOzZG9zIEhUVFAgcHNycyByZXRvcm5hciBkYWRvcyAtIENSVURcbiAgICAgICAgICAgIC8vR0VUIC0gcmVjdXBlcmFyIGRhZG9zXG4gICAgICAgICAgICAvL1BPU1QgLSBjcmlhciBkYWRvc1xuICAgICAgICAgICAgLy9QVVQgLSBhdHVhbGl6YXIgZGFkb3NcbiAgICAgICAgICAgIC8vREVMRVRFIC0gYXBhZ2FyIGRhZG9zXG5cbiAgICAgICAgICAgIC8vUkVTVCBBUElcbiAgICAgICAgICAgIC8vTWljcm9zZXJ2aWNlXG5cblxuXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG4gICAgICAgICAgICBzZXRBbHVub3MoZGF0YSk7IH0gYnVzY2FyQWx1bm9zKCk7IH0sIFtdKTsgXG4gICAgICAgICAgICBcblxuXG5cblxuXG5cbiAgICAgICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgPGgyPkFsdW5vcyBNYXRyaWN1bGFkb3M8L2gyPiBcbiAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19IGNvbHVtbnM9e3sgeHM6IDQsIHNtOiA4LCBtZDogMTIgfX0gPiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIHthbHVub3MubWFwKChhbHVubykgPT4gKCBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBrZXk9e2luZGV4fT4gXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vbWU6IHthbHVuby5uYW1lfTwvcD4gXG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7YWx1bm8uZW1haWx9PC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvbmU6IHthbHVuby5waG9uZX08L3A+IFxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+IDwvR3JpZD4gKSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0JveD4gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV4cGVyaW1lbnRhbFN0eWxlZCIsInN0eWxlZCIsIkJveCIsIlBhcGVyIiwiR3JpZCIsIkl0ZW0iLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJtb2RlIiwidHlwb2dyYXBoeSIsImJvZHkyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInRleHQiLCJzZWNvbmRhcnkiLCJpbmRleCIsImFsdW5vcyIsInNldEFsdW5vcyIsImJ1c2NhckFsdW5vcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN4IiwiZmxleEdyb3ciLCJoMiIsImNvbnRhaW5lciIsInhzIiwibWQiLCJjb2x1bW5zIiwic20iLCJtYXAiLCJhbHVubyIsIml0ZW0iLCJwIiwibmFtZSIsImVtYWlsIiwicGhvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();