webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopView = _react2.default.createClass({\n  displayName: 'DashBoardTopView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '40px',\n      padding: '10px',\n      borderBottom: '1px solid #2ecc71'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    var dashActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    if (!sfActive && !curateActive) {\n      dashActive = true;\n    }\n    console.log(dashActive);\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1-3', style: { fontSize: '12px', paddingTop: '5px' } },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-2-3' },\n        dashActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/article/show' },\n              'Curate Articles'\n            )\n          )\n        ),\n        sfActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/article/sbow' },\n              'Curate Articles'\n            )\n          )\n        ),\n        curateActive && _react2.default.createElement(\n          'div',\n          { className: 'pure-g', style: { padding: '6px 5px 5px 5px' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate/sourcefeeds' },\n              'Add Source Feeds'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-12-24', style: { textAlign: 'center' } },\n            _react2.default.createElement(\n              _reactRouter.Link,\n              { to: '/curate' },\n              'Dashboard'\n            )\n          )\n        )\n      )\n    );\n  }\n});\n\nvar DashBoardView = _react2.default.createClass({\n  displayName: 'DashBoardView',\n  render: function render() {\n    var _props = this.props;\n    var welcomeMsg = _props.welcomeMsg;\n    var pathname = _props.pathname;\n\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g' },\n      _react2.default.createElement('div', { className: 'pure-u-2-24' }),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-20-24' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-g' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1' },\n            _react2.default.createElement(DashBoardTopView, { pathname: pathname, username: 'ybv' })\n          )\n        )\n      ),\n      _react2.default.createElement('div', { className: 'pure-u-2-24' })\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return _react2.default.createElement(DashBoardView, { pathname: pathname });\n    }\n  }\n});\n\nvar Dashboard = _react2.default.createClass({\n  displayName: 'Dashboard',\n  render: function render() {\n    var token = _auth2.default.getToken();\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Dashboard'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'You made it!'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        token\n      )\n    );\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'table',\n      { className: 'pure-table pure-table-horizontal' },\n      _react2.default.createElement(\n        'thead',\n        null,\n        _react2.default.createElement(\n          'tr',\n          null,\n          _react2.default.createElement(\n            'th',\n            null,\n            'Feed Name(Unique)'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Url'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Added By'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'tbody',\n        null,\n        rows\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'article/curate', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wVmlldyA9ICBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXNlcm5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdG9wYmFyID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjdmOScsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGJvcmRlckJvdHRvbSA6ICcxcHggc29saWQgIzJlY2M3MSdcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY3VyYXRlQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgc2ZBY3RpdmUgPSBmYWxzZVxuICAgIGxldCBkYXNoQWN0aXZlICA9IGZhbHNlXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdhcnRpY2xlL2N1cmF0ZScpID4gLTEpIHtcbiAgICAgIGN1cmF0ZUFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdzb3VyY2VmZWVkcycpID4gLTEpIHtcbiAgICAgIHNmQWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIXNmQWN0aXZlICYmICFjdXJhdGVBY3RpdmUpe1xuICAgICAgZGFzaEFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGFzaEFjdGl2ZSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCIgc3R5bGU9e3RvcGJhcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIiBzdHlsZT17e2ZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmdUb3A6ICc1cHgnfX0+XG4gICAgICAgIExvZ2dlZCBpbiBhczoge3VzZXJuYW1lfVxuICAgICAgICA8YnIvPlxuICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvbG9nb3V0XCI+TG9nIG91dDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMi0zXCIgPlxuICAgICAgICB7ZGFzaEFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvc291cmNlZmVlZHNcIj5BZGQgU291cmNlIEZlZWRzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9hcnRpY2xlL3Nob3dcIj5DdXJhdGUgQXJ0aWNsZXM8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICAgIHtzZkFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMTItMjRcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2FydGljbGUvc2Jvd1wiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAge2N1cmF0ZUFjdGl2ZSAmJiAoPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIiBzdHlsZT17e3BhZGRpbmc6ICc2cHggNXB4IDVweCA1cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvc291cmNlZmVlZHNcIj5BZGQgU291cmNlIEZlZWRzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZVwiPkRhc2hib2FyZDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVmlldyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt3ZWxjb21lTXNnLCBwYXRobmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTItMjRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTIwLTI0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIj5cbiAgICAgICAgICAgICAgPERhc2hCb2FyZFRvcFZpZXcgcGF0aG5hbWU9e3BhdGhuYW1lfSB1c2VybmFtZT1cInlidlwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMi0yNFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IGF1dGgubG9nZ2VkSW4oKVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVBdXRoKGxvZ2dlZEluKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogbG9nZ2VkSW5cbiAgICB9KVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBhdXRoLm9uQ2hhbmdlID0gdGhpcy51cGRhdGVBdXRoXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGlmIChwYXRobmFtZS5pbmRleE9mKCdsb2dpbicpID4gLTEpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvY3VyYXRlLycpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdyZWdpc3Rlci9jb21wbGV0ZScpID4gLTEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICA8SGVsbG9Db250YWluZXIgd2VsY29tZU1zZz0nV2VsY29tZSB0byBnb29kIG5ld3MgcHJvamVjdC4gU2lnbiB1cCB0byBjb250aW51ZS4nIC8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ2xvZ2luJykgPiAtMSkgIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICA8SGVsbG9Db250YWluZXIgd2VsY29tZU1zZz0nV2VsY29tZSB0byBnb29kIG5ld3MgcHJvamVjdC4gTG9naW4gdG8gY29udGludWUuJy8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gPERhc2hCb2FyZFZpZXcgcGF0aG5hbWU9e3BhdGhuYW1lfSAvPlxuICAgIH1cblxuICB9XG59KVxuXG5jb25zdCBEYXNoYm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF1dGguZ2V0VG9rZW4oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8cD5Zb3UgbWFkZSBpdCE8L3A+XG4gICAgICAgIDxwPnt0b2tlbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlXG4gICAgY29uc3QgcGFzcyA9IHRoaXMucmVmcy5wYXNzLnZhbHVlXG5cbiAgICBhdXRoLkxvZ2luQ3VyYXRvcihlbWFpbCwgcGFzcywgKGxvZ2dlZEluLCBtc2cpID0+IHtcbiAgICAgIGlmICghbG9nZ2VkSW4pXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIG1zZzogbXNnfSlcblxuICAgICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUubmV4dFBhdGhuYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZShsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiICBwbGFjZWhvbGRlcj1cIkVtYWlsIElkXCIgIHJlcXVpcmVkLz48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJwYXNzXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkLz48L2xhYmVsPjxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIHB1cmUtaW5wdXQtMSBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+TG9nIEluPC9idXR0b24+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMuc3RhdGUubXNnfTwvZGl2Pil9XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+QWJvdXQ8L2gxPlxuICB9XG59KVxuXG5jb25zdCBMb2dvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF1dGgubG9nb3V0KClcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxwPllvdSBhcmUgbm93IGxvZ2dlZCBvdXQ8L3A+XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHJlcXVpcmVBdXRoKG5leHRTdGF0ZSwgcmVwbGFjZSkge1xuICBpZiAoIWF1dGgubG9nZ2VkSW4oKSkge1xuICAgIHJlcGxhY2Uoe1xuICAgICAgcGF0aG5hbWU6ICcvY3VyYXRlL2xvZ2luJyxcbiAgICAgIHN0YXRlOiB7IG5leHRQYXRobmFtZTogbmV4dFN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IFJlZ2lzdGVyQ29tcGxldGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcbiAgICBjb25zdCBmaXJzdF9uYW1lID0gdGhpcy5yZWZzLmZpcnN0X25hbWUudmFsdWVcbiAgICBjb25zdCBsYXN0X25hbWUgPSB0aGlzLnJlZnMubGFzdF9uYW1lLnZhbHVlXG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWVcblxuICAgIGNvbnN0IHsgZW1haWxfc2hhIH0gPSB0aGlzLnByb3BzLnBhcmFtc1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHNcblxuICAgIGF1dGguQ29tcGxldGVSZWdpc3RyYXRpb24oZW1haWxfc2hhLCBwYXNzLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHVzZXJuYW1lLCAoc3VjY2VzcywgbXNnKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScsIG1zZylcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2cgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2Rhc2hib2FyZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgdXNlcm5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwibGFzdF9uYW1lXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwicGFzc1wiICBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIHB1cmUtaW5wdXQtMSBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+U2lnbiB1cCBhcyBjdXJhdG9yPC9idXR0b24+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMuc3RhdGUubXNnfTwvZGl2Pil9XG4gICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9sb2dpblwiPkxvZyBpbjwvTGluaz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IFNvdXJjZUZlZWRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlZWRzOiBbXSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgICB0aGlzLmZldGNoRmVlZHMoKVxuICB9LFxuXG4gIGZldGNoRmVlZHMoKXtcbiAgICBjb25zdCB0b2tlbiA9IGF1dGguZ2V0VG9rZW4oKVxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICQuYWpheCh7XG4gICAgdXJsOiBcIi9jdXJhdGUvbGlzdC1zb3VyY2UtZmVlZHMvXCIsXG4gICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oIHhociApIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyIChcIkF1dGhvcml6YXRpb25cIiwgXCJUb2tlbiBcIiArIHRva2VuKVxuICAgIH1cbiAgfSkuc3VjY2VzcyhmdW5jdGlvbiggZGF0YSApIHtcblxuICAgICAgaWYoZGF0YSl7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlZWRzOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjp0cnVlLFxuICAgICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuZXJyb3IoKCkgPT4ge1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgIG1zZzogJ0NvdWxkIG5vdCBmZXRjaCBzb3VyY2UgZmVlZHMnXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnN0YXRlLmZlZWRzLm1hcCgodmFsKT0+IHtcbiAgICByZXR1cm4oICA8dHI+XG4gICAgICAgIDx0ZD57dmFsLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkPjxhIGhyZWY9XCJ7dmFsLnVybH1cIj5MaW5rPC9hPjwvdGQ+XG4gICAgICAgIDx0ZD57dmFsLmNyZWF0ZWRfYnl9PC90ZD5cbiAgICAgIDwvdHI+KVxuICAgIH1cbiAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwdXJlLXRhYmxlIHB1cmUtdGFibGUtaG9yaXpvbnRhbFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GZWVkIE5hbWUoVW5pcXVlKTwvdGg+XG4gICAgICAgICAgICA8dGg+VXJsPC90aD5cbiAgICAgICAgICAgIDx0aD5BZGRlZCBCeTwvdGg+XG4gICAgICAgIDwvdHI+XG5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtyb3dzfVxuICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59KVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9jdXJhdGVcIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ291dFwiIGNvbXBvbmVudD17TG9nb3V0fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJhcnRpY2xlL2N1cmF0ZVwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInNvdXJjZWZlZWRzXCIgY29tcG9uZW50PXtTb3VyY2VGZWVkc30gb25FbnRlcj17cmVxdWlyZUF1dGh9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicmVnaXN0ZXIvY29tcGxldGUvOmVtYWlsX3NoYVwiIGNvbXBvbmVudD17UmVnaXN0ZXJDb21wbGV0ZX0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJkYXNoYm9hcmRcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0gb25FbnRlcj17cmVxdWlyZUF1dGh9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY3VyYXRvci1hcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7O0FBQUE7O0FBREE7QUFFQTs7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQVdBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUFBOztBQUhBO0FBREE7QUFNQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQURBO0FBSUE7O0FBQUE7QUFDQTs7QUFBQTs7QUFEQTtBQUpBO0FBQUE7QUFRQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7O0FBREE7QUFKQTtBQUFBO0FBUUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBREE7QUFJQTs7QUFBQTtBQUNBOztBQUFBOztBQURBO0FBSkE7QUFBQTtBQXZCQTtBQURBO0FBdkJBO0FBQUE7QUFDQTtBQTREQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFGQTtBQURBO0FBSEE7QUFVQTtBQVhBO0FBSkE7QUFBQTtBQUNBO0FBcUJBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXBCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBOztBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQWVBO0FBZkE7QUEzQ0E7QUFBQTtBQUNBO0FBK0RBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7OztBQURBO0FBRUE7Ozs7QUFGQTtBQUdBOzs7QUFBQTtBQUhBO0FBREE7QUFKQTtBQUFBO0FBQ0E7QUFhQTs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBYUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBTkE7QUFuQkE7QUFpQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFEQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUFBOztBQVRBO0FBVUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWxDQTtBQUFBO0FBQ0E7QUFtREE7O0FBQ0E7QUFDQTs7OztBQUFBO0FBRkE7QUFBQTtBQUNBO0FBS0E7O0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7OztBQUFBO0FBTkE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTkE7QUFsQkE7QUE4QkE7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTtBQUNBO0FBVkE7QUFZQTtBQUNBOztBQUFBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOztBQUFBOztBQWpCQTtBQWtCQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7O0FBckJBO0FBREE7QUEvQkE7QUFBQTtBQUNBO0FBMERBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQUZBO0FBY0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWxDQTtBQTBDQTtBQUNBO0FBQ0E7OztBQUNBOzs7QUFBQTtBQURBO0FBRUE7OztBQUFBOztBQUFBOztBQUFBO0FBRkE7QUFHQTs7O0FBQUE7QUFIQTtBQUFBO0FBREE7QUFDQTtBQVFBOztBQUNBO0FBQ0E7OztBQUNBOzs7QUFDQTs7OztBQURBO0FBRUE7Ozs7QUFGQTtBQUdBOzs7O0FBSEE7QUFEQTtBQURBO0FBU0E7OztBQUNBO0FBVkE7QUFEQTtBQXBEQTtBQUFBO0FBQ0E7QUFxRUE7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})