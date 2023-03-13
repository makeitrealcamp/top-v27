import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Text from './components/Text'
import InputText from './components/InputText'
import { DECREMENT, INCREMENT } from './store'


function App() {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Redux en react</h1>
        <Counter/>
        <Button typeAction={DECREMENT}>Decrementar</Button>
        <Button typeAction={INCREMENT}>Incrementar</Button>
        <Text/>
        <InputText/>
    </div>
  );
}

export default App;
