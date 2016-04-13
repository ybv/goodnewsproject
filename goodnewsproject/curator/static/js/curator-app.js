import React from 'react'
import $ from 'jquery'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link, Redirect } from 'react-router'
import Select from 'react-select'

import auth from './auth'


const HelloContainer = React.createClass({
  render() {
    const {welcomeMsg} = this.props;
    return (
      <div className="hello-container">
      <div className="hero-hello">Hello.</div>
      <div className="hero-welcome">{welcomeMsg}</div>
      </div>
    )
  }
})

const DashBoardTopView = React.createClass({
  render() {
    const {username} = this.props;
    const {pathname} = this.props

    let sfActive = false
    let dashActive = false
    if (pathname.indexOf('sourcefeeds') > -1) {
      sfActive = true
    }
    if (!sfActive) {
      dashActive = true
    }


    return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
            <li className="pure-menu-item">Logged in as: {username} <Link to="/curate/logout">Log out</Link></li>
              {dashActive && (<li className="pure-menu-item">
                     <Link to="/curate/sourcefeeds">Add Source Feeds</Link>
                </li>
      )}
              {sfActive && (<li className="pure-menu-item">
                     <Link to="/curate">Dashboard</Link>
                </li>
      )}
        </ul>
    </div>
    )
  }
})

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    const {pathname} = this.props.location
    if (this.state.loggedIn) {
      if (pathname.indexOf('login') > -1) {
        this.context.router.replace('/curate/')
      }
    }
    if (!this.state.loggedIn) {
      if (pathname.indexOf('register') == -1) {
        this.context.router.replace('/curate/login/')
      }
    }
  },

  render() {
    return (this.props.children)
  }
})

const Article = React.createClass({
  getInitialState() {
    return {
      articleLink: '',
      articleTitle: '',
      articleHTML: '',
      articleText: '',
      articleTags: [],
      articleSource: '',
      articleGoodCount: 0,
      articleBadCount: 0,
      loading: true,
      error: false,
      msg: '',
      successMsg: '',
      searchVal: ''
    }
  },

  componentDidMount() {
    let {articleId} = this.props.params
    this.fetchArticle(articleId)
  },

  handleClassify(sentiment) {
    const token = auth.getToken()
    let {articleId} = this.props.params
    let that = this
    const url = '/curate/api/article/classify/' + articleId + '/'
    $.ajax({
      url: url,
      data: {
        sentiment: sentiment
      },
      type: "POST",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      }
    }).success(function(data) {
      if (data && data.success) {
        that.setState({
          successMsg: 'Saved Curation.',
          loading: false
        })
      } else {
        that.setState({
          error: true,
          msg: 'Could not save curation.',
          loading: false
        })
      }
    }).error(() => {
      that.setState({
        error: true,
        msg: 'Could not save curation.',
        loading: false
      })
    });
  },

  renderOption(option) {
    return <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #808080'
      }}>{option.label}</div>;
  },

  renderValue(option) {
    return <div style={{
        color: '#00000'
      }}>{option.label}</div>;
  },

  getOptions(input, callback) {
    const token = auth.getToken()
    const that = this
    const url = '/curate/api/articles/search/?q=' + input
    $.ajax({
      url: url,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      }
    }).success(function(data) {
      if (data.success) {
        const optionItems = data.results
        callback(null, {
          options: optionItems,
          complete: true
        });
      } else {
        callback(null, {
          options: []
        });
      }
    }).error(() => {
      callback(null, {
        options: []

      });
    });
  },

  fetchArticle(articleId) {
    const token = auth.getToken()
    let that = this
    const url = '/curate/api/article/classify/' + articleId + '/'
    $.ajax({
      url: url,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      }
    }).success(function(data) {
      if (data) {
        that.setState({
          articleLink: data.url,
          articleTitle: data.content.title || '',
          articleText: data.content.text || '',
          articleHTML: data.content.html || '',
          articleSource: data.source_feed,
          loading: false
        })
      } else {
        that.setState({
          error: true,
          msg: 'Could not fetch source feeds',
          loading: false
        })
      }
    }).error(() => {
      that.setState({
        error: true,
        msg: 'Could not fetch source feeds',
        loading: false
      })
    });
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
    const {pathname} = this.props.location
    return (
      <div className="pure-g app-container">
        <div className="pure-u-1 top-nav">
          <DashBoardTopView pathname={pathname} username="ybv"/>
        </div>
          <div className="pure-u-1">
            <div className="pure-g">
          <div className="pure-u-3-4">
            <div className="pure-g article-details">
              <div className="pure-u-1">
                {this.state.successMsg && <div className="success-msg">{this.state.successMsg}
              </div>}
              </div>
              <div className="pure-u-1 article-sources">
                <div className="pure-u-1-2">
                  <p className='article-desc'>Source: {this.state.articleSource}</p>
                </div>
                <div className="pure-u-1-2">
                <p className='article-desc'><a href={this.state.articleLink}>Orignial Link</a></p>
                </div>
              </div>
              <div className="pure-u-1 article-title">
                <p className='article-desc'>
                  Title</p>
                {this.state.articleTitle}
              </div>
              <div className="pure-u-1 article-text">
                <p className='article-desc'>
                  Content</p>
                {this.state.articleText}
              </div>
            </div>
          </div>
          <div className="pure-u-1-4">
            <div className="pure-u-1 search-container">
              <Select.Async
      name="form-field-name"
      autoload={false}
      onChange={(val) => {
        let that = this
        this.setState({
          searchVal: val
        }, () => {
          const redirPath = "/curate/classify/" + val.value;
          this.context.router.replace(redirPath)
          this.fetchArticle(val.value);
        })
      }}
      value={this.state.searchVal}
      loadOptions={this.getOptions}
      valueRenderer={this.renderValue}
      optionRenderer={this.renderOption}
      />
            </div>
            <div className="pure-u-1 button-container">
              <div className="pure-u-1 mark-button">
                <button className="pure-button button-success" onClick={this.handleClassify.bind(this, "good")} href="#">Mark as a good article</button>
              </div>
              <div className="pure-u-1 mark-button">
                <button className="pure-button  button-error" onClick={this.handleClassify.bind(this, "bad")} href="#">Mark as a bad article</button>
              </div>
              <div className="pure-u-1 mark-button">
                <button className="pure-button" onClick={this.handleClassify.bind(this, "neutral")} href="#">Mark as a neutral article</button>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
    )
  }

})

