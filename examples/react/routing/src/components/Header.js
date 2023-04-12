import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Header = () => {
  const cookies = new Cookies();
  let location = useLocation();
  const [ validHeader, setValidHeader ] = useState(false)
  const paths = ['/', '/about-us', '/vehicles', 'private-route', '/login']


  useEffect(() => {
    const result = paths.some((item) => item === location.pathname)
    setValidHeader(result)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    cookies.remove('token')
    cookies.remove('firstname')
    cookies.remove('lastname')
    cookies.remove('email')
    return (<Navigate to='/'/>)
  }

  return(
    validHeader && (
      <React.Fragment>
        <button onClick={handleLogout}>Logout</button>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/about-us'>Nosotros</Link>
        <Link to='/vehicles'>Vehículos</Link>
        <Link to='/private-route'>Ruta privada</Link>
        {cookies.get('token') && 
        <h2>{`Bienvenido ${cookies.get('firstname')}`}</h2>}
      </React.Fragment>
    )
  )
}

export default Header