webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return this.props.children;\n    }\n  }\n});\n\nvar Dashboard = _react2.default.createClass({\n  displayName: 'Dashboard',\n  render: function render() {\n    var token = _auth2.default.getToken();\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Dashboard'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'You made it!'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        token\n      )\n    );\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var _this3 = this;\n\n    var token = _auth2.default.getToken();\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n      if (data) {\n        this.setState({\n          feeds: data\n        });\n      } else {\n        this.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      _this3.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'table',\n      { className: 'pure-table pure-table-horizontal' },\n      _react2.default.createElement(\n        'thead',\n        null,\n        _react2.default.createElement(\n          'tr',\n          null,\n          _react2.default.createElement(\n            'th',\n            null,\n            'Feed Name(Unique)'\n          ),\n          _react2.default.createElement('th', null),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Model'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Year'\n          )\n        )\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IGF1dGgubG9nZ2VkSW4oKVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVBdXRoKGxvZ2dlZEluKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogbG9nZ2VkSW5cbiAgICB9KVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBhdXRoLm9uQ2hhbmdlID0gdGhpcy51cGRhdGVBdXRoXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGlmIChwYXRobmFtZS5pbmRleE9mKCdsb2dpbicpID4gLTEpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvY3VyYXRlLycpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdyZWdpc3Rlci9jb21wbGV0ZScpID4gLTEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICA8SGVsbG9Db250YWluZXIgd2VsY29tZU1zZz0nV2VsY29tZSB0byBnb29kIG5ld3MgcHJvamVjdC4gU2lnbiB1cCB0byBjb250aW51ZS4nIC8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ2xvZ2luJykgPiAtMSkgIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICA8SGVsbG9Db250YWluZXIgd2VsY29tZU1zZz0nV2VsY29tZSB0byBnb29kIG5ld3MgcHJvamVjdC4gTG9naW4gdG8gY29udGludWUuJy8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gKHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgfVxuXG4gIH1cbn0pXG5cbmNvbnN0IERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxwPllvdSBtYWRlIGl0ITwvcD5cbiAgICAgICAgPHA+e3Rva2VufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnJlZnMuZW1haWwudmFsdWVcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcblxuICAgIGF1dGguTG9naW5DdXJhdG9yKGVtYWlsLCBwYXNzLCAobG9nZ2VkSW4sIG1zZykgPT4ge1xuICAgICAgaWYgKCFsb2dnZWRJbilcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2d9KVxuXG4gICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cImVtYWlsXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiRW1haWwgSWRcIiAgcmVxdWlyZWQvPjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cInBhc3NcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5BYm91dDwvaDE+XG4gIH1cbn0pXG5cbmNvbnN0IExvZ291dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0aC5sb2dvdXQoKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHA+WW91IGFyZSBub3cgbG9nZ2VkIG91dDwvcD5cbiAgfVxufSlcblxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlKSB7XG4gIGlmICghYXV0aC5sb2dnZWRJbigpKSB7XG4gICAgcmVwbGFjZSh7XG4gICAgICBwYXRobmFtZTogJy9jdXJhdGUvbG9naW4nLFxuICAgICAgc3RhdGU6IHsgbmV4dFBhdGhuYW1lOiBuZXh0U3RhdGUubG9jYXRpb24ucGF0aG5hbWUgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgUmVnaXN0ZXJDb21wbGV0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuICAgIGNvbnN0IGZpcnN0X25hbWUgPSB0aGlzLnJlZnMuZmlyc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IGxhc3RfbmFtZSA9IHRoaXMucmVmcy5sYXN0X25hbWUudmFsdWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZVxuXG4gICAgY29uc3QgeyBlbWFpbF9zaGEgfSA9IHRoaXMucHJvcHMucGFyYW1zXG4gICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYXV0aC5Db21wbGV0ZVJlZ2lzdHJhdGlvbihlbWFpbF9zaGEsIHBhc3MsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIChzdWNjZXNzLCBtc2cpID0+IHtcbiAgICAgIGlmICghc3VjY2Vzcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJywgbXNnKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvZGFzaGJvYXJkJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSB1c2VybmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJsYXN0X25hbWVcIiAgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJwYXNzXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5TaWduIHVwIGFzIGN1cmF0b3I8L2J1dHRvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ2luXCI+TG9nIGluPC9MaW5rPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgU291cmNlRmVlZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVlZHM6IFtdLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAgIHRoaXMuZmV0Y2hGZWVkcygpXG4gIH0sXG5cbiAgZmV0Y2hGZWVkcygpe1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG4gICAgJC5hamF4KHtcbiAgICB1cmw6IFwiL2N1cmF0ZS9saXN0LXNvdXJjZS1mZWVkcy9cIixcbiAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiggeGhyICkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIgKFwiQXV0aG9yaXphdGlvblwiLCBcIlRva2VuIFwiICsgdG9rZW4pXG4gICAgfVxuICB9KS5zdWNjZXNzKGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgaWYoZGF0YSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlZWRzOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuZXJyb3IoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZSBwdXJlLXRhYmxlLWhvcml6b250YWxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVlZCBOYW1lKFVuaXF1ZSk8L3RoPlxuICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxuICAgICAgICAgICAgPHRoPlllYXI8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59KVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9jdXJhdGVcIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ291dFwiIGNvbXBvbmVudD17TG9nb3V0fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJhYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInNvdXJjZWZlZWRzXCIgY29tcG9uZW50PXtTb3VyY2VGZWVkc30gb25FbnRlcj17cmVxdWlyZUF1dGh9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicmVnaXN0ZXIvY29tcGxldGUvOmVtYWlsX3NoYVwiIGNvbXBvbmVudD17UmVnaXN0ZXJDb21wbGV0ZX0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJkYXNoYm9hcmRcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0gb25FbnRlcj17cmVxdWlyZUF1dGh9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY3VyYXRvci1hcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7O0FBQUE7O0FBREE7QUFFQTs7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQVdBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXBCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBO0FBZkE7QUEzQ0E7QUFBQTtBQUNBO0FBK0RBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7OztBQURBO0FBRUE7Ozs7QUFGQTtBQUdBOzs7QUFBQTtBQUhBO0FBREE7QUFKQTtBQUFBO0FBQ0E7QUFhQTs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBYUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBTkE7QUFuQkE7QUFpQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFEQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUFBOztBQVRBO0FBVUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWxDQTtBQUFBO0FBQ0E7QUFtREE7O0FBQ0E7QUFDQTs7OztBQUFBO0FBRkE7QUFBQTtBQUNBO0FBS0E7O0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7OztBQUFBO0FBTkE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTkE7QUFsQkE7QUE4QkE7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTtBQUNBO0FBVkE7QUFZQTtBQUNBOztBQUFBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOztBQUFBOztBQWpCQTtBQWtCQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7O0FBckJBO0FBREE7QUEvQkE7QUFBQTtBQUNBO0FBMERBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQVZBO0FBYUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFoQ0E7QUF3Q0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFDQTs7O0FBQ0E7Ozs7QUFEQTtBQUVBO0FBQ0E7Ozs7QUFIQTtBQUlBOzs7O0FBSkE7QUFEQTtBQURBO0FBREE7QUF6Q0E7QUFBQTtBQUNBO0FBdURBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})