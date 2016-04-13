webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopView = _react2.default.createClass({\n  displayName: 'DashBoardTopView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '40px',\n      padding: '10px',\n      borderBottom: '1px solid #2ecc71'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    var dashActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    if (!sfActive && !curateActive) {\n      dashActive = true;\n    }\n    console.log(dashActive);\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1-3', style: { fontSize: '12px', paddingTop: '5px' } },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-2-3' },\n        dashActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/article/curate' },\n              'Curate Articles'\n            )\n          )\n        ),\n        sfActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/cutate/article/curate' },\n              'Curate Articles'\n            )\n          )\n        ),\n        curateActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          )\n        )\n      )\n    );\n  }\n});\n\nvar DashBoardView = _react2.default.createClass({\n  displayName: 'DashBoardView',\n  render: function render() {\n    var _props = this.props;\n    var welcomeMsg = _props.welcomeMsg;\n    var pathname = _props.pathname;\n\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g' },\n      _react2.default.createElement('div', { className: 'pure-u-2-24' }),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-20-24' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-g' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1' },\n            _react2.default.createElement(DashBoardTopView, { pathname: pathname, username: 'ybv' })\n          )\n        )\n      ),\n      _react2.default.createElement('div', { className: 'pure-u-2-24' })\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return _react2.default.createElement(DashBoardView, { pathname: pathname });\n    }\n  }\n});\n\nvar Dashboard = _react2.default.createClass({\n  displayName: 'Dashboard',\n  render: function render() {\n    var token = _auth2.default.getToken();\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Dashboard'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'You made it!'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        token\n      )\n    );\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'table',\n      { className: 'pure-table pure-table-horizontal' },\n      _react2.default.createElement(\n        'thead',\n        null,\n        _react2.default.createElement(\n          'tr',\n          null,\n          _react2.default.createElement(\n            'th',\n            null,\n            'Feed Name(Unique)'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Url'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Added By'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'tbody',\n        null,\n        rows\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: '/article/curate', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wVmlldyA9ICBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXNlcm5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdG9wYmFyID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjdmOScsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGJvcmRlckJvdHRvbSA6ICcxcHggc29saWQgIzJlY2M3MSdcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY3VyYXRlQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgc2ZBY3RpdmUgPSBmYWxzZVxuICAgIGxldCBkYXNoQWN0aXZlICA9IGZhbHNlXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdhcnRpY2xlL2N1cmF0ZScpID4gLTEpIHtcbiAgICAgIGN1cmF0ZUFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdzb3VyY2VmZWVkcycpID4gLTEpIHtcbiAgICAgIHNmQWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIXNmQWN0aXZlICYmICFjdXJhdGVBY3RpdmUpe1xuICAgICAgZGFzaEFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGFzaEFjdGl2ZSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCIgc3R5bGU9e3RvcGJhcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIiBzdHlsZT17e2ZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmdUb3A6ICc1cHgnfX0+XG4gICAgICAgIExvZ2dlZCBpbiBhczoge3VzZXJuYW1lfVxuICAgICAgICA8YnIvPlxuICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvbG9nb3V0XCI+TG9nIG91dDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMi0zXCIgPlxuICAgICAgICB7ZGFzaEFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvc291cmNlZmVlZHNcIj5BZGQgU291cmNlIEZlZWRzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9hcnRpY2xlL2N1cmF0ZVwiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAge3NmQWN0aXZlICYmICg8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt7cGFkZGluZzogJzZweCA1cHggNXB4IDVweCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMTItMjRcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZVwiPkRhc2hib2FyZDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xMi0yNFwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jdXRhdGUvYXJ0aWNsZS9jdXJhdGVcIj5DdXJhdGUgQXJ0aWNsZXM8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICAgIHtjdXJhdGVBY3RpdmUgJiYgKDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCIgc3R5bGU9e3twYWRkaW5nOiAnNnB4IDVweCA1cHggNXB4J319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xMi0yNFwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL3NvdXJjZWZlZWRzXCI+QWRkIFNvdXJjZSBGZWVkczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xMi0yNFwiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IERhc2hCb2FyZFZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7d2VsY29tZU1zZywgcGF0aG5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yLTI0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yMC0yNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xXCI+XG4gICAgICAgICAgICAgIDxEYXNoQm9hcmRUb3BWaWV3IHBhdGhuYW1lPXtwYXRobmFtZX0gdXNlcm5hbWU9XCJ5YnZcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTItMjRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXV0aC5vbkNoYW5nZSA9IHRoaXMudXBkYXRlQXV0aFxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBpZiAocGF0aG5hbWUuaW5kZXhPZignbG9naW4nKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2N1cmF0ZS8nKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZigncmVnaXN0ZXIvY29tcGxldGUnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIFNpZ24gdXAgdG8gY29udGludWUuJyAvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmRleE9mKCdsb2dpbicpID4gLTEpICB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPEhlbGxvQ29udGFpbmVyIHdlbGNvbWVNc2c9J1dlbGNvbWUgdG8gZ29vZCBuZXdzIHByb2plY3QuIExvZ2luIHRvIGNvbnRpbnVlLicvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIDxEYXNoQm9hcmRWaWV3IHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cbiAgICB9XG5cbiAgfVxufSlcblxuY29uc3QgRGFzaGJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBhdXRoLmdldFRva2VuKClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgPHA+WW91IG1hZGUgaXQhPC9wPlxuICAgICAgICA8cD57dG9rZW59PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBlbWFpbCA9IHRoaXMucmVmcy5lbWFpbC52YWx1ZVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuXG4gICAgYXV0aC5Mb2dpbkN1cmF0b3IoZW1haWwsIHBhc3MsIChsb2dnZWRJbiwgbXNnKSA9PiB7XG4gICAgICBpZiAoIWxvZ2dlZEluKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBtc2c6IG1zZ30pXG5cbiAgICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHNcblxuICAgICAgaWYgKGxvY2F0aW9uLnN0YXRlICYmIGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UobG9jYXRpb24uc3RhdGUubmV4dFBhdGhuYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwiZW1haWxcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiAgcGxhY2Vob2xkZXI9XCJFbWFpbCBJZFwiICByZXF1aXJlZC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwicGFzc1wiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBwdXJlLWlucHV0LTEgcHVyZS1idXR0b24tcHJpbWFyeVwiPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmICg8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnN0YXRlLm1zZ308L2Rpdj4pfVxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPkFib3V0PC9oMT5cbiAgfVxufSlcblxuY29uc3QgTG9nb3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhdXRoLmxvZ291dCgpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8cD5Zb3UgYXJlIG5vdyBsb2dnZWQgb3V0PC9wPlxuICB9XG59KVxuXG5mdW5jdGlvbiByZXF1aXJlQXV0aChuZXh0U3RhdGUsIHJlcGxhY2UpIHtcbiAgaWYgKCFhdXRoLmxvZ2dlZEluKCkpIHtcbiAgICByZXBsYWNlKHtcbiAgICAgIHBhdGhuYW1lOiAnL2N1cmF0ZS9sb2dpbicsXG4gICAgICBzdGF0ZTogeyBuZXh0UGF0aG5hbWU6IG5leHRTdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBSZWdpc3RlckNvbXBsZXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcGFzcyA9IHRoaXMucmVmcy5wYXNzLnZhbHVlXG4gICAgY29uc3QgZmlyc3RfbmFtZSA9IHRoaXMucmVmcy5maXJzdF9uYW1lLnZhbHVlXG4gICAgY29uc3QgbGFzdF9uYW1lID0gdGhpcy5yZWZzLmxhc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlXG5cbiAgICBjb25zdCB7IGVtYWlsX3NoYSB9ID0gdGhpcy5wcm9wcy5wYXJhbXNcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICBhdXRoLkNvbXBsZXRlUmVnaXN0cmF0aW9uKGVtYWlsX3NoYSwgcGFzcywgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCB1c2VybmFtZSwgKHN1Y2Nlc3MsIG1zZykgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnLCBtc2cpXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIG1zZzogbXNnIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy9kYXNoYm9hcmQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIHVzZXJuYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwiZmlyc3RfbmFtZVwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImxhc3RfbmFtZVwiICBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cInBhc3NcIiAgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBwdXJlLWlucHV0LTEgcHVyZS1idXR0b24tcHJpbWFyeVwiPlNpZ24gdXAgYXMgY3VyYXRvcjwvYnV0dG9uPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmICg8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnN0YXRlLm1zZ308L2Rpdj4pfVxuICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvbG9naW5cIj5Mb2cgaW48L0xpbms+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBTb3VyY2VGZWVkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZWVkczogW10sXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgICAgdGhpcy5mZXRjaEZlZWRzKClcbiAgfSxcblxuICBmZXRjaEZlZWRzKCl7XG4gICAgY29uc3QgdG9rZW4gPSBhdXRoLmdldFRva2VuKClcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAkLmFqYXgoe1xuICAgIHVybDogXCIvY3VyYXRlL2xpc3Qtc291cmNlLWZlZWRzL1wiLFxuICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCB4aHIgKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlciAoXCJBdXRob3JpemF0aW9uXCIsIFwiVG9rZW4gXCIgKyB0b2tlbilcbiAgICB9XG4gIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oIGRhdGEgKSB7XG5cbiAgICAgIGlmKGRhdGEpe1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBmZWVkczogZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgICBtc2c6ICdDb3VsZCBub3QgZmV0Y2ggc291cmNlIGZlZWRzJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pLmVycm9yKCgpID0+IHtcbiAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICBtc2c6ICdDb3VsZCBub3QgZmV0Y2ggc291cmNlIGZlZWRzJ1xuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICBjb25zdCByb3dzID0gdGhpcy5zdGF0ZS5mZWVkcy5tYXAoKHZhbCk9PiB7XG4gICAgcmV0dXJuKCAgPHRyPlxuICAgICAgICA8dGQ+e3ZhbC5uYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD48YSBocmVmPVwie3ZhbC51cmx9XCI+TGluazwvYT48L3RkPlxuICAgICAgICA8dGQ+e3ZhbC5jcmVhdGVkX2J5fTwvdGQ+XG4gICAgICA8L3RyPilcbiAgICB9XG4gIClcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZSBwdXJlLXRhYmxlLWhvcml6b250YWxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVlZCBOYW1lKFVuaXF1ZSk8L3RoPlxuICAgICAgICAgICAgPHRoPlVybDwvdGg+XG4gICAgICAgICAgICA8dGg+QWRkZWQgQnk8L3RoPlxuICAgICAgICA8L3RyPlxuXG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7cm93c31cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufSlcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvY3VyYXRlXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiICBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dvdXRcIiBjb21wb25lbnQ9e0xvZ291dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2FydGljbGUvY3VyYXRlXCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwic291cmNlZmVlZHNcIiBjb21wb25lbnQ9e1NvdXJjZUZlZWRzfSBvbkVudGVyPXtyZXF1aXJlQXV0aH0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJyZWdpc3Rlci9jb21wbGV0ZS86ZW1haWxfc2hhXCIgY29tcG9uZW50PXtSZWdpc3RlckNvbXBsZXRlfS8+XG4gICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfSBvbkVudGVyPXtyZXF1aXJlQXV0aH0gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjdXJhdG9yLWFwcC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFBQTs7QUFEQTtBQUVBOztBQUFBO0FBQUE7QUFGQTtBQURBO0FBSEE7QUFBQTtBQUNBO0FBV0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7O0FBSEE7QUFEQTtBQU1BOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBREE7QUFJQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBSkE7QUFBQTtBQVFBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQURBO0FBSUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUpBO0FBQUE7QUFRQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFKQTtBQUFBO0FBdkJBO0FBREE7QUF2QkE7QUFBQTtBQUNBO0FBNERBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUZBO0FBREE7QUFIQTtBQVVBO0FBWEE7QUFKQTtBQUFBO0FBQ0E7QUFxQkE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBcEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQURBO0FBZUE7O0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQURBO0FBZUE7QUFmQTtBQTNDQTtBQUFBO0FBQ0E7QUErREE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOzs7O0FBREE7QUFFQTs7OztBQUZBO0FBR0E7OztBQUFBO0FBSEE7QUFEQTtBQUpBO0FBQUE7QUFDQTtBQWFBOzs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFhQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFOQTtBQW5CQTtBQWlDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQURBO0FBSUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQURBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7O0FBQUE7O0FBVEE7QUFVQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQVpBO0FBbENBO0FBQUE7QUFDQTtBQW1EQTs7QUFDQTtBQUNBOzs7O0FBQUE7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7O0FBQUE7QUFOQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBQ0E7QUFRQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFOQTtBQWxCQTtBQThCQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUFBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7O0FBQUE7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7O0FBQUE7O0FBakJBO0FBa0JBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7QUFyQkE7QUFEQTtBQS9CQTtBQUFBO0FBQ0E7QUEwREE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBRkE7QUFjQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBbENBO0FBMENBO0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUFBO0FBREE7QUFFQTs7O0FBQUE7O0FBQUE7O0FBQUE7QUFGQTtBQUdBOzs7QUFBQTtBQUhBO0FBQUE7QUFEQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUNBOzs7O0FBREE7QUFFQTs7OztBQUZBO0FBR0E7Ozs7QUFIQTtBQURBO0FBREE7QUFTQTs7O0FBQ0E7QUFWQTtBQURBO0FBcERBO0FBQUE7QUFDQTtBQXFFQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})