import { useState } from 'react'
import './App.css'

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

    const response = axios.post('http://localhost:8080',
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
    readFile(e.target.files[0])
    setFile(e.target.files)
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
