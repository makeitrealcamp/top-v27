////// Plantillas literal

// const top = "TOP 27"

// console.log("Hola " + top + " bienvenidos \nestamos en la clase de ES6");
// console.log(`Hola ${6 + 10} bienvenidos 
// estamos en la clase de ES6`);

////// Ambito de variables en bloque (Scope) (let const)

//let = nos permite cambiar el valor de la variable
//const = no nos permite cambiar el valor inicial

// function test(){
//   var num = 27
// }

// const gravity = 9.8 

// if(true) {
//   let num = 27
// }

// console.log("Variable num:", num)

////// Operadores ternarios

// if(condicion) {
//   //bloque de código para condición verdadera
// } else {
//   //bloque de código para condición false
// }

// "condición" ? "verdera" : "falsa"

// let item = 8

// className = { item > 10 ? "success" : "failed"}

// const scroll = window !== undefined ? window : 0

////// comparaciones (== vs ===)

//const num = "50"

// Coerción implicita


//comparación
// tipo = tipo 
// string = num
// string "50" = string "50"
// string "50" = string "50"

//comparación estricta
// tipo = tipo //no
// falso

// if("50" == 50) {
//   console.log("VERDAD");
// } else {
//   console.log("FALSO");
// }


////// funciones flecha o arrow function

// function sum(a,b) {
//   return a + b
// }

// function gravity(value) {
//   if(value == 9.8) {
//     return 9.8
//   } else {
//     return 0
//   }
// }

// const _sum = (a, b) => a + b 
// const gravity = (value) => value === 9.8 ? value : 0

////// Sintaxis corta de objetos

// const _name = "Jhon"
// const lastname = "Doe"

// const user = { _name: _name, lastname: lastname }

// const _user = { _name, lastname }

// console.log(user)
// console.log(_user)

////// Spread operator

// const _name = "Jhon"
// const lastname = "Doe"
// const user = { _name, lastname }
// const array = [1, 2, 4, 5]

// const sesion = {
//   mentor: "Sentor",
//   date: "23-feb-2023",
//   ...user
// }

// const newArray = [...array, 6 ,7]

// console.log(newArray);

////// Destructuring 

// const person = {
//   name: "Jhon",
//   lastname: "Doe",
//   age: 33,
//   greet: () => "Hola mundo",
//   hobbies: {
//     hobbie1: "play",
//     hobbie2: "futbol"
//   }
// }

// console.log(person.name);
// console.log(person.age);

// const { name: newName, age, greet, hobbies: { hobbie1, hobbie2 }} = person

// console.log(name);
// //console.log(lastname);
// console.log(age);
// console.log("GREET:", greet());
//console.log(person);
// console.log("HOBBIES", hobbie1);
// console.log(newName);

// const students = ["Andrés", "Diego", "Jean", "Nicolas"]

// const [x, y, a] =  students

// console.log(x);
// console.log(y);
// //console.log(z);
// console.log(a);
 

//console.log(students[3]);
