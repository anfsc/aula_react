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
exports.id = "pages/api/testemunhos";
exports.ids = ["pages/api/testemunhos"];
exports.modules = {

/***/ "(api)/./src/pages/api/testemunhos.ts":
/*!**************************************!*\
  !*** ./src/pages/api/testemunhos.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    if (req.method == \"GET\") {\n        return res.status(200).json([\n            {\n                aluno: \"Jo\\xe3o\",\n                title: \"CursoABC\",\n                description: \"this is a test\"\n            },\n            {\n                aluno: \"Jo\\xe3o\",\n                title: \"CursoBGT\",\n                description: \"this is a test\"\n            },\n            {\n                aluno: \"Jo\\xe3o\",\n                title: \"Cursoiuj\",\n                description: \"this is a test\"\n            }\n        ]);\n    }\n    if (req.method === \"POST\") {\n        const { aluno , title , description  } = req.body;\n        console.log(aluno, title, description);\n        return res.status(201).json({\n            message: \"Aluno criado com sucesso!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Rlc3RlbXVuaG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxTQUFTQSxRQUFTQyxHQUFtQixFQUFFQyxHQUFvQixFQUFDO0lBRXZFLElBQUlELElBQUlFLE1BQU0sSUFBRyxPQUFNO1FBRW5CLE9BQU9ELElBQ05FLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUU7WUFBQztnQkFBQ0MsT0FBTTtnQkFBUUMsT0FBTTtnQkFBWUMsYUFBWTtZQUFnQjtZQUNyRTtnQkFBRUYsT0FBTTtnQkFBUUMsT0FBTTtnQkFBWUMsYUFBWTtZQUFnQjtZQUM5RDtnQkFBRUYsT0FBTTtnQkFBUUMsT0FBTTtnQkFBWUMsYUFBWTtZQUFnQjtTQUdqRTtJQUVELENBQUM7SUFFRCxJQUFJUCxJQUFJRSxNQUFNLEtBQUcsUUFBTztRQUNwQixNQUFNLEVBQUNHLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUUsR0FBRVAsSUFBSVEsSUFBSTtRQUc1Q0MsUUFBUUMsR0FBRyxDQUFDTCxPQUFPQyxPQUFPQztRQUMxQixPQUFPTixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVPLFNBQVE7UUFBMkI7SUFDckUsQ0FBQztBQUVELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9uZXdfcHJvai8uL3NyYy9wYWdlcy9hcGkvdGVzdGVtdW5ob3MudHM/MGJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlciAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2Upe1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT1cIkdFVFwiKXtcblxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAuanNvbiAoW3thbHVubzpcIkpvw6NvXCIsIHRpdGxlOlwiQ3Vyc29BQkNcIiwgZGVzY3JpcHRpb246XCJ0aGlzIGlzIGEgdGVzdFwifSxcbiAgICAgICAgeyBhbHVubzpcIkpvw6NvXCIsIHRpdGxlOlwiQ3Vyc29CR1RcIiwgZGVzY3JpcHRpb246XCJ0aGlzIGlzIGEgdGVzdFwifSxcbiAgICAgICAgeyBhbHVubzpcIkpvw6NvXCIsIHRpdGxlOlwiQ3Vyc29pdWpcIiwgZGVzY3JpcHRpb246XCJ0aGlzIGlzIGEgdGVzdFwifVxuXG5cbiAgICBdKTtcblxuICAgIH1cblxuICAgIGlmIChyZXEubWV0aG9kPT09XCJQT1NUXCIpe1xuICAgICAgICBjb25zdCB7YWx1bm8sIHRpdGxlLCBkZXNjcmlwdGlvbiB9ID1yZXEuYm9keTtcbiAgICBcblxuICAgICAgICBjb25zb2xlLmxvZyhhbHVubywgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTpcIkFsdW5vIGNyaWFkbyBjb20gc3VjZXNzbyFcIn0pXG4gICAgfVxuXG4gICAgfVxuXG5cblxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiYWx1bm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/testemunhos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/testemunhos.ts"));
module.exports = __webpack_exports__;

})();