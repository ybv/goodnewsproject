webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(127);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HelloContainer = _react2.default.createClass({\n  displayName: 'HelloContainer',\n  render: function render() {\n    var welcomeMsg = this.props.welcomeMsg;\n\n    return _react2.default.createElement(\n      'div',\n      { className: 'hello-container' },\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-hello' },\n        'Hello.'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'hero-welcome' },\n        welcomeMsg\n      )\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    _auth2.default.login();\n  },\n  render: function render() {\n    var pathname = this.props.location.pathname;\n\n    if (pathname.indexOf('register/complete') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Sign up to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else if (pathname.indexOf('login') > -1) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'pure-g' },\n        _react2.default.createElement('div', { className: 'pure-u-1-3' }),\n        _react2.default.createElement(\n          'div',\n          { className: 'pure-u-1-3' },\n          _react2.default.createElement(HelloContainer, { welcomeMsg: 'Welcome to good news project. Login to continue.' }),\n          this.props.children\n        ),\n        _react2.default.createElement('div', { className: 'pure-u-1-3' })\n      );\n    } else {}\n  }\n});\n\nvar Dashboard = _react2.default.createClass({\n  displayName: 'Dashboard',\n  render: function render() {\n    var token = _auth2.default.getToken();\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Dashboard'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'You made it!'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        token\n      )\n    );\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.login(email, pass, function (loggedIn) {\n      if (!loggedIn) return _this.setState({ error: true });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'email', className: 'pure-input-1', placeholder: 'Email Id', required: true })\n        )\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', placeholder: 'Password', required: true })\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Log In'\n      ),\n      this.state.error && _react2.default.createElement(\n        'p',\n        null,\n        'Bad login information'\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false,\n      msg: ''\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success, msg) {\n      if (!success) {\n        console.log('here', msg);\n        return _this2.setState({ error: true, msg: msg });\n      }\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1', placeholder: 'Choose a username', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1', placeholder: 'First Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1', placeholder: 'Last Name', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-control-group' },\n        _react2.default.createElement('input', { ref: 'pass', className: 'pure-input-1', type: 'password', placeholder: 'Password', required: true })\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit', className: 'pure-button pure-input-1 pure-button-primary' },\n        'Sign up as curator'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      this.state.error && _react2.default.createElement(\n        'div',\n        { className: 'error-msg' },\n        this.state.msg\n      ),\n      _react2.default.createElement(\n        _reactRouter.Link,\n        { to: '/curate/login' },\n        'Log in'\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlbGxvQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dlbGNvbWVNc2d9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWxsb1wiPkhlbGxvLjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWVcIj57d2VsY29tZU1zZ308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXV0aC5vbkNoYW5nZSA9IHRoaXMudXBkYXRlQXV0aFxuICAgIGF1dGgubG9naW4oKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgaWYgKCBwYXRobmFtZS5pbmRleE9mKCdyZWdpc3Rlci9jb21wbGV0ZScpID4gLTEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICA8SGVsbG9Db250YWluZXIgd2VsY29tZU1zZz0nV2VsY29tZSB0byBnb29kIG5ld3MgcHJvamVjdC4gU2lnbiB1cCB0byBjb250aW51ZS4nIC8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ2xvZ2luJykgPiAtMSkgIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICA8SGVsbG9Db250YWluZXIgd2VsY29tZU1zZz0nV2VsY29tZSB0byBnb29kIG5ld3MgcHJvamVjdC4gTG9naW4gdG8gY29udGludWUuJy8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGVsc2V7XG5cbiAgICB9XG5cbiAgfVxufSlcblxuY29uc3QgRGFzaGJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBhdXRoLmdldFRva2VuKClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgPHA+WW91IG1hZGUgaXQhPC9wPlxuICAgICAgICA8cD57dG9rZW59PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlXG4gICAgY29uc3QgcGFzcyA9IHRoaXMucmVmcy5wYXNzLnZhbHVlXG5cbiAgICBhdXRoLmxvZ2luKGVtYWlsLCBwYXNzLCAobG9nZ2VkSW4pID0+IHtcbiAgICAgIGlmICghbG9nZ2VkSW4pXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUgfSlcblxuICAgICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBpZiAobG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUubmV4dFBhdGhuYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZShsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2UoJy8nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiICBwbGFjZWhvbGRlcj1cIkVtYWlsIElkXCIgIHJlcXVpcmVkLz48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJwYXNzXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkLz48L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBwdXJlLWlucHV0LTEgcHVyZS1idXR0b24tcHJpbWFyeVwiPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoXG4gICAgICAgICAgPHA+QmFkIGxvZ2luIGluZm9ybWF0aW9uPC9wPlxuICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPkFib3V0PC9oMT5cbiAgfVxufSlcblxuY29uc3QgTG9nb3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhdXRoLmxvZ291dCgpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8cD5Zb3UgYXJlIG5vdyBsb2dnZWQgb3V0PC9wPlxuICB9XG59KVxuXG5mdW5jdGlvbiByZXF1aXJlQXV0aChuZXh0U3RhdGUsIHJlcGxhY2UpIHtcbiAgaWYgKCFhdXRoLmxvZ2dlZEluKCkpIHtcbiAgICByZXBsYWNlKHtcbiAgICAgIHBhdGhuYW1lOiAnL2N1cmF0ZS9sb2dpbicsXG4gICAgICBzdGF0ZTogeyBuZXh0UGF0aG5hbWU6IG5leHRTdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBSZWdpc3RlckNvbXBsZXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIG1zZzogJydcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcGFzcyA9IHRoaXMucmVmcy5wYXNzLnZhbHVlXG4gICAgY29uc3QgZmlyc3RfbmFtZSA9IHRoaXMucmVmcy5maXJzdF9uYW1lLnZhbHVlXG4gICAgY29uc3QgbGFzdF9uYW1lID0gdGhpcy5yZWZzLmxhc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlXG5cbiAgICBjb25zdCB7IGVtYWlsX3NoYSB9ID0gdGhpcy5wcm9wcy5wYXJhbXNcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICBhdXRoLkNvbXBsZXRlUmVnaXN0cmF0aW9uKGVtYWlsX3NoYSwgcGFzcywgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCB1c2VybmFtZSwgKHN1Y2Nlc3MsIG1zZykgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnLCBtc2cpXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIG1zZzogbXNnIH0pXG4gICAgICB9XG5cblxuICAgICAgaWYgKGxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2Rhc2hib2FyZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHJlZj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgdXNlcm5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwibGFzdF9uYW1lXCIgIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMVwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwicGFzc1wiICBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIHB1cmUtaW5wdXQtMSBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+U2lnbiB1cCBhcyBjdXJhdG9yPC9idXR0b24+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMuc3RhdGUubXNnfTwvZGl2Pil9XG4gICAgICAgIDxMaW5rIHRvPVwiL2N1cmF0ZS9sb2dpblwiPkxvZyBpbjwvTGluaz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn0pXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL2N1cmF0ZVwiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiAgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9nb3V0XCIgY29tcG9uZW50PXtMb2dvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImFib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicmVnaXN0ZXIvY29tcGxldGUvOmVtYWlsX3NoYVwiIGNvbXBvbmVudD17UmVnaXN0ZXJDb21wbGV0ZX0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJkYXNoYm9hcmRcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0gb25FbnRlcj17cmVxdWlyZUF1dGh9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY3VyYXRvci1hcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7O0FBQUE7O0FBREE7QUFFQTs7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQVdBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFlQTs7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBREE7QUFsQ0E7QUFBQTtBQUNBO0FBc0RBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7OztBQURBO0FBRUE7Ozs7QUFGQTtBQUdBOzs7QUFBQTtBQUhBO0FBREE7QUFKQTtBQUFBO0FBQ0E7QUFhQTs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQVlBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQU5BO0FBbEJBO0FBZ0NBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQURBO0FBREE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTs7QUFUQTtBQVVBOzs7O0FBQUE7QUFYQTtBQWpDQTtBQUFBO0FBQ0E7QUFtREE7O0FBQ0E7QUFDQTs7OztBQUFBO0FBRkE7QUFBQTtBQUNBO0FBS0E7O0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7OztBQUFBO0FBTkE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBUEE7QUFsQkE7QUErQkE7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTs7QUFBQTtBQUNBO0FBVkE7QUFZQTtBQUNBOztBQUFBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOztBQUFBOztBQWpCQTtBQWtCQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7O0FBckJBO0FBREE7QUFoQ0E7QUFBQTtBQUNBO0FBMkRBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})