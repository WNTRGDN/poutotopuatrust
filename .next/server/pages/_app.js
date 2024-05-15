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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var WNTR_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! WNTR/styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var WNTR_styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(WNTR_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var WNTR_utils_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! WNTR/utils/context */ \"./utils/context.tsx\");\n/* harmony import */ var WNTR_utils_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! WNTR/utils/analytics */ \"./utils/analytics.ts\");\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const currentContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(WNTR_utils_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [context, setContext] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        loading: false,\n        website: {},\n        page: {},\n        setLoading,\n        setWebsite,\n        setPage\n    });\n    function setLoading(data) {\n        context.loading = data;\n        setContext(Object.assign({}, context, context.loading));\n    }\n    function setWebsite(data) {\n        context.website = data;\n        setContext(Object.assign({}, context, context.website));\n    }\n    function setPage(data) {\n        context.page = data;\n        setContext(Object.assign({}, context, context.page));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        router.events.on(\"routeChangeComplete\", (url)=>WNTR_utils_analytics__WEBPACK_IMPORTED_MODULE_5__.pageview(url, currentContext?.website?.gA4));\n        router.events.on(\"routeChangeStart\", ()=>context.setLoading(true));\n        router.events.on(\"routeChangeComplete\", ()=>context.setLoading(false));\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", (url)=>WNTR_utils_analytics__WEBPACK_IMPORTED_MODULE_5__.pageview(url, currentContext?.website?.gA4));\n        };\n    }, [\n        router.events,\n        context\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WNTR_utils_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n        value: context,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/wntr/Projects/Pouto Topu A Trust/pages/_app.tsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wntr/Projects/Pouto Topu A Trust/pages/_app.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDNEI7QUFDckI7QUFFQztBQUNTO0FBR2xDLFNBQVNNLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFFMUQsTUFBTUMsaUJBQWlCUCxpREFBVUEsQ0FBQ0UsMERBQU9BO0lBQ3pDLE1BQU1NLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7UUFDckNhLFNBQVM7UUFDVEMsU0FBUyxDQUFDO1FBQ1ZDLE1BQU0sQ0FBQztRQUNQQztRQUNBQztRQUNBQztJQUNGO0lBRUEsU0FBU0YsV0FBV0csSUFBYTtRQUMvQlIsUUFBUUUsT0FBTyxHQUFHTTtRQUNsQlAsV0FBV1EsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR1YsU0FBU0EsUUFBUUUsT0FBTztJQUN2RDtJQUVBLFNBQVNJLFdBQVdFLElBQWM7UUFDaENSLFFBQVFHLE9BQU8sR0FBR0s7UUFDbEJQLFdBQVdRLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdWLFNBQVNBLFFBQVFHLE9BQU87SUFDdkQ7SUFFQSxTQUFTSSxRQUFRQyxJQUFXO1FBQzFCUixRQUFRSSxJQUFJLEdBQUdJO1FBQ2ZQLFdBQVdRLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdWLFNBQVNBLFFBQVFJLElBQUk7SUFDcEQ7SUFFQWQsZ0RBQVNBLENBQUM7UUFFTlMsT0FBT1ksTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCLENBQUNDLE1BQWFuQiwwREFBa0IsQ0FBQ21CLEtBQUtmLGdCQUFnQkssU0FBU1k7UUFDdkdoQixPQUFPWSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0IsSUFBTVosUUFBUUssVUFBVSxDQUFDO1FBQzlETixPQUFPWSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUIsSUFBTVosUUFBUUssVUFBVSxDQUFDO1FBRWpFLE9BQU87WUFDTE4sT0FBT1ksTUFBTSxDQUFDSyxHQUFHLENBQUMsdUJBQXVCLENBQUNILE1BQWFuQiwwREFBa0IsQ0FBQ21CLEtBQUtmLGdCQUFnQkssU0FBU1k7UUFDMUc7SUFDRixHQUFHO1FBQUNoQixPQUFPWSxNQUFNO1FBQUVYO0tBQVE7SUFFN0IscUJBQ0ksOERBQUNQLG1FQUFnQjtRQUFDeUIsT0FBT2xCO2tCQUNyQiw0RUFBQ0o7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdXRvdG9wdWF0cnVzdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdXTlRSL3N0eWxlcy9nbG9iYWwuc2NzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgQ29udGV4dCBmcm9tICdXTlRSL3V0aWxzL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBBbmFseXRpY3MgZnJvbSAnV05UUi91dGlscy9hbmFseXRpY3MnXG5pbXBvcnQgeyBJUGFnZSwgSVdlYnNpdGUgfSBmcm9tICdXTlRSL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgXG4gICAgY29uc3QgY3VycmVudENvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHQpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbY29udGV4dCwgc2V0Q29udGV4dF0gPSB1c2VTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHdlYnNpdGU6IHt9IGFzIElXZWJzaXRlLFxuICAgICAgcGFnZToge30gYXMgSVBhZ2UsXG4gICAgICBzZXRMb2FkaW5nLFxuICAgICAgc2V0V2Vic2l0ZSxcbiAgICAgIHNldFBhZ2VcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0TG9hZGluZyhkYXRhOiBib29sZWFuKSB7XG4gICAgICBjb250ZXh0LmxvYWRpbmcgPSBkYXRhXG4gICAgICBzZXRDb250ZXh0KE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbnRleHQubG9hZGluZykpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0V2Vic2l0ZShkYXRhOiBJV2Vic2l0ZSkge1xuICAgICAgY29udGV4dC53ZWJzaXRlID0gZGF0YVxuICAgICAgc2V0Q29udGV4dChPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjb250ZXh0LndlYnNpdGUpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBhZ2UoZGF0YTogSVBhZ2UpIHtcbiAgICAgIGNvbnRleHQucGFnZSA9IGRhdGFcbiAgICAgIHNldENvbnRleHQoT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY29udGV4dC5wYWdlKSlcbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAodXJsOiBVUkwpID0+IEFuYWx5dGljcy5wYWdldmlldyh1cmwsIGN1cnJlbnRDb250ZXh0Py53ZWJzaXRlPy5nQTQpKVxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBjb250ZXh0LnNldExvYWRpbmcodHJ1ZSkpXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IGNvbnRleHQuc2V0TG9hZGluZyhmYWxzZSkpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKHVybDogVVJMKSA9PiBBbmFseXRpY3MucGFnZXZpZXcodXJsLCBjdXJyZW50Q29udGV4dD8ud2Vic2l0ZT8uZ0E0KSlcbiAgICAgICAgfVxuICAgICAgfSwgW3JvdXRlci5ldmVudHMsIGNvbnRleHRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJDb250ZXh0IiwiQW5hbHl0aWNzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudENvbnRleHQiLCJyb3V0ZXIiLCJjb250ZXh0Iiwic2V0Q29udGV4dCIsImxvYWRpbmciLCJ3ZWJzaXRlIiwicGFnZSIsInNldExvYWRpbmciLCJzZXRXZWJzaXRlIiwic2V0UGFnZSIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudHMiLCJvbiIsInVybCIsInBhZ2V2aWV3IiwiZ0E0Iiwib2ZmIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/analytics.ts":
/*!****************************!*\
  !*** ./utils/analytics.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst pageview = (url, id)=>{\n    if (typeof window.gtag !== \"undefined\") {\n        window.gtag(\"config\", id, {\n            page_path: url\n        });\n    }\n};\nconst event = ({ action, category, label, value })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hbmFseXRpY3MudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxXQUFXLENBQUNDLEtBQVVDO0lBQ2pDLElBQUksT0FBT0MsT0FBT0MsSUFBSSxLQUFLLGFBQWE7UUFDdENELE9BQU9DLElBQUksQ0FBQyxVQUFVRixJQUFJO1lBQ3hCRyxXQUFXSjtRQUNiO0lBQ0Y7QUFDRixFQUFDO0FBU00sTUFBTUssUUFBUSxDQUFDLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBYTtJQUNqRVAsT0FBT0MsSUFBSSxDQUFDLFNBQVNHLFFBQVE7UUFDM0JJLGdCQUFnQkg7UUFDaEJJLGFBQWFIO1FBQ2JDLE9BQU9BO0lBQ1Q7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG91dG90b3B1YXRydXN0Ly4vdXRpbHMvYW5hbHl0aWNzLnRzPzhmYjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybDogVVJMLCBpZDogc3RyaW5nKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93Lmd0YWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgaWQsIHtcbiAgICAgIHBhZ2VfcGF0aDogdXJsXG4gICAgfSlcbiAgfVxufVxuXG50eXBlIEdUYWdFdmVudCA9IHtcbiAgYWN0aW9uOiBzdHJpbmcsXG4gIGNhdGVnb3J5OiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIHZhbHVlOiBudW1iZXJcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9OiBHVGFnRXZlbnQpID0+IHtcbiAgd2luZG93Lmd0YWcoXCJldmVudFwiLCBhY3Rpb24sIHtcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KVxufSJdLCJuYW1lcyI6WyJwYWdldmlldyIsInVybCIsImlkIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/analytics.ts\n");

/***/ }),

