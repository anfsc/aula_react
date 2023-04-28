"use strict";
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LF": () => (/* binding */ AlunosProvider),
/* harmony export */   "M8": () => (/* binding */ AlunosDispatchContext),
/* harmony export */   "wn": () => (/* binding */ AlunosContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AlunosContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AlunosDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AlunosProvider({ children  }) {
    const [alunos, setAlunos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function fetchTestemunho() {
            fetch("/api/testemunhos").then((response)=>response.json()).then((json)=>setAlunos(json));
        }
        fetchTestemunho();
    }, []);
    const dispatch = (newTestemunho)=>{
        setAlunos((prevTestemunhos)=>[
                ...prevTestemunhos,
                newTestemunho
            ]);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlunosContext.Provider, {
        value: alunos,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlunosDispatchContext.Provider, {
            value: dispatch,
            children: children
        })
    });
}



/***/ })

};
;