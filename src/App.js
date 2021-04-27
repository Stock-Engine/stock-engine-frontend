import './App.css'
import Login from './components/LoginPage/LoginSection/LoginSection'
import Register from './components/LoginPage/RegisterSection/RegisterSection'
import setToken from './components/LoginPage/LoginSection/token'

function App () {
  return (
    <div className='App'>
      <div className='login--page'>
        <Login setToken={ setToken } />
        <Register />
      </div>
    </div>
  )
}

export default App
