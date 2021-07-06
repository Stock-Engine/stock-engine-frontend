import './LoginSection.css'
import React from 'react'
import { API } from '../../../Api'
import { Redirect } from 'react-router'
import { withCookies } from 'react-cookie'

class LoginSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      redirectToDashboard: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async loginUserApi (user, pass) {
    const { cookies } = this.props
    return API.login(user, pass, cookies).catch(err => {
      console.log(err)
      throw Error(err)
    })
  }

  async handleSubmit (e) {
    const username = this.state.username
    const password = this.state.password

    e.preventDefault()
    await this.loginUserApi(username, password)
    this.setState({ redirectToDashboard: true })
  };

  render () {
    if (this.state.redirectToDashboard) {
      return (<Redirect to='/' />)
    }

    return (
      <div className='login'>
        <header className='login__section--header'>
          <p className='header__logo'>
            <span>Stock</span> Engine
          </p>
        </header>

        <div className='login__section'>
          <section className='login__section--title'>
            <h2>Sign in</h2>
            <hr />
          </section>

          <section className='login__section--form'>
            <form method='post' onSubmit={this.handleSubmit}>
              <div className='form__input'>
                <span className='fa fa-user-o' />
                <input
                  type='name' id='input--username' placeholder='Username' required
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </div>
              <div className='form__input'>
                <span className='fa fa-key' />
                <input
                  type='password' id='input--password' placeholder='Password' required
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </div>
              <button type='submit' id='button--submit'>Sign in</button>
            </form>
          </section>

          <section className='login__section--arrow'>
            <p>Don't have account?</p>
            <a href='#register__section'> </a>
          </section>
        </div>

      </div>
    )
  }
}

export default withCookies(LoginSection)
