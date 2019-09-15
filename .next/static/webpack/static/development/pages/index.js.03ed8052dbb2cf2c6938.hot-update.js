webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Content */ "./components/Content.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Quote */ "./components/Quote.js");
/* harmony import */ var _lib_quotes_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/quotes-api */ "./lib/quotes-api.js");



var _jsxFileName = "C:\\Users\\otame\\Downloads\\ccoss\\kanye-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var HELP_TEXT = {
  fetch: 'With an external fetch',
  'api-routes': 'With API routes'
};

var Index = function Index(_ref) {
  var quotes = _ref.quotes;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\"Kanye Quotes\""), quotes.map(function (_ref2) {
    var id = _ref2.id,
        quote = _ref2.quote;
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_components_Quote__WEBPACK_IMPORTED_MODULE_8__["default"], {
      text: quote,
      helpText: HELP_TEXT[id],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  })));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var req, getHost, quotes;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref3.req;

            getHost = function getHost(path) {
              if (!req) return path;
              return req.headers.host + path;
            };

            _context.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
            _context.t1 = {};
            _context.next = 6;
            return Object(_lib_quotes_api__WEBPACK_IMPORTED_MODULE_9__["getQuote"])('https://api.kanye.rest');

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = {
              id: 'fetch'
            };
            _context.t4 = (0, _context.t0)(_context.t1, _context.t2, _context.t3);
            _context.t5 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
            _context.t6 = {};
            _context.next = 13;
            return Object(_lib_quotes_api__WEBPACK_IMPORTED_MODULE_9__["getQuote"])(getHost('api/quote'));

          case 13:
            _context.t7 = _context.sent;
            _context.t8 = {
              id: 'api-routes'
            };
            _context.t9 = (0, _context.t5)(_context.t6, _context.t7, _context.t8);
            quotes = [_context.t4, _context.t9];
            return _context.abrupt("return", {
              quotes: quotes
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.03ed8052dbb2cf2c6938.hot-update.js.map