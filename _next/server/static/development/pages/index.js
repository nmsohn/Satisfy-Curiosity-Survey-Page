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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\playground\\next\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


const Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a;
const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(Header)`
	 {
		backgroundcolor: ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_5__["theme"])("colors.primary", "black")};
		marginbottom: 25px;
		position: sticky;
		top: 0px;
		z-index: 99998;
		display: flex;
		overflow: visible;
		height: 72px;
		background: #000;
	}
`;
const RightCol = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a)`
	 {
		text-align: right;
	}
`;
const LeftCol = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a)`
	 {
		text-align: left;
	}
`;
const CenterCol = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a)`
	 {
		text-align: center;
		font-weight: 600;
		text-transform: uppercase;
	}
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  centerColumn,
  rightColumn,
  leftColumn
}) => {
  return __jsx(StyledHeader, {
    theme: "dark",
    className: "header",
    mode: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(LeftCol, {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, leftColumn), __jsx(CenterCol, {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, centerColumn), __jsx(RightCol, {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, rightColumn)));
});

/***/ }),

/***/ "./components/StyledComponents.js":
/*!****************************************!*\
  !*** ./components/StyledComponents.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin: auto;
  color: ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_1__["theme"])("colors.primary", "white")}
  backgroundcolor: ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_1__["theme"])("colors.primary", "black")};
  @media ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_1__["theme"])("device", "laptop")} {  // -> "@media (min-width: ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_1__["theme"])("size", "laptop")})" -> "@media (min-width: 1024px)"
    max-width: 800px;
  }

  @media ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_1__["theme"])("device", "desktop")} {
    max-width: 1400px;
  }
`;

/***/ }),

/***/ "./pages/Hero/Hero.js":
/*!****************************!*\
  !*** ./pages/Hero/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typewriter-effect */ "typewriter-effect");
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\playground\\next\\pages\\Hero\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2`
	 {
		@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
		display: block;
		margin: 0 auto;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-flex: 0;
		-webkit-flex: 0 auto;
		-ms-flex: 0 auto;
		flex: 0 auto;
		font-size: 68px;
		line-height: 60px;
		font-weight: 300;
		text-align: center;
		color: #fff;
	}
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
	 {
		display: flex;
		position: absolute;
		margin-top: 72px;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: auto;
		z-index: 2;
		min-height: 80vh;
		align-items: center;
		display: flex;
		padding-right: 32px;
		padding-left: 32px;
		-webkit-box-align: center;
		background-image: linear-gradient(180deg, #000, rgba(0, 0, 0, 0.89) 61%, transparent);
	}
`;
class Hero extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Section, {
      className: "section-hero",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Discover Local"), __jsx(typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onInit: typewriter => {
        typewriter.typeString("Lessons").pauseFor(1500).deleteAll().typeString("Classes").pauseFor(1500).deleteAll().typeString("Events").start();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Today!")));
  }

}

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _Hero_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hero/Hero */ "./pages/Hero/Hero.js");
/* harmony import */ var _components_StyledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/StyledComponents */ "./components/StyledComponents.js");

var _jsxFileName = "C:\\playground\\next\\pages\\index\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const {
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (({
  data
}) => __jsx(_components_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["Container"], {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  leftColumn: __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Logo"),
  centerColumn: __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Page Name"),
  rightColumn: __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Menu"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_Hero_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}))));

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/index/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\playground\next\pages\index\index.js */"./pages/index/index.js");


/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-tools":
/*!*******************************!*\
  !*** external "styled-tools" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),

/***/ "typewriter-effect":
/*!************************************!*\
  !*** external "typewriter-effect" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typewriter-effect");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map