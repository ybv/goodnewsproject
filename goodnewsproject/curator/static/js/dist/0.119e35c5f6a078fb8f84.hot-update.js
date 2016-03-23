webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(151);\n\nvar _reactRouter = __webpack_require__(167);\n\nvar _auth = __webpack_require__(127);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HeroContainer = _react2.default.createClass({\n  displayName: 'HeroContainer',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'Good News Project'\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n  getInitialState: function getInitialState() {\n    return {\n      loggedIn: _auth2.default.loggedIn()\n    };\n  },\n  updateAuth: function updateAuth(loggedIn) {\n    this.setState({\n      loggedIn: loggedIn\n    });\n  },\n  componentWillMount: function componentWillMount() {\n    _auth2.default.onChange = this.updateAuth;\n    _auth2.default.login();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      { className: 'pure-gr' },\n      _react2.default.createElement(\n        'div',\n        { className: 'pure-u-1' },\n        _react2.default.createElement(HeroContainer, null),\n        this.props.children\n      )\n    );\n  }\n});\n\nvar Dashboard = _react2.default.createClass({\n  displayName: 'Dashboard',\n  render: function render() {\n    var token = _auth2.default.getToken();\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Dashboard'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'You made it!'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        token\n      )\n    );\n  }\n});\n\nvar Login = _react2.default.createClass({\n  displayName: 'Login',\n\n\n  contextTypes: {\n    router: _react2.default.PropTypes.object.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      error: false\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this = this;\n\n    event.preventDefault();\n\n    var email = this.refs.email.value;\n    var pass = this.refs.pass.value;\n\n    _auth2.default.login(email, pass, function (loggedIn) {\n      if (!loggedIn) return _this.setState({ error: true });\n\n      var location = _this.props.location;\n\n\n      if (location.state && location.state.nextPathname) {\n        _this.context.router.replace(location.state.nextPathname);\n      } else {\n        _this.context.router.replace('/');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { 'class': 'pure-form pure-form-aligned', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'fieldset',\n        null,\n        _react2.default.createElement(\n          'div',\n          { 'class': 'pure-control-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            _react2.default.createElement('input', { ref: 'email', placeholder: 'email', defaultValue: 'joe@example.com' })\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { 'class': 'pure-control-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            _react2.default.createElement('input', { ref: 'pass', placeholder: 'password' })\n          ),\n          ' (hint: password1)',\n          _react2.default.createElement('br', null)\n        ),\n        _react2.default.createElement(\n          'button',\n          { type: 'submit', 'class': 'pure-button pure-button-primary' },\n          'login'\n        ),\n        this.state.error && _react2.default.createElement(\n          'p',\n          null,\n          'Bad login information'\n        )\n      )\n    );\n  }\n});\n\nvar About = _react2.default.createClass({\n  displayName: 'About',\n  render: function render() {\n    return _react2.default.createElement(\n      'h1',\n      null,\n      'About'\n    );\n  }\n});\n\nvar Logout = _react2.default.createClass({\n  displayName: 'Logout',\n  componentDidMount: function componentDidMount() {\n    _auth2.default.logout();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'p',\n      null,\n      'You are now logged out'\n    );\n  }\n});\n\nfunction requireAuth(nextState, replace) {\n  if (!_auth2.default.loggedIn()) {\n    replace({\n      pathname: '/curate/login',\n      state: { nextPathname: nextState.location.pathname }\n    });\n  }\n}\n\nvar RegisterComplete = _react2.default.createClass({\n  displayName: 'RegisterComplete',\n  getInitialState: function getInitialState() {\n    return {\n      error: false\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var _this2 = this;\n\n    event.preventDefault();\n    var pass = this.refs.pass.value;\n    var first_name = this.refs.first_name.value;\n    var last_name = this.refs.last_name.value;\n    var username = this.refs.username.value;\n\n    var email_sha = this.props.params.email_sha;\n    var location = this.props.location;\n\n\n    _auth2.default.CompleteRegistration(email_sha, pass, first_name, last_name, username, function (success) {\n      if (!success) return _this2.setState({ error: true });\n\n      if (location.state) {\n        _this2.context.router.replace('/dashboard');\n      }\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { className: 'pure-form', onSubmit: this.handleSubmit },\n      _react2.default.createElement(\n        'fieldset',\n        { className: 'pure-group' },\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'username', className: 'pure-input-1-2', placeholder: 'Choose a user name' })\n        ),\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'first_name', className: 'pure-input-1-2', placeholder: 'First Name' })\n        ),\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'last_name', className: 'pure-input-1-2', placeholder: 'Last Name' })\n        ),\n        _react2.default.createElement(\n          'label',\n          null,\n          _react2.default.createElement('input', { ref: 'pass', type: 'password', className: 'pure-input-1-2', placeholder: 'password' })\n        ),\n        _react2.default.createElement(\n          'button',\n          { type: 'submit', className: 'pure-button pure-input-1-2 pure-button-primary' },\n          'Sign up as curator'\n        ),\n        this.state.error && _react2.default.createElement(\n          'p',\n          null,\n          'Bad login information'\n        )\n      )\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRouter.Router,\n  { history: _reactRouter.browserHistory },\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/curate', component: App },\n    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: About }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'register/complete/:email_sha', component: RegisterComplete }),\n    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })\n  )\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY3VyYXRvci1hcHAuanM/Y2YwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJ1xuXG5cbmNvbnN0IEhlcm9Db250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPkdvb2QgTmV3cyBQcm9qZWN0PC9oMT5cbiAgfVxufSlcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgfSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXV0aC5vbkNoYW5nZSA9IHRoaXMudXBkYXRlQXV0aFxuICAgIGF1dGgubG9naW4oKVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIj5cbiAgICAgICAgICA8SGVyb0NvbnRhaW5lci8+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBEYXNoYm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF1dGguZ2V0VG9rZW4oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8cD5Zb3UgbWFkZSBpdCE8L3A+XG4gICAgICAgIDxwPnt0b2tlbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnJlZnMuZW1haWwudmFsdWVcbiAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcblxuICAgIGF1dGgubG9naW4oZW1haWwsIHBhc3MsIChsb2dnZWRJbikgPT4ge1xuICAgICAgaWYgKCFsb2dnZWRJbilcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KVxuXG4gICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGlmIChsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKGxvY2F0aW9uLnN0YXRlLm5leHRQYXRobmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzPVwicHVyZS1mb3JtIHB1cmUtZm9ybS1hbGlnbmVkXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPVwiam9lQGV4YW1wbGUuY29tXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdXJlLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj1cInBhc3NcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz48L2xhYmVsPiAoaGludDogcGFzc3dvcmQxKTxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwdXJlLWJ1dHRvbiBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+bG9naW48L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKFxuICAgICAgICAgIDxwPkJhZCBsb2dpbiBpbmZvcm1hdGlvbjwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+QWJvdXQ8L2gxPlxuICB9XG59KVxuXG5jb25zdCBMb2dvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF1dGgubG9nb3V0KClcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxwPllvdSBhcmUgbm93IGxvZ2dlZCBvdXQ8L3A+XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHJlcXVpcmVBdXRoKG5leHRTdGF0ZSwgcmVwbGFjZSkge1xuICBpZiAoIWF1dGgubG9nZ2VkSW4oKSkge1xuICAgIHJlcGxhY2Uoe1xuICAgICAgcGF0aG5hbWU6ICcvY3VyYXRlL2xvZ2luJyxcbiAgICAgIHN0YXRlOiB7IG5leHRQYXRobmFtZTogbmV4dFN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IFJlZ2lzdGVyQ29tcGxldGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3MgPSB0aGlzLnJlZnMucGFzcy52YWx1ZVxuICAgIGNvbnN0IGZpcnN0X25hbWUgPSB0aGlzLnJlZnMuZmlyc3RfbmFtZS52YWx1ZVxuICAgIGNvbnN0IGxhc3RfbmFtZSA9IHRoaXMucmVmcy5sYXN0X25hbWUudmFsdWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZVxuXG4gICAgY29uc3QgeyBlbWFpbF9zaGEgfSA9IHRoaXMucHJvcHMucGFyYW1zXG4gICAgY29uc3QgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYXV0aC5Db21wbGV0ZVJlZ2lzdHJhdGlvbihlbWFpbF9zaGEsIHBhc3MsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIChzdWNjZXNzKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpXG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUgfSlcblxuICAgICAgaWYgKGxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZSgnL2Rhc2hib2FyZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwicHVyZS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTEtMlwiICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIHVzZXIgbmFtZVwiLz48L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPVwiZmlyc3RfbmFtZVwiIGNsYXNzTmFtZT1cInB1cmUtaW5wdXQtMS0yXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIvPjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTEtMlwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIvPjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJwYXNzXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwicHVyZS1pbnB1dC0xLTJcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz48L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBwdXJlLWlucHV0LTEtMiBwdXJlLWJ1dHRvbi1wcmltYXJ5XCI+U2lnbiB1cCBhcyBjdXJhdG9yPC9idXR0b24+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgPHA+QmFkIGxvZ2luIGluZm9ybWF0aW9uPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59KVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9jdXJhdGVcIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ291dFwiIGNvbXBvbmVudD17TG9nb3V0fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJhYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInJlZ2lzdGVyL2NvbXBsZXRlLzplbWFpbF9zaGFcIiBjb21wb25lbnQ9e1JlZ2lzdGVyQ29tcGxldGV9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiZGFzaGJvYXJkXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9IG9uRW50ZXI9e3JlcXVpcmVBdXRofSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGN1cmF0b3ItYXBwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTs7QUFDQTtBQUNBOzs7O0FBQUE7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQWZBO0FBa0JBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBbkJBO0FBQUE7QUFDQTtBQTZCQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7Ozs7QUFEQTtBQUVBOzs7O0FBRkE7QUFHQTs7O0FBQUE7QUFIQTtBQURBO0FBSkE7QUFBQTtBQUNBO0FBYUE7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFZQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFOQTtBQWxCQTtBQWdDQTtBQUNBOztBQUNBO0FBQ0E7OztBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7QUFEQTtBQUlBOztBQUFBO0FBQ0E7OztBQUFBO0FBREE7O0FBQ0E7QUFMQTtBQVFBOztBQUFBOztBQVJBO0FBU0E7Ozs7QUFBQTtBQVZBO0FBREE7QUFqQ0E7QUFBQTtBQUNBO0FBb0RBOztBQUNBO0FBQ0E7Ozs7QUFBQTtBQUZBO0FBQUE7QUFDQTtBQUtBOztBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7Ozs7QUFBQTtBQU5BO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFDQTtBQVFBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFKQTtBQWpCQTtBQTJCQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFEQTtBQUVBOzs7QUFBQTtBQUZBO0FBR0E7OztBQUFBO0FBSEE7QUFJQTs7O0FBQUE7QUFKQTtBQUtBOztBQUFBOztBQUxBO0FBTUE7Ozs7QUFBQTtBQVBBO0FBREE7QUE1QkE7QUFBQTtBQUNBO0FBNENBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})