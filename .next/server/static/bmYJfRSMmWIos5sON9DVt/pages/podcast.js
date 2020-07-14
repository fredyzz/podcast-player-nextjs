module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "06NB":
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Jyeg");


/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__("90Kz");

module.exports = routes().add('index').add('channel', '/:slug.:id', 'channel') //route name, xxxxxx.id, destiny page
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jyeg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mqlx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // *********!!!!! replaced with PodcastPlayer as a modal, to optimize the UX avoiding new API call

const Podcast = ({
  audioClip
}) => {
  return __jsx("div", {
    className: "jsx-2951275398"
  }, __jsx("nav", {
    className: "jsx-2951275398"
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "channel",
    params: {
      slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(audioClip.channel.title),
      id: audioClip.channel.id
    }
  }, __jsx("a", {
    className: "jsx-2951275398"
  }, "Volver"))), __jsx("div", {
    className: "jsx-2951275398" + " " + "cover"
  }, __jsx("img", {
    src: audioClip.urls.image,
    alt: "",
    className: "jsx-2951275398"
  })), __jsx("div", {
    className: "jsx-2951275398" + " " + "info"
  }, __jsx("h1", {
    className: "jsx-2951275398"
  }, audioClip.title), __jsx("p", {
    className: "jsx-2951275398"
  }, "Duration: ", Math.ceil(audioClip.duration / 60), " minutes"), __jsx("audio", {
    controls: true,
    autoPlay: false,
    className: "jsx-2951275398"
  }, __jsx("source", {
    src: audioClip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-2951275398"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2951275398"
  }, ["nav.jsx-2951275398{position:absolute;display:inline-block;width:40px;border-radius:25%;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;padding:8px;margin:15px;}", "nav.jsx-2951275398 a.jsx-2951275398{color:white;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}", ".cover.jsx-2951275398{width:100vw;height:60vh;text-align:center;background:#222426;box-shadow:inset 7px 7px 14px #1b1c1e,inset -7px -7px 14px #292c2e;}", ".cover.jsx-2951275398 img.jsx-2951275398{max-height:80%;max-width:80%;margin:80px auto;border-radius:20px;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;}", ".info.jsx-2951275398{height:40vh;padding-top:5vh;padding-bottom:40px;text-align:center;background:#222426;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;}", "h1.jsx-2951275398{margin:0;font-weight:600;padding:15px;text-transform:uppercase;}", "h2.jsx-2951275398{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}", ".podcast.jsx-2951275398{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}", ".podcast.jsx-2951275398:hover{color:#000;}", ".podcast.jsx-2951275398 h3.jsx-2951275398{margin:0;}", ".podcast.jsx-2951275398 .meta.jsx-2951275398{color:#666;margin-top:0.5em;font-size:0.8em;}"]));
};

Podcast.getInitialProps = async ({
  query
}) => {
  let idAudioClip = query.id; // getting audio clip

  let reqAudioClip = await fetch(`https://api.audioboom.com/audio_clips/${idAudioClip}.mp3`);
  let dataAudioClip = await reqAudioClip.json();
  let audioClip = dataAudioClip.body.audio_clip;
  return {
    audioClip
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Podcast);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mqlx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slug; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06NB");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);

function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ })

/******/ });