const ArticleList = React.createClass({
  getInitialState() {
    return {
      articles: [],
      loading: true,
      error: false,
      msg: '',
      nextUrl: '/curate/api/articles/?page=1',
      prevUrl: null
    }
  },

  componentDidMount() {
    this.fetchArticles(true, false)
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  fetchArticles(next, prev) {
    const token = auth.getToken()
    let that = this
    let url = this.state.nextUrl
    if (prev) {
      url = that.state.prevUrl
    }
    $.ajax({
      url: url,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      }
    }).success(function(data) {

      if (data) {
        that.setState({
          articles: data.results,
          loading: false,
          nextUrl: data.next,
          prevUrl: data.previous
        })
      } else {
        that.setState({
          error: true,
          msg: 'Could not fetch source feeds',
          loading: false
        })
      }
    }).error(() => {
      that.setState({
        error: true,
        msg: 'Could not fetch source feeds',
        loading: false
      })
    });
  },

  render() {
    const {pathname} = this.props.location
    const artcileList = this.state.articles.map((item) => {
      const linkItem = "/curate/classify/" + item.id
      return (
        <div className="pure-u-1">
        <Link to={linkItem}>
          <div className="list-item">
            <div className="list-title">{item.content.title}</div>
            <div className="list-source-feed">{item.source_feed}</div>
            </div>
        </Link>
        </div>
      )
    })
    return (
      <div>
        {this.state.loading && <div className="error-msg">Loading Articles</div> }
        {this.state.error && (<div className="error-msg">{this.state.msg}</div>)}
          <div className="pure-g app-container">
              <div className="pure-u-1 top-nav">
                <DashBoardTopView pathname={pathname} username="ybv"/>
              </div>
          {artcileList}
            <div className="pure-u-1">
                <div className="pure-u-1-2">
                  {this.state.prevUrl && (<a href="#" onClick={() => this.fetchArticles(false, true)}>
                     prev</a>)}
                </div>
                <div className="pure-u-1-2">
                  {this.state.nextUrl && <a href="#" onClick={() => this.fetchArticles(true, false)}>
                    next</a>}
                </div>
          </div>
      </div>
      </div>
    )
  }
})


const Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      error: false,
      msg: ''
    }
  },

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.LoginCurator(email, pass, (loggedIn, msg) => {
      if (!loggedIn)
        return this.setState({
          error: true,
          msg: msg
        })

      const {location} = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/curate')
      }
    })
  },

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-3">
        </div>
        <div className="pure-u-1-3">
          <HelloContainer welcomeMsg='Welcome to good news project. Login to continue.'/>
            <form className="pure-form"  onSubmit={this.handleSubmit}>
                 <div className="pure-control-group">
                    <label><input ref="email" className="pure-input-1"  placeholder="Email Id"  required/></label>
                  </div>
                  <br/>
                <div className="pure-control-group">
                   <label><input ref="pass" className="pure-input-1" placeholder="Password" required/></label><br />
                </div>
                  <br/>
                  <button type="submit" className="pure-button pure-input-1 pure-button-primary">Log In</button>
                    <br/>
                {this.state.error && (<div className="error-msg">{this.state.msg}</div>)}
            </form>
        </div>
        <div className="pure-u-1-3">
        </div>
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h1>About</h1>
  }
})

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return (  <div className="pure-g">
        <div className="pure-u-1 hello-container">
          <p>You are now logged out</p>
          <Link to="/curate/login">Log in</Link>
        </div>
      </div>)
  }
})

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/curate/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

