/* ## Devolver propiedad de objeto anidado
Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve `undefined`.

```js
function myFunction(obj) {

  return
}

```
| Test Case                  | Expected   |
|----------------------------|------------|
| myFunction({a:1})          | `undefined`|
| myFunction({a:{b:{c:3}}})  | {c:3}      |
| myFunction({b:{a:1}})      | `undefined`|
| myFunction({a:{b:2}})      | 2          | */

const ejm = {
  c: {a:2 },
  d: {
    e: {
      b: "Soy B"
    }
  }
}


function myFunction(obj) {
  // caso trivial (base)
  if(typeof obj !== "object") return undefined

  //caso general
  for(let k in obj){
    if(k === "b") { 
      return obj[k]
    } else {
      const result = myFunction(obj[k])
      if(result !== undefined) return result
    }
  }
}

console.log(myFunction(ejm))




// funciones -> Ciudadanos de primera clase

// (function printNumbers(x) {
//   for(let i = 0; i <= x; i++ ){
//     console.log(i)
//   }
// })(10)

// function printNumbersRecursion(x) {
//   // Caso trivial
//   if(x < 10) { printNumbersRecursion(x + 1) }

//   // Caso  General
//   console.log(x)
// }

// printNumbersRecursion(1)