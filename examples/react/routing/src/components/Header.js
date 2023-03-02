import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';


const Header = () => {
  let location = useLocation();
  const [ validHeader, setValidHeader ] = useState(false)
  const paths = ['/', '/about-us', '/vehicles', 'private-route']


  useEffect(() => {
    const result = paths.some((item) => item === location.pathname)
    setValidHeader(result)
  }, [])

  const handleLogin = () => {
    localStorage.setItem('token', 'exampleToken')

  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    return (<Navigate to='/'/>)
  }

  return(
    validHeader && (
      <React.Fragment>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>Nosotros</Link>
        <Link to='/vehicles'>Vehículos</Link>
        <Link to='/private-route'>Ruta privada</Link>
      </React.Fragment>
    )
  )
}

export default Header