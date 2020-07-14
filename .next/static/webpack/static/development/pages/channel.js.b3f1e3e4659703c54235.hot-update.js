webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* harmony import */ var _components_PodcastList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PodcastList */ \"./components/PodcastList.js\");\n/* harmony import */ var _components_SeriesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SeriesList */ \"./components/SeriesList.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PodcastPlayer */ \"./components/PodcastPlayer.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Channel = function Channel(_ref) {\n  _s();\n\n  var channel = _ref.channel,\n      audioClips = _ref.audioClips,\n      series = _ref.series,\n      statusCode = _ref.statusCode;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      openPodcast = _useState[0],\n      setOpenPodcast = _useState[1];\n\n  var openPodcastModal = function openPodcastModal(e, podcast) {\n    e.preventDefault();\n    setOpenPodcast(podcast);\n  };\n\n  var onClose = function onClose(e) {\n    e.preventDefault();\n    setOpenPodcast(null);\n  };\n\n  if (statusCode !== 200) {\n    return __jsx(_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      statusCode: statusCode\n    });\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    title: \"Podcast \".concat(channel.title)\n  }, __jsx(\"nav\", {\n    className: \"jsx-3532654410\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\"\n  }, __jsx(\"a\", {\n    className: \"jsx-3532654410\"\n  }, \"Volver\"))), __jsx(\"div\", {\n    style: {\n      backgroundImage: \"url(\".concat(channel.urls.banner_image.original, \")\")\n    },\n    className: \"jsx-3532654410\" + \" \" + \"banner\"\n  }), openPodcast && __jsx(\"div\", {\n    className: \"jsx-3532654410\" + \" \" + \"modal\"\n  }, __jsx(_components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    audioClip: openPodcast,\n    onClose: onClose\n  })), __jsx(\"h1\", {\n    className: \"jsx-3532654410\"\n  }, channel.title), __jsx(_components_SeriesList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    series: series\n  }), __jsx(_components_PodcastList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    audioClips: audioClips,\n    openPodcastModal: openPodcastModal\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    id: \"3532654410\"\n  }, \"nav.jsx-3532654410{position:absolute;display:inline-block;border-radius:25%;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;padding:8px;margin:10px;}nav.jsx-3532654410 a.jsx-3532654410{color:white;-webkit-text-decoration:none;text-decoration:none;}.banner.jsx-3532654410{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;}h1.jsx-3532654410{font-weight:600;text-shadow:0 0 11px #ffffff;background:rgba(255,255,255,0.3);padding:5px;text-align:center;}.modal.jsx-3532654410{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:black;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVkeXp6L0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL25leHRKcy9wb2RjYXN0L3BhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RlLEFBR3dCLEFBVU4sQUFLRCxBQVNLLEFBUUQsV0FoQkksQ0FMRSxHQXNCZixDQVJ1QixFQXhCUixHQWlDZCxPQUNDLEVBbEJvQixNQW1CbkIsR0FsQ1MsTUF3QmtCLEFBV3RCLFlBbENLLENBZUcsQ0FvQkwsR0ExQmxCLGNBUnlELEFBbUN6RCxFQVphLEVBUk8sVUFTRCxTQVJzQyxTQVN6RCx1QkF4QmEsWUFDQSxXQWViLENBZEEiLCJmaWxlIjoiL1VzZXJzL2ZyZWR5enovRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvbmV4dEpzL3BvZGNhc3QvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXG5pbXBvcnQgUG9kY2FzdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0TGlzdCdcbmltcG9ydCBTZXJpZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvU2VyaWVzTGlzdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUG9kY2FzdFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXInXG5cbmNvbnN0IENoYW5uZWwgPSAoeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGUgfSkgPT4ge1xuXHRjb25zdCBbb3BlblBvZGNhc3QsIHNldE9wZW5Qb2RjYXN0XSA9IHVzZVN0YXRlKG51bGwpXG5cblx0Y29uc3Qgb3BlblBvZGNhc3RNb2RhbCA9IChlLCBwb2RjYXN0KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c2V0T3BlblBvZGNhc3QocG9kY2FzdClcblx0fVxuXG5cdGNvbnN0IG9uQ2xvc2UgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHNldE9wZW5Qb2RjYXN0KG51bGwpXG5cdH1cblxuXHRpZiAoc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG5cdFx0cmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPlxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0IHRpdGxlPXtgUG9kY2FzdCAke2NoYW5uZWwudGl0bGV9YH0+XG5cdFx0XHQ8bmF2PlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxhPlZvbHZlcjwvYT5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImJhbm5lclwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0pYFxuXHRcdFx0XHR9fVxuXHRcdFx0PjwvZGl2PlxuXG5cdFx0XHR7b3BlblBvZGNhc3QgJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG5cdFx0XHRcdFx0PFBvZGNhc3RQbGF5ZXIgYXVkaW9DbGlwPXtvcGVuUG9kY2FzdH0gb25DbG9zZT17b25DbG9zZX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXG5cdFx0XHQ8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cblx0XHRcdDxTZXJpZXNMaXN0IHNlcmllcz17c2VyaWVzfSAvPlxuXHRcdFx0PFBvZGNhc3RMaXN0XG5cdFx0XHRcdGF1ZGlvQ2xpcHM9e2F1ZGlvQ2xpcHN9XG5cdFx0XHRcdG9wZW5Qb2RjYXN0TW9kYWw9e29wZW5Qb2RjYXN0TW9kYWx9XG5cdFx0XHQvPlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdG5hdiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyNSU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzIyMjQyNjtcblx0XHRcdFx0XHRib3gtc2hhZG93OiA3cHggN3B4IDE0cHggIzFiMWMxZSwgLTdweCAtN3B4IDE0cHggIzI5MmMyZTtcblx0XHRcdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2IGEge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYmFubmVyIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjUlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjIyNDI2O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDdweCA3cHggMTRweCAjMWIxYzFlLCAtN3B4IC03cHggMTRweCAjMjkyYzJlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0dGV4dC1zaGFkb3c6IDAgMCAxMXB4ICNmZmZmZmY7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubW9kYWwge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk5OTk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L0xheW91dD5cblx0KVxufVxuXG5DaGFubmVsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5LCByZXMgfSkgPT4ge1xuXHR0cnkge1xuXHRcdGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxuXG5cdFx0bGV0IFtyZXFDaGFubmVsLCByZXFTZXJpZXMsIHJlcUF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcblx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApLFxuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcblx0XHRdKVxuXG5cdFx0aWYgKHJlcUNoYW5uZWwuc3RhdHVzID49IDQwNCkge1xuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSByZXFDaGFubmVsLnN0YXR1c1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhbm5lbDogbnVsbCxcblx0XHRcdFx0YXVkaW9DbGlwczogbnVsbCxcblx0XHRcdFx0c2VyaWVzOiBudWxsLFxuXHRcdFx0XHRzdGF0dXNDb2RlOiByZXFDaGFubmVsLnN0YXR1c1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGdldHRpbmcgY2hhbm5lbCBkYXRhXG5cdFx0bGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcblx0XHRsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXHRcdC8vIGdldHRpbmcgYXVkaW9zIGRhdGFcblx0XHRsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcblx0XHRsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXHRcdC8vIGdldHRpbmcgY2hpbGVkIGNoYW5uZWxzIGRhdGFcblx0XHRsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcblx0XHRsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzXG5cblx0XHRyZXR1cm4geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGU6IDIwMCB9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHJlcy5zdGF0dXNDb2RlID0gNTAzXG5cdFx0cmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxcbiJdfQ== */\\n/*@ sourceURL=/Users/fredyzz/Documents/Cursos/Platzi/nextJs/podcast/pages/channel.js */\"));\n};\n\n_s(Channel, \"pEhj3SwlPLKnCzInCkhwZ80CvFI=\");\n\n_c = Channel;\n\nChannel.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, res, idChannel, _yield$Promise$all, _yield$Promise$all2, reqChannel, reqSeries, reqAudios, dataChannel, channel, dataAudios, audioClips, dataSeries, series;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query, res = _ref2.res;\n            _context.prev = 1;\n            idChannel = query.id;\n            _context.next = 5;\n            return Promise.all([fetch(\"https://api.audioboom.com/channels/\".concat(idChannel)), fetch(\"https://api.audioboom.com/channels/\".concat(idChannel, \"/child_channels\")), fetch(\"https://api.audioboom.com/channels/\".concat(idChannel, \"/audio_clips\"))]);\n\n          case 5:\n            _yield$Promise$all = _context.sent;\n            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_yield$Promise$all, 3);\n            reqChannel = _yield$Promise$all2[0];\n            reqSeries = _yield$Promise$all2[1];\n            reqAudios = _yield$Promise$all2[2];\n\n            if (!(reqChannel.status >= 404)) {\n              _context.next = 13;\n              break;\n            }\n\n            res.statusCode = reqChannel.status;\n            return _context.abrupt(\"return\", {\n              channel: null,\n              audioClips: null,\n              series: null,\n              statusCode: reqChannel.status\n            });\n\n          case 13:\n            _context.next = 15;\n            return reqChannel.json();\n\n          case 15:\n            dataChannel = _context.sent;\n            channel = dataChannel.body.channel; // getting audios data\n\n            _context.next = 19;\n            return reqAudios.json();\n\n          case 19:\n            dataAudios = _context.sent;\n            audioClips = dataAudios.body.audio_clips; // getting chiled channels data\n\n            _context.next = 23;\n            return reqSeries.json();\n\n          case 23:\n            dataSeries = _context.sent;\n            series = dataSeries.body.channels;\n            return _context.abrupt(\"return\", {\n              channel: channel,\n              audioClips: audioClips,\n              series: series,\n              statusCode: 200\n            });\n\n          case 28:\n            _context.prev = 28;\n            _context.t0 = _context[\"catch\"](1);\n            res.statusCode = 503;\n            return _context.abrupt(\"return\", {\n              channel: null,\n              audioClips: null,\n              series: null,\n              statusCode: 503\n            });\n\n          case 32:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 28]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Channel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Channel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFubmVsLmpzPzgxODIiXSwibmFtZXMiOlsiQ2hhbm5lbCIsImNoYW5uZWwiLCJhdWRpb0NsaXBzIiwic2VyaWVzIiwic3RhdHVzQ29kZSIsInVzZVN0YXRlIiwib3BlblBvZGNhc3QiLCJzZXRPcGVuUG9kY2FzdCIsIm9wZW5Qb2RjYXN0TW9kYWwiLCJlIiwicG9kY2FzdCIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZSIsInRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwidXJscyIsImJhbm5lcl9pbWFnZSIsIm9yaWdpbmFsIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiLCJpZENoYW5uZWwiLCJpZCIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInJlcUNoYW5uZWwiLCJyZXFTZXJpZXMiLCJyZXFBdWRpb3MiLCJzdGF0dXMiLCJqc29uIiwiZGF0YUNoYW5uZWwiLCJib2R5IiwiZGF0YUF1ZGlvcyIsImF1ZGlvX2NsaXBzIiwiZGF0YVNlcmllcyIsImNoYW5uZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsT0FBOEMsUUFBOUNBLE9BQThDO0FBQUEsTUFBckNDLFVBQXFDLFFBQXJDQSxVQUFxQztBQUFBLE1BQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUMxQkMsc0RBQVEsQ0FBQyxJQUFELENBRGtCO0FBQUEsTUFDekRDLFdBRHlEO0FBQUEsTUFDNUNDLGNBRDRDOztBQUdoRSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBSUMsT0FBSixFQUFnQjtBQUN4Q0QsS0FBQyxDQUFDRSxjQUFGO0FBQ0FKLGtCQUFj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QVg7QUFBdUJDLG9CQUFNLEVBQU5BLE1BQXZCO0FBQStCQyx3QkFBVSxFQUFFO0FBQTNDLGFBOUJpQjs7QUFBQTtBQUFBO0FBQUE7QUFnQ3hCZ0IsZUFBRyxDQUFDaEIsVUFBSixHQUFpQixHQUFqQjtBQWhDd0IsNkNBaUNqQjtBQUFFSCxxQkFBTyxFQUFFLElBQVg7QUFBaUJDLHdCQUFVLEVBQUUsSUFBN0I7QUFBbUNDLG9CQUFNLEVBQUUsSUFBM0M7QUFBaURDLHdCQUFVLEVBQUU7QUFBN0QsYUFqQ2lCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFDZUosc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaGFubmVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcbmltcG9ydCBQb2RjYXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0J1xuaW1wb3J0IFNlcmllc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TZXJpZXNMaXN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllcidcblxuY29uc3QgQ2hhbm5lbCA9ICh7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZSB9KSA9PiB7XG5cdGNvbnN0IFtvcGVuUG9kY2FzdCwgc2V0T3BlblBvZGNhc3RdID0gdXNlU3RhdGUobnVsbClcblxuXHRjb25zdCBvcGVuUG9kY2FzdE1vZGFsID0gKGUsIHBvZGNhc3QpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRzZXRPcGVuUG9kY2FzdChwb2RjYXN0KVxuXHR9XG5cblx0Y29uc3Qgb25DbG9zZSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c2V0T3BlblBvZGNhc3QobnVsbClcblx0fVxuXG5cdGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQgdGl0bGU9e2BQb2RjYXN0ICR7Y2hhbm5lbC50aXRsZX1gfT5cblx0XHRcdDxuYXY+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0PGE+Vm9sdmVyPC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L25hdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFubmVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgXG5cdFx0XHRcdH19XG5cdFx0XHQ+PC9kaXY+XG5cblx0XHRcdHtvcGVuUG9kY2FzdCAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cblx0XHRcdFx0XHQ8UG9kY2FzdFBsYXllciBhdWRpb0NsaXA9e29wZW5Qb2RjYXN0fSBvbkNsb3NlPXtvbkNsb3NlfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cblx0XHRcdDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxuXHRcdFx0PFNlcmllc0xpc3Qgc2VyaWVzPXtzZXJpZXN9IC8+XG5cdFx0XHQ8UG9kY2FzdExpc3Rcblx0XHRcdFx0YXVkaW9DbGlwcz17YXVkaW9DbGlwc31cblx0XHRcdFx0b3BlblBvZGNhc3RNb2RhbD17b3BlblBvZGNhc3RNb2RhbH1cblx0XHRcdC8+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0bmF2IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDI1JTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjIyNDI2O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDdweCA3cHggMTRweCAjMWIxYzFlLCAtN3B4IC03cHggMTRweCAjMjkyYzJlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRuYXYgYSB7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5iYW5uZXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyNSU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyMjI0MjY7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogN3B4IDdweCAxNHB4ICMxYjFjMWUsIC03cHggLTdweCAxNHB4ICMyOTJjMmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMSB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogMCAwIDExcHggI2ZmZmZmZjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tb2RhbCB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbkNoYW5uZWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnksIHJlcyB9KSA9PiB7XG5cdHRyeSB7XG5cdFx0bGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG5cblx0XHRsZXQgW3JlcUNoYW5uZWwsIHJlcVNlcmllcywgcmVxQXVkaW9zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYCksXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKVxuXHRcdF0pXG5cblx0XHRpZiAocmVxQ2hhbm5lbC5zdGF0dXMgPj0gNDA0KSB7XG5cdFx0XHRyZXMuc3RhdHVzQ29kZSA9IHJlcUNoYW5uZWwuc3RhdHVzXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFubmVsOiBudWxsLFxuXHRcdFx0XHRhdWRpb0NsaXBzOiBudWxsLFxuXHRcdFx0XHRzZXJpZXM6IG51bGwsXG5cdFx0XHRcdHN0YXR1c0NvZGU6IHJlcUNoYW5uZWwuc3RhdHVzXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0dGluZyBjaGFubmVsIGRhdGFcblx0XHRsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuXHRcdGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXG5cdFx0Ly8gZ2V0dGluZyBhdWRpb3MgZGF0YVxuXHRcdGxldCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKVxuXHRcdGxldCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzXG5cdFx0Ly8gZ2V0dGluZyBjaGlsZWQgY2hhbm5lbHMgZGF0YVxuXHRcdGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuXHRcdGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcblxuXHRcdHJldHVybiB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZTogMjAwIH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0cmVzLnN0YXR1c0NvZGUgPSA1MDNcblx0XHRyZXR1cm4geyBjaGFubmVsOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzZXJpZXM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/channel.js\n");

/***/ })

})