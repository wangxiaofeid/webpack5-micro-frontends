/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["src_router_js"],{

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SchemaPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e(\"webpack_sharing_consume_default_antd_antd-webpack_container_remote_basic_utils\"), __webpack_require__.e(\"webpack_sharing_consume_default_react-router-dom_react-router-dom\"), __webpack_require__.e(\"src_pages_Schema_index_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Schema */ \"./src/pages/Schema/index.js\")));\nconst FlowPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e(\"webpack_sharing_consume_default_antd_antd-webpack_container_remote_basic_utils\"), __webpack_require__.e(\"src_pages_Flow_index_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Flow */ \"./src/pages/Flow/index.js\")));\nconst routes = [{\n  path: '/schema',\n  component: SchemaPage\n}, {\n  path: '/flow',\n  component: FlowPage\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes.map(r => ({ ...r,\n  path: `/app1${r.path}`\n})));\n\n//# sourceURL=webpack://app1/./src/router.js?");

/***/ })

}]);