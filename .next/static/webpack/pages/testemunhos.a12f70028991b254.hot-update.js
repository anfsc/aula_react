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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction testemunhos() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // dados dos testemunhos\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function fetchTestemunho() {\n            fetch(\"https://jsonplaceholder.typicode.com/posts\").then((response)=>response.json()).then((json)=>setData(json));\n        }\n        fetchTestemunho();\n    }, []);\n    return data.map((testemunhos, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        \"Aluno:\",\n                        testemunhos.userId\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 25,\n                    columnNumber: 75\n                }, this),\n                \"Title:\",\n                testemunhos.title,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 26,\n                    columnNumber: 43\n                }, this),\n                \"Body:\",\n                testemunhos.body,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/testemunhos.js\",\n                    lineNumber: 27,\n                    columnNumber: 41\n                }, this)\n            ]\n        }, void 0, true);\n    });\n}\n_s(testemunhos, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (testemunhos);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdGVtdW5ob3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRDtBQUduRCxTQUFTRyxjQUFjOztJQUVuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUMsRUFBRSxHQUFFLHdCQUF3QjtJQUU3REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLFNBQVVLLGtCQUFpQjtZQUN2QkMsTUFBTSw4Q0FDYkMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNFLENBQUFBLE9BQVFMLFFBQVFLO1FBQ2xCO1FBRUFKO0lBRUosR0FBRyxFQUFFO0lBR0wsT0FDSUYsS0FBS08sR0FBRyxDQUFDLENBQUNSLGFBQWFTLFFBQVM7UUFDNUIscUJBRUk7OzhCQUNBLDhEQUFDQztvQkFBRUMsT0FBTzt3QkFBQ0MsT0FBTTtvQkFBTzs7d0JBQUc7d0JBQU9aLFlBQVlhLE1BQU07Ozs7Ozs7Z0JBQUs7OEJBQUMsOERBQUNDOzs7OztnQkFBSztnQkFDekRkLFlBQVllLEtBQUs7Z0JBQUM7OEJBQUMsOERBQUNEOzs7OztnQkFBSztnQkFDMUJkLFlBQVlnQixJQUFJO2dCQUFDOzhCQUFDLDhEQUFDRjs7Ozs7OztJQU9qQztBQUdSO0dBakNTZDtBQW9DVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGVzdGVtdW5ob3MuanM/YmNiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyBcblxuXG5mdW5jdGlvbiB0ZXN0ZW11bmhvcygpIHtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTsvLyBkYWRvcyBkb3MgdGVzdGVtdW5ob3NcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxuICAgICAgICBmdW5jdGlvbiAgZmV0Y2hUZXN0ZW11bmhvKCl7XG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hUZXN0ZW11bmhvKCk7XG5cbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICBkYXRhLm1hcCgodGVzdGVtdW5ob3MsIGluZGV4KT0+IHtcbiAgICAgICAgICAgIHJldHVybihcblxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5BbHVubzp7dGVzdGVtdW5ob3MudXNlcklkfTwvcD4gPGJyIC8+XG4gICAgICAgICAgICAgICAgVGl0bGU6e3Rlc3RlbXVuaG9zLnRpdGxlfSA8YnIgLz5cbiAgICAgICAgICAgICAgICBCb2R5Ont0ZXN0ZW11bmhvcy5ib2R5fSA8YnIgLz5cblxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICApXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB0ZXN0ZW11bmhvczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRlc3RlbXVuaG9zIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaFRlc3RlbXVuaG8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJtYXAiLCJpbmRleCIsInAiLCJzdHlsZSIsImNvbG9yIiwidXNlcklkIiwiYnIiLCJ0aXRsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/testemunhos.js\n"));

/***/ })

});