import React, { useState } from "react"
import axios from 'axios'
import Cookies from 'universal-cookie';
 

const Login = () => {
  const cookies = new Cookies();
  const [dataUser, setDataUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}auth/local/login`, dataUser) 
      //localStorage.setItem('token', data.token)
      cookies.set('token', data.token)
      cookies.set('firstname', data.data.firstname)
      cookies.set('lastname', data.data.lastname)
      cookies.set('email', data.data.email)

    } catch (err) {
      alert('Ups! ocurrió algo en el login')
    }
  }

/*   axios.post('http://localhost:8080',
  {
    id: 'eifjve0qr9jverv',
    name: 'kign room',
    price: '1000'
  }, 
  {
    headers: {
      Authorization: `Bearer ${cookies.get('token')}`
    }
  })
  .then()
  .catch() */

  const handleChange = (e) => {
    const { value, name } = e.target
    setDataUser({ ...dataUser, [name]: value })
  }

  return(
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          value={ dataUser.email }
          onChange={handleChange}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={ dataUser.password }
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </React.Fragment>
  )
}

export default Login