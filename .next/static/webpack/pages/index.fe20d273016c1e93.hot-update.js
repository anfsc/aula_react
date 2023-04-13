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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((param)=>{\n    let { theme  } = param;\n    return {\n        backgroundColor: theme.palette.mode === \"dark\" ? \"#1A2027\" : \"#fff\",\n        ...theme.typography.body2,\n        padding: theme.spacing(2),\n        textAlign: \"center\",\n        color: theme.palette.text.secondary\n    };\n});\n_c = Item;\nfunction index() {\n    _s();\n    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //JSON representation [{nome: 'João', email: 'dycjh@example.com'}, \n    // { nome: 'Maria', email: 'dycjh@example.com' }] \n    // useEffect(() => {funcao}, [controle]) \n    // function nomedaFuncao(){corpo da funcao} \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function buscarAlunos() {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n            const data = await response.json();\n            setAlunos(data);\n        }\n        buscarAlunos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            flexGrow: 1,\n            textAlign: \"center\"\n        },\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Alunos Matriculados\"\n            }, void 0, false, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 61\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                container: true,\n                spacing: {\n                    xs: 2,\n                    md: 3\n                },\n                columns: {\n                    xs: 4,\n                    sm: 8,\n                    md: 12\n                },\n                children: [\n                    \" \",\n                    alunos.map((aluno)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Nome: \",\n                                                aluno.name,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                            lineNumber: 18,\n                                            columnNumber: 247\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Email: \",\n                                                aluno.email\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                            lineNumber: 18,\n                                            columnNumber: 274\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Phone: \",\n                                                aluno.phone\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                            lineNumber: 18,\n                                            columnNumber: 302\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 240\n                                }, this),\n                                \" \"\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 195\n                        }, this)),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 90\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anacarvalho/Documents/Aula_React 4.1/src/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 13\n    }, this);\n}\n_s(index, \"y3tByBriwbX0SzX1/QwMjkrnHJs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDaUI7QUFDaEM7QUFBeUM7QUFDdkM7QUFFdEMsTUFBTVEsT0FBT0osd0VBQU1BLENBQUNFLDJEQUFLQSxFQUFFLFNBQWdCO1FBQWYsRUFBRUcsTUFBSyxFQUFFO1dBQU07UUFDdkNDLGlCQUFpQkQsTUFBTUUsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZLE1BQU07UUFBRSxHQUFHSCxNQUFNSSxVQUFVLENBQUNDLEtBQUs7UUFBRUMsU0FBU04sTUFBTU8sT0FBTyxDQUFDO1FBQUlDLFdBQVc7UUFBVUMsT0FBT1QsTUFBTUUsT0FBTyxDQUFDUSxJQUFJLENBQUNDLFNBQVM7SUFBRTtBQUFBO0tBRG5MWjtBQUN3TCxTQUFTYSxRQUFROztJQUFFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUNoUCxtRUFBbUU7SUFDbkUsa0RBQWtEO0lBQ2xELHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFFNUNELGdEQUFTQSxDQUFDLElBQU07UUFBRSxlQUFldUIsZUFBZTtZQUM1QyxNQUFNQyxXQUFXLE1BQU1DLE1BQU87WUFDOUIsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQUlMLFVBQVVJO1FBQU87UUFBRUg7SUFBZ0IsR0FBRyxFQUFFO0lBRTVFLHFCQUNBLDhEQUFDbkIseURBQUdBO1FBQUN3QixJQUFJO1lBQUVDLFVBQVU7WUFBR2IsV0FBVztRQUFTOztZQUFHOzBCQUFDLDhEQUFDYzswQkFBRzs7Ozs7O1lBQXdCOzBCQUFDLDhEQUFDeEIsMERBQUlBO2dCQUFDeUIsU0FBUztnQkFBQ2hCLFNBQVM7b0JBQUVpQixJQUFJO29CQUFHQyxJQUFJO2dCQUFFO2dCQUFHQyxTQUFTO29CQUFFRixJQUFJO29CQUFHRyxJQUFJO29CQUFHRixJQUFJO2dCQUFHOztvQkFBSTtvQkFBRVosT0FBT2UsR0FBRyxDQUFDLENBQUNDLHNCQUFZLDhEQUFDL0IsMERBQUlBOzRCQUFDZ0MsSUFBSTs0QkFBQ04sSUFBSTs0QkFBR0csSUFBSTs0QkFBR0YsSUFBSTs7Z0NBQWU7OENBQUMsOERBQUMxQjs7d0NBQUs7c0RBQUMsOERBQUNnQzs7Z0RBQUU7Z0RBQU9GLE1BQU1HLElBQUk7Z0RBQUM7Ozs7Ozs7d0NBQUs7c0RBQUMsOERBQUNEOztnREFBRTtnREFBUUYsTUFBTUksS0FBSzs7Ozs7Ozt3Q0FBSztzREFBQyw4REFBQ0Y7O2dEQUFFO2dEQUFRRixNQUFNSyxLQUFLOzs7Ozs7O3dDQUFLOzs7Ozs7O2dDQUFROzsyQkFBekd0Qjs7Ozs7b0JBQXFIOzs7Ozs7O1lBQVE7Ozs7Ozs7QUFBVztHQVh4S0E7QUFhM0wsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXG5pbXBvcnQgeyBleHBlcmltZW50YWxTdHlsZWQgYXMgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnOyBcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnOyBpbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7IFxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJzsgXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQoUGFwZXIpKCh7IHRoZW1lIH0pID0+ICh7IFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIiA/IFwiIzFBMjAyN1wiIDogXCIjZmZmXCIsIC4uLnRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksIH0pKTsgZnVuY3Rpb24gaW5kZXgoKSB7IGNvbnN0IFthbHVub3MsIHNldEFsdW5vc10gPSB1c2VTdGF0ZShbXSk7IFxuICAgICAgICAvL0pTT04gcmVwcmVzZW50YXRpb24gW3tub21lOiAnSm/Do28nLCBlbWFpbDogJ2R5Y2poQGV4YW1wbGUuY29tJ30sIFxuICAgICAgICAvLyB7IG5vbWU6ICdNYXJpYScsIGVtYWlsOiAnZHljamhAZXhhbXBsZS5jb20nIH1dIFxuICAgICAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge2Z1bmNhb30sIFtjb250cm9sZV0pIFxuICAgICAgICAvLyBmdW5jdGlvbiBub21lZGFGdW5jYW8oKXtjb3JwbyBkYSBmdW5jYW99IFxuICAgICAgICBcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgYXN5bmMgZnVuY3Rpb24gYnVzY2FyQWx1bm9zKCkgeyBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIgKTsgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyBzZXRBbHVub3MoZGF0YSk7IH0gYnVzY2FyQWx1bm9zKCk7IH0sIFtdKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4gPGgyPkFsdW5vcyBNYXRyaWN1bGFkb3M8L2gyPiA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogNCwgc206IDgsIG1kOiAxMiB9fSA+IHthbHVub3MubWFwKChhbHVubykgPT4gKCA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9IGtleT17aW5kZXh9PiA8SXRlbT4gPHA+Tm9tZToge2FsdW5vLm5hbWV9IDwvcD4gPHA+RW1haWw6IHthbHVuby5lbWFpbH08L3A+IDxwPlBob25lOiB7YWx1bm8ucGhvbmV9PC9wPiA8L0l0ZW0+IDwvR3JpZD4gKSl9IDwvR3JpZD4gPC9Cb3g+ICk7IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJleHBlcmltZW50YWxTdHlsZWQiLCJzdHlsZWQiLCJCb3giLCJQYXBlciIsIkdyaWQiLCJJdGVtIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwibW9kZSIsInR5cG9ncmFwaHkiLCJib2R5MiIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiaW5kZXgiLCJhbHVub3MiLCJzZXRBbHVub3MiLCJidXNjYXJBbHVub3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzeCIsImZsZXhHcm93IiwiaDIiLCJjb250YWluZXIiLCJ4cyIsIm1kIiwiY29sdW1ucyIsInNtIiwibWFwIiwiYWx1bm8iLCJpdGVtIiwicCIsIm5hbWUiLCJlbWFpbCIsInBob25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});