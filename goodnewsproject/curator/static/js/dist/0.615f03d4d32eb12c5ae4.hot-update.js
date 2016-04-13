webpackHotUpdate(0,{

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(93);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getCookie = function getCookie(name) {\n  var cookieValue = null;\n  if (document.cookie && document.cookie != '') {\n    var cookies = document.cookie.split(';');\n    for (var i = 0; i < cookies.length; i++) {\n      var cookie = _jquery2.default.trim(cookies[i]);\n      // Does this cookie string begin with the name we want?\n      if (cookie.substring(0, name.length + 1) == name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n  return cookieValue;\n};\n\nvar csrfSafeMethod = function csrfSafeMethod(method) {\n  // these HTTP methods do not require CSRF protection\n  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method)\n  );\n};\n\n_jquery2.default.ajaxSetup({\n  beforeSend: function beforeSend(xhr, settings) {\n    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {\n      xhr.setRequestHeader(\"X-CSRFToken\", getCookie('csrftoken'));\n    }\n  }\n});\n\nmodule.exports = {\n  CompleteRegistration: function CompleteRegistration(sha, password, first_name, last_name, username, cb) {\n    var _this = this;\n\n    _jquery2.default.post('/curate/register-complete/' + sha + \"/\", {\n      'username': username,\n      'email_sha': sha,\n      'first_name': first_name,\n      'last_name': last_name,\n      'password': password\n    }, function (data) {\n      if (data && data.success) {\n        localStorage.token = data.token;\n        if (cb) cb(true);\n        _this.onChange(true);\n      } else {\n        if (cb) cb(false, data.msg);\n      }\n    });\n  },\n  LogoutCurator: function LogoutCurator() {\n    _jquery2.default.get(\"/curate/logout-curator/\", function () {});\n  },\n  LoginCurator: function LoginCurator(email, pass, cb) {\n    cb = arguments[arguments.length - 1];\n    if (localStorage.token) {\n      if (cb) cb(true);\n      this.onChange(true);\n      return;\n    }\n    _jquery2.default.post(\"/curate/login-check/\", {\n      'email': email,\n      'password': pass\n    }, function (data) {\n      if (data && data.success) {\n        localStorage.token = data.token;\n        if (cb) cb(true);\n      } else {\n        if (cb) cb(false, data.msg);\n      }\n    });\n  },\n  getToken: function getToken() {\n    return localStorage.token;\n  },\n  logout: function logout(cb) {\n    delete localStorage.token;\n    if (cb) cb();\n    this.onChange(false);\n    this.LogoutCurator();\n  },\n  loggedIn: function loggedIn() {\n    // coerce to boolean\n    return !!localStorage.token;\n  },\n  onChange: function onChange() {}\n};//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2F1dGguanM/MDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBnZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjb29raWVWYWx1ZSA9IG51bGw7XG4gIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9ICcnKSB7XG4gICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb29raWUgPSAkLnRyaW0oY29va2llc1tpXSk7XG4gICAgICAvLyBEb2VzIHRoaXMgY29va2llIHN0cmluZyBiZWdpbiB3aXRoIHRoZSBuYW1lIHdlIHdhbnQ/XG4gICAgICBpZiAoY29va2llLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCArIDEpID09IChuYW1lICsgJz0nKSkge1xuICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb2tpZVZhbHVlO1xufTtcblxuY29uc3QgY3NyZlNhZmVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgLy8gdGhlc2UgSFRUUCBtZXRob2RzIGRvIG5vdCByZXF1aXJlIENTUkYgcHJvdGVjdGlvblxuICByZXR1cm4gKC9eKEdFVHxIRUFEfE9QVElPTlN8VFJBQ0UpJC8udGVzdChtZXRob2QpKTtcbn07XG5cbiQuYWpheFNldHVwKHtcbiAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyLCBzZXR0aW5ncykge1xuICAgIGlmICghY3NyZlNhZmVNZXRob2Qoc2V0dGluZ3MudHlwZSkgJiYgIXRoaXMuY3Jvc3NEb21haW4pIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1DU1JGVG9rZW5cIiwgZ2V0Q29va2llKCdjc3JmdG9rZW4nKSk7XG4gICAgfVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbXBsZXRlUmVnaXN0cmF0aW9uKHNoYSwgcGFzc3dvcmQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIGNiKSB7XG4gICAgJC5wb3N0KCcvY3VyYXRlL3JlZ2lzdGVyLWNvbXBsZXRlLycgKyBzaGEgKyBcIi9cIiwge1xuICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWUsXG4gICAgICAnZW1haWxfc2hhJzogc2hhLFxuICAgICAgJ2ZpcnN0X25hbWUnOiBmaXJzdF9uYW1lLFxuICAgICAgJ2xhc3RfbmFtZSc6IGxhc3RfbmFtZSxcbiAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkXG4gICAgfSxcbiAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW5cbiAgICAgICAgICBpZiAoY2IpIGNiKHRydWUpXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjYikgY2IoZmFsc2UsIGRhdGEubXNnKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9LFxuXG4gIExvZ291dEN1cmF0b3IoKSB7XG4gICAgJC5nZXQoXCIvY3VyYXRlL2xvZ291dC1jdXJhdG9yL1wiLCAoKSA9PiB7XG4gICAgfSlcbiAgfSxcblxuICBMb2dpbkN1cmF0b3IoZW1haWwsIHBhc3MsIGNiKSB7XG4gICAgY2IgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50b2tlbikge1xuICAgICAgaWYgKGNiKSBjYih0cnVlKVxuICAgICAgdGhpcy5vbkNoYW5nZSh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgICQucG9zdChcIi9jdXJhdGUvbG9naW4tY2hlY2svXCIsIHtcbiAgICAgICdlbWFpbCc6IGVtYWlsLFxuICAgICAgJ3Bhc3N3b3JkJzogcGFzc1xuICAgIH0sXG4gICAgICAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuXG4gICAgICAgICAgaWYgKGNiKSBjYih0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjYikgY2IoZmFsc2UsIGRhdGEubXNnKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9LFxuXG5cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS50b2tlblxuICB9LFxuXG4gIGxvZ291dChjYikge1xuICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2UudG9rZW5cbiAgICBpZiAoY2IpIGNiKClcbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKVxuICAgIHRoaXMuTG9nb3V0Q3VyYXRvcigpXG4gIH0sXG5cbiAgbG9nZ2VkSW4oKSB7XG4gICAgLy8gY29lcmNlIHRvIGJvb2xlYW5cbiAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UudG9rZW5cbiAgfSxcblxuICBvbkNoYW5nZSgpIHt9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhdXRoLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQURBO0FBSUE7QUFDQTtBQUZBO0FBSEE7QUFGQTtBQVdBO0FBYkE7QUFDQTtBQWVBOztBQUVBO0FBRkE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFDQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFEQTtBQVRBO0FBb0JBO0FBQ0E7QUFyQkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBcENBO0FBK0NBO0FBQ0E7QUFoREE7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZEQTtBQTBEQTs7QUFFQTtBQTVEQTtBQStEQTtBQS9EQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})