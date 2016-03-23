import React from 'react'
import $ from 'jquery'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

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

const DashBoardTopView =  React.createClass({
  render() {
    const {username} = this.props;
    let topbar = {
      backgroundColor: '#f5f7f9',
      height: '40px',
      padding: '10px',
      borderBottom : '1px solid #2ecc71'
    };
    const { pathname } = this.props
    let curateActive = false
    let sfActive = false
    let dashActive  = false
    if ( pathname.indexOf('article/curate') > -1) {
      curateActive = true
    }
    if ( pathname.indexOf('sourcefeeds') > -1) {
      sfActive = true
    }
    if (!sfActive && !curateActive){
      dashActive = true
    }
    console.log(dashActive)
    return (
    <div className="pure-g" style={topbar}>
      <div className="pure-u-1-3" style={{fontSize: '12px', paddingTop: '5px'}}>
        Logged in as: {username}
        <br/>
        <Link to="/curate/logout">Log out</Link>
      </div>
      <div className="pure-u-2-3" >
        {dashActive && (<div className="pure-g" style={{padding: '5px 5px 5px 5px'}}>
        <div className="pure-u-12-24" style={{textAlign:'center'}}>
             <Link to="sourcefeeds/">Add Source Feeds</Link>
          </div>
          <div className="pure-u-12-24" style={{textAlign:'center'}}>
            <Link to="article/curate">Curate Articles</Link>
          </div>
        </div>)}
        {sfActive && (<div className="pure-g" style={{padding: '5px 5px 5px 5px'}}>
        <div className="pure-u-12-24" style={{textAlign:'center'}}>
             <Link to="/curate/">Dashboard</Link>
          </div>
          <div className="pure-u-12-24" style={{textAlign:'center'}}>
            <Link to="article/curate">Curate Articles</Link>
          </div>
        </div>)}
        {curateActive && (<div className="pure-g" style={{padding: '5px 5px 5px 5px'}}>
        <div className="pure-u-12-24" style={{textAlign:'center'}}>
             <Link to="sourcefeeds">Add Source Feeds</Link>
          </div>
          <div className="pure-u-12-24" style={{textAlign:'center'}}>
            <Link to="/">Dashboard</Link>
          </div>
        </div>)}
      </div>
    </div>
    )
  }
})

const DashBoardView = React.createClass({
  render() {
    const {welcomeMsg, pathname} = this.props;

    return (
      <div className="pure-g">
        <div className="pure-u-2-24">
        </div>
        <div className="pure-u-20-24">
          <div className="pure-g">
            <div className="pure-u-1">
              <DashBoardTopView pathname={pathname} username="ybv"/>
            </div>
          </div>
        </div>
        <div className="pure-u-2-24">
        </div>
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
    const { pathname } = this.props.location
    if (this.state.loggedIn){
      if (pathname.indexOf('login') > -1) {
        this.context.router.replace('/curate/')
      }
    }
  },

  render() {
    const { pathname } = this.props.location
    if ( pathname.indexOf('register/complete') > -1) {
      return (
        <div className="pure-g">
          <div className="pure-u-1-3">
          </div>
          <div className="pure-u-1-3">
            <HelloContainer welcomeMsg='Welcome to good news project. Sign up to continue.' />
            {this.props.children}
          </div>
          <div className="pure-u-1-3">
          </div>
        </div>
      )
    }
    else if (pathname.indexOf('login') > -1)  {
      return (
        <div className="pure-g">
          <div className="pure-u-1-3">
          </div>
          <div className="pure-u-1-3">
            <HelloContainer welcomeMsg='Welcome to good news project. Login to continue.'/>
            {this.props.children}
          </div>
          <div className="pure-u-1-3">
          </div>
        </div>
      )
    }
    else{
      return <DashBoardView pathname={pathname} />
    }

  }
})

const Dashboard = React.createClass({
  render() {
    const token = auth.getToken()

    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
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
        return this.setState({ error: true, msg: msg})

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  },

  render() {
    return (
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
    return <p>You are now logged out</p>
  }
})

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/curate/login',
      state: { nextPathname: nextState.location.pathname }
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

  handleSubmit(event){
    event.preventDefault()
    const pass = this.refs.pass.value
    const first_name = this.refs.first_name.value
    const last_name = this.refs.last_name.value
    const username = this.refs.username.value

    const { email_sha } = this.props.params
    const { location } = this.props

    auth.CompleteRegistration(email_sha, pass, first_name, last_name, username, (success, msg) => {
      if (!success){
        console.log('here', msg)
        return this.setState({ error: true, msg: msg })
      }

      if (location.state) {
        this.context.router.replace('/dashboard')
      }
    })
  },

  render(){
    return (
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

  componentWillMount(){
      this.fetchFeeds()
  },

  fetchFeeds(){
    const token = auth.getToken()
    let that = this
    $.ajax({
    url: "/curate/list-source-feeds/",
    beforeSend: function( xhr ) {
      xhr.setRequestHeader ("Authorization", "Token " + token)
    }
  }).success(function( data ) {

      if(data){
        that.setState({
          feeds: data
        })
      }
      else{
        that.setState({
          error:true,
          msg: 'Could not fetch source feeds'
        })
      }
    }).error(() => {
      that.setState({
        error:true,
        msg: 'Could not fetch source feeds'
      })
    });
  },

  render(){
    const rows = this.state.feeds.map((val)=> {
    return(  <tr>
        <td>{val.name}</td>
        <td><a href="{val.url}">Link</a></td>
        <td>{val.created_by}</td>
      </tr>)
    }
  )

    return (
      <table className="pure-table pure-table-horizontal">
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
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/curate" component={App}>
      <Route path="login"  component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="article/curate" component={About} />
      <Route path="sourcefeeds" component={SourceFeeds} onEnter={requireAuth}/>
      <Route path="register/complete/:email_sha" component={RegisterComplete}/>
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('root'))
