import $ from 'jquery'
const getCookie = function(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = $.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const csrfSafeMethod = function(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
};

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
  }
});

module.exports = {
  CompleteRegistration(sha, password, first_name, last_name, username, cb) {
    $.post('/curate/register-complete/' + sha + "/", {
      'username': username,
      'email_sha': sha,
      'first_name': first_name,
      'last_name': last_name,
      'password': password
    },
      (data) => {
        if (data && data.success) {
          localStorage.token = data.token
          if (cb) cb(true)
          this.onChange(true)
        } else {
          if (cb) cb(false, data.msg)
        }
      })
  },

  LogoutCurator() {
    $.get("/curate/logout-curator/").always(() => {
      delete localStorage.token
    })
  },

  LoginCurator(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    $.post("/curate/login-check/", {
      'email': email,
      'password': pass
    },
      (data) => {
        if (data && data.success) {
          localStorage.token = data.token
          if (cb) cb(true)
        } else {
          if (cb) cb(false, data.msg)
        }
      })
  },


  getToken() {
    return localStorage.token
  },

  logout(cb) {
    this.LogoutCurator()
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    // coerce to boolean
    return !!localStorage.token
  },

  onChange() {}
}
