//let srt = "Hola" // js -> inferencia de tipos ó coerción implicita
let str: string = "Hola"
const cedula: string | number = 5234235235 // unión 

const hello = (name: string, age: number = 1): string => {
  return `Hola soy ${name} y tengo ${age} años`
}

console.log(hello('Jhon Doe', 33));
console.log(hello('Pepito Doe'));

type Person = {
  name: string,
  age: number
}

const greet = (obj: Person): string => {
  return `Hola soy ${obj.name} y tengo ${obj.age} años`
}

console.log(greet({ name: 'Jhon Doe', age: 33 }));

const arr: number[] = [1, 2, 3 ,4]
const arr2: Array<number> = [1, 2, 3 ,4] // Genericos
const arr3: (string | number)[] = [1, 2, '']
const people: Person[]= [{ name: 'Jhon Doe', age: 33 }, { name: 'Jane Doe', age: 30 }]
