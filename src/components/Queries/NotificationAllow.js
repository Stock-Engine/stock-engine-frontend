import React from 'react'
import { FCM } from '../../fcm'
import { withCookies } from 'react-cookie'

class NotificationAllow extends React.Component {
  constructor (props) {
    super(props)

    const { cookies } = this.props
    FCM.register(cookies)
    this.wrapper = React.createRef()
  }

  componentDidMount () {
    if (this.wrapper.current) { this.wrapper.current.addEventListener('click', this.listener) }
  }

  componentWillUnmount () {
    if (this.wrapper.current) { this.wrapper.current.removeEventListener('click', this.listener) }
  }

  listener (_) {
    const { cookies } = this.props
    return FCM.register(cookies)
  }

  render () {
    if (Notification.permission === 'granted') {  // eslint-disable-line
      return null
    } else {
      return (
        <button type='button' ref={this.wrapper}>Enable notifications</button>
      )
    }
  }
}

export default withCookies(NotificationAllow)
