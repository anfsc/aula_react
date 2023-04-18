"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((param)=>{\n    let { theme  } = param;\n    return {\n        backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n        ...theme.typography.body2,\n        padding: theme.spacing(2),\n        textAlign: \"center\",\n        color: theme.palette.text.secondary\n    };\n});\n_c = Item;\nfunction index() {\n    _s();\n    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //JSON representation [{nome: 'João', email: 'dycjh@example.com'}, \n    // { nome: 'Maria', email: 'dycjh@example.com' }] \n    // useEffect(() => {funcao}, [controle]) \n    // function nomedaFuncao(){corpo da funcao} \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function buscarAlunos() {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n            //Metódos HTTP psrs retornar dados - CRUD\n            //GET - recuperar dados\n            // Post - \n            const data = await response.json();\n            setAlunos(data);\n        }\n        buscarAlunos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            flexGrow: 1,\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Alunos Matriculados\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                container: true,\n                spacing: {\n                    xs: 2,\n                    md: 3\n                },\n                columns: {\n                    xs: 4,\n                    sm: 8,\n                    md: 12\n                },\n                children: alunos.map((aluno)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Nome: \",\n                                            aluno.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Email: \",\n                                            aluno.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Phone: \",\n                                            aluno.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 18\n                            }, this),\n                            \" \"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 18\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 13\n    }, this);\n}\n_s(index, \"y3tByBriwbX0SzX1/QwMjkrnHJs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDaUI7QUFDaEM7QUFBeUM7QUFDdkM7QUFFdEMsTUFBTVEsT0FBT0osd0VBQU1BLENBQUNFLDJEQUFLQSxFQUFFLFNBQWdCO1FBQWYsRUFBRUcsTUFBSyxFQUFFO1dBQU07UUFDdkNDLGlCQUFpQkQsTUFBTUUsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZLE1BQU07UUFBRSxHQUFHSCxNQUFNSSxVQUFVLENBQUNDLEtBQUs7UUFBRUMsU0FBU04sTUFBTU8sT0FBTyxDQUFDO1FBQUlDLFdBQVc7UUFBVUMsT0FBT1QsTUFBTUUsT0FBTyxDQUFDUSxJQUFJLENBQUNDLFNBQVM7SUFBRTtBQUFBO0tBRG5MWjtBQUN3TCxTQUFTYSxRQUFROztJQUFFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUNoUCxtRUFBbUU7SUFDbkUsa0RBQWtEO0lBQ2xELHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFFNUNELGdEQUFTQSxDQUFDLElBQU07UUFBRSxlQUFldUIsZUFBZTtZQUM1QyxNQUFNQyxXQUFXLE1BQU1DLE1BQU87WUFFOUIseUNBQXlDO1lBQ3pDLHVCQUF1QjtZQUN2QixVQUFVO1lBQ1YsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQUlMLFVBQVVJO1FBQU87UUFBRUg7SUFBZ0IsR0FBRyxFQUFFO0lBUTVFLHFCQUNBLDhEQUFDbkIseURBQUdBO1FBQUN3QixJQUFJO1lBQUVDLFVBQVU7WUFBR2IsV0FBVztRQUFTOzswQkFDdkMsOERBQUNjOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUN4QiwwREFBSUE7Z0JBQUN5QixTQUFTO2dCQUFDaEIsU0FBUztvQkFBRWlCLElBQUk7b0JBQUdDLElBQUk7Z0JBQUU7Z0JBQUdDLFNBQVM7b0JBQUVGLElBQUk7b0JBQUdHLElBQUk7b0JBQUdGLElBQUk7Z0JBQUc7MEJBRTFFWixPQUFPZSxHQUFHLENBQUMsQ0FBQ0Msc0JBRWIsOERBQUMvQiwwREFBSUE7d0JBQUNnQyxJQUFJO3dCQUFDTixJQUFJO3dCQUFJRyxJQUFJO3dCQUFJRixJQUFJOzswQ0FFL0IsOERBQUMxQjs7a0RBQ0UsOERBQUNnQzs7NENBQUU7NENBQU9GLE1BQU1HLElBQUk7Ozs7Ozs7a0RBQ3BCLDhEQUFDRDs7NENBQUU7NENBQVFGLE1BQU1JLEtBQUs7Ozs7Ozs7a0RBQ3RCLDhEQUFDRjs7NENBQUU7NENBQVFGLE1BQU1LLEtBQUs7Ozs7Ozs7Ozs7Ozs7NEJBQ2Y7O3VCQU42QnRCOzs7Ozs7Ozs7Ozs7Ozs7O0FBYXhDO0dBeEN1TEE7QUEwQzNMLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IFxuaW1wb3J0IHsgZXhwZXJpbWVudGFsU3R5bGVkIGFzIHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJzsgXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JzsgaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInOyBcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7IFxuXG5jb25zdCBJdGVtID0gc3R5bGVkKFBhcGVyKSgoeyB0aGVtZSB9KSA9PiAoeyBcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCIgPyBcIiMxQTIwMjdcIiA6IFwiI2ZmZlwiLCAuLi50aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LCB9KSk7IGZ1bmN0aW9uIGluZGV4KCkgeyBjb25zdCBbYWx1bm9zLCBzZXRBbHVub3NdID0gdXNlU3RhdGUoW10pOyBcbiAgICAgICAgLy9KU09OIHJlcHJlc2VudGF0aW9uIFt7bm9tZTogJ0pvw6NvJywgZW1haWw6ICdkeWNqaEBleGFtcGxlLmNvbSd9LCBcbiAgICAgICAgLy8geyBub21lOiAnTWFyaWEnLCBlbWFpbDogJ2R5Y2poQGV4YW1wbGUuY29tJyB9XSBcbiAgICAgICAgLy8gdXNlRWZmZWN0KCgpID0+IHtmdW5jYW99LCBbY29udHJvbGVdKSBcbiAgICAgICAgLy8gZnVuY3Rpb24gbm9tZWRhRnVuY2FvKCl7Y29ycG8gZGEgZnVuY2FvfSBcbiAgICAgICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IGFzeW5jIGZ1bmN0aW9uIGJ1c2NhckFsdW5vcygpIHsgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiICk7IFxuXG4gICAgICAgICAgICAvL01ldMOzZG9zIEhUVFAgcHNycyByZXRvcm5hciBkYWRvcyAtIENSVURcbiAgICAgICAgICAgIC8vR0VUIC0gcmVjdXBlcmFyIGRhZG9zXG4gICAgICAgICAgICAvLyBQb3N0IC0gXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyBzZXRBbHVub3MoZGF0YSk7IH0gYnVzY2FyQWx1bm9zKCk7IH0sIFtdKTsgXG4gICAgICAgICAgICBcblxuXG5cblxuXG5cbiAgICAgICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgPGgyPkFsdW5vcyBNYXRyaWN1bGFkb3M8L2gyPiBcbiAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19IGNvbHVtbnM9e3sgeHM6IDQsIHNtOiA4LCBtZDogMTIgfX0gPiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIHthbHVub3MubWFwKChhbHVubykgPT4gKCBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBrZXk9e2luZGV4fT4gXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vbWU6IHthbHVuby5uYW1lfTwvcD4gXG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7YWx1bm8uZW1haWx9PC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvbmU6IHthbHVuby5waG9uZX08L3A+IFxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+IDwvR3JpZD4gKSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0JveD4gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV4cGVyaW1lbnRhbFN0eWxlZCIsInN0eWxlZCIsIkJveCIsIlBhcGVyIiwiR3JpZCIsIkl0ZW0iLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJtb2RlIiwidHlwb2dyYXBoeSIsImJvZHkyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInRleHQiLCJzZWNvbmRhcnkiLCJpbmRleCIsImFsdW5vcyIsInNldEFsdW5vcyIsImJ1c2NhckFsdW5vcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN4IiwiZmxleEdyb3ciLCJoMiIsImNvbnRhaW5lciIsInhzIiwibWQiLCJjb2x1bW5zIiwic20iLCJtYXAiLCJhbHVubyIsIml0ZW0iLCJwIiwibmFtZSIsImVtYWlsIiwicGhvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});