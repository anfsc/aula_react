"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./componentes/layout/NavBar.js":
/*!**************************************!*\
  !*** ./componentes/layout/NavBar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction NavBar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = (url)=>{\n        router.push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"layout-navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: ()=>handleClick(\"/sobreOCurso\"),\n                children: \"Sobre o Curso\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/componentes/layout/NavBar.js\",\n                lineNumber: 15,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: ()=>handleClick(\"/horarios\"),\n                children: \"Hor\\xe1rios\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/componentes/layout/NavBar.js\",\n                lineNumber: 16,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: ()=>handleClick(\"/ondeEstamos\"),\n                children: \"Onde Estamos\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/componentes/layout/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: ()=>handleClick(\"/teste\"),\n                children: \"Onde Estamos\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/componentes/layout/NavBar.js\",\n                lineNumber: 18,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/componentes/layout/NavBar.js\",\n        lineNumber: 13,\n        columnNumber: 1\n    }, this);\n}\n_s(NavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRlcy9sYXlvdXQvTmF2QmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUNlO0FBRXhDLFNBQVNFLFNBQVM7O0lBQ2xCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxjQUFjLENBQUNDLE1BQVE7UUFDN0JGLE9BQU9HLElBQUksQ0FBQ0Q7SUFFWjtJQUVBLHFCQUNBLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFFZiw4REFBQ0M7Z0JBQUVDLFNBQVMsSUFBTU4sWUFBWTswQkFBaUI7Ozs7OzswQkFDL0MsOERBQUNLO2dCQUFFQyxTQUFTLElBQU1OLFlBQVk7MEJBQWM7Ozs7OzswQkFDNUMsOERBQUNLO2dCQUFFQyxTQUFTLElBQU1OLFlBQVk7MEJBQWlCOzs7Ozs7MEJBQy9DLDhEQUFDSztnQkFBRUMsU0FBUyxJQUFNTixZQUFZOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFLekM7R0FuQlNGOztRQUNNRCxrREFBU0E7OztLQURmQztBQXFCVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRlcy9sYXlvdXQvTmF2QmFyLmpzP2U5ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIE5hdkJhcigpIHtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBoYW5kbGVDbGljayA9ICh1cmwpID0+IHtcbnJvdXRlci5wdXNoKHVybCk7XG5cbn07XG5cbnJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cImxheW91dC1uYXZiYXJcIj5cblxuPHAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCIvc29icmVPQ3Vyc29cIil9PlNvYnJlIG8gQ3Vyc288L3A+XG48cCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIi9ob3Jhcmlvc1wiKX0+SG9yw6FyaW9zPC9wPlxuPHAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCIvb25kZUVzdGFtb3NcIil9Pk9uZGUgRXN0YW1vczwvcD5cbjxwIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiL3Rlc3RlXCIpfT5PbmRlIEVzdGFtb3M8L3A+XG5cbjwvZGl2PlxuICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIk5hdkJhciIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwidXJsIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componentes/layout/NavBar.js\n"));

/***/ })

});