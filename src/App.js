import './App.css'
import { isAuthenticated } from './utils'
import React from 'react'
import Login from './components/LoginPage/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Queries from './components/Queries/Queries'
import Alerts from './components/Queries/Alerts'
import { withCookies } from 'react-cookie'

class App extends React.Component {
  render () {
    const { cookies } = this.props

    if (isAuthenticated(cookies)) {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/queries'>
              <Alerts />
              <Queries />
            </Route>
          </Switch>
        </BrowserRouter>
      )
    } else {
      return <Login />
    }
  }
}

export default withCookies(App)
