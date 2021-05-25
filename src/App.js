import './App.css'
import { isAuthenticated, setToken } from './utils'
import React from 'react'
import Login from './components/LoginPage/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Queries from './components/Queries/Queries'
import Alerts from './components/Queries/Alerts'
import { withCookies } from 'react-cookie'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.throwError = this.throwError.bind(this)
    this.state = {
      error: false
    }
  }

  throwError (err) {
    if (err === 401) {
      const { cookies } = this.props
      setToken(null, cookies)
      this.forceUpdate()
    } else this.setState({ error: err })

    return Promise.reject(err)
  }

  render () {
    const { cookies } = this.props

    if (isAuthenticated(cookies)) {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Dashboard throwError={this.throwError} />
            </Route>
            <Route path='/queries'>
              <Alerts throwError={this.throwError} />
              <Queries throwError={this.throwError} />
            </Route>
          </Switch>
        </BrowserRouter>
      )
    } else {
      return <Login throwError={this.throwError} />
    }
  }
}

export default withCookies(App)
