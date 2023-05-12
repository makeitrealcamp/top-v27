import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

function App() {
  const ref = useRef()
  const [ msg, setMsg ] = useState('')
  
  useEffect(() => {
    ref.current = io('http://localhost:8080') 

    ref.current.on('welcome', (data) => {
      console.log('WELCOME:', data.message);
    })

    ref.current.on('broadcast', (data) => {
      console.log('BROADCAST:', data);
    })

    ref.current.on('private', (data) => {
      console.log('PRIVATE:', data);
    })

    return () => {
      ref.current.close()
      ref.current.removeAllListeners()
    }
  }, [])

  const handleEmit = () => {
    ref.current.emit('message', msg)
    setMsg('')
  }

  const handleJoin = () => {
    ref.current.emit('join room', msg)
  }

  const handlePrivateMsg = () => {
    ref.current.emit('msgPrivate', msg)
    setMsg('')
  }
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='title'>Websocket con Socket.io</h1>
      <input
        type='text'
        placeholder='Escribe tu mensaje...'
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button  
        onClick={handleEmit}
      > Enviar </button>
      <button  
        onClick={handleJoin}
      > Unirme a una sala privada </button>
      <button  
        onClick={handlePrivateMsg}
      > Mensaje privado </button>
      
    </>
  )
}

export default App
