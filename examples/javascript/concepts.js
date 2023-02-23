// Javascript es un lenguaje debilmente tipado 

//typescript
// int number = 5;
// float number = 5.5;
// char a = "c"
// string a = "hola mundo"
// boolean b = true


/* var num = 1
let num1 = "Sergio"
const num3 = () => {}

console.log(typeof num3)  */

// Valores primitivos

/* Boolean
null
undefined
Number
String
BigInt */

// operadores

// operadores de asignación

/* const num = num + 5
num += 5

const a = a - 6
a -= 6 */

// operadores matematicos

/* const result = 1 + 3 * (5 * 2 / 2)

console.log(result); */

// operadores lógicos

/* const condicion = false 
// && (and)
// || (or)
// ! (not)

console.log(!condicion); */

// Implicit coercion

/* const num = 5
const num1 = "9"

console.log( 5 + 10 + 5 + "9" + "1"); */

// Hoisting

// console.log(fullName);
// let fullName = "Jhon Doe"

// Scope

//
// //
// // //


/* if(true) {
  let name = "Jhon Doe"
  function test() {
    return
  }
}

console.log(name); */

// Closure
// Es una función que aún siendo llamda fuera de su scope puede acceder a su scope

/* function person() {
  let name = "Jhon Doe"

  return function greet() {
    return name
  }
}

const greet = person()

console.log(greet()); */

// TRUTHY AND FALSY VALUES

/* false0
-0
""
null
undefined
NaN */

/* const value = true

if(value) {
  console.log("VERDADERO");
} else {
  console.log("FALSO");
}
 */
//console.log({} && "Nicolas");