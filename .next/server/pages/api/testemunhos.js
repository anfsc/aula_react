"use strict";
(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/data/testemunhos.js
const testemunhos = [
    {
        id: 1,
        nome: "Jo\xe3o",
        description: "ol\xe11",
        about: "ola2"
    },
    {
        id: 2,
        nome: "Jo\xe3o",
        description: "ol\xe11",
        about: "ola2"
    }
];
/* harmony default export */ const data_testemunhos = (testemunhos);

;// CONCATENATED MODULE: ./src/pages/api/testemunhos.ts

function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json(data_testemunhos);
    }
    if (req.method === "POST") {
        const { nome , about , description  } = req.body;
        const newTestemunho = {
            id: data_testemunhos.length + 1,
            nome,
            about,
            description
        };
        data_testemunhos.push(newTestemunho);
        console.log(data_testemunhos); // 
        return res.status(201).json({
            message: "Testemunho adicionado com sucesso!"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(725));
module.exports = __webpack_exports__;

})();