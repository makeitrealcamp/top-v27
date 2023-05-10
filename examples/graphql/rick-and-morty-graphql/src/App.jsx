import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Locations from './pages/Locations'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="App root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </>
  )
}

export default App
