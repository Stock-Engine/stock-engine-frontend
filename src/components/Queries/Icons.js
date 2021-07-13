import React from 'react'
import './Icons.css'
import SyncSvg from '../../images/icons/sync-icon.svg'
import ArrowSvg from '../../images/icons/arrow-down-icon.svg'
import BellSvg from '../../images/icons/bell-icon.svg'
// import BellSlashIcon from '../../images/icons/bell-slash-icon.svg'

export class BellIcon extends React.Component {
  render () {
    return (
      <img src={BellSvg} className='query-icons' alt='' />
    // There is a BellSlashIcon for next version of the page
    )
  }
}

export class SyncIcon extends React.Component {
  render () {
    return (
      <img src={SyncSvg} className='query-icons' alt='' />
    )
  }
}

export class ArrowIcon extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleRotateClick = this.handleRotateClick.bind(this)
  }

  handleRotateClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (
      <img src={ArrowSvg} id='ArrowSvg' onClick={this.handleRotateClick} className={this.state.isToggleOn ? 'query-icons' : 'arrow-rotate'} alt='' />
    )
  }
}
