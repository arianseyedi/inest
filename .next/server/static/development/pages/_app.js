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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./src/components/common/CustomHead.js":
/*!*********************************************!*\
  !*** ./src/components/common/CustomHead.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomHead; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CustomHead() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    key: "viewport"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "fv/apple-touch-icon.png"
  }), ">", __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "fv/favicon-32x32.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "fv/favicon-16x16.png"
  }), __jsx("link", {
    rel: "manifest",
    href: "fv/site.webmanifest"
  }), __jsx("link", {
    rel: "mask-icon",
    href: "fv/safari-pinned-tab.svg",
    color: "#5bbad5"
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#2b5797"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000"
  }), __jsx("title", null, "Inest.CA"));
}

/***/ }),

/***/ "./src/components/common/FancyQuotation.scss":
/*!***************************************************!*\
  !*** ./src/components/common/FancyQuotation.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/Page.js":
/*!***************************************!*\
  !*** ./src/components/common/Page.js ***!
  \***************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PageBase = props => {
  const getRootClass = () => {
    const {
      classes,
      scrollable = false
    } = props;
    return clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
      [classes.isScrollable]: scrollable
    });
  };

  const getRootStyle = () => {
    const {
      backgroundImage
    } = props;
    return {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover'
    };
  };

  const {
    children
  } = props;
  return __jsx("div", {
    className: getRootClass(),
    style: getRootStyle()
  }, children);
};

const Page = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(({
  spacing,
  palette
}) => ({
  root: {
    flexGrow: 1,
    minWidth: 0,
    // So the Typography noWrap works
    paddingTop: 0,
    backgroundColor: palette.background.default,
    height: '100%'
  },
  isScrollable: {
    overflowY: 'scroll'
  }
}))(PageBase);

/***/ }),

/***/ "./src/components/common/imageSlideshow/fade.scss":
/*!********************************************************!*\
  !*** ./src/components/common/imageSlideshow/fade.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/homePage/HomeIntro.scss":
/*!************************************************!*\
  !*** ./src/components/homePage/HomeIntro.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/servicesPage/ServicePresentation.scss":
/*!**************************************************************!*\
  !*** ./src/components/servicesPage/ServicePresentation.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/config/theme.js":
/*!*****************************!*\
  !*** ./src/config/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2__);


 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiDivider: {
      root: {// Dividers not consistent when zooming.
        // https://github.com/mui-org/material-ui/issues/14815
        // marginTop: 1,
      }
    }
  },
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#FBC02D'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    },
    text: {
      secondary: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2___default.a[300],
      primary: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_2___default.a[900]
    }
  }
});
theme.typography.h6 = {
  '@media (max-width:600px)': {
    fontSize: '0.75rem',
    fontWeight: 'normal'
  },
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  }
};
theme.typography.h3 = {
  '@media (max-width:600px)': {
    fontSize: '2.2rem',
    fontWeight: 'normal'
  },
  '@media (min-width:600px)': {
    fontSize: '2.7rem',
    fontWeight: 'normal'
  }
};
theme.typography.h4 = {
  '@media (max-width:600px)': {
    fontSize: '1.8rem',
    fontWeight: 'normal'
  },
  '@media (min-width:600px)': {
    fontSize: '2.2rem',
    fontWeight: 'normal'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/theme */ "./src/config/theme.js");
/* harmony import */ var _components_common_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Page */ "./src/components/common/Page.js");
/* harmony import */ var _components_common_CustomHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/CustomHead */ "./src/components/common/CustomHead.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_common_FancyQuotation_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common/FancyQuotation.scss */ "./src/components/common/FancyQuotation.scss");
/* harmony import */ var _components_common_FancyQuotation_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_common_FancyQuotation_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_servicesPage_ServicePresentation_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/servicesPage/ServicePresentation.scss */ "./src/components/servicesPage/ServicePresentation.scss");
/* harmony import */ var _components_servicesPage_ServicePresentation_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_servicesPage_ServicePresentation_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_homePage_HomeIntro_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/homePage/HomeIntro.scss */ "./src/components/homePage/HomeIntro.scss");
/* harmony import */ var _components_homePage_HomeIntro_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_homePage_HomeIntro_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_common_imageSlideshow_fade_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/common/imageSlideshow/fade.scss */ "./src/components/common/imageSlideshow/fade.scss");
/* harmony import */ var _components_common_imageSlideshow_fade_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_common_imageSlideshow_fade_scss__WEBPACK_IMPORTED_MODULE_13__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_common_CustomHead__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: _config_theme__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, null), __jsx("div", {
      id: "app",
      className: "jsx-4070764582"
    }, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_9__["PageTransition"], {
      timeout: 300,
      classNames: "page-transition"
    }, __jsx(_components_common_Page__WEBPACK_IMPORTED_MODULE_7__["Page"], {
      background: "red"
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      className: "jsx-4070764582" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4070764582"
    }, "html,body,#root,#app>div{max-width:100%;overflow-x:hidden;height:100vh;width:100%;}#__next>div{max-width:100%;overflow-x:hidden;height:100vh;width:100%;}body{max-width:100%;overflow-x:hidden;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px;}#unselectable-text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus{-webkit-text-fill-color:white;-webkit-box-shadow:0 0 0px 1000px transparent inset;-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;}.page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmlhbi9Eb2N1bWVudHMvUHJvamVjdHMvSW5lc3RDQS9pbmVzdC9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzZCLEFBTThCLEFBTUEsQUFNQSxBQVFVLEFBY0ssQUFLcEIsQUFHQSxBQUlBLEFBR0EsVUFUWixBQUcyQixBQUkzQixBQUcyQixLQWpEUCxBQU1BLEFBTUEsVUFRSSxLQWM4QixHQWpDdkMsQUFNQSxBQU1FLGFBWEosQUFNQSxDQWFVLENBUEgsU0FYcEIsQUFNQSxTQU1tQixFQU9BLEFBcUJuQixBQU9BLGNBZm1ELENBbkJqQyxnQkFDbEIsc0RBTUEsbUNBYUEiLCJmaWxlIjoiL1VzZXJzL2FyaWFuL0RvY3VtZW50cy9Qcm9qZWN0cy9JbmVzdENBL2luZXN0L3NyYy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vY29uZmlnL3RoZW1lJ1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL1BhZ2UnXG5pbXBvcnQgQ3VzdG9tSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9DdXN0b21IZWFkJ1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY29tbW9uL0ZhbmN5UXVvdGF0aW9uLnNjc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc2VydmljZXNQYWdlL1NlcnZpY2VQcmVzZW50YXRpb24uc2NzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9ob21lUGFnZS9Ib21lSW50cm8uc2NzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9jb21tb24vaW1hZ2VTbGlkZXNob3cvZmFkZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEN1c3RvbUhlYWQgLz5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezMwMH0gY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICA8UGFnZSBiYWNrZ3JvdW5kPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICNyb290LFxuICAgICAgICAgICAgI2FwcCA+IGRpdiB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQgPiBkaXYge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICN1bnNlbGVjdGFibGUtdGV4dCB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUxMCsvRWRnZSAqL1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbiAgICAgICAgICAgIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICAgICAgICB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgICAgICAgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbiAgICAgICAgICAgIHNlbGVjdDotd2Via2l0LWF1dG9maWxsLFxuICAgICAgICAgICAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgICAgICAgICBzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/arian/Documents/Projects/InestCA/inest/src/pages/_app.js */")));
  }

}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map