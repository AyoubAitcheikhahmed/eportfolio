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

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        exitBeforeEnter: true,\n        initial: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            style: {\n                display: 'inline-block'\n            },\n            initial: {\n                y: -20,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            opacity: {\n                y: 20,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                \"aria-label\": \"Toggle color\",\n                colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('#0a849d', '#03396a'),\n                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, void 0, void 0), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, void 0, void 0)),\n                onClick: toggleColorMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AYOUB\\\\eportfolio\\\\eportfolio\\\\components\\\\theme-toggle-button.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this)\n        }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'), false, {\n            fileName: \"C:\\\\Users\\\\AYOUB\\\\eportfolio\\\\eportfolio\\\\components\\\\theme-toggle-button.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AYOUB\\\\eportfolio\\\\eportfolio\\\\components\\\\theme-toggle-button.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this));\n};\n_s(ThemeToggleButton, \"nOxe+ebHCqC5bMQGsSWeuYX/oOQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4RTtBQUMxQjtBQUNHOzs7QUFHdkQsR0FBSyxDQUFDTyxpQkFBaUIsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFFN0IsR0FBSyxDQUFHQyxlQUFlLEdBQUtQLDhEQUFZLEdBQWhDTyxlQUFlO0lBRXZCLE1BQU0sNkVBQ0RILDBEQUFlO1FBQUNJLGVBQWU7UUFBQ0MsT0FBTyxFQUFFLEtBQUs7OEZBQzFDSixxREFBVTtZQUNYTSxLQUFLLEVBQUUsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQWM7WUFBQyxDQUFDO1lBRWxDSCxPQUFPLEVBQUUsQ0FBQztnQkFBQ0ksQ0FBQyxHQUFHLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO1lBQUMsQ0FBQztZQUMvQkMsT0FBTyxFQUFFLENBQUM7Z0JBQUNGLENBQUMsRUFBQyxDQUFDO2dCQUFFQyxPQUFPLEVBQUMsQ0FBQztZQUFBLENBQUM7WUFDMUJBLE9BQU8sRUFBRyxDQUFDO2dCQUFDRCxDQUFDLEVBQUMsRUFBRTtnQkFBRUMsT0FBTyxFQUFHLENBQUM7WUFBQSxDQUFDO1lBQzlCRSxVQUFVLEVBQUUsQ0FBQztnQkFBQ0MsUUFBUSxFQUFFLEdBQUc7WUFBQSxDQUFDO2tHQUUzQmxCLHdEQUFVO2dCQUNYbUIsQ0FBVSxhQUFDLENBQWM7Z0JBQ3pCQyxXQUFXLEVBQUVsQixtRUFBaUIsQ0FBQyxDQUFTLFVBQUMsQ0FBUztnQkFDbERtQixJQUFJLEVBQUVuQixtRUFBaUIsNkVBQUVFLHNEQUFRLGtIQUFPRCxxREFBTztnQkFDL0NtQixPQUFPLEVBQUVkLGVBQWU7Ozs7OztXQVZsQk4sbUVBQWlCLENBQUMsQ0FBTyxRQUFDLENBQU07Ozs7Ozs7Ozs7QUFjbEQsQ0FBQztHQXRCS0ssaUJBQWlCOztRQUVTTiwwREFBWTtRQU0xQkMsK0RBQWlCO1FBUVZBLCtEQUFpQjtRQUN4QkEsK0RBQWlCOzs7S0FqQjdCSyxpQkFBaUI7QUF3QnZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS10b2dnbGUtYnV0dG9uLmpzP2NjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcblxyXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0gPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gXHJcbiAgICAgICAgICAgIGtleT17IHVzZUNvbG9yTW9kZVZhbHVlKCdsaWdodCcsJ2RhcmsnKX1cclxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMjAsIG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OjAsIG9wYWNpdHk6MX19XHJcbiAgICAgICAgICAgIG9wYWNpdHk9IHt7IHk6MjAsIG9wYWNpdHkgOiAwfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBjb2xvclwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgnIzBhODQ5ZCcsJyMwMzM5NmEnKX1cclxuICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+ICwgPFN1bkljb24gLz4pfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9PjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhcmlhLWxhYmVsIiwiY29sb3JTY2hlbWUiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});