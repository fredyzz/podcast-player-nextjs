webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* harmony import */ var _components_PodcastList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PodcastList */ \"./components/PodcastList.js\");\n/* harmony import */ var _components_SeriesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SeriesList */ \"./components/SeriesList.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PodcastPlayer */ \"./components/PodcastPlayer.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Channel = function Channel(_ref) {\n  _s();\n\n  var channel = _ref.channel,\n      audioClips = _ref.audioClips,\n      series = _ref.series,\n      statusCode = _ref.statusCode;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openPodcast = _useState[0],\n      setOpenPodcast = _useState[1];\n\n  var openPodcastModal = function openPodcastModal(e, podcast) {\n    e.preventDefault();\n    setOpenPodcast(podcast);\n  };\n\n  var onClose = function onClose(e) {\n    e.preventDefault();\n    setOpenPodcast(null);\n  };\n\n  if (statusCode !== 200) {\n    return __jsx(_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      statusCode: statusCode\n    });\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    title: \"Podcast \".concat(channel.title)\n  }, __jsx(\"nav\", {\n    className: \"jsx-1487418632\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\"\n  }, __jsx(\"a\", {\n    className: \"jsx-1487418632\"\n  }, \"< Back\"))), __jsx(\"div\", {\n    style: {\n      backgroundImage: \"url(\".concat(channel.urls.banner_image.original, \")\")\n    },\n    className: \"jsx-1487418632\" + \" \" + \"banner\"\n  }), openPodcast && __jsx(\"div\", {\n    className: \"jsx-1487418632\" + \" \" + \"modal\"\n  }, __jsx(_components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    audioClip: openPodcast,\n    onClose: onClose\n  })), __jsx(\"h1\", {\n    className: \"jsx-1487418632\"\n  }, channel.title), __jsx(_components_SeriesList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    series: series\n  }), __jsx(_components_PodcastList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    audioClips: audioClips,\n    openPodcastModal: openPodcastModal\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    id: \"1487418632\"\n  }, \"nav.jsx-1487418632{position:absolute;display:inline-block;width:40px;border-radius:25%;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;padding:8px;margin:-30px 0 20 0;}nav.jsx-1487418632 a.jsx-1487418632{color:white;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-1487418632{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;}h1.jsx-1487418632{color:white;font-weight:600;text-shadow:0 0 11px #222426;padding:5px;text-align:center;}.modal.jsx-1487418632{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:black;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVkeXp6L0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL25leHRKcy9wb2RjYXN0L3BhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RlLEFBR3dCLEFBV04sQUFLRCxBQVNDLEFBUUcsV0FoQkksQ0FMRSxBQWNMLEdBUVYsR0FqQ2UsR0FrQ2QsT0FSc0IsQUFTckIsRUFsQm9CLE1BbUJuQixHQW5DRSxNQW9DRyxLQW5DSSxPQXlCTixDQVRVLENBb0JMLEdBMUJsQixNQVRvQixDQXlCRCxPQVduQixJQXBCb0IsT0FmcUMsQUF5QnpELFlBVHlELDJDQWY1QyxZQUNRLEFBZXJCLG9CQWRBIiwiZmlsZSI6Ii9Vc2Vycy9mcmVkeXp6L0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL25leHRKcy9wb2RjYXN0L3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJ1xuaW1wb3J0IFBvZGNhc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdExpc3QnXG5pbXBvcnQgU2VyaWVzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Nlcmllc0xpc3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFBvZGNhc3RQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyJ1xuXG5jb25zdCBDaGFubmVsID0gKHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlIH0pID0+IHtcblx0Y29uc3QgW29wZW5Qb2RjYXN0LCBzZXRPcGVuUG9kY2FzdF0gPSB1c2VTdGF0ZShudWxsKVxuXG5cdGNvbnN0IG9wZW5Qb2RjYXN0TW9kYWwgPSAoZSwgcG9kY2FzdCkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHNldE9wZW5Qb2RjYXN0KHBvZGNhc3QpXG5cdH1cblxuXHRjb25zdCBvbkNsb3NlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRzZXRPcGVuUG9kY2FzdChudWxsKVxuXHR9XG5cblx0aWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xuXHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz5cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PExheW91dCB0aXRsZT17YFBvZGNhc3QgJHtjaGFubmVsLnRpdGxlfWB9PlxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8YT4mbHQ7IEJhY2s8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJiYW5uZXJcIlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWBcblx0XHRcdFx0fX1cblx0XHRcdD48L2Rpdj5cblxuXHRcdFx0e29wZW5Qb2RjYXN0ICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuXHRcdFx0XHRcdDxQb2RjYXN0UGxheWVyIGF1ZGlvQ2xpcD17b3BlblBvZGNhc3R9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblxuXHRcdFx0PGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XG5cdFx0XHQ8U2VyaWVzTGlzdCBzZXJpZXM9e3Nlcmllc30gLz5cblx0XHRcdDxQb2RjYXN0TGlzdFxuXHRcdFx0XHRhdWRpb0NsaXBzPXthdWRpb0NsaXBzfVxuXHRcdFx0XHRvcGVuUG9kY2FzdE1vZGFsPXtvcGVuUG9kY2FzdE1vZGFsfVxuXHRcdFx0Lz5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRuYXYge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjUlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyMjI0MjY7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogN3B4IDdweCAxNHB4ICMxYjFjMWUsIC03cHggLTdweCAxNHB4ICMyOTJjMmU7XG5cdFx0XHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogLTMwcHggMCAyMCAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2IGEge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYmFubmVyIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjUlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjIyNDI2O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDdweCA3cHggMTRweCAjMWIxYzFlLCAtN3B4IC03cHggMTRweCAjMjkyYzJlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdHRleHQtc2hhZG93OiAwIDAgMTFweCAjMjIyNDI2O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubW9kYWwge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk5OTk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L0xheW91dD5cblx0KVxufVxuXG5DaGFubmVsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5LCByZXMgfSkgPT4ge1xuXHR0cnkge1xuXHRcdGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxuXG5cdFx0bGV0IFtyZXFDaGFubmVsLCByZXFTZXJpZXMsIHJlcUF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcblx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApLFxuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcblx0XHRdKVxuXG5cdFx0aWYgKHJlcUNoYW5uZWwuc3RhdHVzID49IDQwNCkge1xuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSByZXFDaGFubmVsLnN0YXR1c1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhbm5lbDogbnVsbCxcblx0XHRcdFx0YXVkaW9DbGlwczogbnVsbCxcblx0XHRcdFx0c2VyaWVzOiBudWxsLFxuXHRcdFx0XHRzdGF0dXNDb2RlOiByZXFDaGFubmVsLnN0YXR1c1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGdldHRpbmcgY2hhbm5lbCBkYXRhXG5cdFx0bGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcblx0XHRsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXHRcdC8vIGdldHRpbmcgYXVkaW9zIGRhdGFcblx0XHRsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcblx0XHRsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXHRcdC8vIGdldHRpbmcgY2hpbGVkIGNoYW5uZWxzIGRhdGFcblx0XHRsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcblx0XHRsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzXG5cblx0XHRyZXR1cm4geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGU6IDIwMCB9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHJlcy5zdGF0dXNDb2RlID0gNTAzXG5cdFx0cmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxcbiJdfQ== */\\n/*@ sourceURL=/Users/fredyzz/Documents/Cursos/Platzi/nextJs/podcast/pages/channel.js */\"));\n};\n\n_s(Channel, \"pEhj3SwlPLKnCzInCkhwZ80CvFI=\");\n\n_c = Channel;\n\nChannel.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, res, idChannel, _yield$Promise$all, _yield$Promise$all2, reqChannel, reqSeries, reqAudios, dataChannel, channel, dataAudios, audioClips, dataSeries, series;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query, res = _ref2.res;\n            _context.prev = 1;\n            idChannel = query.id;\n            _context.next = 5;\n            return Promise.all([fetch(\"https://api.audioboom.com/channels/\".concat(idChannel)), fetch(\"https://api.audioboom.com/channels/\".concat(idChannel, \"/child_channels\")), fetch(\"https://api.audioboom.com/channels/\".concat(idChannel, \"/audio_clips\"))]);\n\n          case 5:\n            _yield$Promise$all = _context.sent;\n            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_yield$Promise$all, 3);\n            reqChannel = _yield$Promise$all2[0];\n            reqSeries = _yield$Promise$all2[1];\n            reqAudios = _yield$Promise$all2[2];\n\n            if (!(reqChannel.status >= 404)) {\n              _context.next = 13;\n              break;\n            }\n\n            res.statusCode = reqChannel.status;\n            return _context.abrupt(\"return\", {\n              channel: null,\n              audioClips: null,\n              series: null,\n              statusCode: reqChannel.status\n            });\n\n          case 13:\n            _context.next = 15;\n            return reqChannel.json();\n\n          case 15:\n            dataChannel = _context.sent;\n            channel = dataChannel.body.channel; // getting audios data\n\n            _context.next = 19;\n            return reqAudios.json();\n\n          case 19:\n            dataAudios = _context.sent;\n            audioClips = dataAudios.body.audio_clips; // getting chiled channels data\n\n            _context.next = 23;\n            return reqSeries.json();\n\n          case 23:\n            dataSeries = _context.sent;\n            series = dataSeries.body.channels;\n            return _context.abrupt(\"return\", {\n              channel: channel,\n              audioClips: audioClips,\n              series: series,\n              statusCode: 200\n            });\n\n          case 28:\n            _context.prev = 28;\n            _context.t0 = _context[\"catch\"](1);\n            res.statusCode = 503;\n            return _context.abrupt(\"return\", {\n              channel: null,\n              audioClips: null,\n              series: null,\n              statusCode: 503\n            });\n\n          case 32:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 28]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Channel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Channel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFubmVsLmpzPzgxODIiXSwibmFtZXMiOlsiQ2hhbm5lbCIsImNoYW5uZWwiLCJhdWRpb0NsaXBzIiwic2VyaWVzIiwic3RhdHVzQ29kZSIsInVzZVN0YXRlIiwib3BlblBvZGNhc3QiLCJzZXRPcGVuUG9kY2FzdCIsIm9wZW5Qb2RjYXN0TW9kYWwiLCJlIiwicG9kY2FzdCIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZSIsInRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwidXJscyIsImJhbm5lcl9pbWFnZSIsIm9yaWdpbmFsIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiLCJpZENoYW5uZWwiLCJpZCIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInJlcUNoYW5uZWwiLCJyZXFTZXJpZXMiLCJyZXFBdWRpb3MiLCJzdGF0dXMiLCJqc29uIiwiZGF0YUNoYW5uZWwiLCJib2R5IiwiZGF0YUF1ZGlvcyIsImF1ZGlvX2NsaXBzIiwiZGF0YVNlcmllcyIsImNoYW5uZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsT0FBOEMsUUFBOUNBLE9BQThDO0FBQUEsTUFBckNDLFVBQXFDLFFBQXJDQSxVQUFxQztBQUFBLE1BQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUMxQkMsc0RBQVEsQ0FBQyxJQUFELENBRGtCO0FBQUEsTUFDekRDLFdBRHlEO0FBQUEsTUFDNUNDLGNBRDRDOztBQUdoRSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBSUMsT0FBSixFQUFnQjtBQUN4Q0QsS0FBQyxDQUFDRSxjQUFGO0FBQ0FKLGtCQUFj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QVg7QUFBdUJDLG9CQUFNLEVBQU5BLE1BQXZCO0FBQStCQyx3QkFBVSxFQUFFO0FBQTNDLGFBOUJpQjs7QUFBQTtBQUFBO0FBQUE7QUFnQ3hCZ0IsZUFBRyxDQUFDaEIsVUFBSixHQUFpQixHQUFqQjtBQWhDd0IsNkNBaUNqQjtBQUFFSCxxQkFBTyxFQUFFLElBQVg7QUFBaUJDLHdCQUFVLEVBQUUsSUFBN0I7QUFBbUNDLG9CQUFNLEVBQUUsSUFBM0M7QUFBaURDLHdCQUFVLEVBQUU7QUFBN0QsYUFqQ2lCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFDZUosc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaGFubmVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcbmltcG9ydCBQb2RjYXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0J1xuaW1wb3J0IFNlcmllc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TZXJpZXNMaXN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllcidcblxuY29uc3QgQ2hhbm5lbCA9ICh7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZSB9KSA9PiB7XG5cdGNvbnN0IFtvcGVuUG9kY2FzdCwgc2V0T3BlblBvZGNhc3RdID0gdXNlU3RhdGUobnVsbClcblxuXHRjb25zdCBvcGVuUG9kY2FzdE1vZGFsID0gKGUsIHBvZGNhc3QpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRzZXRPcGVuUG9kY2FzdChwb2RjYXN0KVxuXHR9XG5cblx0Y29uc3Qgb25DbG9zZSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c2V0T3BlblBvZGNhc3QobnVsbClcblx0fVxuXG5cdGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQgdGl0bGU9e2BQb2RjYXN0ICR7Y2hhbm5lbC50aXRsZX1gfT5cblx0XHRcdDxuYXY+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGE+Jmx0OyBCYWNrPC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L25hdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFubmVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgXG5cdFx0XHRcdH19XG5cdFx0XHQ+PC9kaXY+XG5cblx0XHRcdHtvcGVuUG9kY2FzdCAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cblx0XHRcdFx0XHQ8UG9kY2FzdFBsYXllciBhdWRpb0NsaXA9e29wZW5Qb2RjYXN0fSBvbkNsb3NlPXtvbkNsb3NlfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cblx0XHRcdDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxuXHRcdFx0PFNlcmllc0xpc3Qgc2VyaWVzPXtzZXJpZXN9IC8+XG5cdFx0XHQ8UG9kY2FzdExpc3Rcblx0XHRcdFx0YXVkaW9DbGlwcz17YXVkaW9DbGlwc31cblx0XHRcdFx0b3BlblBvZGNhc3RNb2RhbD17b3BlblBvZGNhc3RNb2RhbH1cblx0XHRcdC8+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0bmF2IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDI1JTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjIyNDI2O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDdweCA3cHggMTRweCAjMWIxYzFlLCAtN3B4IC03cHggMTRweCAjMjkyYzJlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRtYXJnaW46IC0zMHB4IDAgMjAgMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5hdiBhIHtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmJhbm5lciB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDI1JTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzIyMjQyNjtcblx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDE0cHggIzFiMWMxZSwgLTdweCAtN3B4IDE0cHggIzI5MmMyZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogMCAwIDExcHggIzIyMjQyNjtcblx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1vZGFsIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdHotaW5kZXg6IDk5OTk5O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdClcbn1cblxuQ2hhbm5lbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSwgcmVzIH0pID0+IHtcblx0dHJ5IHtcblx0XHRsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuXHRcdGxldCBbcmVxQ2hhbm5lbCwgcmVxU2VyaWVzLCByZXFBdWRpb3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCksXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcblx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApXG5cdFx0XSlcblxuXHRcdGlmIChyZXFDaGFubmVsLnN0YXR1cyA+PSA0MDQpIHtcblx0XHRcdHJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXNcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYW5uZWw6IG51bGwsXG5cdFx0XHRcdGF1ZGlvQ2xpcHM6IG51bGwsXG5cdFx0XHRcdHNlcmllczogbnVsbCxcblx0XHRcdFx0c3RhdHVzQ29kZTogcmVxQ2hhbm5lbC5zdGF0dXNcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBnZXR0aW5nIGNoYW5uZWwgZGF0YVxuXHRcdGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG5cdFx0bGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcblx0XHQvLyBnZXR0aW5nIGF1ZGlvcyBkYXRhXG5cdFx0bGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpb3MuanNvbigpXG5cdFx0bGV0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHNcblx0XHQvLyBnZXR0aW5nIGNoaWxlZCBjaGFubmVscyBkYXRhXG5cdFx0bGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG5cdFx0bGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuXG5cdFx0cmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlOiAyMDAgfVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwM1xuXHRcdHJldHVybiB7IGNoYW5uZWw6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHNlcmllczogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/channel.js\n");

/***/ })

})