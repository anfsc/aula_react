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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _context_AlunosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AlunosContext */ \"./src/context/AlunosContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.experimentalStyled)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((param)=>{\n    let { theme  } = param;\n    return {\n        backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n        ...theme.typography.body2,\n        padding: theme.spacing(2),\n        textAlign: \"center\",\n        color: theme.palette.text.secondary\n    };\n});\n_c = Item;\nfunction index() {\n    _s();\n    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const alunos2 = useconte;\n    //JSON representation [{nome: 'João', email: 'dycjh@example.com'}, \n    // { nome: 'Maria', email: 'dycjh@example.com' }] \n    // useEffect(() => {funcao}, [controle]) \n    // function nomedaFuncao(){corpo da funcao} \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function buscarAlunos() {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n            //Metódos HTTP psrs retornar dados - CRUD\n            //GET - recuperar dados\n            //POST - criar dados\n            //PUT - atualizar dados\n            //DELETE - apagar dados\n            //REST API\n            //Microservice\n            const data = await response.json();\n            setAlunos(data);\n        }\n        buscarAlunos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            flexGrow: 1,\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Alunos Matriculados\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                container: true,\n                spacing: {\n                    xs: 2,\n                    md: 3\n                },\n                columns: {\n                    xs: 4,\n                    sm: 8,\n                    md: 12\n                },\n                children: alunos.map((aluno)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Nome: \",\n                                            aluno.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Email: \",\n                                            aluno.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Phone: \",\n                                            aluno.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 18\n                            }, this),\n                            \" \"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 18\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n        lineNumber: 44,\n        columnNumber: 13\n    }, this);\n}\n_s(index, \"y3tByBriwbX0SzX1/QwMjkrnHJs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2lCO0FBQ2hDO0FBQXlDO0FBQ3ZDO0FBQ2tCO0FBRXhELE1BQU1TLE9BQU9MLHdFQUFNQSxDQUFDRSwyREFBS0EsRUFBRSxTQUFnQjtRQUFmLEVBQUVJLE1BQUssRUFBRTtXQUFNO1FBQ3ZDQyxpQkFBaUJELE1BQU1FLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsWUFBWSxNQUFNO1FBQUUsR0FBR0gsTUFBTUksVUFBVSxDQUFDQyxLQUFLO1FBQUVDLFNBQVNOLE1BQU1PLE9BQU8sQ0FBQztRQUFJQyxXQUFXO1FBQVVDLE9BQU9ULE1BQU1FLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDQyxTQUFTO0lBQUU7QUFBQTtLQURuTFo7QUFHRixTQUFTYSxRQUNUOztJQUFFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHdEIsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNdUIsVUFBVUM7SUFDaEIsbUVBQW1FO0lBQ25FLGtEQUFrRDtJQUNsRCx5Q0FBeUM7SUFDekMsNENBQTRDO0lBRTVDekIsZ0RBQVNBLENBQUMsSUFBTTtRQUFFLGVBQWUwQixlQUFlO1lBQzVDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTztZQUU5Qix5Q0FBeUM7WUFDekMsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBRXZCLFVBQVU7WUFDVixjQUFjO1lBTWQsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDUCxVQUFVTTtRQUFPO1FBQUVIO0lBQWdCLEdBQUcsRUFBRTtJQVF4QyxxQkFDQSw4REFBQ3RCLHlEQUFHQTtRQUFDMkIsSUFBSTtZQUFFQyxVQUFVO1lBQUdmLFdBQVc7UUFBUzs7MEJBQ3ZDLDhEQUFDZ0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQzNCLDBEQUFJQTtnQkFBQzRCLFNBQVM7Z0JBQUNsQixTQUFTO29CQUFFbUIsSUFBSTtvQkFBR0MsSUFBSTtnQkFBRTtnQkFBR0MsU0FBUztvQkFBRUYsSUFBSTtvQkFBR0csSUFBSTtvQkFBR0YsSUFBSTtnQkFBRzswQkFFMUVkLE9BQU9pQixHQUFHLENBQUMsQ0FBQ0Msc0JBRWIsOERBQUNsQywwREFBSUE7d0JBQUNtQyxJQUFJO3dCQUFDTixJQUFJO3dCQUFJRyxJQUFJO3dCQUFJRixJQUFJOzswQ0FFL0IsOERBQUM1Qjs7a0RBQ0UsOERBQUNrQzs7NENBQUU7NENBQU9GLE1BQU1HLElBQUk7Ozs7Ozs7a0RBQ3BCLDhEQUFDRDs7NENBQUU7NENBQVFGLE1BQU1JLEtBQUs7Ozs7Ozs7a0RBQ3RCLDhEQUFDRjs7NENBQUU7NENBQVFGLE1BQU1LLEtBQUs7Ozs7Ozs7Ozs7Ozs7NEJBQ2Y7O3VCQU42QnhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBYXhDO0dBckRIQTtBQXVERCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7IFxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7IGltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJzsgXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnOyBcbmltcG9ydCB7IEFsdW5vc0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9BbHVub3NDb250ZXh0XCJcblxuY29uc3QgSXRlbSA9IHN0eWxlZChQYXBlcikoKHsgdGhlbWUgfSkgPT4gKHsgXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCIjMUEyMDI3XCIgOiBcIiNmZmZcIiwgLi4udGhlbWUudHlwb2dyYXBoeS5ib2R5MiwgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSwgfSkpOyBcbiAgICBcbiAgICBmdW5jdGlvbiBpbmRleCgpIFxuICAgIHsgY29uc3QgW2FsdW5vcywgc2V0QWx1bm9zXSA9IHVzZVN0YXRlKFtdKTsgXG4gICAgICAgIGNvbnN0IGFsdW5vczIgPSB1c2Vjb250ZVxuICAgICAgICAvL0pTT04gcmVwcmVzZW50YXRpb24gW3tub21lOiAnSm/Do28nLCBlbWFpbDogJ2R5Y2poQGV4YW1wbGUuY29tJ30sIFxuICAgICAgICAvLyB7IG5vbWU6ICdNYXJpYScsIGVtYWlsOiAnZHljamhAZXhhbXBsZS5jb20nIH1dIFxuICAgICAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge2Z1bmNhb30sIFtjb250cm9sZV0pIFxuICAgICAgICAvLyBmdW5jdGlvbiBub21lZGFGdW5jYW8oKXtjb3JwbyBkYSBmdW5jYW99IFxuICAgICAgICBcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgYXN5bmMgZnVuY3Rpb24gYnVzY2FyQWx1bm9zKCkgeyBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIgKTsgXG5cbiAgICAgICAgICAgIC8vTWV0w7Nkb3MgSFRUUCBwc3JzIHJldG9ybmFyIGRhZG9zIC0gQ1JVRFxuICAgICAgICAgICAgLy9HRVQgLSByZWN1cGVyYXIgZGFkb3NcbiAgICAgICAgICAgIC8vUE9TVCAtIGNyaWFyIGRhZG9zXG4gICAgICAgICAgICAvL1BVVCAtIGF0dWFsaXphciBkYWRvc1xuICAgICAgICAgICAgLy9ERUxFVEUgLSBhcGFnYXIgZGFkb3NcblxuICAgICAgICAgICAgLy9SRVNUIEFQSVxuICAgICAgICAgICAgLy9NaWNyb3NlcnZpY2VcblxuXG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyBcbiAgICAgICAgICAgIHNldEFsdW5vcyhkYXRhKTsgfSBidXNjYXJBbHVub3MoKTsgfSwgW10pOyBcbiAgICAgICAgICAgIFxuXG5cblxuXG5cblxuICAgICAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICA8aDI+QWx1bm9zIE1hdHJpY3VsYWRvczwvaDI+IFxuICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogNCwgc206IDgsIG1kOiAxMiB9fSA+IFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAge2FsdW5vcy5tYXAoKGFsdW5vKSA9PiAoIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGtleT17aW5kZXh9PiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxJdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm9tZToge2FsdW5vLm5hbWV9PC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPHA+RW1haWw6IHthbHVuby5lbWFpbH08L3A+IFxuICAgICAgICAgICAgICAgICAgICA8cD5QaG9uZToge2FsdW5vLnBob25lfTwvcD4gXG4gICAgICAgICAgICAgICAgICAgIDwvSXRlbT4gPC9HcmlkPiApKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PiApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXhwZXJpbWVudGFsU3R5bGVkIiwic3R5bGVkIiwiQm94IiwiUGFwZXIiLCJHcmlkIiwiQWx1bm9zQ29udGV4dCIsIkl0ZW0iLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJtb2RlIiwidHlwb2dyYXBoeSIsImJvZHkyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInRleHQiLCJzZWNvbmRhcnkiLCJpbmRleCIsImFsdW5vcyIsInNldEFsdW5vcyIsImFsdW5vczIiLCJ1c2Vjb250ZSIsImJ1c2NhckFsdW5vcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN4IiwiZmxleEdyb3ciLCJoMiIsImNvbnRhaW5lciIsInhzIiwibWQiLCJjb2x1bW5zIiwic20iLCJtYXAiLCJhbHVubyIsIml0ZW0iLCJwIiwibmFtZSIsImVtYWlsIiwicGhvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});