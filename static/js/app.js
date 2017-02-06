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
	
	var _content = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	        ReactDOM.render(React.createElement(_content.Content, { activemenu: link }), document.getElementById('content'));
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Content = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _users = __webpack_require__(2);
	
	var _groups = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Content = exports.Content = function (_React$Component) {
		_inherits(ContentClass, _React$Component);
	
		function ContentClass() {
			_classCallCheck(this, ContentClass);
	
			var _this = _possibleConstructorReturn(this, (ContentClass.__proto__ || Object.getPrototypeOf(ContentClass)).call(this));
	
			_this.state = {
				activemenu: "users" };
			return _this;
		}
	
		_createClass(ContentClass, [{
			key: 'render',
			value: function render() {
				switch (this.props.activemenu) {
					case "users":
						return React.createElement(
							'div',
							null,
							React.createElement(_users.Users, null)
						);
					case "groups":
						return React.createElement(
							'div',
							null,
							React.createElement(_groups.Groups, null)
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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Users = exports.Users = function (_React$Component) {
	    _inherits(UsersClass, _React$Component);
	
	    function UsersClass() {
	        _classCallCheck(this, UsersClass);
	
	        var _this = _possibleConstructorReturn(this, (UsersClass.__proto__ || Object.getPrototypeOf(UsersClass)).call(this));
	
	        _this.state = {
	            selected: 0,
	            selectedUser: {
	                login: "",
	                name: "",
	                phone: ""
	            }
	        };
	        _this.selectUser = _this.selectUser.bind(_this);
	        _this.deselectUser = _this.deselectUser.bind(_this);
	        //        this.showEditWindow=this.showEditWindow.bind(this);
	        return _this;
	    }
	
	    _createClass(UsersClass, [{
	        key: "selectUser",
	        value: function selectUser(user) {
	
	            this.setState({ selected: this.state.selected + 1,
	                selectedUser: user });
	        }
	    }, {
	        key: "deselectUser",
	        value: function deselectUser() {
	            this.setState({ selected: this.state.selected - 1,
	                selectedUser: {
	                    login: "",
	                    name: "",
	                    phone: "" } });
	        }
	
	        // showEditWindow() {
	        //     this.setState({editWindow:true});
	        // }
	
	
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(EditWindow, { user: this.state.selectedUser }),
	                React.createElement(
	                    "h2",
	                    null,
	                    "Users component"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "btn-group", role: "group", "aria-label": "..." },
	                    React.createElement(
	                        "button",
	                        { type: "button", className: "btn btn-default" },
	                        "Add new user"
	                    ),
	                    React.createElement(ButtonEditUser, { visible: this.state.selected,
	                        showEditWindow: this.showEditWindow }),
	                    React.createElement(ButtonDeleteUser, { visible: this.state.selected })
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(UL, { select: this.selectUser,
	                        deselect: this.deselectUser })
	                )
	            );
	        }
	    }]);
	
	    return UsersClass;
	}(React.Component);
	
	var ButtonDeleteUser = function (_React$Component2) {
	    _inherits(ButtonDeleteUser, _React$Component2);
	
	    function ButtonDeleteUser() {
	        _classCallCheck(this, ButtonDeleteUser);
	
	        return _possibleConstructorReturn(this, (ButtonDeleteUser.__proto__ || Object.getPrototypeOf(ButtonDeleteUser)).call(this));
	    }
	
	    _createClass(ButtonDeleteUser, [{
	        key: "render",
	        value: function render() {
	
	            if (this.props.visible > 0) {
	                return React.createElement(
	                    "button",
	                    { type: "button", className: "btn btn-default" },
	                    "Delete user"
	                );
	            }
	            return null;
	        }
	    }]);
	
	    return ButtonDeleteUser;
	}(React.Component);
	
	var ButtonEditUser = function (_React$Component3) {
	    _inherits(ButtonEditUser, _React$Component3);
	
	    function ButtonEditUser(props) {
	        _classCallCheck(this, ButtonEditUser);
	
	        return _possibleConstructorReturn(this, (ButtonEditUser.__proto__ || Object.getPrototypeOf(ButtonEditUser)).call(this, props));
	    }
	    // showEditWindow() {
	    //     EditWindow.setState({visible:true})
	    // }
	
	    _createClass(ButtonEditUser, [{
	        key: "render",
	        value: function render() {
	
	            if (this.props.visible == 1) {
	                return React.createElement(
	                    "button",
	                    { type: "button", className: "btn btn-default", "data-toggle": "modal", "data-target": "#modalWindowEditUser" },
	                    "Edit user"
	                ) //onClick={this.props.showEditWindow.bind(this)}
	                ;
	            }
	            return null;
	        }
	    }]);
	
	    return ButtonEditUser;
	}(React.Component);
	
	var UL = exports.UL = function (_React$Component4) {
	    _inherits(UserList, _React$Component4);
	
	    function UserList(props) {
	        _classCallCheck(this, UserList);
	
	        var _this4 = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));
	
	        _this4.state = {
	            users: []
	
	        };
	        return _this4;
	    }
	
	    _createClass(UserList, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            $.ajax({
	                url: "/api/v1/users/getall",
	                type: 'POST',
	                dataType: 'json',
	                success: function (data, textStatus, xhr) {
	                    this.setState({ users: data });
	                }.bind(this),
	                beforeSend: function (xhr) {
	                    xhr.setRequestHeader('Authorization', 'Bearer ' + t);
	                }.bind(this)
	            });
	        }
	    }, {
	        key: "changeUserSelection",
	        value: function changeUserSelection(event) {
	            if (event.target.checked) {
	                this.props.select(this.state.users[event.target.id]);
	            } else {
	                this.props.deselect();
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "table",
	                { className: "table table-striped table-hover" },
	                React.createElement(
	                    "thead",
	                    null,
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement("td", null),
	                        React.createElement(
	                            "td",
	                            null,
	                            "\u2116"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            "Login"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            "Name"
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            "Phone number"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "tbody",
	                    null,
	                    this.state.users && this.state.users.map(function (m, i) {
	                        return React.createElement(
	                            "tr",
	                            { key: i },
	                            React.createElement(
	                                "td",
	                                null,
	                                React.createElement("input", { type: "checkbox", id: i, onChange: this.changeUserSelection.bind(this) })
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                i
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                m.Login
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                m.Name
	                            ),
	                            React.createElement(
	                                "td",
	                                null,
	                                m.Phone
	                            )
	                        );
	                    }.bind(this))
	                )
	            );
	        }
	    }]);
	
	    return UserList;
	}(React.Component);
	
	var EditWindow = exports.EditWindow = function (_React$Component5) {
	    _inherits(EditUserWindow, _React$Component5);
	
	    function EditUserWindow(props) {
	        _classCallCheck(this, EditUserWindow);
	
	        var _this5 = _possibleConstructorReturn(this, (EditUserWindow.__proto__ || Object.getPrototypeOf(EditUserWindow)).call(this, props));
	
	        _this5.state = {
	            user: {
	                login: "",
	                name: "",
	                phone: ""
	            }
	        };
	
	        // this.state={
	        //     visible: false
	        // }
	
	        return _this5;
	    }
	
	    _createClass(EditUserWindow, [{
	        key: "render",
	        value: function render() {
	            //       if (this.props.visible) {
	            if (this.props.user == undefined) {
	                this.state = {
	                    user: {
	                        login: "",
	                        name: "",
	                        phone: ""
	                    } };
	            } else {
	                this.state = {
	                    user: this.props.user
	                };
	            }
	            return React.createElement(
	                "div",
	                { className: "modal fade", id: "modalWindowEditUser" },
	                React.createElement(
	                    "div",
	                    { className: "modal-dialog", role: "document" },
	                    React.createElement(
	                        "div",
	                        { className: "modal-content" },
	                        React.createElement(
	                            "div",
	                            { className: "modal-header" },
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
	                                React.createElement("span", { "aria-hidden": "true" })
	                            ),
	                            "Edit User Information"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "modal-body" },
	                            React.createElement(
	                                "div",
	                                { className: "input-group" },
	                                React.createElement(
	                                    "span",
	                                    { className: "input-group-addon" },
	                                    "Login"
	                                ),
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Login", value: this.state.user.Login })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "input-group" },
	                                React.createElement(
	                                    "span",
	                                    { className: "input-group-addon" },
	                                    "Full name"
	                                ),
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Full name" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "input-group" },
	                                React.createElement(
	                                    "span",
	                                    { className: "input-group-addon" },
	                                    "Phone number"
	                                ),
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Phone number" })
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "modal-footer" },
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
	                                "Close"
	                            ),
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "btn btn-primary" },
	                                "Save changes"
	                            )
	                        )
	                    )
	                )
	            );
	            // } else {
	            //     return (null)
	            // }
	        }
	    }]);
	
	    return EditUserWindow;
	}(React.Component);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Groups = exports.Groups = function (_React$Component) {
	  _inherits(GroupsClass, _React$Component);
	
	  function GroupsClass() {
	    _classCallCheck(this, GroupsClass);
	
	    return _possibleConstructorReturn(this, (GroupsClass.__proto__ || Object.getPrototypeOf(GroupsClass)).call(this));
	  }
	
	  _createClass(GroupsClass, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        "Groups component"
	      );
	    }
	  }]);
	
	  return GroupsClass;
	}(React.Component);

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map