/***/ "./utils/context.tsx":
/*!***************************!*\
  !*** ./utils/context.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({\n    loading: false,\n    website: {},\n    page: {},\n    setWebsite: (website)=>{},\n    setPage: (page)=>{}\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDeUI7QUFFekIsTUFBTUMsd0JBQVVELDBEQUFtQixDQUFDO0lBQ2xDRyxTQUFTO0lBQ1RDLFNBQVMsQ0FBQztJQUNWQyxNQUFNLENBQUM7SUFDUEMsWUFBWSxDQUFDRixXQUF1QjtJQUNwQ0csU0FBUyxDQUFDRixRQUFpQjtBQUM3QjtBQUVBLGlFQUFlSixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG91dG90b3B1YXRydXN0Ly4vdXRpbHMvY29udGV4dC50c3g/YjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUGFnZSwgSVdlYnNpdGUgfSBmcm9tICdXTlRSL2ludGVyZmFjZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIHdlYnNpdGU6IHt9IGFzIElXZWJzaXRlLFxuICBwYWdlOiB7fSBhcyBJUGFnZSxcbiAgc2V0V2Vic2l0ZTogKHdlYnNpdGU6IElXZWJzaXRlKSA9PiB7fSxcbiAgc2V0UGFnZTogKHBhZ2U6IElQYWdlKSA9PiB7fVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibG9hZGluZyIsIndlYnNpdGUiLCJwYWdlIiwic2V0V2Vic2l0ZSIsInNldFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/context.tsx\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();