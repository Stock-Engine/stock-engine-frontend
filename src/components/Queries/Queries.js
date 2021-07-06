import React from 'react'
import { withCookies } from 'react-cookie'
import { API } from '../../Api'

class QueryInput extends React.Component {
  render () {
    return (
      <form>
        <label>
          Query:
          <input type='text' name='query' />
        </label>
        <input type='submit' value='Send' />
      </form>
    )
  }
}

export class QueryList extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.data.map(el =>
            <li key={el.id}>
              {this.renderElement(el)}
            </li>
          )
        }
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
      <div>
        <QueryInput />
        <QueryHistoryList data={this.state.queryHistory} />
      </div>

    )
  }
}

export default withCookies(Queries)
