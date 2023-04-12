import './App.css';
import { useJwt } from "react-jwt";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import {Routes, Route, Navigate} from "react-router-dom"
import NotFoundPage from './pages/404';
import Header from './components/Header';
import PrivateRoutePage from './pages/PrivateRoute';
import Login from './pages/Login';
import Cookies from 'universal-cookie';


// URL
// Protocolo - subdominio - dominio - extend - pathname - parametros - search params
// https : // classroom . makeitreal . camp / dashboard / users ? name=jhon&cedula=1234567890

const Private = ({ children }) => {
  const cookies = new Cookies();
  const { isExpired } = useJwt(cookies.get('token'))
  return isExpired ? children : <Navigate to='/'/>
}

function App() {

  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/private-route' element={<Private><PrivateRoutePage/></Private>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
