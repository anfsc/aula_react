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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _context_AlunosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AlunosContext */ \"./src/context/AlunosContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.experimentalStyled)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((param)=>{\n    let { theme  } = param;\n    return {\n        backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n        ...theme.typography.body2,\n        padding: theme.spacing(2),\n        textAlign: \"center\",\n        color: theme.palette.text.secondary\n    };\n});\n_c = Item;\nfunction index() {\n    _s();\n    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const alunos2 = useContext(_context_AlunosContext__WEBPACK_IMPORTED_MODULE_2__.AlunosContext);\n    //JSON representation [{nome: 'João', email: 'dycjh@example.com'}, \n    // { nome: 'Maria', email: 'dycjh@example.com' }] \n    // useEffect(() => {funcao}, [controle]) \n    // function nomedaFuncao(){corpo da funcao} \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function buscarAlunos() {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n            //Metódos HTTP psrs retornar dados - CRUD\n            //GET - recuperar dados\n            //POST - criar dados\n            //PUT - atualizar dados\n            //DELETE - apagar dados\n            //REST API\n            //Microservice\n            const data = await response.json();\n            setAlunos(data);\n        }\n        buscarAlunos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            flexGrow: 1,\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Alunos Matriculados\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                container: true,\n                spacing: {\n                    xs: 2,\n                    md: 3\n                },\n                columns: {\n                    xs: 4,\n                    sm: 8,\n                    md: 12\n                },\n                children: alunos.map((aluno)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Nome: \",\n                                            aluno.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Email: \",\n                                            aluno.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Phone: \",\n                                            aluno.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 18\n                            }, this),\n                            \" \"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 18\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 13\n    }, this);\n}\n_s(index, \"0pq+XNjiXRp5SFAyMGsv3HoCUM4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2lCO0FBQ2hDO0FBQXlDO0FBQ3ZDO0FBQ2tCO0FBRXhELE1BQU1TLE9BQU9MLHdFQUFNQSxDQUFDRSwyREFBS0EsRUFBRSxTQUFnQjtRQUFmLEVBQUVJLE1BQUssRUFBRTtXQUFNO1FBQ3ZDQyxpQkFBaUJELE1BQU1FLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsWUFBWSxNQUFNO1FBQUUsR0FBR0gsTUFBTUksVUFBVSxDQUFDQyxLQUFLO1FBQUVDLFNBQVNOLE1BQU1PLE9BQU8sQ0FBQztRQUFJQyxXQUFXO1FBQVVDLE9BQU9ULE1BQU1FLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDQyxTQUFTO0lBQUU7QUFBQTtLQURuTFo7QUFHRixTQUFTYSxRQUNUOztJQUFFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHdEIsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNdUIsVUFBVUMsV0FBV2xCLGlFQUFhQTtJQUN4QyxtRUFBbUU7SUFDbkUsa0RBQWtEO0lBQ2xELHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFFNUNQLGdEQUFTQSxDQUFDLElBQ1Y7UUFBRSxlQUFlMEIsZUFBZTtZQUM1QixNQUFNQyxXQUFXLE1BQU1DLE1BQU87WUFFOUIseUNBQXlDO1lBQ3pDLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUV2QixVQUFVO1lBQ1YsY0FBYztZQU1kLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1AsVUFBVU07UUFBTztRQUFFSDtJQUFnQixHQUFHLEVBQUU7SUFReEMscUJBQ0EsOERBQUN0Qix5REFBR0E7UUFBQzJCLElBQUk7WUFBRUMsVUFBVTtZQUFHZixXQUFXO1FBQVM7OzBCQUN2Qyw4REFBQ2dCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUMzQiwwREFBSUE7Z0JBQUM0QixTQUFTO2dCQUFDbEIsU0FBUztvQkFBRW1CLElBQUk7b0JBQUdDLElBQUk7Z0JBQUU7Z0JBQUdDLFNBQVM7b0JBQUVGLElBQUk7b0JBQUdHLElBQUk7b0JBQUdGLElBQUk7Z0JBQUc7MEJBRTFFZCxPQUFPaUIsR0FBRyxDQUFDLENBQUNDLHNCQUViLDhEQUFDbEMsMERBQUlBO3dCQUFDbUMsSUFBSTt3QkFBQ04sSUFBSTt3QkFBSUcsSUFBSTt3QkFBSUYsSUFBSTs7MENBRS9CLDhEQUFDNUI7O2tEQUNFLDhEQUFDa0M7OzRDQUFFOzRDQUFPRixNQUFNRyxJQUFJOzs7Ozs7O2tEQUNwQiw4REFBQ0Q7OzRDQUFFOzRDQUFRRixNQUFNSSxLQUFLOzs7Ozs7O2tEQUN0Qiw4REFBQ0Y7OzRDQUFFOzRDQUFRRixNQUFNSyxLQUFLOzs7Ozs7Ozs7Ozs7OzRCQUNmOzt1QkFONkJ4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQWF4QztHQXRESEE7QUF3REQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXG5pbXBvcnQgeyBleHBlcmltZW50YWxTdHlsZWQgYXMgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnOyBcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnOyBpbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7IFxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJzsgXG5pbXBvcnQgeyBBbHVub3NDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvQWx1bm9zQ29udGV4dFwiXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQoUGFwZXIpKCh7IHRoZW1lIH0pID0+ICh7IFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIiA/IFwiIzFBMjAyN1wiIDogXCIjZmZmXCIsIC4uLnRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksIH0pKTsgXG4gICAgXG4gICAgZnVuY3Rpb24gaW5kZXgoKSBcbiAgICB7IGNvbnN0IFthbHVub3MsIHNldEFsdW5vc10gPSB1c2VTdGF0ZShbXSk7IFxuICAgICAgICBjb25zdCBhbHVub3MyID0gdXNlQ29udGV4dChBbHVub3NDb250ZXh0KTtcbiAgICAgICAgLy9KU09OIHJlcHJlc2VudGF0aW9uIFt7bm9tZTogJ0pvw6NvJywgZW1haWw6ICdkeWNqaEBleGFtcGxlLmNvbSd9LCBcbiAgICAgICAgLy8geyBub21lOiAnTWFyaWEnLCBlbWFpbDogJ2R5Y2poQGV4YW1wbGUuY29tJyB9XSBcbiAgICAgICAgLy8gdXNlRWZmZWN0KCgpID0+IHtmdW5jYW99LCBbY29udHJvbGVdKSBcbiAgICAgICAgLy8gZnVuY3Rpb24gbm9tZWRhRnVuY2FvKCl7Y29ycG8gZGEgZnVuY2FvfSBcbiAgICAgICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiBcbiAgICAgICAgeyBhc3luYyBmdW5jdGlvbiBidXNjYXJBbHVub3MoKSB7IFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIiApOyBcblxuICAgICAgICAgICAgLy9NZXTDs2RvcyBIVFRQIHBzcnMgcmV0b3JuYXIgZGFkb3MgLSBDUlVEXG4gICAgICAgICAgICAvL0dFVCAtIHJlY3VwZXJhciBkYWRvc1xuICAgICAgICAgICAgLy9QT1NUIC0gY3JpYXIgZGFkb3NcbiAgICAgICAgICAgIC8vUFVUIC0gYXR1YWxpemFyIGRhZG9zXG4gICAgICAgICAgICAvL0RFTEVURSAtIGFwYWdhciBkYWRvc1xuXG4gICAgICAgICAgICAvL1JFU1QgQVBJXG4gICAgICAgICAgICAvL01pY3Jvc2VydmljZVxuXG5cblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuICAgICAgICAgICAgc2V0QWx1bm9zKGRhdGEpOyB9IGJ1c2NhckFsdW5vcygpOyB9LCBbXSk7IFxuICAgICAgICAgICAgXG5cblxuXG5cblxuXG4gICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgIDxoMj5BbHVub3MgTWF0cmljdWxhZG9zPC9oMj4gXG4gICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fSBjb2x1bW5zPXt7IHhzOiA0LCBzbTogOCwgbWQ6IDEyIH19ID4gXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB7YWx1bm9zLm1hcCgoYWx1bm8pID0+ICggXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0ga2V5PXtpbmRleH0+IFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICA8cD5Ob21lOiB7YWx1bm8ubmFtZX08L3A+IFxuICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDoge2FsdW5vLmVtYWlsfTwvcD4gXG4gICAgICAgICAgICAgICAgICAgIDxwPlBob25lOiB7YWx1bm8ucGhvbmV9PC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtPiA8L0dyaWQ+ICkpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+ICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJleHBlcmltZW50YWxTdHlsZWQiLCJzdHlsZWQiLCJCb3giLCJQYXBlciIsIkdyaWQiLCJBbHVub3NDb250ZXh0IiwiSXRlbSIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1vZGUiLCJ0eXBvZ3JhcGh5IiwiYm9keTIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwidGV4dCIsInNlY29uZGFyeSIsImluZGV4IiwiYWx1bm9zIiwic2V0QWx1bm9zIiwiYWx1bm9zMiIsInVzZUNvbnRleHQiLCJidXNjYXJBbHVub3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzeCIsImZsZXhHcm93IiwiaDIiLCJjb250YWluZXIiLCJ4cyIsIm1kIiwiY29sdW1ucyIsInNtIiwibWFwIiwiYWx1bm8iLCJpdGVtIiwicCIsIm5hbWUiLCJlbWFpbCIsInBob25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});