- Las variables se utilizan para almacanar información
- Una variable puede ser alguno de los siguientes:
  - Primitivos: number, boolean, string, undefined, null
  - Objetos (objetos litterales, arreglos, funciones, string, Number, Boolean)
- Javascript es un lenguaje basado en el paradigma de POO
- Tener una plantilla = reutilizar código
- Los objetos pueden tener metodos (son funciones dentro de objetos)
- Todos los objetos estan basado en otro objeto (prototipo). Esta forma una cadena prototipal

```js
const str = new String("hola");
str.split();

String.prototype.palindrome = function () {
  // ...
};
```

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hola me llamo ${this.name}`);
};

//Person.prototype
const pedro = new Person("Pedro Perez");
pedro.greet();
```

## Clases

// Endulzante sintactico para los prototipos
Molde del cual se pueden crear objetos - Fabrica de objetos

- Hacer más entendible el código
- Nos ayuda a reutilizar código

Alay kay - smalltalk

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hola me llamo ${this.name} !!!`);
  }
}

const pedro = new Person("Pedro Perez");
pedro.greet();
```

### Herencia

- propiedades (estados/variables)
- comportamientos (metodos)
