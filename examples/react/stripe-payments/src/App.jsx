import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CartDetails from './pages/CartDetails';
import { useSelector } from 'react-redux';
import Alerts from './components/Alerts';

function App() {
  const { active, message, type } = useSelector(state => state.alerts);

  return (
    <div className='App'>
      <Header />
      {active && <Alerts type={type}>{message}</Alerts>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:productId' element={<ProductDetail />} />
        <Route path='/cart-details' element={<CartDetails />} />
      </Routes>
    </div>
  );
}

export default App;
