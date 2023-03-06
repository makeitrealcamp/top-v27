import logo from './logo.svg';
import './App.scss';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Card from './components/Card';
import Head from './components/Head';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Head/>
      <Title/>
      <Subtitle/>
      <Card/>
    </div>
  );
}

export default App;
