"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/testemunhos",{

/***/ "./src/pages/testemunhos.js":
/*!**********************************!*\
  !*** ./src/pages/testemunhos.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction testemunhos() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // dados dos testemunhos\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function fetchTestemunho() {\n            fetch().then((response)=>response.json()).then((json)=>setData(json));\n        }\n        fetchTestemunho();\n    }, []);\n    return data.map((testemunhos, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \"Aluno:\",\n                        testemunhos.userId\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 25,\n                    columnNumber: 75\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \" Title:\",\n                        testemunhos.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 26,\n                    columnNumber: 75\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \"Body:\",\n                        testemunhos.body,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 27,\n                    columnNumber: 72\n                }, this)\n            ]\n        }, void 0, true);\n    });\n}\n_s(testemunhos, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (testemunhos);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdGVtdW5ob3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRDtBQUduRCxTQUFTRyxjQUFjOztJQUVuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUMsRUFBRSxHQUFFLHdCQUF3QjtJQUU3REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLFNBQVVLLGtCQUFpQjtZQUN2QkMsUUFDUEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNFLENBQUFBLE9BQVFMLFFBQVFLO1FBQ2xCO1FBRUFKO0lBRUosR0FBRyxFQUFFO0lBR0wsT0FDSUYsS0FBS08sR0FBRyxDQUFDLENBQUNSLGFBQWFTLFFBQVM7UUFDNUIscUJBRUk7OzhCQUNBLDhEQUFDQztvQkFBRUMsT0FBTzt3QkFBQ0MsT0FBTTtvQkFBTzs7d0JBQUc7d0JBQU9aLFlBQVlhLE1BQU07Ozs7Ozs7Z0JBQUs7OEJBQUMsOERBQUNDOzs7Ozs4QkFDM0QsOERBQUNKO29CQUFFQyxPQUFPO3dCQUFDQyxPQUFNO29CQUFPOzt3QkFBRzt3QkFBUVosWUFBWWUsS0FBSzs7Ozs7OztnQkFBSzs4QkFBQyw4REFBQ0Q7Ozs7OzhCQUMzRCw4REFBQ0o7b0JBQUVDLE9BQU87d0JBQUNDLE9BQU07b0JBQU87O3dCQUFHO3dCQUFNWixZQUFZZ0IsSUFBSTt3QkFBQzs7Ozs7Ozs4QkFBSyw4REFBQ0Y7Ozs7Ozs7SUFPaEU7QUFHUjtHQWpDU2Q7QUFvQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3RlbXVuaG9zLmpzP2JjYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXG5cblxuZnVuY3Rpb24gdGVzdGVtdW5ob3MoKSB7XG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7Ly8gZGFkb3MgZG9zIHRlc3RlbXVuaG9zXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICAgICAgZnVuY3Rpb24gIGZldGNoVGVzdGVtdW5obygpe1xuICAgICAgICAgICAgZmV0Y2goKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHNldERhdGEoanNvbikpXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFRlc3RlbXVuaG8oKTtcblxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIGRhdGEubWFwKCh0ZXN0ZW11bmhvcywgaW5kZXgpPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkFsdW5vOnt0ZXN0ZW11bmhvcy51c2VySWR9PC9wPiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PiBUaXRsZTp7dGVzdGVtdW5ob3MudGl0bGV9PC9wPiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PkJvZHk6e3Rlc3RlbXVuaG9zLmJvZHl9IDwvcD48YnIgLz5cblxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICApXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0ZW11bmhvczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRlc3RlbXVuaG9zIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaFRlc3RlbXVuaG8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJtYXAiLCJpbmRleCIsInAiLCJzdHlsZSIsImNvbG9yIiwidXNlcklkIiwiYnIiLCJ0aXRsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/testemunhos.js\n"));

/***/ })

});