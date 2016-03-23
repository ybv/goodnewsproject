webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(92);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(128);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar DashBoardTopView = _react2.default.createClass({\n  displayName: 'DashBoardTopView',\n  render: function render() {\n    var username = this.props.username;\n\n    var topbar = {\n      backgroundColor: '#f5f7f9',\n      height: '40px',\n      padding: '20px',\n      borderBottom: '1px solid #2ecc71'\n    };\n    var pathname = this.props.pathname;\n\n    var curateActive = false;\n    var sfActive = false;\n    if (pathname.indexOf('article/curate') > -1) {\n      curateActive = true;\n    }\n    if (pathname.indexOf('sourcefeeds') > -1) {\n      sfActive = true;\n    }\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g', style: topbar },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1-3' },\n        'Logged in as: ',\n        username,\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/curate/logout' },\n          'Log out'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-2-3' },\n        curateActive && _react2.default.createElement(\n          _reactRouter.Link,\n          { to: 'article/curate' },\n          'Curate Articles'\n        ),\n        curateActive || 'Curate Articles',\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1' },\n          sfActive && _react2.default.createElement(\n            _reactRouter.Link,\n            { to: 'article/curate' },\n            'Add Source Feeds'\n          ),\n          sfActive || 'Add Source Feeds'\n        )\n      )\n    );\n  }\n});\n\nvar DashBoardView = _react2.default.createClass({\n  displayName: 'DashBoardView',\n  render: function render() {\n    var _props = this.props;\n    var welcomeMsg = _props.welcomeMsg;\n    var pathname = _props.pathname;\n\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-g' },\n      _react2.default.createElement('div', { className: 'pure-u-2-24' }),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-20-24' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-g' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pure-u-1' },\n            _react2.default.createElement(DashBoardTopView, { pathname: pathname, username: 'ybv' })\n          )\n        )\n      ),\n      _react2.default.createElement('div', { className: 'pure-u-2-24' })\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    var pathname = this.props.location.pathname;\n\n    if (this.state.loggedIn) {\n      if (pathname.indexOf('login') > -1) {\n        this.context.router.replace('/curate/');\n      }\n    }\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {\n      return _react2.default.createElement(DashBoardView, { pathname: pathname });\n    }\n  }\n});\n\nvar Dashboard = _react2.default.createClass({\n  displayName: 'Dashboard',\n  render: function render() {\n    var token = _auth2.default.getToken();\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Dashboard'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'You made it!'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        token\n      )\n    );\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.LoginCurator(email, pass, function (loggedIn, msg) {\n      if (!loggedIn) return _this.setState({ error: true, msg: msg });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\nvar SourceFeeds = _react2.default.createClass({\n  displayName: 'SourceFeeds',\n  getInitialState: function getInitialState() {\n    return {\n      feeds: [],\n      error: false,\n      msg: ''\n    };\n  },\n  componentWillMount: function componentWillMount() {\n    this.fetchFeeds();\n  },\n  fetchFeeds: function fetchFeeds() {\n    var token = _auth2.default.getToken();\n    var that = this;\n    _jquery2.default.ajax({\n      url: \"/curate/list-source-feeds/\",\n      beforeSend: function beforeSend(xhr) {\n        xhr.setRequestHeader(\"Authorization\", \"Token \" + token);\n      }\n    }).success(function (data) {\n\n      if (data) {\n        that.setState({\n          feeds: data\n        });\n      } else {\n        that.setState({\n          error: true,\n          msg: 'Could not fetch source feeds'\n        });\n      }\n    }).error(function () {\n      that.setState({\n        error: true,\n        msg: 'Could not fetch source feeds'\n      });\n    });\n  },\n  render: function render() {\n    var rows = this.state.feeds.map(function (val) {\n      return _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'td',\n          null,\n          val.name\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '{val.url}' },\n            'Link'\n          )\n        ),\n        _react2.default.createElement(\n          'td',\n          null,\n          val.created_by\n        )\n      );\n    });\n\n    return _react2.default.createElement(\n      'table',\n      { className: 'pure-table pure-table-horizontal' },\n      _react2.default.createElement(\n        'thead',\n        null,\n        _react2.default.createElement(\n          'tr',\n          null,\n          _react2.default.createElement(\n            'th',\n            null,\n            'Feed Name(Unique)'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Url'\n          ),\n          _react2.default.createElement(\n            'th',\n            null,\n            'Added By'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'tbody',\n        null,\n        rows\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'article/curate', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'sourcefeeds', component: SourceFeeds, onEnter: requireAuth }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGFzaEJvYXJkVG9wVmlldyA9ICBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXNlcm5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdG9wYmFyID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjdmOScsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgIGJvcmRlckJvdHRvbSA6ICcxcHggc29saWQgIzJlY2M3MSdcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY3VyYXRlQWN0aXZlID0gZmFsc2VcbiAgICBsZXQgc2ZBY3RpdmUgPSBmYWxzZVxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZignYXJ0aWNsZS9jdXJhdGUnKSA+IC0xKSB7XG4gICAgICBjdXJhdGVBY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIGlmICggcGF0aG5hbWUuaW5kZXhPZignc291cmNlZmVlZHMnKSA+IC0xKSB7XG4gICAgICBzZkFjdGl2ZSA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiIHN0eWxlPXt0b3BiYXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgIExvZ2dlZCBpbiBhczoge3VzZXJuYW1lfVxuICAgICAgICA8TGluayB0bz1cIi9jdXJhdGUvbG9nb3V0XCI+TG9nIG91dDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMi0zXCI+XG4gICAgICAgIHtjdXJhdGVBY3RpdmUgJiYgPExpbmsgdG89XCJhcnRpY2xlL2N1cmF0ZVwiPkN1cmF0ZSBBcnRpY2xlczwvTGluaz59XG4gICAgICAgIHtjdXJhdGVBY3RpdmUgfHwgJ0N1cmF0ZSBBcnRpY2xlcyd9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIj5cbiAgICAgICAgICB7c2ZBY3RpdmUgJiYgPExpbmsgdG89XCJhcnRpY2xlL2N1cmF0ZVwiPkFkZCBTb3VyY2UgRmVlZHM8L0xpbms+fVxuICAgICAgICAgIHtzZkFjdGl2ZSB8fCAnQWRkIFNvdXJjZSBGZWVkcyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBEYXNoQm9hcmRWaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2csIHBhdGhuYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMi0yNFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMjAtMjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMVwiPlxuICAgICAgICAgICAgICA8RGFzaEJvYXJkVG9wVmlldyBwYXRobmFtZT17cGF0aG5hbWV9IHVzZXJuYW1lPVwieWJ2XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0yLTI0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dnZWRJbjogYXV0aC5sb2dnZWRJbigpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUF1dGgobG9nZ2VkSW4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBsb2dnZWRJblxuICAgIH0pXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGF1dGgub25DaGFuZ2UgPSB0aGlzLnVwZGF0ZUF1dGhcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgaWYgKHRoaXMuc3RhdGUubG9nZ2VkSW4pe1xuICAgICAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ2xvZ2luJykgPiAtMSkge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy9jdXJhdGUvJylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb25cbiAgICBpZiAoIHBhdGhuYW1lLmluZGV4T2YoJ3JlZ2lzdGVyL2NvbXBsZXRlJykgPiAtMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICAgIDxIZWxsb0NvbnRhaW5lciB3ZWxjb21lTXNnPSdXZWxjb21lIHRvIGdvb2QgbmV3cyBwcm9qZWN0LiBTaWduIHVwIHRvIGNvbnRpbnVlLicgLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5kZXhPZignbG9naW4nKSA+IC0xKSAge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICAgIDxIZWxsb0NvbnRhaW5lciB3ZWxjb21lTXNnPSdXZWxjb21lIHRvIGdvb2QgbmV3cyBwcm9qZWN0LiBMb2dpbiB0byBjb250aW51ZS4nLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiA8RGFzaEJvYXJkVmlldyBwYXRobmFtZT17cGF0aG5hbWV9IC8+XG4gICAgfVxuXG4gIH1cbn0pXG5cbmNvbnN0IERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxwPllvdSBtYWRlIGl0ITwvcD5cbiAgICAgICAgPHA+e3Rva2VufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnJlZnMuZW1haWwudmFsdWVcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcblxuICAgIGF1dGguTG9naW5DdXJhdG9yKGVtYWlsLCBwYXNzLCAobG9nZ2VkSW4sIG1zZykgPT4ge1xuICAgICAgaWYgKCFsb2dnZWRJbilcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2d9KVxuXG4gICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cImVtYWlsXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiRW1haWwgSWRcIiAgcmVxdWlyZWQvPjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cInBhc3NcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5Mb2cgSW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5BYm91dDwvaDE+XG4gIH1cbn0pXG5cbmNvbnN0IExvZ291dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0aC5sb2dvdXQoKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHA+WW91IGFyZSBub3cgbG9nZ2VkIG91dDwvcD5cbiAgfVxufSlcblxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlKSB7XG4gIGlmICghYXV0aC5sb2dnZWRJbigpKSB7XG4gICAgcmVwbGFjZSh7XG4gICAgICBwYXRobmFtZTogJy9jdXJhdGUvbG9naW4nLFxuICAgICAgc3RhdGU6IHsgbmV4dFBhdGhuYW1lOiBuZXh0U3RhdGUubG9jYXRpb24ucGF0aG5hbWUgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgUmVnaXN0ZXJDb21wbGV0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuICAgIGNvbnN0IGZpcnN0X25hbWUgPSB0aGlzLnJlZnMuZmlyc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IGxhc3RfbmFtZSA9IHRoaXMucmVmcy5sYXN0X25hbWUudmFsdWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZVxuXG4gICAgY29uc3QgeyBlbWFpbF9zaGEgfSA9IHRoaXMucHJvcHMucGFyYW1zXG4gICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYXV0aC5Db21wbGV0ZVJlZ2lzdHJhdGlvbihlbWFpbF9zaGEsIHBhc3MsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIChzdWNjZXNzLCBtc2cpID0+IHtcbiAgICAgIGlmICghc3VjY2Vzcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJywgbXNnKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKCcvZGFzaGJvYXJkJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSB1c2VybmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJsYXN0X25hbWVcIiAgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJwYXNzXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5TaWduIHVwIGFzIGN1cmF0b3I8L2J1dHRvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5zdGF0ZS5tc2d9PC9kaXY+KX1cbiAgICAgICAgPExpbmsgdG89XCIvY3VyYXRlL2xvZ2luXCI+TG9nIGluPC9MaW5rPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgU291cmNlRmVlZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmVlZHM6IFtdLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAgIHRoaXMuZmV0Y2hGZWVkcygpXG4gIH0sXG5cbiAgZmV0Y2hGZWVkcygpe1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgJC5hamF4KHtcbiAgICB1cmw6IFwiL2N1cmF0ZS9saXN0LXNvdXJjZS1mZWVkcy9cIixcbiAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiggeGhyICkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIgKFwiQXV0aG9yaXphdGlvblwiLCBcIlRva2VuIFwiICsgdG9rZW4pXG4gICAgfVxuICB9KS5zdWNjZXNzKGZ1bmN0aW9uKCBkYXRhICkge1xuXG4gICAgICBpZihkYXRhKXtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmVlZHM6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOnRydWUsXG4gICAgICAgICAgbXNnOiAnQ291bGQgbm90IGZldGNoIHNvdXJjZSBmZWVkcydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5lcnJvcigoKSA9PiB7XG4gICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6dHJ1ZSxcbiAgICAgICAgbXNnOiAnQ291bGQgbm90IGZldGNoIHNvdXJjZSBmZWVkcydcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgcm93cyA9IHRoaXMuc3RhdGUuZmVlZHMubWFwKCh2YWwpPT4ge1xuICAgIHJldHVybiggIDx0cj5cbiAgICAgICAgPHRkPnt2YWwubmFtZX08L3RkPlxuICAgICAgICA8dGQ+PGEgaHJlZj1cInt2YWwudXJsfVwiPkxpbms8L2E+PC90ZD5cbiAgICAgICAgPHRkPnt2YWwuY3JlYXRlZF9ieX08L3RkPlxuICAgICAgPC90cj4pXG4gICAgfVxuICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInB1cmUtdGFibGUgcHVyZS10YWJsZS1ob3Jpem9udGFsXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZlZWQgTmFtZShVbmlxdWUpPC90aD5cbiAgICAgICAgICAgIDx0aD5Vcmw8L3RoPlxuICAgICAgICAgICAgPHRoPkFkZGVkIEJ5PC90aD5cbiAgICAgICAgPC90cj5cblxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3Jvd3N9XG4gICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn0pXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL2N1cmF0ZVwiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiAgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9nb3V0XCIgY29tcG9uZW50PXtMb2dvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImFydGljbGUvY3VyYXRlXCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwic291cmNlZmVlZHNcIiBjb21wb25lbnQ9e1NvdXJjZUZlZWRzfSBvbkVudGVyPXtyZXF1aXJlQXV0aH0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJyZWdpc3Rlci9jb21wbGV0ZS86ZW1haWxfc2hhXCIgY29tcG9uZW50PXtSZWdpc3RlckNvbXBsZXRlfS8+XG4gICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfSBvbkVudGVyPXtyZXF1aXJlQXV0aH0gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjdXJhdG9yLWFwcC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFBQTs7QUFEQTtBQUVBOztBQUFBO0FBQUE7QUFGQTtBQURBO0FBSEE7QUFBQTtBQUNBO0FBV0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBOztBQUFBOztBQUNBO0FBQ0E7O0FBQUE7O0FBRkE7QUFEQTtBQUtBOztBQUFBO0FBQ0E7O0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBQUE7QUFDQTtBQUxBO0FBTEE7QUFEQTtBQWxCQTtBQUFBO0FBQ0E7QUFvQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBRkE7QUFEQTtBQUhBO0FBVUE7QUFYQTtBQUpBO0FBQUE7QUFDQTtBQXFCQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFwQkE7QUEyQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFlQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFlQTtBQWZBO0FBM0NBO0FBQUE7QUFDQTtBQStEQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7Ozs7QUFEQTtBQUVBOzs7O0FBRkE7QUFHQTs7O0FBQUE7QUFIQTtBQURBO0FBSkE7QUFBQTtBQUNBO0FBYUE7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQU5BO0FBbkJBO0FBaUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQURBO0FBREE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTs7QUFUQTtBQVVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFsQ0E7QUFBQTtBQUNBO0FBbURBOztBQUNBO0FBQ0E7Ozs7QUFBQTtBQUZBO0FBQUE7QUFDQTtBQUtBOztBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7Ozs7QUFBQTtBQU5BO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFDQTtBQVFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBbEJBO0FBOEJBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7O0FBQUE7QUFDQTtBQVZBO0FBWUE7QUFDQTs7QUFBQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTs7QUFBQTs7QUFqQkE7QUFrQkE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBOztBQXJCQTtBQURBO0FBL0JBO0FBQUE7QUFDQTtBQTBEQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFGQTtBQWNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFsQ0E7QUEwQ0E7QUFDQTtBQUNBOzs7QUFDQTs7O0FBQUE7QUFEQTtBQUVBOzs7QUFBQTs7QUFBQTs7QUFBQTtBQUZBO0FBR0E7OztBQUFBO0FBSEE7QUFBQTtBQURBO0FBQ0E7QUFRQTs7QUFDQTtBQUNBOzs7QUFDQTs7O0FBQ0E7Ozs7QUFEQTtBQUVBOzs7O0FBRkE7QUFHQTs7OztBQUhBO0FBREE7QUFEQTtBQVNBOzs7QUFDQTtBQVZBO0FBREE7QUFwREE7QUFBQTtBQUNBO0FBcUVBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})