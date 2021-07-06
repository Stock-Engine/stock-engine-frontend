import './App.css'
import { isAuthenticated } from './utils'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FCM } from './fcm'
import Login from './components/LoginPage/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Queries from './components/Queries/Queries'
import Alerts from './components/Queries/Alerts'
import { withCookies } from 'react-cookie'
import NotificationAllow from './components/Queries/NotificationAllow'

FCM.init()

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
              <NotificationAllow />
            </Route>
          </Switch>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    }
  }
}

export default withCookies(App)
