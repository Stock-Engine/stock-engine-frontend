import React from 'react'
import { withCookies } from 'react-cookie'
import { API } from '../../Api'
import './Queries.css'
import { BellIcon, ArrowIcon, SyncIcon } from './Icons.js'
import { PageNav } from './QueriesNav.js'

export class PageHeader extends React.Component {
  render () {
    return (
      <div>
        <header className='page--header'>
          <p className='header__logo'>
            <span>Stock</span> Engine
          </p>
        </header>
        <PageNav />
      </div>
    )
  }
}

export class QueryInput extends React.Component {
  render () {
    return (
      <form className='query-form'>
        <div className='query-input'>
          <span className='fa fa-question' />
          <input id='input-query' type='text' name='query' placeholder='Text of the query' required />
        </div>
        <button id='btn-query' type='submit'>SEND</button>
      </form>
    )
  }
}

export class QueryListHeader extends React.Component {
  render () {
    return (
      <h3 className='queryList-header'>
        History:
      </h3>
    )
  }
}
export class QueryListName extends React.Component {
  render () {
    return (
      <div className='queryList-names-box'>
        <h3 className='queryList-names'>
          Queries
        </h3>
        <h3 className='queryList-names'>
          Alerts
        </h3>
      </div>
    )
  }
}

export class QueryList extends React.Component {
  render () {
    return (

      <ul>
        <div className='queryList-element'>
          {
            this.props.data.map(el =>
              <li key={el.id}>
                {this.renderElement(el)}
                <div className='query-icons-box'>
                  <BellIcon />
                  <SyncIcon />
                  <ArrowIcon />
                </div>
              </li>
            )
          }

        </div>
      </ul>
    )
  }

  renderElement (el) {
    return null
  }
}

class QueryHistoryList extends QueryList {
  renderElement (el) {
    return (
      'Query ' + el.name
    )
  }
}

class Queries extends React.Component {
  constructor (props) {
    super(props)

    this.state = { queryHistory: [] }
  }

  componentDidMount () {
    const ths = this

    const { cookies } = this.props
    API.getQueryHistory(cookies)
      .then((json) => ths.setState({ queryHistory: json.list }))
  }

  render () {
    return (
      <div id='queries'>
        <QueryHistoryList data={this.state.queryHistory} />
      </div>
    )
  }
}

export default withCookies(Queries)
