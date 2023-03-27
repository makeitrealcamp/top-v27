import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import PostsList from './components/PostsList';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h6>Clase de redux toolkit</h6> 
      <Counter/>
      <PostsList/>
      </div>
  );
}

export default App;
