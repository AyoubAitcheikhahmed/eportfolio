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

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoraction: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecoractionColor: '#525252',\n                textDecoractionThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: mod('#3d7aed', '#ff63c6')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c\"\n};\nvar colors = {\n    glassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsR0FBSyxDQUFDRSxNQUFNLEdBQUcsQ0FBQztJQUNaQyxNQUFNLEVBQUVDLFFBQVEsQ0FBUkEsS0FBSztRQUFJLE1BQ25CLENBRG9CLENBQUM7WUFDZkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxDQUFTLFVBQUUsQ0FBUyxVQUFFRyxLQUFLO1lBQ3hDLENBQUM7UUFDTCxDQUFDOztBQUNMLENBQUM7QUFFRCxHQUFLLENBQUNHLFVBQVUsR0FBRyxDQUFDO0lBQ2hCQyxPQUFPLEVBQUUsQ0FBQztRQUNOQyxRQUFRLEVBQUUsQ0FBQztZQUNQLENBQWUsZ0JBQUUsQ0FBQztnQkFDZEMsZUFBZSxFQUFFLENBQVc7Z0JBQzVCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG9CQUFvQixFQUFFLENBQVM7Z0JBQy9CQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUMzQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO1lBQ25CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNIQyxTQUFTLEVBQUVkLFFBQVEsQ0FBUkEsS0FBSztZQUFJLE1BQzFCLENBRDJCLENBQUM7Z0JBQ2xCZSxLQUFLLEVBQUVDLEdBQUcsQ0FBQyxDQUFTLFVBQUMsQ0FBUyxVQUFFaEIsS0FBSztnQkFDckNRLG1CQUFtQixFQUFFLENBQUM7WUFDMUIsQ0FBQzs7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUNELEdBQUssQ0FBQ1MsS0FBSyxHQUFHLENBQUM7SUFDWEMsT0FBTyxFQUFFLENBQW9CO0FBQ2pDLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFTO0FBQ3hCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLGdCQUFnQixFQUFFLENBQU07SUFDeEJDLGtCQUFrQixFQUFFLElBQUk7QUFDNUIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFHNUIsNkRBQVcsQ0FBQyxDQUFDO0lBQUN5QixNQUFNLEVBQU5BLE1BQU07SUFBRXZCLE1BQU0sRUFBTkEsTUFBTTtJQUFFSyxVQUFVLEVBQVZBLFVBQVU7SUFBRWMsS0FBSyxFQUFMQSxLQUFLO0lBQUVFLE1BQU0sRUFBTkEsTUFBTTtBQUFDLENBQUM7QUFDdkUsK0RBQWVLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgSGVhZGluZzoge1xyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYWN0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmFjdGlvbkNvbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhY3Rpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kKCcjM2Q3YWVkJywnI2ZmNjNjNicpKHByb3BzKSxcclxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxY1wiXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGdsYXNzVGVhbDogJyM4OGNjY2EnXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZSxcclxufVxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBmb250cywgY29sb3JzIH0pXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmFjdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmFjdGlvbkNvbG9yIiwidGV4dERlY29yYWN0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwibW9kIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ2xhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/main */ \"./components/layout/main.js\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar Website = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            router: router,\n            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                key: router.route,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AYOUB\\\\eportfolio\\\\eportfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                },\n                __self: _this\n            }))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AYOUB\\\\eportfolio\\\\eportfolio\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AYOUB\\\\eportfolio\\\\eportfolio\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this));\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSDtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDRyxPQUFPLEdBQUcsUUFBUSxRQUE0QixDQUFDO1FBQW5DQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUMxQyxNQUFNLDZFQUNETiw0REFBYztRQUFDRSxLQUFLLEVBQUVBLGtEQUFLOzhGQUN2QkQsK0RBQU07WUFBQ0ssTUFBTSxFQUFFQSxNQUFNO3lGQUNqQkYsU0FBUyxvQkFBS0MsU0FBUztnQkFBRUUsR0FBRyxFQUFFRCxNQUFNLENBQUNFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRCxDQUFDO0tBVEtMLE9BQU87QUFXYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L21haW5cIlxyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vbGliL3RoZW1lJ1xyXG5cclxuY29uc3QgV2Vic2l0ZSA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlcn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgcm91dGVyPXtyb3V0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGUiXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJMYXlvdXQiLCJ0aGVtZSIsIldlYnNpdGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJrZXkiLCJyb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});