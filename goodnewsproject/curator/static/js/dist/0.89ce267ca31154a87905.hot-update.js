webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopLeftView = _react2.default.createClass({\n  displayName: 'DashBoardTopLeftView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '150px',\n      padding: '20px',\n      margin: '30px 5px 30px 10px',\n      border: '1px solid #d4d4d4'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    var dashActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    if (!sfActive && !curateActive) {\n      dashActive = true;\n    }\n    console.log(dashActive);\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1', style: { fontSize: '12px', paddingTop: '5px' } },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1' },\n        dashActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '30px 0 0 0' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        sfActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '30px 0 0 0' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/random-article' },\n              'Curate Articles'\n            )\n          )\n        ),\n        curateActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-gs', style: { padding: '30px 0 0 0' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1', style: { textAlign: 'left' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          )\n        )\n      )\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-3-4' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-6-24' },\n            _react2.default.createElement(DashBoardTopLeftView, { pathname: pathname, username: 'ybv' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-18-24' },\n            this.props.children\n          )\n        )\n      );\n    }\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  handleSubmit: function handleSubmit(event) {\n    event.preventDefault();\n    var url = this.refs.url.value;\n    var name = this.refs.name.value;\n    _jquery2.default.ajax({\n      url: \"/curate/add-source-feed/\",\n      type: 'POST',\n      data: { 'url': url, 'name': name },\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n      if (data && data.success) {} else {\n        that.setState({\n          error: true,\n          msg: data.msg\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not add feed'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'form',\n        { className: 'pure-form pure-form-aligned', onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          'fieldset',\n          null,\n          _react2.default.createElement(\n            'legend',\n            null,\n            'Add a new source'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-control-group' },\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'name' },\n              'Feed Name'\n            ),\n            _react2.default.createElement('input', { ref: 'name', required: true })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-control-group' },\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'url' },\n              'Feed Url'\n            ),\n            _react2.default.createElement('input', { ref: 'url', p: true, required: true })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-controls' },\n            _react2.default.createElement(\n              'button',\n              { type: 'submit', className: 'pure-button' },\n              'Add Source'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'legend',\n        null,\n        'Existing sources'\n      ),\n      _react2.default.createElement('hr', null),\n      _react2.default.createElement(\n        'table',\n        { align: 'center', className: 'pure-table pure-table-horizontal' },\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Feed Name(Unique)'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Url'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Added By'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          rows\n        )\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'random-article', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wTGVmdFZpZXcgPSAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHRvcGJhciA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY3ZjknLFxuICAgICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgbWFyZ2luOiAnMzBweCA1cHggMzBweCAxMHB4JyxcbiAgICAgIGJvcmRlciA6ICcxcHggc29saWQgI2Q0ZDRkNCdcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY3VyYXRlQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgc2ZBY3RpdmUgPSBmYWxzZVxuICAgIGxldCBkYXNoQWN0aXZlICA9IGZhbHNlXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdhcnRpY2xlL2N1cmF0ZScpID4gLTEpIHtcbiAgICAgIGN1cmF0ZUFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdzb3VyY2VmZWVkcycpID4gLTEpIHtcbiAgICAgIHNmQWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIXNmQWN0aXZlICYmICFjdXJhdGVBY3RpdmUpe1xuICAgICAgZGFzaEFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGFzaEFjdGl2ZSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCIgc3R5bGU9e3RvcGJhcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nVG9wOiAnNXB4J319PlxuICAgICAgICBMb2dnZWQgaW4gYXM6IHt1c2VybmFtZX1cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ291dFwiPkxvZyBvdXQ8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiA+XG4gICAgICAgIHtkYXNoQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzMwcHggMCAwIDAnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvc291cmNlZmVlZHNcIj5BZGQgU291cmNlIEZlZWRzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9yYW5kb20tYXJ0aWNsZVwiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAge3NmQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzMwcHggMCAwIDAnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIiBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3JhbmRvbS1hcnRpY2xlXCI+Q3VyYXRlIEFydGljbGVzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pfVxuICAgICAgICB7Y3VyYXRlQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ3NcIiBzdHlsZT17e3BhZGRpbmc6ICczMHB4IDAgMCAwJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XG4gICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3NvdXJjZWZlZWRzXCI+QWRkIFNvdXJjZSBGZWVkczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCIgc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXV0aC5vbkNoYW5nZSA9IHRoaXMudXBkYXRlQXV0aFxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBpZiAocGF0aG5hbWUuaW5kZXhPZignbG9naW4nKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2N1cmF0ZS8nKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZigncmVnaXN0ZXIvY29tcGxldGUnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIFNpZ24gdXAgdG8gY29udGludWUuJyAvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmRleE9mKCdsb2dpbicpID4gLTEpICB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIExvZ2luIHRvIGNvbnRpbnVlLicvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMy00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNi0yNFwiPlxuICAgICAgICAgICAgICAgICAgPERhc2hCb2FyZFRvcExlZnRWaWV3IHBhdGhuYW1lPXtwYXRobmFtZX0gdXNlcm5hbWU9XCJ5YnZcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMTgtMjRcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnJlZnMuZW1haWwudmFsdWVcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcblxuICAgIGF1dGguTG9naW5DdXJhdG9yKGVtYWlsLCBwYXNzLCAobG9nZ2VkSW4sIG1zZykgPT4ge1xuICAgICAgaWYgKCFsb2dnZWRJbilcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2d9KVxuXG4gICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cImVtYWlsXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiRW1haWwgSWRcIiAgcmVxdWlyZWQvPjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cInBhc3NcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5BYm91dDwvaDE+XG4gIH1cbn0pXG5cbmNvbnN0IExvZ291dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0aC5sb2dvdXQoKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHA+WW91IGFyZSBub3cgbG9nZ2VkIG91dDwvcD5cbiAgfVxufSlcblxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlKSB7XG4gIGlmICghYXV0aC5sb2dnZWRJbigpKSB7XG4gICAgcmVwbGFjZSh7XG4gICAgICBwYXRobmFtZTogJy9jdXJhdGUvbG9naW4nLFxuICAgICAgc3RhdGU6IHsgbmV4dFBhdGhuYW1lOiBuZXh0U3RhdGUubG9jYXRpb24ucGF0aG5hbWUgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgUmVnaXN0ZXJDb21wbGV0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuICAgIGNvbnN0IGZpcnN0X25hbWUgPSB0aGlzLnJlZnMuZmlyc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IGxhc3RfbmFtZSA9IHRoaXMucmVmcy5sYXN0X25hbWUudmFsdWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZVxuXG4gICAgY29uc3QgeyBlbWFpbF9zaGEgfSA9IHRoaXMucHJvcHMucGFyYW1zXG4gICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYXV0aC5Db21wbGV0ZVJlZ2lzdHJhdGlvbihlbWFpbF9zaGEsIHBhc3MsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIChzdWNjZXNzLCBtc2cpID0+IHtcbiAgICAgIGlmICghc3VjY2Vzcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJywgbXNnKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvZGFzaGJvYXJkJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSB1c2VybmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJsYXN0X25hbWVcIiAgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJwYXNzXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5TaWduIHVwIGFzIGN1cmF0b3I8L2J1dHRvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ2luXCI+TG9nIGluPC9MaW5rPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgU291cmNlRmVlZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVlZHM6IFtdLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAgIHRoaXMuZmV0Y2hGZWVkcygpXG4gIH0sXG5cbiAgZmV0Y2hGZWVkcygpe1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgJC5hamF4KHtcbiAgICB1cmw6IFwiL2N1cmF0ZS9saXN0LXNvdXJjZS1mZWVkcy9cIixcbiAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiggeGhyICkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIgKFwiQXV0aG9yaXphdGlvblwiLCBcIlRva2VuIFwiICsgdG9rZW4pXG4gICAgfVxuICB9KS5zdWNjZXNzKGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgaWYoZGF0YSl7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlZWRzOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuZXJyb3IoKCkgPT4ge1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHVybCA9IHRoaXMucmVmcy51cmwudmFsdWVcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZWZzLm5hbWUudmFsdWVcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcIi9jdXJhdGUvYWRkLXNvdXJjZS1mZWVkL1wiLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogeyd1cmwnOiB1cmwsICduYW1lJzogbmFtZX0sXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiggeGhyICkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlciAoXCJBdXRob3JpemF0aW9uXCIsIFwiVG9rZW4gXCIgKyB0b2tlbilcbiAgICAgIH1cbiAgICAgIH0pLnN1Y2Nlc3MoKGRhdGEpID0+e1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnN1Y2Nlc3Mpe1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgICAgICBtc2c6IGRhdGEubXNnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSkuZXJyb3IoKCkgPT57XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgICAgbXNnOiAnQ291bGQgbm90IGFkZCBmZWVkJ1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgcm93cyA9IHRoaXMuc3RhdGUuZmVlZHMubWFwKCh2YWwpPT4ge1xuICAgIHJldHVybiggIDx0cj5cbiAgICAgICAgPHRkPnt2YWwubmFtZX08L3RkPlxuICAgICAgICA8dGQ+PGEgaHJlZj1cInt2YWwudXJsfVwiPkxpbms8L2E+PC90ZD5cbiAgICAgICAgPHRkPnt2YWwuY3JlYXRlZF9ieX08L3RkPlxuICAgICAgPC90cj4pXG4gICAgfVxuICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybSBwdXJlLWZvcm0tYWxpZ25lZFwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5BZGQgYSBuZXcgc291cmNlPC9sZWdlbmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPkZlZWQgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPVwibmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1cmxcIj5GZWVkIFVybDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPVwidXJsXCIgcCByZXF1aXJlZC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvblwiPkFkZCBTb3VyY2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxsZWdlbmQ+RXhpc3Rpbmcgc291cmNlczwvbGVnZW5kPlxuICAgICAgPGhyLz5cbiAgICAgIDx0YWJsZSBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT1cInB1cmUtdGFibGUgcHVyZS10YWJsZS1ob3Jpem9udGFsXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZlZWQgTmFtZShVbmlxdWUpPC90aD5cbiAgICAgICAgICAgIDx0aD5Vcmw8L3RoPlxuICAgICAgICAgICAgPHRoPkFkZGVkIEJ5PC90aD5cbiAgICAgICAgPC90cj5cblxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3Jvd3N9XG4gICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL2N1cmF0ZVwiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiAgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9nb3V0XCIgY29tcG9uZW50PXtMb2dvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInJhbmRvbS1hcnRpY2xlXCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwic291cmNlZmVlZHNcIiBjb21wb25lbnQ9e1NvdXJjZUZlZWRzfSBvbkVudGVyPXtyZXF1aXJlQXV0aH0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJyZWdpc3Rlci9jb21wbGV0ZS86ZW1haWxfc2hhXCIgY29tcG9uZW50PXtSZWdpc3RlckNvbXBsZXRlfS8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY3VyYXRvci1hcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7O0FBQUE7O0FBREE7QUFFQTs7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQVdBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7O0FBSEE7QUFEQTtBQU1BOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBREE7QUFJQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBSkE7QUFBQTtBQVFBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQURBO0FBSUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUpBO0FBQUE7QUFRQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFKQTtBQUFBO0FBdkJBO0FBREE7QUF4QkE7QUFBQTtBQUNBO0FBNkRBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXBCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBOztBQUNBO0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBRkE7QUFJQTs7QUFBQTtBQUNBO0FBTEE7QUFGQTtBQURBO0FBZkE7QUEzQ0E7QUFBQTtBQUNBO0FBMEVBOzs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFhQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFOQTtBQW5CQTtBQWlDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQURBO0FBSUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQURBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7O0FBQUE7O0FBVEE7QUFVQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQVpBO0FBbENBO0FBQUE7QUFDQTtBQW1EQTs7QUFDQTtBQUNBOzs7O0FBQUE7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7O0FBQUE7QUFOQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBQ0E7QUFRQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFOQTtBQWxCQTtBQThCQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUFBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7O0FBQUE7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7O0FBQUE7O0FBakJBO0FBa0JBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7QUFyQkE7QUFEQTtBQS9CQTtBQUFBO0FBQ0E7QUEwREE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWpDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUE5REE7QUFzRUE7QUFDQTtBQUNBOzs7QUFDQTs7O0FBQUE7QUFEQTtBQUVBOzs7QUFBQTs7QUFBQTs7QUFBQTtBQUZBO0FBR0E7OztBQUFBO0FBSEE7QUFBQTtBQURBO0FBQ0E7QUFRQTs7O0FBRUE7O0FBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFEQTtBQUVBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFFQTtBQUpBO0FBTUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUVBO0FBUkE7QUFVQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBVkE7QUFEQTtBQURBO0FBaUJBOzs7O0FBakJBO0FBa0JBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQ0E7OztBQUNBOzs7O0FBREE7QUFFQTs7OztBQUZBO0FBR0E7Ozs7QUFIQTtBQURBO0FBREE7QUFTQTs7O0FBQ0E7QUFWQTtBQW5CQTtBQURBO0FBaEZBO0FBQUE7QUFDQTtBQXFIQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})