const RegisterComplete = React.createClass({
  getInitialState() {
    return {
      error: false,
      msg: ''
    }
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(event) {
    event.preventDefault()
    const pass = this.refs.pass.value
    const first_name = this.refs.first_name.value
    const last_name = this.refs.last_name.value
    const username = this.refs.username.value

    const {email_sha} = this.props.params
    const {location} = this.props
    const that = this
    auth.CompleteRegistration(email_sha, pass, first_name, last_name, username, (success, msg) => {
      if (!success) {
        return this.setState({
          error: true,
          msg: msg
        })
      } else {
        that.context.router.replace('/curate')
      }
    })
  },

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-3">
        </div>
        <div className="pure-u-1-3">
          <HelloContainer welcomeMsg='Welcome to good news project. Sign up to continue.' />
            <form className="pure-form"  onSubmit={this.handleSubmit}>
              <div className="pure-control-group">
                <input ref="username" className="pure-input-1"  placeholder="Choose a username" required/>
              </div>
              <br/>
              <div className="pure-control-group">
                <input ref="first_name" className="pure-input-1" placeholder="First Name" required/>
              </div>
              <br/>
              <div className="pure-control-group">
                <input ref="last_name"  className="pure-input-1" placeholder="Last Name" required/>
              </div>
              <br/>
              <div className="pure-control-group">
                <input ref="pass"  className="pure-input-1" type="password" placeholder="Password" required/>
              </div>
              <br/>
              <button type="submit"  className="pure-button pure-input-1 pure-button-primary">Sign up as curator</button>
              <br/>
              <br/>
                {this.state.error && (<div className="error-msg">{this.state.msg}</div>)}
              <Link to="/curate/login">Log in</Link>
            </form>
        </div>
        <div className="pure-u-1-3">
        </div>
      </div>

    )
  }
})

const SourceFeeds = React.createClass({
  getInitialState() {
    return {
      feeds: [],
      error: false,
      msg: ''
    }
  },

  componentWillMount() {
    this.fetchFeeds()
  },

  fetchFeeds() {
    const token = auth.getToken()
    let that = this
    $.ajax({
      url: "/curate/api/sourcefeeds/",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      }
    }).success(function(data) {
      console.log(data);
      if (data && data.results) {
        that.setState({
          feeds: data.results
        })
      } else {
        that.setState({
          error: true,
          msg: 'Could not fetch source feeds'
        })
      }
    }).error(() => {
      that.setState({
        error: true,
        msg: 'Could not fetch source feeds'
      })
    });
  },

  handleSubmit(event) {
    event.preventDefault()
    const url = this.refs.url.value
    const name = this.refs.name.value
    const that = this
    const token = auth.getToken()
    $.ajax({
      url: "/curate/api/sourcefeeds/",
      type: 'POST',
      data: {
        'url': url,
        'name': name
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token " + token)
      }
    }).success((data) => {
      console.log(data)
      if (data && data.success) {

      } else {
        that.setState({
          error: true,
          msg: data.msg
        })
      }
    }).error(() => {
      that.setState({
        error: true,
        msg: 'Could not add feed'
      })
    });
  },

  render() {
    const rows = this.state.feeds.map((val) => {
      return (  <tr>
        <td>{val.name}</td>
        <td><a href="{val.url}">Link</a></td>
        <td>{val.created_by}</td>
      </tr>)
    }
    )
    const {pathname} = this.props.location
    return (
      <div className="pure-g app-container">
        <div className="pure-u-1 top-nav">
          <DashBoardTopView pathname={pathname} username="ybv"/>
        </div>
          <div className="pure-u-1">
            <div className="source-feed-container">
              <legend>Add new source</legend>
              <hr/>
            <form className="pure-form pure-form-aligned"  onSubmit={this.handleSubmit}>
              <fieldset>
                <div className="pure-control-group">
                  <label htmlFor="name">Feed Name</label>
                  <input ref="name" required/>
                </div>
                <div className="pure-control-group">
                  <label htmlFor="url">Feed Url</label>
                  <input ref="url" p required/>
                </div>
                <div className="pure-controls">
                  <button type="submit" className="pure-button">Add Source</button>
                </div>
              </fieldset>
            </form>
            <legend>Existing sources</legend>
            <hr/>
            <div style={{
        textAlign: 'center'
      }}>
            <table align="center" width="100%" className="pure-table pure-table-horizontal">
              <thead>
              <tr>
                  <th>Feed Name(Unique)</th>
                  <th>Url</th>
                  <th>Added By</th>
              </tr>

            </thead>
            <tbody>
              {rows}
            </tbody>
            </table>
            </div>
          </div>
          </div>
      </div>

    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/curate" component={App}>
      <IndexRoute component={ArticleList} onEnter={requireAuth}/>
      <Route path="login"  component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="classify/:articleId" component={Article} onEnter={requireAuth}/>
      <Route path="sourcefeeds" component={SourceFeeds} onEnter={requireAuth}/>
      <Route path="register/complete/:email_sha" component={RegisterComplete}/>
    </Route>
  </Router>
  ), document.getElementById('root'))
