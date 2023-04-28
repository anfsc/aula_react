(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./componentes/layout/NavBar.js



function NavBar() {
    const router = (0,router_namespaceObject.useRouter)();
    const handleClick = (url)=>{
        router.push(url);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-navbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                onClick: ()=>handleClick("/sobreOCurso"),
                children: "Sobre o Curso"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                onClick: ()=>handleClick("/horarios"),
                children: "Hor\xe1rios"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                onClick: ()=>handleClick("/ondeEstamos"),
                children: "Onde Estamos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                onClick: ()=>handleClick("/testemunhos"),
                children: "Testemunhos"
            })
        ]
    });
}
/* harmony default export */ const layout_NavBar = (NavBar);

;// CONCATENATED MODULE: ./componentes/layout/Logo.js


function logo(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "logo",
        children: props.titulo
    });
}
/* harmony default export */ const Logo = (logo);

;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
;// CONCATENATED MODULE: ./componentes/layout/Avatar.js




function ImageAvatars() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
        direction: "row",
        spacing: 2,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: "Remy Sharp",
                src: "/static/images/avatar/1.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: "Travis Howard",
                src: "/static/images/avatar/2.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: "Cindy Baker",
                src: "/static/images/avatar/3.jpg"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./componentes/layout/Header.js





function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                titulo: "Sharkcoders Cursos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageAvatars, {})
        ]
    });
}
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./componentes/layout/Footer.js


function Footer(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "layout-footer",
        children: props.name
    });
}
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ChevronLeft"
const ChevronLeft_namespaceObject = require("@mui/icons-material/ChevronLeft");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ChevronRight"
const ChevronRight_namespaceObject = require("@mui/icons-material/ChevronRight");
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MoveToInbox"
const MoveToInbox_namespaceObject = require("@mui/icons-material/MoveToInbox");
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Mail"
const Mail_namespaceObject = require("@mui/icons-material/Mail");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_namespaceObject);
;// CONCATENATED MODULE: ./componentes/layout/index.js























const drawerWidth = 240;
const openedMixin = (theme)=>({
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        overflowX: "hidden"
    });
const closedMixin = (theme)=>({
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up("sm")]: {
            width: `calc(${theme.spacing(6)} + 1px)`
        }
    });
const DrawerHeader = (0,styles_.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    }));
const AppBar = (0,styles_.styled)((AppBar_default()), {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(120% - ${drawerWidth}px)`,
        transition: theme.transitions.create([
            "width",
            "margin"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create([
                "width",
                "margin"
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    }));
const Drawer = (0,styles_.styled)((Drawer_default()), {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme)
        },
        ...!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme)
        }
    }));
function Layout({ children  }) {
    const theme = (0,styles_.useTheme)();
    const [open, setOpen] = external_react_default().useState(false);
    const handleDrawer = ()=>{
        setOpen((prevState)=>!prevState);
    };
    const icon = !open ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        onClick: handleDrawer,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
    }) : /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        onClick: handleDrawer,
        children: theme.direction === "rtl" ? /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {})
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppBar, {
                open: open,
                sx: {
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        className: "layout",
                        component: "main",
                        sx: {
                            flexGrow: 1,
                            pl: 20
                        },
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Drawer, {
                className: "sideBar",
                variant: "permanent",
                open: open,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DrawerHeader, {
                        children: icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                        children: [
                            "Inbox",
                            "Starred",
                            "Send email",
                            "Drafts"
                        ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                disablePadding: true,
                                sx: {
                                    display: "block"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                    sx: {
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center"
                                            },
                                            children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: text,
                                            sx: {
                                                opacity: open ? 1 : 0
                                            }
                                        })
                                    ]
                                })
                            }, text))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                        children: [
                            "All mail",
                            "Trash",
                            "Spam"
                        ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                disablePadding: true,
                                sx: {
                                    display: "block"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                    sx: {
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center"
                                            },
                                            children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: text,
                                            sx: {
                                                opacity: open ? 1 : 0
                                            }
                                        })
                                    ]
                                })
                            }, text))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                name: "Footer do projeto2"
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/context/AlunosContext.js
var AlunosContext = __webpack_require__(85);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(AlunosContext/* AlunosProvider */.LF, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [85], () => (__webpack_exec__(106)));
module.exports = __webpack_exports__;

})();