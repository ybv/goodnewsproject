webpackHotUpdate(0,{

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(229);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getCookie = function getCookie(name) {\n  var cookieValue = null;\n  if (document.cookie && document.cookie != '') {\n    var cookies = document.cookie.split(';');\n    for (var i = 0; i < cookies.length; i++) {\n      var cookie = _jquery2.default.trim(cookies[i]);\n      // Does this cookie string begin with the name we want?\n      if (cookie.substring(0, name.length + 1) == name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n  return cookieValue;\n};\n\nvar csrfSafeMethod = function csrfSafeMethod(method) {\n  // these HTTP methods do not require CSRF protection\n  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method)\n  );\n};\n_jquery2.default.ajaxSetup({\n  beforeSend: function beforeSend(xhr, settings) {\n    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {\n      xhr.setRequestHeader(\"X-CSRFToken\", getCookie('csrftoken'));\n    }\n  }\n});\n\nmodule.exports = {\n  CompleteRegistration: function CompleteRegistration(sha, password, first_name, last_name, username, cb) {\n    _jquery2.default.post('/curate/register-complete/' + sha + \"/\", { 'username': username, 'email_sha': sha, 'first_name': first_name, 'last_name': last_name, 'password': password }, function (data) {\n      if (data && data.success) {\n        localStorage.token = res.token;\n        if (cb) cb(true);\n      } else {\n        if (cb) cb(false);\n      }\n    });\n  },\n  login: function login(email, pass, cb) {\n    var _this = this;\n\n    cb = arguments[arguments.length - 1];\n    if (localStorage.token) {\n      if (cb) cb(true);\n      this.onChange(true);\n      return;\n    }\n    pretendRequest(email, pass, function (res) {\n      if (res.authenticated) {\n        localStorage.token = res.token;\n        if (cb) cb(true);\n        _this.onChange(true);\n      } else {\n        if (cb) cb(false);\n        _this.onChange(false);\n      }\n    });\n  },\n  register: function register(username, pass, cb) {\n    cb = arguments[arguments.length - 1];\n  },\n  getToken: function getToken() {\n    return localStorage.token;\n  },\n  logout: function logout(cb) {\n    delete localStorage.token;\n    if (cb) cb();\n    this.onChange(false);\n  },\n  loggedIn: function loggedIn() {\n    // coerce to boolean\n    return !!localStorage.token;\n  },\n  onChange: function onChange() {}\n};\n\nfunction pretendRequest(email, pass, cb) {\n  setTimeout(function () {\n    if (email === 'joe@example.com' && pass === 'password1') {\n      cb({\n        authenticated: true,\n        token: Math.random().toString(36).substring(7)\n      });\n    } else {\n      cb({ authenticated: false });\n    }\n  }, 0);\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2F1dGguanM/MDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBnZXRDb29raWUgPSBmdW5jdGlvbiAobmFtZSl7XG4gIHZhciBjb29raWVWYWx1ZSA9IG51bGw7XG4gIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9ICcnKSB7XG4gICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9ICQudHJpbShjb29raWVzW2ldKTtcbiAgICAgICAgICAvLyBEb2VzIHRoaXMgY29va2llIHN0cmluZyBiZWdpbiB3aXRoIHRoZSBuYW1lIHdlIHdhbnQ/XG4gICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PSAobmFtZSArICc9JykpIHtcbiAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBjb29raWVWYWx1ZTtcbn07XG5cbmNvbnN0IGNzcmZTYWZlTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgLy8gdGhlc2UgSFRUUCBtZXRob2RzIGRvIG5vdCByZXF1aXJlIENTUkYgcHJvdGVjdGlvblxuICAgIHJldHVybiAoL14oR0VUfEhFQUR8T1BUSU9OU3xUUkFDRSkkLy50ZXN0KG1ldGhvZCkpO1xufTtcbiQuYWpheFNldHVwKHtcbiAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyLCBzZXR0aW5ncykge1xuICAgICAgaWYgKCFjc3JmU2FmZU1ldGhvZChzZXR0aW5ncy50eXBlKSAmJiAhdGhpcy5jcm9zc0RvbWFpbikge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1DU1JGVG9rZW5cIiwgZ2V0Q29va2llKCdjc3JmdG9rZW4nKSk7XG4gICAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29tcGxldGVSZWdpc3RyYXRpb24oc2hhLCBwYXNzd29yZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCB1c2VybmFtZSwgY2Ipe1xuICAgICQucG9zdCgnL2N1cmF0ZS9yZWdpc3Rlci1jb21wbGV0ZS8nK3NoYSArXCIvXCIsIHsndXNlcm5hbWUnIDogdXNlcm5hbWUsICdlbWFpbF9zaGEnIDogc2hhLCAnZmlyc3RfbmFtZSc6IGZpcnN0X25hbWUsICdsYXN0X25hbWUnOiBsYXN0X25hbWUsICdwYXNzd29yZCc6IHBhc3N3b3JkfSxcbiAgICAoZGF0YSkgPT57XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICBsb2NhbFN0b3JhZ2UudG9rZW4gPSByZXMudG9rZW5cbiAgICAgICAgaWYgKGNiKSBjYih0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgaWYgKGNiKSBjYihmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGxvZ2luKGVtYWlsLCBwYXNzLCBjYikge1xuICAgIGNiID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuICAgIGlmIChsb2NhbFN0b3JhZ2UudG9rZW4pIHtcbiAgICAgIGlmIChjYikgY2IodHJ1ZSlcbiAgICAgIHRoaXMub25DaGFuZ2UodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBwcmV0ZW5kUmVxdWVzdChlbWFpbCwgcGFzcywgKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS50b2tlbiA9IHJlcy50b2tlblxuICAgICAgICBpZiAoY2IpIGNiKHRydWUpXG4gICAgICAgIHRoaXMub25DaGFuZ2UodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYikgY2IoZmFsc2UpXG4gICAgICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZWdpc3Rlcih1c2VybmFtZSwgcGFzcywgY2Ipe1xuICAgIGNiID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuXG4gIH0sXG5cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS50b2tlblxuICB9LFxuXG4gIGxvZ291dChjYikge1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2UudG9rZW5cbiAgICBpZiAoY2IpIGNiKClcbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKVxuICB9LFxuXG4gIGxvZ2dlZEluKCkge1xuICAgIC8vIGNvZXJjZSB0byBib29sZWFuXG4gICAgcmV0dXJuICEhbG9jYWxTdG9yYWdlLnRva2VuXG4gIH0sXG5cbiAgb25DaGFuZ2UoKSB7fVxufVxuXG5mdW5jdGlvbiBwcmV0ZW5kUmVxdWVzdChlbWFpbCwgcGFzcywgY2IpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGVtYWlsID09PSAnam9lQGV4YW1wbGUuY29tJyAmJiBwYXNzID09PSAncGFzc3dvcmQxJykge1xuICAgICAgY2Ioe1xuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICB0b2tlbjogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjYih7IGF1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pXG4gICAgfVxuICB9LCAwKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXV0aC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFEQTtBQUlBO0FBQ0E7QUFGQTtBQUhBO0FBRkE7QUFXQTtBQWJBO0FBQ0E7QUFlQTs7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUxBO0FBREE7QUFIQTtBQWNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBTkE7QUFEQTtBQXJCQTtBQWlDQTtBQUNBO0FBbENBO0FBc0NBO0FBQ0E7QUF2Q0E7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFnREE7O0FBRUE7QUFsREE7QUFxREE7QUFyREE7QUFDQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFOQTtBQURBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})