webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopLeftView = _react2.default.createClass({\n  displayName: 'DashBoardTopLeftView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '1000px',\n      padding: '20px',\n      borderBottom: '1px solid #2ecc71'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    var dashActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    if (!sfActive && !curateActive) {\n      dashActive = true;\n    }\n    console.log(dashActive);\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1', style: { fontSize: '12px', paddingTop: '5px' } },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1' },\n        dashActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        sfActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        curateActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-gs', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          )\n        )\n      )\n    );\n  }\n});\n\nvar DashboardView = _react2.default.createClass({\n  displayName: 'DashboardView',\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g' },\n      _react2.default.createElement('div', { className: 'pure-u-3-24' }),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-20-24' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-g' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1-4' },\n            _react2.default.createElement(DashBoardTopLeftView, { pathname: pathname, username: 'ybv' })\n          ),\n          _react2.default.createElement('div', { className: 'pure-u-3-4' })\n        )\n      ),\n      _react2.default.createElement('div', { className: 'pure-u-2-24' })\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return this.props.children;\n    }\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'table',\n      { className: 'pure-table pure-table-horizontal' },\n      _react2.default.createElement(\n        'thead',\n        null,\n        _react2.default.createElement(\n          'tr',\n          null,\n          _react2.default.createElement(\n            'th',\n            null,\n            'Feed Name(Unique)'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Url'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Added By'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'tbody',\n        null,\n        rows\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.IndexRoute, { component: DashboardView, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'random-article', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wTGVmdFZpZXcgPSAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHRvcGJhciA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY3ZjknLFxuICAgICAgaGVpZ2h0OiAnMTAwMHB4JyxcbiAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgIGJvcmRlckJvdHRvbSA6ICcxcHggc29saWQgIzJlY2M3MSdcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY3VyYXRlQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgc2ZBY3RpdmUgPSBmYWxzZVxuICAgIGxldCBkYXNoQWN0aXZlICA9IGZhbHNlXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdhcnRpY2xlL2N1cmF0ZScpID4gLTEpIHtcbiAgICAgIGN1cmF0ZUFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdzb3VyY2VmZWVkcycpID4gLTEpIHtcbiAgICAgIHNmQWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIXNmQWN0aXZlICYmICFjdXJhdGVBY3RpdmUpe1xuICAgICAgZGFzaEFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGFzaEFjdGl2ZSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCIgc3R5bGU9e3RvcGJhcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nVG9wOiAnNXB4J319PlxuICAgICAgICBMb2dnZWQgaW4gYXM6IHt1c2VybmFtZX1cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ291dFwiPkxvZyBvdXQ8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiA+XG4gICAgICAgIHtkYXNoQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzZweCA1cHggNXB4IDVweCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3NvdXJjZWZlZWRzXCI+QWRkIFNvdXJjZSBGZWVkczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9yYW5kb20tYXJ0aWNsZVwiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAge3NmQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzZweCA1cHggNXB4IDVweCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3JhbmRvbS1hcnRpY2xlXCI+Q3VyYXRlIEFydGljbGVzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pfVxuICAgICAgICB7Y3VyYXRlQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ3NcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9zb3VyY2VmZWVkc1wiPkFkZCBTb3VyY2UgRmVlZHM8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IERhc2hib2FyZFZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTMtMjRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTIwLTI0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtNFwiPlxuICAgICAgICAgICAgICA8RGFzaEJvYXJkVG9wTGVmdFZpZXcgcGF0aG5hbWU9e3BhdGhuYW1lfSB1c2VybmFtZT1cInlidlwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMy00XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yLTI0XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG4gIH1cbn0pXG5cblxuXG5jb25zdCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dnZWRJbjogYXV0aC5sb2dnZWRJbigpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUF1dGgobG9nZ2VkSW4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBsb2dnZWRJblxuICAgIH0pXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGF1dGgub25DaGFuZ2UgPSB0aGlzLnVwZGF0ZUF1dGhcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgaWYgKHRoaXMuc3RhdGUubG9nZ2VkSW4pe1xuICAgICAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ2xvZ2luJykgPiAtMSkge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy9jdXJhdGUvJylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICBpZiAoIHBhdGhuYW1lLmluZGV4T2YoJ3JlZ2lzdGVyL2NvbXBsZXRlJykgPiAtMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICAgIDxIZWxsb0NvbnRhaW5lciB3ZWxjb21lTXNnPSdXZWxjb21lIHRvIGdvb2QgbmV3cyBwcm9qZWN0LiBTaWduIHVwIHRvIGNvbnRpbnVlLicgLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5kZXhPZignbG9naW4nKSA+IC0xKSAge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICAgIDxIZWxsb0NvbnRhaW5lciB3ZWxjb21lTXNnPSdXZWxjb21lIHRvIGdvb2QgbmV3cyBwcm9qZWN0LiBMb2dpbiB0byBjb250aW51ZS4nLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBlbWFpbCA9IHRoaXMucmVmcy5lbWFpbC52YWx1ZVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuXG4gICAgYXV0aC5Mb2dpbkN1cmF0b3IoZW1haWwsIHBhc3MsIChsb2dnZWRJbiwgbXNnKSA9PiB7XG4gICAgICBpZiAoIWxvZ2dlZEluKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBtc2c6IG1zZ30pXG5cbiAgICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHNcblxuICAgICAgaWYgKGxvY2F0aW9uLnN0YXRlICYmIGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UobG9jYXRpb24uc3RhdGUubmV4dFBhdGhuYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwiZW1haWxcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiAgcGxhY2Vob2xkZXI9XCJFbWFpbCBJZFwiICByZXF1aXJlZC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwicGFzc1wiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBwdXJlLWlucHV0LTEgcHVyZS1idXR0b24tcHJpbWFyeVwiPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmICg8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnN0YXRlLm1zZ308L2Rpdj4pfVxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPkFib3V0PC9oMT5cbiAgfVxufSlcblxuY29uc3QgTG9nb3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhdXRoLmxvZ291dCgpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8cD5Zb3UgYXJlIG5vdyBsb2dnZWQgb3V0PC9wPlxuICB9XG59KVxuXG5mdW5jdGlvbiByZXF1aXJlQXV0aChuZXh0U3RhdGUsIHJlcGxhY2UpIHtcbiAgaWYgKCFhdXRoLmxvZ2dlZEluKCkpIHtcbiAgICByZXBsYWNlKHtcbiAgICAgIHBhdGhuYW1lOiAnL2N1cmF0ZS9sb2dpbicsXG4gICAgICBzdGF0ZTogeyBuZXh0UGF0aG5hbWU6IG5leHRTdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBSZWdpc3RlckNvbXBsZXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcGFzcyA9IHRoaXMucmVmcy5wYXNzLnZhbHVlXG4gICAgY29uc3QgZmlyc3RfbmFtZSA9IHRoaXMucmVmcy5maXJzdF9uYW1lLnZhbHVlXG4gICAgY29uc3QgbGFzdF9uYW1lID0gdGhpcy5yZWZzLmxhc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlXG5cbiAgICBjb25zdCB7IGVtYWlsX3NoYSB9ID0gdGhpcy5wcm9wcy5wYXJhbXNcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICBhdXRoLkNvbXBsZXRlUmVnaXN0cmF0aW9uKGVtYWlsX3NoYSwgcGFzcywgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCB1c2VybmFtZSwgKHN1Y2Nlc3MsIG1zZykgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnLCBtc2cpXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIG1zZzogbXNnIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy9kYXNoYm9hcmQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIHVzZXJuYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwiZmlyc3RfbmFtZVwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImxhc3RfbmFtZVwiICBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cInBhc3NcIiAgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBwdXJlLWlucHV0LTEgcHVyZS1idXR0b24tcHJpbWFyeVwiPlNpZ24gdXAgYXMgY3VyYXRvcjwvYnV0dG9uPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmICg8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnN0YXRlLm1zZ308L2Rpdj4pfVxuICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvbG9naW5cIj5Mb2cgaW48L0xpbms+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBTb3VyY2VGZWVkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZWVkczogW10sXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgICAgdGhpcy5mZXRjaEZlZWRzKClcbiAgfSxcblxuICBmZXRjaEZlZWRzKCl7XG4gICAgY29uc3QgdG9rZW4gPSBhdXRoLmdldFRva2VuKClcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAkLmFqYXgoe1xuICAgIHVybDogXCIvY3VyYXRlL2xpc3Qtc291cmNlLWZlZWRzL1wiLFxuICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCB4aHIgKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlciAoXCJBdXRob3JpemF0aW9uXCIsIFwiVG9rZW4gXCIgKyB0b2tlbilcbiAgICB9XG4gIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgIGlmKGRhdGEpe1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBmZWVkczogZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgICBtc2c6ICdDb3VsZCBub3QgZmV0Y2ggc291cmNlIGZlZWRzJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pLmVycm9yKCgpID0+IHtcbiAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICBtc2c6ICdDb3VsZCBub3QgZmV0Y2ggc291cmNlIGZlZWRzJ1xuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICBjb25zdCByb3dzID0gdGhpcy5zdGF0ZS5mZWVkcy5tYXAoKHZhbCk9PiB7XG4gICAgcmV0dXJuKCAgPHRyPlxuICAgICAgICA8dGQ+e3ZhbC5uYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD48YSBocmVmPVwie3ZhbC51cmx9XCI+TGluazwvYT48L3RkPlxuICAgICAgICA8dGQ+e3ZhbC5jcmVhdGVkX2J5fTwvdGQ+XG4gICAgICA8L3RyPilcbiAgICB9XG4gIClcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZSBwdXJlLXRhYmxlLWhvcml6b250YWxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVlZCBOYW1lKFVuaXF1ZSk8L3RoPlxuICAgICAgICAgICAgPHRoPlVybDwvdGg+XG4gICAgICAgICAgICA8dGg+QWRkZWQgQnk8L3RoPlxuICAgICAgICA8L3RyPlxuXG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7cm93c31cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufSlcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvY3VyYXRlXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtEYXNoYm9hcmRWaWV3fSBvbkVudGVyPXtyZXF1aXJlQXV0aH0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiICBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dvdXRcIiBjb21wb25lbnQ9e0xvZ291dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicmFuZG9tLWFydGljbGVcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJzb3VyY2VmZWVkc1wiIGNvbXBvbmVudD17U291cmNlRmVlZHN9IG9uRW50ZXI9e3JlcXVpcmVBdXRofS8+XG4gICAgICA8Um91dGUgcGF0aD1cInJlZ2lzdGVyL2NvbXBsZXRlLzplbWFpbF9zaGFcIiBjb21wb25lbnQ9e1JlZ2lzdGVyQ29tcGxldGV9Lz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjdXJhdG9yLWFwcC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFBQTs7QUFEQTtBQUVBOztBQUFBO0FBQUE7QUFGQTtBQURBO0FBSEE7QUFBQTtBQUNBO0FBV0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7O0FBSEE7QUFEQTtBQU1BOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBREE7QUFJQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBSkE7QUFBQTtBQVFBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQURBO0FBSUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUpBO0FBQUE7QUFRQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFKQTtBQUFBO0FBdkJBO0FBREE7QUF2QkE7QUFBQTtBQUNBO0FBNERBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQUhBO0FBWUE7QUFaQTtBQUhBO0FBQUE7QUFDQTtBQXNCQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFwQkE7QUEyQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFlQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFlQTtBQWZBO0FBM0NBO0FBQUE7QUFDQTtBQThEQTs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBYUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBTkE7QUFuQkE7QUFpQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFEQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUFBOztBQVRBO0FBVUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWxDQTtBQUFBO0FBQ0E7QUFtREE7O0FBQ0E7QUFDQTs7OztBQUFBO0FBRkE7QUFBQTtBQUNBO0FBS0E7O0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7OztBQUFBO0FBTkE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTkE7QUFsQkE7QUE4QkE7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTtBQUNBO0FBVkE7QUFZQTtBQUNBOztBQUFBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOztBQUFBOztBQWpCQTtBQWtCQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7O0FBckJBO0FBREE7QUEvQkE7QUFBQTtBQUNBO0FBMERBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQUZBO0FBY0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWxDQTtBQTBDQTtBQUNBO0FBQ0E7OztBQUNBOzs7QUFBQTtBQURBO0FBRUE7OztBQUFBOztBQUFBOztBQUFBO0FBRkE7QUFHQTs7O0FBQUE7QUFIQTtBQUFBO0FBREE7QUFDQTtBQVFBOztBQUNBO0FBQ0E7OztBQUNBOzs7QUFDQTs7OztBQURBO0FBRUE7Ozs7QUFGQTtBQUdBOzs7O0FBSEE7QUFEQTtBQURBO0FBU0E7OztBQUNBO0FBVkE7QUFEQTtBQXBEQTtBQUFBO0FBQ0E7QUFxRUE7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})