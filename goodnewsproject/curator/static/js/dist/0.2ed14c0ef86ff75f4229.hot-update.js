webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopLeftView = _react2.default.createClass({\n  displayName: 'DashBoardTopLeftView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '40px',\n      padding: '10px',\n      borderBottom: '1px solid #2ecc71'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    var dashActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    if (!sfActive && !curateActive) {\n      dashActive = true;\n    }\n    console.log(dashActive);\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1', style: { fontSize: '12px', paddingTop: '5px' } },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1' },\n        dashActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        sfActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        curateActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-gs', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          )\n        )\n      )\n    );\n  }\n});\n\nvar DashboardView = _react2.default.createClass({\n  displayName: 'DashboardView',\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g' },\n      _react2.default.createElement('div', { className: 'pure-u-2-24' }),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-20-24' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-g' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1-3' },\n            _react2.default.createElement(DashBoardTopLeftView, { pathname: pathname, username: 'ybv' })\n          ),\n          _react2.default.createElement('div', { className: 'pure-u-2-3' })\n        )\n      ),\n      _react2.default.createElement('div', { className: 'pure-u-2-24' })\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return this.props.children;\n    }\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'table',\n      { className: 'pure-table pure-table-horizontal' },\n      _react2.default.createElement(\n        'thead',\n        null,\n        _react2.default.createElement(\n          'tr',\n          null,\n          _react2.default.createElement(\n            'th',\n            null,\n            'Feed Name(Unique)'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Url'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Added By'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'tbody',\n        null,\n        rows\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.IndexRoute, { component: DashboardView, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'random-article', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wTGVmdFZpZXcgPSAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHRvcGJhciA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY3ZjknLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBib3JkZXJCb3R0b20gOiAnMXB4IHNvbGlkICMyZWNjNzEnXG4gICAgfTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGN1cmF0ZUFjdGl2ZSA9IGZhbHNlXG4gICAgbGV0IHNmQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgZGFzaEFjdGl2ZSAgPSBmYWxzZVxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZignYXJ0aWNsZS9jdXJhdGUnKSA+IC0xKSB7XG4gICAgICBjdXJhdGVBY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZignc291cmNlZmVlZHMnKSA+IC0xKSB7XG4gICAgICBzZkFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgaWYgKCFzZkFjdGl2ZSAmJiAhY3VyYXRlQWN0aXZlKXtcbiAgICAgIGRhc2hBY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRhc2hBY3RpdmUpXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt0b3BiYXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7Zm9udFNpemU6ICcxMnB4JywgcGFkZGluZ1RvcDogJzVweCd9fT5cbiAgICAgICAgTG9nZ2VkIGluIGFzOiB7dXNlcm5hbWV9XG4gICAgICAgIDxici8+XG4gICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9sb2dvdXRcIj5Mb2cgb3V0PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgPlxuICAgICAgICB7ZGFzaEFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9zb3VyY2VmZWVkc1wiPkFkZCBTb3VyY2UgRmVlZHM8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvcmFuZG9tLWFydGljbGVcIj5DdXJhdGUgQXJ0aWNsZXM8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICAgIHtzZkFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZVwiPkRhc2hib2FyZDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9yYW5kb20tYXJ0aWNsZVwiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAge2N1cmF0ZUFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdzXCIgc3R5bGU9e3twYWRkaW5nOiAnNnB4IDVweCA1cHggNXB4J319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvc291cmNlZmVlZHNcIj5BZGQgU291cmNlIEZlZWRzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBEYXNoYm9hcmRWaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yLTI0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yMC0yNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICAgICAgPERhc2hCb2FyZFRvcExlZnRWaWV3IHBhdGhuYW1lPXtwYXRobmFtZX0gdXNlcm5hbWU9XCJ5YnZcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTItM1wiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yLTI0XCI+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PilcbiAgfVxufSlcblxuXG5cbmNvbnN0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXV0aC5vbkNoYW5nZSA9IHRoaXMudXBkYXRlQXV0aFxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBpZiAocGF0aG5hbWUuaW5kZXhPZignbG9naW4nKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2N1cmF0ZS8nKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZigncmVnaXN0ZXIvY29tcGxldGUnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIFNpZ24gdXAgdG8gY29udGludWUuJyAvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmRleE9mKCdsb2dpbicpID4gLTEpICB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIExvZ2luIHRvIGNvbnRpbnVlLicvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlXG4gICAgY29uc3QgcGFzcyA9IHRoaXMucmVmcy5wYXNzLnZhbHVlXG5cbiAgICBhdXRoLkxvZ2luQ3VyYXRvcihlbWFpbCwgcGFzcywgKGxvZ2dlZEluLCBtc2cpID0+IHtcbiAgICAgIGlmICghbG9nZ2VkSW4pXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIG1zZzogbXNnfSlcblxuICAgICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUubmV4dFBhdGhuYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZShsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiICBwbGFjZWhvbGRlcj1cIkVtYWlsIElkXCIgIHJlcXVpcmVkLz48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJwYXNzXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkLz48L2xhYmVsPjxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIHB1cmUtaW5wdXQtMSBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMuc3RhdGUubXNnfTwvZGl2Pil9XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+QWJvdXQ8L2gxPlxuICB9XG59KVxuXG5jb25zdCBMb2dvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF1dGgubG9nb3V0KClcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxwPllvdSBhcmUgbm93IGxvZ2dlZCBvdXQ8L3A+XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHJlcXVpcmVBdXRoKG5leHRTdGF0ZSwgcmVwbGFjZSkge1xuICBpZiAoIWF1dGgubG9nZ2VkSW4oKSkge1xuICAgIHJlcGxhY2Uoe1xuICAgICAgcGF0aG5hbWU6ICcvY3VyYXRlL2xvZ2luJyxcbiAgICAgIHN0YXRlOiB7IG5leHRQYXRobmFtZTogbmV4dFN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IFJlZ2lzdGVyQ29tcGxldGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcbiAgICBjb25zdCBmaXJzdF9uYW1lID0gdGhpcy5yZWZzLmZpcnN0X25hbWUudmFsdWVcbiAgICBjb25zdCBsYXN0X25hbWUgPSB0aGlzLnJlZnMubGFzdF9uYW1lLnZhbHVlXG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWVcblxuICAgIGNvbnN0IHsgZW1haWxfc2hhIH0gPSB0aGlzLnByb3BzLnBhcmFtc1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHNcblxuICAgIGF1dGguQ29tcGxldGVSZWdpc3RyYXRpb24oZW1haWxfc2hhLCBwYXNzLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHVzZXJuYW1lLCAoc3VjY2VzcywgbXNnKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScsIG1zZylcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2cgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2Rhc2hib2FyZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgdXNlcm5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwibGFzdF9uYW1lXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwicGFzc1wiICBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIHB1cmUtaW5wdXQtMSBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+U2lnbiB1cCBhcyBjdXJhdG9yPC9idXR0b24+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMuc3RhdGUubXNnfTwvZGl2Pil9XG4gICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9sb2dpblwiPkxvZyBpbjwvTGluaz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IFNvdXJjZUZlZWRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlZWRzOiBbXSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgICB0aGlzLmZldGNoRmVlZHMoKVxuICB9LFxuXG4gIGZldGNoRmVlZHMoKXtcbiAgICBjb25zdCB0b2tlbiA9IGF1dGguZ2V0VG9rZW4oKVxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICQuYWpheCh7XG4gICAgdXJsOiBcIi9jdXJhdGUvbGlzdC1zb3VyY2UtZmVlZHMvXCIsXG4gICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oIHhociApIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyIChcIkF1dGhvcml6YXRpb25cIiwgXCJUb2tlbiBcIiArIHRva2VuKVxuICAgIH1cbiAgfSkuc3VjY2VzcyhmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgaWYoZGF0YSl7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlZWRzOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuZXJyb3IoKCkgPT4ge1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnN0YXRlLmZlZWRzLm1hcCgodmFsKT0+IHtcbiAgICByZXR1cm4oICA8dHI+XG4gICAgICAgIDx0ZD57dmFsLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkPjxhIGhyZWY9XCJ7dmFsLnVybH1cIj5MaW5rPC9hPjwvdGQ+XG4gICAgICAgIDx0ZD57dmFsLmNyZWF0ZWRfYnl9PC90ZD5cbiAgICAgIDwvdHI+KVxuICAgIH1cbiAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwdXJlLXRhYmxlIHB1cmUtdGFibGUtaG9yaXpvbnRhbFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GZWVkIE5hbWUoVW5pcXVlKTwvdGg+XG4gICAgICAgICAgICA8dGg+VXJsPC90aD5cbiAgICAgICAgICAgIDx0aD5BZGRlZCBCeTwvdGg+XG4gICAgICAgIDwvdHI+XG5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtyb3dzfVxuICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59KVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9jdXJhdGVcIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZFZpZXd9IG9uRW50ZXI9e3JlcXVpcmVBdXRofS8+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ291dFwiIGNvbXBvbmVudD17TG9nb3V0fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJyYW5kb20tYXJ0aWNsZVwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInNvdXJjZWZlZWRzXCIgY29tcG9uZW50PXtTb3VyY2VGZWVkc30gb25FbnRlcj17cmVxdWlyZUF1dGh9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicmVnaXN0ZXIvY29tcGxldGUvOmVtYWlsX3NoYVwiIGNvbXBvbmVudD17UmVnaXN0ZXJDb21wbGV0ZX0vPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGN1cmF0b3ItYXBwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUFBOztBQURBO0FBRUE7O0FBQUE7QUFBQTtBQUZBO0FBREE7QUFIQTtBQUFBO0FBQ0E7QUFXQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7QUFIQTtBQURBO0FBTUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFKQTtBQUFBO0FBUUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBREE7QUFJQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBSkE7QUFBQTtBQVFBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQURBO0FBSUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUpBO0FBQUE7QUF2QkE7QUFEQTtBQXZCQTtBQUFBO0FBQ0E7QUE0REE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBSEE7QUFhQTtBQWJBO0FBSEE7QUFBQTtBQUNBO0FBd0JBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXBCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBO0FBZkE7QUEzQ0E7QUFBQTtBQUNBO0FBOERBOzs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFhQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFOQTtBQW5CQTtBQWlDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQURBO0FBSUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQURBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7O0FBQUE7O0FBVEE7QUFVQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQVpBO0FBbENBO0FBQUE7QUFDQTtBQW1EQTs7QUFDQTtBQUNBOzs7O0FBQUE7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7O0FBQUE7QUFOQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBQ0E7QUFRQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFOQTtBQWxCQTtBQThCQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUFBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7O0FBQUE7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7O0FBQUE7O0FBakJBO0FBa0JBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7QUFyQkE7QUFEQTtBQS9CQTtBQUFBO0FBQ0E7QUEwREE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBRkE7QUFjQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBbENBO0FBMENBO0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUFBO0FBREE7QUFFQTs7O0FBQUE7O0FBQUE7O0FBQUE7QUFGQTtBQUdBOzs7QUFBQTtBQUhBO0FBQUE7QUFEQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUNBOzs7O0FBREE7QUFFQTs7OztBQUZBO0FBR0E7Ozs7QUFIQTtBQURBO0FBREE7QUFTQTs7O0FBQ0E7QUFWQTtBQURBO0FBcERBO0FBQUE7QUFDQTtBQXFFQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})