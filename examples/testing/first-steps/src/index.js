exports.sum = (a, b) => {
  try {
    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('invalid number')
    }

    return a + b
  } catch(error) {

    return error.message
  }
}

exports.multiply = (a, b) => {
  return a * b
} 

exports.divide = (a, b) => {
  return a / b
} 

exports.person = (name, age) => {
  return {
    name,
    age, 
    greet: () => {
      return `Hola soy ${name}`
    }
  }
}
