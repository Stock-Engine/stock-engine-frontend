import React from 'react'
import { QueryList } from './Queries'
import { withCookies } from 'react-cookie'
import { API } from '../../Api'

class AlertList extends QueryList {
  renderElement (el) {
    return (
      'Alert ' + el.name
    )
  }
}

class Alerts extends React.Component {
  constructor (props) {
    super(props)

    this.state = { alerts: [] }
  }

  componentDidMount () {
    const ths = this

    const { cookies } = this.props
    API.getAlerts(cookies)
      .then(json => ths.setState({ alerts: json.list }))
  }

  render () {
    return (
      <div id='alerts'>
        <AlertList data={this.state.alerts} />
      </div>
    )
  }
}

export default withCookies(Alerts)
