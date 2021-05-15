import React from 'react'
import RegisterSection from './RegisterSection/RegisterSection'
import LoginSection from './LoginSection/LoginSection'

class Login extends React.Component {
  render () {
    return (
      <div className='login--page'>
        <LoginSection />
        <RegisterSection />
      </div>
    )
  }
}

export default Login
