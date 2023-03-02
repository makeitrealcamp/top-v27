import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import {Routes, Route, Navigate} from "react-router-dom"
import NotFoundPage from './pages/404';
import Header from './components/Header';
import VehiclesPage from './pages/vehicles';
import PrivateRoutePage from './pages/PrivateRoute';

// URL
// Protocolo - subdominio - dominio - extend - pathname - parametros - search params
// https : // classroom . makeitreal . camp / dashboard / users ? name=jhon&cedula=1234567890

const Private = ({ children }) => {
  const ticket = localStorage.getItem('token')
  return ticket ? children : <Navigate to='/'/>
}

function App() {

  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/vehicles' element={<VehiclesPage/>}>
          <Route path=':brand' element={<VehiclesPage/>}>
            <Route path=':model' element={<VehiclesPage/>}/>
          </Route>
        </Route>
        <Route path='/private-route' element={<Private><PrivateRoutePage/></Private>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
