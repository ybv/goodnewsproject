webpackHotUpdate(0,{

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(229);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getCookie = function getCookie(name) {\n  var cookieValue = null;\n  if (document.cookie && document.cookie != '') {\n    var cookies = document.cookie.split(';');\n    for (var i = 0; i < cookies.length; i++) {\n      var cookie = jQuery.trim(cookies[i]);\n      // Does this cookie string begin with the name we want?\n      if (cookie.substring(0, name.length + 1) == name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n  return cookieValue;\n};\n\n_jquery2.default.ajaxSetup({\n  beforeSend: function beforeSend(xhr, settings) {\n    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {\n      xhr.setRequestHeader(\"X-CSRFToken\", getCookie('csrftoken'));\n    }\n  }\n});\n\nmodule.exports = {\n  CompleteRegistration: function CompleteRegistration(sha, first_name, last_name, username, password, cb) {\n    _jquery2.default.post('/curate/register-complete/' + sha + \"/\", { 'username': username, 'email_sha': sha, 'first_name': first_name, 'last_name': last_name, 'password': password }, function (data) {\n      console.log(data);\n    });\n  },\n  login: function login(email, pass, cb) {\n    var _this = this;\n\n    cb = arguments[arguments.length - 1];\n    if (localStorage.token) {\n      if (cb) cb(true);\n      this.onChange(true);\n      return;\n    }\n    pretendRequest(email, pass, function (res) {\n      if (res.authenticated) {\n        localStorage.token = res.token;\n        if (cb) cb(true);\n        _this.onChange(true);\n      } else {\n        if (cb) cb(false);\n        _this.onChange(false);\n      }\n    });\n  },\n  register: function register(username, pass, cb) {\n    cb = arguments[arguments.length - 1];\n  },\n  getToken: function getToken() {\n    return localStorage.token;\n  },\n  logout: function logout(cb) {\n    delete localStorage.token;\n    if (cb) cb();\n    this.onChange(false);\n  },\n  loggedIn: function loggedIn() {\n    // coerce to boolean\n    return !!localStorage.token;\n  },\n  onChange: function onChange() {}\n};\n\nfunction pretendRequest(email, pass, cb) {\n  setTimeout(function () {\n    if (email === 'joe@example.com' && pass === 'password1') {\n      cb({\n        authenticated: true,\n        token: Math.random().toString(36).substring(7)\n      });\n    } else {\n      cb({ authenticated: false });\n    }\n  }, 0);\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2F1dGguanM/MDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBnZXRDb29raWUgPSBmdW5jdGlvbiAobmFtZSl7XG4gIHZhciBjb29raWVWYWx1ZSA9IG51bGw7XG4gIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9ICcnKSB7XG4gICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IGpRdWVyeS50cmltKGNvb2tpZXNbaV0pO1xuICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbiAgICAgICAgICBpZiAoY29va2llLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCArIDEpID09IChuYW1lICsgJz0nKSkge1xuICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb2tpZVZhbHVlO1xufTtcblxuJC5hamF4U2V0dXAoe1xuICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIsIHNldHRpbmdzKSB7XG4gICAgICBpZiAoIWNzcmZTYWZlTWV0aG9kKHNldHRpbmdzLnR5cGUpICYmICF0aGlzLmNyb3NzRG9tYWluKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLUNTUkZUb2tlblwiLCBnZXRDb29raWUoJ2NzcmZ0b2tlbicpKTtcbiAgICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDb21wbGV0ZVJlZ2lzdHJhdGlvbihzaGEsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBjYil7XG4gICAgJC5wb3N0KCcvY3VyYXRlL3JlZ2lzdGVyLWNvbXBsZXRlLycrc2hhICtcIi9cIiwgeyd1c2VybmFtZScgOiB1c2VybmFtZSwgJ2VtYWlsX3NoYScgOiBzaGEsICdmaXJzdF9uYW1lJzogZmlyc3RfbmFtZSwgJ2xhc3RfbmFtZSc6IGxhc3RfbmFtZSwgJ3Bhc3N3b3JkJzogcGFzc3dvcmR9LFxuICAgIChkYXRhKSA9PntcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSlcbiAgfSxcblxuICBsb2dpbihlbWFpbCwgcGFzcywgY2IpIHtcbiAgICBjYiA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cbiAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XG4gICAgICBpZiAoY2IpIGNiKHRydWUpXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRydWUpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcHJldGVuZFJlcXVlc3QoZW1haWwsIHBhc3MsIChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudG9rZW4gPSByZXMudG9rZW5cbiAgICAgICAgaWYgKGNiKSBjYih0cnVlKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2IpIGNiKGZhbHNlKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVnaXN0ZXIodXNlcm5hbWUsIHBhc3MsIGNiKXtcbiAgICBjYiA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cblxuICB9LFxuXG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudG9rZW5cbiAgfSxcblxuICBsb2dvdXQoY2IpIHtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlLnRva2VuXG4gICAgaWYgKGNiKSBjYigpXG4gICAgdGhpcy5vbkNoYW5nZShmYWxzZSlcbiAgfSxcblxuICBsb2dnZWRJbigpIHtcbiAgICAvLyBjb2VyY2UgdG8gYm9vbGVhblxuICAgIHJldHVybiAhIWxvY2FsU3RvcmFnZS50b2tlblxuICB9LFxuXG4gIG9uQ2hhbmdlKCkge31cbn1cblxuZnVuY3Rpb24gcHJldGVuZFJlcXVlc3QoZW1haWwsIHBhc3MsIGNiKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChlbWFpbCA9PT0gJ2pvZUBleGFtcGxlLmNvbScgJiYgcGFzcyA9PT0gJ3Bhc3N3b3JkMScpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgdG9rZW46IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoeyBhdXRoZW50aWNhdGVkOiBmYWxzZSB9KVxuICAgIH1cbiAgfSwgMClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGF1dGguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBREE7QUFJQTtBQUNBO0FBRkE7QUFIQTtBQUZBO0FBV0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFIQTtBQVFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBTkE7QUFEQTtBQWZBO0FBMkJBO0FBQ0E7QUE1QkE7QUFnQ0E7QUFDQTtBQWpDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQTBDQTs7QUFFQTtBQTVDQTtBQStDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQU5BO0FBREE7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})