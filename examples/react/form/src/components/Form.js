import React, { useState } from 'react'
import axios from 'axios'


const Form = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    done: false
  })

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
      setData({
        title: '',
        description: '',
        done: false
      })
    } catch {
      alert('No se pudo enviar los datos')
    }
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    })

  }
  console.log(data['title']);
  

  const { title, description, done } = data
  return(
    <React.Fragment>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor='title'>Titulo</label>
          <input
            id='title'
            name='title'
            type='text'
            onChange={(event) => handleChange(event)}
            value={title}
            />
        </div>

        <div>
          <label htmlFor='description'>Descripción</label>
          <input
            id='description'
            name='description'
            type='text'
            onChange={(event) => handleChange(event)}
            value={description}
            />
        </div>

        <div>
          <label htmlFor='done'>Acepto:</label>
          <input
            id='done'
            name='done'
            type='checkbox'
            onChange={(event) => handleChange(event)}
            checked={done}
            />
        </div>

        <button type='submit'>Enviar</button>
      </form>
    </React.Fragment>
  )
}

export default Form