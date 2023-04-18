import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [username, setUsername] = useState('')
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)


  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target.result)
    //reader.onload = (e) => console.log(e.target.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    /* data = {
      username: 'Jhon Doe',
      file_0: 'f34fewrgerger',
      file_1: 'oaifh0394gnienrgperg'
    } */
    const data = new FormData()
    data.append('username', username)
    for (let i=0; i < file.length; i++){
      data.append(`file:${i}`, file[i], file[i].name, )
    }

    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}test-formdata`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

  }

  const handleChange = (e) => {
    //console.dir(e.target.file[0]);
    // if(e.target.files.size < 1024 * 1024 * 5){
    // } else {
    //   alert('la imagen debe ser menor a 5mb')
    // }
    readFile(e.target.files[0])
    setFile(e.target.files)
    // img < 5mb
  }

  return (
    <div className="App">
      <h1>Envío de archivos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Nombre:</label>
        <input
          type='text'
          name='username'
          id='username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor='file'>Imagen</label>
        <input
          type='file'
          accept='image/*'
          multiple
          name='file'
          id='file'
          max-size="200"
          onChange={handleChange}
        />
        <button type='submit'>Enviar</button>
      </form> 
      {!!image && <img src={image} alt='upload preview'/>}
    </div>
  )
}

export default App
