webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastPlayer.js":
/*!*************************************!*\
  !*** ./components/PodcastPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/slug */ \"./helpers/slug.js\");\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar PodcastPlayer = function PodcastPlayer(_ref) {\n  var audioClip = _ref.audioClip,\n      onClose = _ref.onClose;\n  return __jsx(\"div\", {\n    className: \"jsx-2951275398\"\n  }, __jsx(\"nav\", {\n    className: \"jsx-2951275398\"\n  }, onClose ? __jsx(\"a\", {\n    onClick: onClose,\n    className: \"jsx-2951275398\"\n  }, \"< Back\") : __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    route: \"channel\",\n    params: {\n      slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(audioClip.channel.title),\n      id: audioClip.channel.id\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2951275398\"\n  }, \"Volver\"))), __jsx(\"div\", {\n    className: \"jsx-2951275398\" + \" \" + \"cover\"\n  }, __jsx(\"img\", {\n    src: audioClip.urls.image,\n    alt: \"\",\n    className: \"jsx-2951275398\"\n  })), __jsx(\"div\", {\n    className: \"jsx-2951275398\" + \" \" + \"info\"\n  }, __jsx(\"h1\", {\n    className: \"jsx-2951275398\"\n  }, audioClip.title), __jsx(\"p\", {\n    className: \"jsx-2951275398\"\n  }, \"Duration: \", Math.ceil(audioClip.duration / 60), \" minutes\"), __jsx(\"audio\", {\n    controls: true,\n    autoPlay: false,\n    className: \"jsx-2951275398\"\n  }, __jsx(\"source\", {\n    src: audioClip.urls.high_mp3,\n    type: \"audio/mpeg\",\n    className: \"jsx-2951275398\"\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2951275398\"\n  }, \"nav.jsx-2951275398{position:absolute;display:inline-block;width:40px;border-radius:25%;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;padding:8px;margin:15px;}nav.jsx-2951275398 a.jsx-2951275398{color:white;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.cover.jsx-2951275398{width:100vw;height:60vh;text-align:center;background:#222426;box-shadow:inset 7px 7px 14px #1b1c1e,inset -7px -7px 14px #292c2e;}.cover.jsx-2951275398 img.jsx-2951275398{max-height:80%;max-width:80%;margin:80px auto;border-radius:20px;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;}.info.jsx-2951275398{height:40vh;padding-top:5vh;padding-bottom:40px;text-align:center;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;}h1.jsx-2951275398{margin:0;font-weight:600;padding:15px;text-transform:uppercase;}h2.jsx-2951275398{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}.podcast.jsx-2951275398{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-2951275398:hover{color:#000;}.podcast.jsx-2951275398 h3.jsx-2951275398{margin:0;}.podcast.jsx-2951275398 .meta.jsx-2951275398{color:#666;margin-top:0.5em;font-size:0.8em;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVkeXp6L0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL25leHRKcy9wb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdFBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2UsQUFHd0IsQUFXTixBQU1BLEFBUUcsQUFRSCxBQVNILEFBTUcsQUFRRSxBQVFILEFBR0YsQUFHRSxTQTNCSyxBQXlCakIsRUFIQSxBQU1rQixDQTNESSxBQU1ULEFBZ0JJLEFBZUEsRUFRSyxDQS9CUCxHQXpCTyxNQWtCSCxDQXlCTCxHQVRPLEFBZUosQUFzQkEsQ0E3Q0MsU0FrQlEsQ0EzQ2QsR0FrQlEsRUErQlYsQUFzQlYsRUE3Q29CLEVBUUQsRUFqQ0EsR0FpREEsUUEvQmtELENBUnJELENBaUNoQixDQVlZLENBN0I2QyxDQVFyQyxFQWpDQSxHQWlEcEIsSUFNYyxFQTdDZCxRQXdCeUQsRUFqQ0EsQ0F1RGIsZ0NBOUI1QyxRQVJBLEFBdUNnQixZQXRCaEIsRUFqQ2EsQ0F3RGIsV0F2RGEsWUFDYiIsImZpbGUiOiIvVXNlcnMvZnJlZHl6ei9Eb2N1bWVudHMvQ3Vyc29zL1BsYXR6aS9uZXh0SnMvcG9kY2FzdC9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJ1xuXG5jb25zdCBQb2RjYXN0UGxheWVyID0gKHsgYXVkaW9DbGlwLCBvbkNsb3NlIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PG5hdj5cblx0XHRcdFx0e29uQ2xvc2UgPyAoXG5cdFx0XHRcdFx0PGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBCYWNrPC9hPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRyb3V0ZT1cImNoYW5uZWxcIlxuXHRcdFx0XHRcdFx0cGFyYW1zPXt7XG5cdFx0XHRcdFx0XHRcdHNsdWc6IHNsdWcoYXVkaW9DbGlwLmNoYW5uZWwudGl0bGUpLFxuXHRcdFx0XHRcdFx0XHRpZDogYXVkaW9DbGlwLmNoYW5uZWwuaWRcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGE+Vm9sdmVyPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0KX1cblx0XHRcdDwvbmF2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17YXVkaW9DbGlwLnVybHMuaW1hZ2V9IGFsdD1cIlwiIC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG5cdFx0XHRcdDxoMT57YXVkaW9DbGlwLnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxwPkR1cmF0aW9uOiB7TWF0aC5jZWlsKGF1ZGlvQ2xpcC5kdXJhdGlvbiAvIDYwKX0gbWludXRlczwvcD5cblxuXHRcdFx0XHQ8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk9e2ZhbHNlfT5cblx0XHRcdFx0XHQ8c291cmNlIHNyYz17YXVkaW9DbGlwLnVybHMuaGlnaF9tcDN9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cblx0XHRcdFx0PC9hdWRpbz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdG5hdiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyNSU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzIyMjQyNjtcblx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDE0cHggIzFiMWMxZSwgLTdweCAtN3B4IDE0cHggIzI5MmMyZTtcblx0XHRcdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2IGEge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNvdmVyIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XG5cdFx0XHRcdFx0aGVpZ2h0OiA2MHZoO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjIyNDI2O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDdweCA3cHggMTRweCAjMWIxYzFlLCBpbnNldCAtN3B4IC03cHggMTRweCAjMjkyYzJlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNvdmVyIGltZyB7XG5cdFx0XHRcdFx0bWF4LWhlaWdodDogODAlO1xuXHRcdFx0XHRcdG1heC13aWR0aDogODAlO1xuXHRcdFx0XHRcdG1hcmdpbjogODBweCBhdXRvO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogN3B4IDdweCAxNHB4ICMxYjFjMWUsIC03cHggLTdweCAxNHB4ICMyOTJjMmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW5mbyB7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0MHZoO1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1dmg7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDQwcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyMjI0MjY7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogN3B4IDdweCAxNHB4ICMxYjFjMWUsIC03cHggLTdweCAxNHB4ICMyOTJjMmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMSB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjllbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9kY2FzdCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnBvZGNhc3Q6aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5wb2RjYXN0IGgzIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnBvZGNhc3QgLm1ldGEge1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNWVtO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2RjYXN0UGxheWVyXG4iXX0= */\\n/*@ sourceURL=/Users/fredyzz/Documents/Cursos/Platzi/nextJs/podcast/components/PodcastPlayer.js */\"));\n};\n\n_c = PodcastPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PodcastPlayer);\n\nvar _c;\n\n$RefreshReg$(_c, \"PodcastPlayer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXIuanM/NzU4ZCJdLCJuYW1lcyI6WyJQb2RjYXN0UGxheWVyIiwiYXVkaW9DbGlwIiwib25DbG9zZSIsInNsdWciLCJjaGFubmVsIiwidGl0bGUiLCJpZCIsInVybHMiLCJpbWFnZSIsIk1hdGgiLCJjZWlsIiwiZHVyYXRpb24iLCJoaWdoX21wMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBNEI7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2pELFNBQ0M7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBLEtBQ0VBLE9BQU8sR0FDUDtBQUFHLFdBQU8sRUFBRUEsT0FBWjtBQUFBO0FBQUEsY0FETyxHQUdQLE1BQUMsNENBQUQ7QUFDQyxTQUFLLEVBQUMsU0FEUDtBQUVDLFVBQU0sRUFBRTtBQUNQQyxVQUFJLEVBQUVBLDZEQUFJLENBQUNGLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkMsS0FBbkIsQ0FESDtBQUVQQyxRQUFFLEVBQUVMLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkU7QUFGZjtBQUZULEtBT0M7QUFBQTtBQUFBLGNBUEQsQ0FKRixDQURELEVBZ0JDO0FBQUEsd0NBQWU7QUFBZixLQUNDO0FBQUssT0FBRyxFQUFFTCxTQUFTLENBQUNNLElBQVYsQ0FBZUMsS0FBekI7QUFBZ0MsT0FBRyxFQUFDLEVBQXBDO0FBQUE7QUFBQSxJQURELENBaEJELEVBb0JDO0FBQUEsd0NBQWU7QUFBZixLQUNDO0FBQUE7QUFBQSxLQUFLUCxTQUFTLENBQUNJLEtBQWYsQ0FERCxFQUVDO0FBQUE7QUFBQSxtQkFBY0ksSUFBSSxDQUFDQyxJQUFMLENBQVVULFNBQVMsQ0FBQ1UsUUFBVixHQUFxQixFQUEvQixDQUFkLGFBRkQsRUFJQztBQUFPLFlBQVEsTUFBZjtBQUFnQixZQUFRLEVBQUUsS0FBMUI7QUFBQTtBQUFBLEtBQ0M7QUFBUSxPQUFHLEVBQUVWLFNBQVMsQ0FBQ00sSUFBVixDQUFlSyxRQUE1QjtBQUFzQyxRQUFJLEVBQUMsWUFBM0M7QUFBQTtBQUFBLElBREQsQ0FKRCxDQXBCRDtBQUFBO0FBQUEseThMQUREO0FBNkdBLENBOUdEOztLQUFNWixhO0FBZ0hTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXG5cbmNvbnN0IFBvZGNhc3RQbGF5ZXIgPSAoeyBhdWRpb0NsaXAsIG9uQ2xvc2UgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8bmF2PlxuXHRcdFx0XHR7b25DbG9zZSA/IChcblx0XHRcdFx0XHQ8YSBvbkNsaWNrPXtvbkNsb3NlfT4mbHQ7IEJhY2s8L2E+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdHJvdXRlPVwiY2hhbm5lbFwiXG5cdFx0XHRcdFx0XHRwYXJhbXM9e3tcblx0XHRcdFx0XHRcdFx0c2x1Zzogc2x1ZyhhdWRpb0NsaXAuY2hhbm5lbC50aXRsZSksXG5cdFx0XHRcdFx0XHRcdGlkOiBhdWRpb0NsaXAuY2hhbm5lbC5pZFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8YT5Wb2x2ZXI8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG5cdFx0XHRcdDxpbWcgc3JjPXthdWRpb0NsaXAudXJscy5pbWFnZX0gYWx0PVwiXCIgLz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cblx0XHRcdFx0PGgxPnthdWRpb0NsaXAudGl0bGV9PC9oMT5cblx0XHRcdFx0PHA+RHVyYXRpb246IHtNYXRoLmNlaWwoYXVkaW9DbGlwLmR1cmF0aW9uIC8gNjApfSBtaW51dGVzPC9wPlxuXG5cdFx0XHRcdDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17ZmFsc2V9PlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3JjPXthdWRpb0NsaXAudXJscy5oaWdoX21wM30gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxuXHRcdFx0XHQ8L2F1ZGlvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0bmF2IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDI1JTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjIyNDI2O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDdweCA3cHggMTRweCAjMWIxYzFlLCAtN3B4IC03cHggMTRweCAjMjkyYzJlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRtYXJnaW46IDE1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRuYXYgYSB7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY292ZXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDB2dztcblx0XHRcdFx0XHRoZWlnaHQ6IDYwdmg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyMjI0MjY7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgN3B4IDdweCAxNHB4ICMxYjFjMWUsIGluc2V0IC03cHggLTdweCAxNHB4ICMyOTJjMmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY292ZXIgaW1nIHtcblx0XHRcdFx0XHRtYXgtaGVpZ2h0OiA4MCU7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0bWFyZ2luOiA4MHB4IGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDE0cHggIzFiMWMxZSwgLTdweCAtN3B4IDE0cHggIzI5MmMyZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbmZvIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDQwdmg7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDV2aDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNDBweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzIyMjQyNjtcblx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDE0cHggIzFiMWMxZSwgLTdweCAtN3B4IDE0cHggIzI5MmMyZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOWVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb2RjYXN0IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQucG9kY2FzdDpob3ZlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnBvZGNhc3QgaDMge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQucG9kY2FzdCAubWV0YSB7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMC41ZW07XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RQbGF5ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PodcastPlayer.js\n");

/***/ })

})