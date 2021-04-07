import './App.css'
import Login from './components/LoginPage/LoginSection/LoginSection'
import Register from './components/LoginPage/RegisterSection/RegisterSection'

function App () {
  return (
    <div className='App'>
      <div className='login--page'>
        <Login />
        <Register />
      </div>
    </div>
  )
}

export default App
