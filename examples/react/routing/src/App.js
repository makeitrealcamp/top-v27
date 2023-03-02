import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import {Routes, Route} from "react-router-dom"
import NotFoundPage from './pages/404';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
