import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, loginWithPopup } = useAuth0()
  console.log(useAuth0());

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Auto - Autenticación con terceros</h1>
      { isAuthenticated && (
        <>
        <p>Estas autenticado</p>
        <p>{user.name}</p>
        <img src={user.picture} alt='user image'/>
        <button onClick={logout}>Logout</button>
        </>
      ) }
      <button onClick={() => {loginWithRedirect({ connection: 'Username-Password-Authentication' })}}>Login</button>
      <button onClick={() => {loginWithRedirect({ connection: 'google-oauth2' })}}>Login Google</button>
    </div>
  )
}

export default App
