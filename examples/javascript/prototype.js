//Objeto literal

/* const pedro = {
  name: "Pedro Perez",
  age: 30,
  // Métodos concisos (ES6)
  sayHello() {
    console.log(`Hola! me llamo ${this.name}`)
  }
}

const maria = {
  name: "Maria Mendez",
  age: 30,
  // Métodos concisos (ES6)
  sayHello() {
    console.log(`Hola! me llamo ${this.name}`)
  }
} */

const person = {
  isHuman: true,
  sayHello() {
    console.log(`Hola! me llamo ${this.name}`)
  }
}

// 1. Object.create()

const pedro = Object.create(person, { name: { value: "Pedro Perez" }, age: { value: 30}})

// console.log(pedro.sayHello())

// console.log(Object.getPrototypeOf(pedro))

// 2. Funciones constructoras

function Person(name, age) {
  this.name = name,
  this.age = age
}

Person.prototype= {
  married: false,
  sayHello() {
    console.log(`Hola! me llamo ${this.name}`)
  },
  toString() {
    console.log("Estoy cambiando el toString");
  }
}


const nicolas = new Person("Nicolas", 30)

// console.log(nicolas.name)
// console.log(nicolas.age)
// console.log(nicolas.married)
// console.log(nicolas.toString());


Array.prototype.sum = function() {
  let count = 0
  for(let i = 0; i < this.length; i++){
    count += this[i]
  }

  return count
}

console.log("Suma del arrreglo:", [10, 5, 20].sum())
console.log("Suma del arrreglo:", [10, 5, 50].sum())


//String.formatCurrency

//"429900".formatCurrency() //$ 429.900