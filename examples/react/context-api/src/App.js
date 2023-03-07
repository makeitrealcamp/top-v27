import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { AuthProvider } from './store/AuthContext';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Clase de context API</h1>
      <AuthProvider>
        <Header/>{/* subcriber */}
        <Button/>{/* publisher */}
      </AuthProvider>
    </div>
  );
}

export default App;
