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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default()))(({ theme  })=>({\n        backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n        ...theme.typography.body2,\n        padding: theme.spacing(2),\n        textAlign: \"center\",\n        color: theme.palette.text.secondary\n    }));\nfunction index() {\n    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //JSON representation [{nome: 'João', email: 'dycjh@example.com'}, \n    // { nome: 'Maria', email: 'dycjh@example.com' }] \n    // useEffect(() => {funcao}, [controle]) \n    // function nomedaFuncao(){corpo da funcao} \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function buscarAlunos() {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n            const data = await response.json();\n            setAlunos(data);\n        }\n        buscarAlunos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n        sx: {\n            flexGrow: 1,\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Alunos Matriculados\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                container: true,\n                spacing: {\n                    xs: 2,\n                    md: 3\n                },\n                columns: {\n                    xs: 4,\n                    sm: 8,\n                    md: 12\n                },\n                children: alunos.map((aluno)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Nome: \",\n                                            aluno.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Email: \",\n                                            aluno.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Phone: \",\n                                            aluno.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 18\n                            }, this),\n                            \" \"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 18\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDaUI7QUFDaEM7QUFBeUM7QUFDdkM7QUFFdEMsTUFBTVEsT0FBT0osd0VBQU1BLENBQUNFLDREQUFLQSxFQUFFLENBQUMsRUFBRUcsTUFBSyxFQUFFLEdBQU07UUFDdkNDLGlCQUFpQkQsTUFBTUUsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZLE1BQU07UUFBRSxHQUFHSCxNQUFNSSxVQUFVLENBQUNDLEtBQUs7UUFBRUMsU0FBU04sTUFBTU8sT0FBTyxDQUFDO1FBQUlDLFdBQVc7UUFBVUMsT0FBT1QsTUFBTUUsT0FBTyxDQUFDUSxJQUFJLENBQUNDLFNBQVM7SUFBRTtBQUFLLFNBQVNDLFFBQVE7SUFBRSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUU7SUFDaFAsbUVBQW1FO0lBQ25FLGtEQUFrRDtJQUNsRCx5Q0FBeUM7SUFDekMsNENBQTRDO0lBRTVDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQUUsZUFBZXVCLGVBQWU7WUFDNUMsTUFBTUMsV0FBVyxNQUFNQyxNQUFPO1lBQzlCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUFJTCxVQUFVSTtRQUFPO1FBQUVIO0lBQWdCLEdBQUcsRUFBRTtJQUU1RSxxQkFDQSw4REFBQ25CLDBEQUFHQTtRQUFDd0IsSUFBSTtZQUFFQyxVQUFVO1lBQUdiLFdBQVc7UUFBUzs7MEJBQ3ZDLDhEQUFDYzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDeEIsMkRBQUlBO2dCQUFDeUIsU0FBUztnQkFBQ2hCLFNBQVM7b0JBQUVpQixJQUFJO29CQUFHQyxJQUFJO2dCQUFFO2dCQUFHQyxTQUFTO29CQUFFRixJQUFJO29CQUFHRyxJQUFJO29CQUFHRixJQUFJO2dCQUFHOzBCQUUxRVosT0FBT2UsR0FBRyxDQUFDLENBQUNDLHNCQUViLDhEQUFDL0IsMkRBQUlBO3dCQUFDZ0MsSUFBSTt3QkFBQ04sSUFBSTt3QkFBSUcsSUFBSTt3QkFBSUYsSUFBSTs7MENBRS9CLDhEQUFDMUI7O2tEQUNFLDhEQUFDZ0M7OzRDQUFFOzRDQUFPRixNQUFNRyxJQUFJOzs7Ozs7O2tEQUNwQiw4REFBQ0Q7OzRDQUFFOzRDQUFRRixNQUFNSSxLQUFLOzs7Ozs7O2tEQUN0Qiw4REFBQ0Y7OzRDQUFFOzRDQUFRRixNQUFNSyxLQUFLOzs7Ozs7Ozs7Ozs7OzRCQUNmOzt1QkFONkJ0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQWF4QztBQUVKLGlFQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfbmV3X3Byb2ovLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7IFxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7IGltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJzsgXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnOyBcblxuY29uc3QgSXRlbSA9IHN0eWxlZChQYXBlcikoKHsgdGhlbWUgfSkgPT4gKHsgXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCIjMUEyMDI3XCIgOiBcIiNmZmZcIiwgLi4udGhlbWUudHlwb2dyYXBoeS5ib2R5MiwgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSwgfSkpOyBmdW5jdGlvbiBpbmRleCgpIHsgY29uc3QgW2FsdW5vcywgc2V0QWx1bm9zXSA9IHVzZVN0YXRlKFtdKTsgXG4gICAgICAgIC8vSlNPTiByZXByZXNlbnRhdGlvbiBbe25vbWU6ICdKb8OjbycsIGVtYWlsOiAnZHljamhAZXhhbXBsZS5jb20nfSwgXG4gICAgICAgIC8vIHsgbm9tZTogJ01hcmlhJywgZW1haWw6ICdkeWNqaEBleGFtcGxlLmNvbScgfV0gXG4gICAgICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7ZnVuY2FvfSwgW2NvbnRyb2xlXSkgXG4gICAgICAgIC8vIGZ1bmN0aW9uIG5vbWVkYUZ1bmNhbygpe2NvcnBvIGRhIGZ1bmNhb30gXG4gICAgICAgIFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBhc3luYyBmdW5jdGlvbiBidXNjYXJBbHVub3MoKSB7IFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIiApOyBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IHNldEFsdW5vcyhkYXRhKTsgfSBidXNjYXJBbHVub3MoKTsgfSwgW10pOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICA8aDI+QWx1bm9zIE1hdHJpY3VsYWRvczwvaDI+IFxuICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogNCwgc206IDgsIG1kOiAxMiB9fSA+IFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAge2FsdW5vcy5tYXAoKGFsdW5vKSA9PiAoIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGtleT17aW5kZXh9PiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxJdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm9tZToge2FsdW5vLm5hbWV9PC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPHA+RW1haWw6IHthbHVuby5lbWFpbH08L3A+IFxuICAgICAgICAgICAgICAgICAgICA8cD5QaG9uZToge2FsdW5vLnBob25lfTwvcD4gXG4gICAgICAgICAgICAgICAgICAgIDwvSXRlbT4gPC9HcmlkPiApKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PiApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXhwZXJpbWVudGFsU3R5bGVkIiwic3R5bGVkIiwiQm94IiwiUGFwZXIiLCJHcmlkIiwiSXRlbSIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1vZGUiLCJ0eXBvZ3JhcGh5IiwiYm9keTIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwidGV4dCIsInNlY29uZGFyeSIsImluZGV4IiwiYWx1bm9zIiwic2V0QWx1bm9zIiwiYnVzY2FyQWx1bm9zIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3giLCJmbGV4R3JvdyIsImgyIiwiY29udGFpbmVyIiwieHMiLCJtZCIsImNvbHVtbnMiLCJzbSIsIm1hcCIsImFsdW5vIiwiaXRlbSIsInAiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

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