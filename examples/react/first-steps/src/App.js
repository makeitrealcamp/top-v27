import "./App.css";
import React from "react";
import Card from "./components/Card";

export default function App() {
  const fullName = "Jhon Doe";
  const array = [1, 2, 3, 4];
  const person = {
    name: "Michael",
    age: 26
  };
  //JSX - Javascript and XML
  //Los componentes solo retornan un elemente
  //Todas las etiquetas de deben cerrar <></> </>
  //Nos permite agregar Javascript dentro de jsx pero entre {}
  //class --> className, for --> htmlFor

  const { name, age } = person;

  return (
    <React.Fragment>

      <Card 
      name={"Jhon Doe"} 
      age={33}
      isHuman={true}
      >
        <div>
          <h1>Esto es un children</h1>
          <img  src="http://placekitten.com/200/300"/>
        </div>
      </Card>

      <div className="App">
        <h1>Hola React, soy {fullName}</h1>
        {array.map((item) => {
          return (
            <React.Fragment key={item}>
              <div>Hola soy {item}</div>
            </React.Fragment>
          );
        })}
        <h2>Start editing to see some magic happen!</h2>
        <h3>Hola soy {name}</h3>
        <h3>y tengo {age} años</h3>
      </div>
    </React.Fragment>
  );
}

/* const App = () => {
  //Estados
  //Ciclos
  //Aquí es donde debe ir toda la lógica

  return(
    <>
    </>
  )
} */