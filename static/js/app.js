/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Content = __webpack_require__(1);
	
	var MenuBox = function (_React$Component) {
	  _inherits(MenuBox, _React$Component);
	
	  function MenuBox() {
	    _classCallCheck(this, MenuBox);
	
	    var _this = _possibleConstructorReturn(this, (MenuBox.__proto__ || Object.getPrototypeOf(MenuBox)).call(this));
	
	    _this.state = { data: [] };
	    return _this;
	  }
	
	  _createClass(MenuBox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $.ajax({
	        url: "/api/v1/menu/getall",
	        type: 'POST',
	        dataType: 'json',
	        success: function (data, textStatus, xhr) {
	          this.setState({ data: data });
	        }.bind(this),
	        beforeSend: function (xhr) {
	          xhr.setRequestHeader('Authorization', 'Bearer ' + t);
	        }.bind(this)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'nav',
	        { className: 'navbar navbar-default' },
	        React.createElement(
	          'div',
	          { className: 'container' },
	          React.createElement(
	            'div',
	            { className: 'navbar-header' },
	            React.createElement('button', { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' }),
	            React.createElement(
	              'a',
	              { className: 'navbar-brand', href: '#' },
	              'CRM4Loans'
	            )
	          ),
	          React.createElement(
	            'div',
	            { id: 'navbar', className: 'navbar-collapse collapse' },
	            React.createElement(Menu, { data: this.state.data.Items })
	          )
	        )
	      );
	    }
	  }]);
	
	  return MenuBox;
	}(React.Component);
	
	var Menu = function (_React$Component2) {
	  _inherits(Menu, _React$Component2);
	
	  function Menu() {
	    _classCallCheck(this, Menu);
	
	    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
	  }
	
	  _createClass(Menu, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var link;
	      $(".dropdown-menu a").click(function (event) {
	        link = $(this).attr("id");
	        ReactDOM.render(React.createElement(Content, { activemenu: link }), document.getElementById('content'));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'ul',
	        { className: 'nav navbar-nav' },
	        this.props.data && this.props.data.map(function (m, i) {
	          return React.createElement(
	            'li',
	            { key: i, className: 'dropdown' },
	            React.createElement(
	              'a',
	              { className: 'dropdown-toggle', href: m.Link, 'data-toggle': 'dropdown', role: 'button' },
	              ' ',
	              m.Name
	            ),
	            React.createElement(
	              'ul',
	              { className: 'dropdown-menu' },
	              m.Items && m.Items.map(function (mm, ii) {
	                return React.createElement(
	                  'li',
	                  { key: mm.Link },
	                  React.createElement(
	                    'a',
	                    { id: mm.Link },
	                    mm.Name
	                  )
	                );
	              })
	            )
	          );
	        })
	      );
	    }
	  }]);
	
	  return Menu;
	}(React.Component);
	
	ReactDOM.render(React.createElement(MenuBox, null), document.getElementById('menu'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Users = __webpack_require__(2);
	
	var Content = function (_React$Component) {
		_inherits(ContentClass, _React$Component);
	
		function ContentClass() {
			_classCallCheck(this, ContentClass);
	
			var _this = _possibleConstructorReturn(this, (ContentClass.__proto__ || Object.getPrototypeOf(ContentClass)).call(this));
	
			_this.state = {
				activemenu: "users" };
			return _this;
		}
	
		_createClass(ContentClass, [{
			key: "render",
			value: function render() {
				switch (this.props.activemenu) {
					case "users":
						return React.createElement(
							"div",
							null,
							React.createElement(Users, null)
						);
					case "groups":
						return React.createElement(
							"div",
							null,
							React.createElement(Users, null)
						);
	
				}
			}
		}]);
	
		return ContentClass;
	}(React.Component);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Users = function (_React$Component) {
	  _inherits(UsersClass, _React$Component);
	
	  function UsersClass() {
	    _classCallCheck(this, UsersClass);
	
	    return _possibleConstructorReturn(this, (UsersClass.__proto__ || Object.getPrototypeOf(UsersClass)).call(this));
	  }
	
	  _createClass(UsersClass, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        "Users component"
	      );
	    }
	  }]);
	
	  return UsersClass;
	}(React.Component);

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map