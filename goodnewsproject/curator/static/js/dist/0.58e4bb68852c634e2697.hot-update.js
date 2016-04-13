webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopLeftView = _react2.default.createClass({\n  displayName: 'DashBoardTopLeftView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '150px',\n      padding: '20px',\n      margin: '30px 5px 30px 10px',\n      border: '1px solid #d4d4d4'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    var dashActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    if (!sfActive && !curateActive) {\n      dashActive = true;\n    }\n    console.log(dashActive);\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1', style: { fontSize: '12px', paddingTop: '5px' } },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1' },\n        dashActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '30px 0 0 0' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        sfActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '30px 0 0 0' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        curateActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-gs', style: { padding: '30px 0 0 0' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          )\n        )\n      )\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-3-4' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-6-24' },\n            _react2.default.createElement(DashBoardTopLeftView, { pathname: pathname, username: 'ybv' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-18-24' },\n            this.props.children\n          )\n        )\n      );\n    }\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  handleSubmit: function handleSubmit(event) {\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n    _jquery2.default.post(\"/curate/login-check/\", { 'email': email, 'password': pass }, function (data) {\n      if (data && data.success) {\n        localStorage.token = data.token;\n        if (cb) cb(true);\n      } else {\n        if (cb) cb(false, data.msg);\n      }\n    });\n    _jquery2.default.post({\n      url: \"/curate/add-source-feed/\",\n\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'form',\n        { className: 'pure-form', onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          'fieldset',\n          null,\n          _react2.default.createElement('input', { ref: 'username', placeholder: 'feed name', required: true }),\n          _react2.default.createElement('input', { ref: 'username', placeholder: 'url of the feed', required: true }),\n          _react2.default.createElement(\n            'button',\n            { type: 'submit', className: 'pure-button pure-button-primary' },\n            'Add Source'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'table',\n        { className: 'pure-table pure-table-horizontal' },\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Feed Name(Unique)'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Url'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Added By'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          rows\n        )\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'random-article', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wTGVmdFZpZXcgPSAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHRvcGJhciA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY3ZjknLFxuICAgICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgbWFyZ2luOiAnMzBweCA1cHggMzBweCAxMHB4JyxcbiAgICAgIGJvcmRlciA6ICcxcHggc29saWQgI2Q0ZDRkNCdcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY3VyYXRlQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgc2ZBY3RpdmUgPSBmYWxzZVxuICAgIGxldCBkYXNoQWN0aXZlICA9IGZhbHNlXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdhcnRpY2xlL2N1cmF0ZScpID4gLTEpIHtcbiAgICAgIGN1cmF0ZUFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdzb3VyY2VmZWVkcycpID4gLTEpIHtcbiAgICAgIHNmQWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIXNmQWN0aXZlICYmICFjdXJhdGVBY3RpdmUpe1xuICAgICAgZGFzaEFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGFzaEFjdGl2ZSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCIgc3R5bGU9e3RvcGJhcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nVG9wOiAnNXB4J319PlxuICAgICAgICBMb2dnZWQgaW4gYXM6IHt1c2VybmFtZX1cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ291dFwiPkxvZyBvdXQ8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiA+XG4gICAgICAgIHtkYXNoQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzMwcHggMCAwIDAnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvc291cmNlZmVlZHNcIj5BZGQgU291cmNlIEZlZWRzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9yYW5kb20tYXJ0aWNsZVwiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAge3NmQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzMwcHggMCAwIDAnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3JhbmRvbS1hcnRpY2xlXCI+Q3VyYXRlIEFydGljbGVzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pfVxuICAgICAgICB7Y3VyYXRlQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ3NcIiBzdHlsZT17e3BhZGRpbmc6ICczMHB4IDAgMCAwJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XG4gICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3NvdXJjZWZlZWRzXCI+QWRkIFNvdXJjZSBGZWVkczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXV0aC5vbkNoYW5nZSA9IHRoaXMudXBkYXRlQXV0aFxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBpZiAocGF0aG5hbWUuaW5kZXhPZignbG9naW4nKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2N1cmF0ZS8nKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZigncmVnaXN0ZXIvY29tcGxldGUnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIFNpZ24gdXAgdG8gY29udGludWUuJyAvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmRleE9mKCdsb2dpbicpID4gLTEpICB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIExvZ2luIHRvIGNvbnRpbnVlLicvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMy00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNi0yNFwiPlxuICAgICAgICAgICAgICAgICAgPERhc2hCb2FyZFRvcExlZnRWaWV3IHBhdGhuYW1lPXtwYXRobmFtZX0gdXNlcm5hbWU9XCJ5YnZcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMTgtMjRcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnJlZnMuZW1haWwudmFsdWVcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcblxuICAgIGF1dGguTG9naW5DdXJhdG9yKGVtYWlsLCBwYXNzLCAobG9nZ2VkSW4sIG1zZykgPT4ge1xuICAgICAgaWYgKCFsb2dnZWRJbilcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2d9KVxuXG4gICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cImVtYWlsXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiRW1haWwgSWRcIiAgcmVxdWlyZWQvPjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cInBhc3NcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5BYm91dDwvaDE+XG4gIH1cbn0pXG5cbmNvbnN0IExvZ291dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0aC5sb2dvdXQoKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHA+WW91IGFyZSBub3cgbG9nZ2VkIG91dDwvcD5cbiAgfVxufSlcblxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlKSB7XG4gIGlmICghYXV0aC5sb2dnZWRJbigpKSB7XG4gICAgcmVwbGFjZSh7XG4gICAgICBwYXRobmFtZTogJy9jdXJhdGUvbG9naW4nLFxuICAgICAgc3RhdGU6IHsgbmV4dFBhdGhuYW1lOiBuZXh0U3RhdGUubG9jYXRpb24ucGF0aG5hbWUgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgUmVnaXN0ZXJDb21wbGV0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuICAgIGNvbnN0IGZpcnN0X25hbWUgPSB0aGlzLnJlZnMuZmlyc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IGxhc3RfbmFtZSA9IHRoaXMucmVmcy5sYXN0X25hbWUudmFsdWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZVxuXG4gICAgY29uc3QgeyBlbWFpbF9zaGEgfSA9IHRoaXMucHJvcHMucGFyYW1zXG4gICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYXV0aC5Db21wbGV0ZVJlZ2lzdHJhdGlvbihlbWFpbF9zaGEsIHBhc3MsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIChzdWNjZXNzLCBtc2cpID0+IHtcbiAgICAgIGlmICghc3VjY2Vzcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJywgbXNnKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvZGFzaGJvYXJkJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSB1c2VybmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJsYXN0X25hbWVcIiAgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJwYXNzXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5TaWduIHVwIGFzIGN1cmF0b3I8L2J1dHRvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ2luXCI+TG9nIGluPC9MaW5rPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgU291cmNlRmVlZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVlZHM6IFtdLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAgIHRoaXMuZmV0Y2hGZWVkcygpXG4gIH0sXG5cbiAgZmV0Y2hGZWVkcygpe1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgJC5hamF4KHtcbiAgICB1cmw6IFwiL2N1cmF0ZS9saXN0LXNvdXJjZS1mZWVkcy9cIixcbiAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiggeGhyICkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIgKFwiQXV0aG9yaXphdGlvblwiLCBcIlRva2VuIFwiICsgdG9rZW4pXG4gICAgfVxuICB9KS5zdWNjZXNzKGZ1bmN0aW9uKCBkYXRhICkge1xuXG4gICAgICBpZihkYXRhKXtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmVlZHM6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgICAgbXNnOiAnQ291bGQgbm90IGZldGNoIHNvdXJjZSBmZWVkcydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5lcnJvcigoKSA9PiB7XG4gICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgbXNnOiAnQ291bGQgbm90IGZldGNoIHNvdXJjZSBmZWVkcydcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBlbWFpbCA9IHRoaXMucmVmcy5lbWFpbC52YWx1ZVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuICAgICQucG9zdChcIi9jdXJhdGUvbG9naW4tY2hlY2svXCIsIHsnZW1haWwnIDogZW1haWwsICdwYXNzd29yZCc6IHBhc3N9LFxuICAgIChkYXRhKSA9PntcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuc3VjY2Vzcyl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW5cbiAgICAgICAgaWYgKGNiKSBjYih0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgaWYgKGNiKSBjYihmYWxzZSwgZGF0YS5tc2cpXG4gICAgICB9XG4gICAgfSlcbiAgICAkLnBvc3Qoe1xuICAgICAgdXJsOiBcIi9jdXJhdGUvYWRkLXNvdXJjZS1mZWVkL1wiLFxuXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiggeGhyICkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlciAoXCJBdXRob3JpemF0aW9uXCIsIFwiVG9rZW4gXCIgKyB0b2tlbilcbiAgICAgIH1cbiAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZlZWRzOiBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSkuZXJyb3IoKCkgPT4ge1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICBjb25zdCByb3dzID0gdGhpcy5zdGF0ZS5mZWVkcy5tYXAoKHZhbCk9PiB7XG4gICAgcmV0dXJuKCAgPHRyPlxuICAgICAgICA8dGQ+e3ZhbC5uYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD48YSBocmVmPVwie3ZhbC51cmx9XCI+TGluazwvYT48L3RkPlxuICAgICAgICA8dGQ+e3ZhbC5jcmVhdGVkX2J5fTwvdGQ+XG4gICAgICA8L3RyPilcbiAgICB9XG4gIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGlucHV0IHJlZj1cInVzZXJuYW1lXCIgIHBsYWNlaG9sZGVyPVwiZmVlZCBuYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiAgcGxhY2Vob2xkZXI9XCJ1cmwgb2YgdGhlIGZlZWRcIiByZXF1aXJlZC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5BZGQgU291cmNlPC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZSBwdXJlLXRhYmxlLWhvcml6b250YWxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVlZCBOYW1lKFVuaXF1ZSk8L3RoPlxuICAgICAgICAgICAgPHRoPlVybDwvdGg+XG4gICAgICAgICAgICA8dGg+QWRkZWQgQnk8L3RoPlxuICAgICAgICA8L3RyPlxuXG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7cm93c31cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvY3VyYXRlXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiICBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dvdXRcIiBjb21wb25lbnQ9e0xvZ291dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicmFuZG9tLWFydGljbGVcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJzb3VyY2VmZWVkc1wiIGNvbXBvbmVudD17U291cmNlRmVlZHN9IG9uRW50ZXI9e3JlcXVpcmVBdXRofS8+XG4gICAgICA8Um91dGUgcGF0aD1cInJlZ2lzdGVyL2NvbXBsZXRlLzplbWFpbF9zaGFcIiBjb21wb25lbnQ9e1JlZ2lzdGVyQ29tcGxldGV9Lz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjdXJhdG9yLWFwcC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFBQTs7QUFEQTtBQUVBOztBQUFBO0FBQUE7QUFGQTtBQURBO0FBSEE7QUFBQTtBQUNBO0FBV0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7QUFIQTtBQURBO0FBTUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFKQTtBQUFBO0FBUUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBREE7QUFJQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBSkE7QUFBQTtBQVFBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQURBO0FBSUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUpBO0FBQUE7QUF2QkE7QUFEQTtBQXhCQTtBQUFBO0FBQ0E7QUE2REE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBcEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQURBO0FBZUE7O0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQURBO0FBZUE7O0FBQ0E7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFGQTtBQUlBOztBQUFBO0FBQ0E7QUFMQTtBQUZBO0FBREE7QUFmQTtBQTNDQTtBQUFBO0FBQ0E7QUEwRUE7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQU5BO0FBbkJBO0FBaUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQURBO0FBREE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTs7QUFUQTtBQVVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFsQ0E7QUFBQTtBQUNBO0FBbURBOztBQUNBO0FBQ0E7Ozs7QUFBQTtBQUZBO0FBQUE7QUFDQTtBQUtBOztBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7Ozs7QUFBQTtBQU5BO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFDQTtBQVFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBbEJBO0FBOEJBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7O0FBQUE7QUFDQTtBQVZBO0FBWUE7QUFDQTs7QUFBQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTs7QUFBQTs7QUFqQkE7QUFrQkE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBOztBQXJCQTtBQURBO0FBL0JBO0FBQUE7QUFDQTtBQTBEQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFGQTtBQWNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFsQ0E7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUxBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBM0VBO0FBbUZBO0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUFBO0FBREE7QUFFQTs7O0FBQUE7O0FBQUE7O0FBQUE7QUFGQTtBQUdBOzs7QUFBQTtBQUhBO0FBQUE7QUFEQTtBQUNBO0FBUUE7OztBQUVBOztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7QUFIQTtBQURBO0FBREE7QUFRQTs7QUFBQTtBQUNBOzs7QUFDQTs7O0FBQ0E7Ozs7QUFEQTtBQUVBOzs7O0FBRkE7QUFHQTs7OztBQUhBO0FBREE7QUFEQTtBQVNBOzs7QUFDQTtBQVZBO0FBUkE7QUFEQTtBQTdGQTtBQUFBO0FBQ0E7QUF1SEE7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})