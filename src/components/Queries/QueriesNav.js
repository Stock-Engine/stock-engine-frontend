import React from 'react'

export class PageNav extends React.Component {
  render () {
    document.addEventListener('DOMContentLoaded', () => {
      const firstAnchor = document.getElementById('firstAnchor')
      const secondAnchor = document.getElementById('SecondAnchor')
      const queries = document.getElementById('queries')
      const alerts = document.getElementById('alerts')

      firstAnchor.addEventListener('click', () => {
        firstAnchor.style.color = 'black'
        secondAnchor.style.color = 'var(--lightGray)'
        queries.style.display = 'initial'
        alerts.style.display = 'none'
      })

      secondAnchor.addEventListener('click', () => {
        firstAnchor.style.color = 'var(--lightGray)'
        secondAnchor.style.color = 'black'
        queries.style.display = 'none'
        alerts.style.display = 'initial'
      })
    })
    return (
      <div>
        <nav className='page--nav'>
          <p id='firstAnchor'>Queries</p>
          <p id='SecondAnchor'>Alerts</p>
        </nav>
      </div>
    )
  }
}
