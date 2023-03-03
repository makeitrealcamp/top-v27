import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import { useWindowSize } from './hooks/useWindowSize';

//useState, useEffect
//useMemo, useRef, customHooks

// Hooks es una función que nos permite enganchar el estado y los ciclos a los componentes 

//const arr = [ 1, 2, 3, 4 ]

function App() {
  const [width, height] = useWindowSize()
  console.log(height);
  // const [ name, setName ] = useState('Jhon Doe')
  // const [ array, setArray ] = useState([])
  const [ bool, setBool ] = useState(false)
  const [count, setCount] = useState(0)
  // const [ state, setState ] = useState({ //Tener cuidado de no mutar el estado objeto
  //     name: 'Jhon',
  //     age: 33
  //   })

  //1. Los hooks solo se usan dentro de otros hooks y de componentes función en react
  //2. Los hooks siempre se ejecutan en el mismo orden
  //3. Los hooks siempre se deben ejecutar en el primer nivel del componente
  //4. Los hooks siempre se nombrar con el prefijo use

//Fases del ciclo de vida
  // 1. Montaje
  // 2. Actualización
  // 3. Desmontaje

  useEffect(() => {
    console.log('Componente montado y viendo COUNT');

    return () => {
      console.log('DESMONTAJE DEL COMPONENTE');
    }
  }, [count])

  // useEffect(() => {
  //   console.log('Componente montado y viendo BOOL');
  // }, [bool])
  

  const handleClick = () => {
    setCount((state) => state + 1)
    //setState({ ...state, name: 'Camilo' })
    //setCount(count + 1)
  }

  return (
    <div className="App-header">
        { bool && <img src={logo} className="App-logo" alt="logo" />}

        <button onClick={() => setBool(state => !state)}>Ver o no</button>
        
        <h1>Clases de hooks, estados y ciclos de vida</h1>
        <button onClick={handleClick}>Sumar</button>
        <h2>{count}</h2>
    </div>
  );
}

export default App;
