const { sum, multiply, divide, person, map } = require(".")

//1. Unidad que se esta testiando
describe('Math' , () => {

  //2. Escenario
  describe('sum', () => {
    //3. Lo que se espera
    it('should add two correctly', () => {
      const result = sum(1, 2)
      expect(result).toBe(3)
      expect(sum(5, 10)).toBe(15)
      expect(sum(12345, 5678)).toBe(18023)
    })
    
    it('should add 1 and "b" incorrectly', () =>{
      const result = sum(1, 'b')
      expect(result).toMatch(/Invalid/i)
    })
  })
  
  describe('multiply', () => {
    it('should multiply to correctly', () => {
      const result = multiply(2, 3)
      expect(result).toBe(6)
    })
  })

  describe('divide', () => {
    it('should divide to correctly', () => {
      const result = divide(9, 3)
      expect(result).toBe(3)
    })
  })
})

describe('person', () => {
  describe('create person', () => {

    it('should create with name jhon and age 33', () => {
      const jhon = person("Jhon", 33)
      expect(jhon).toMatchObject({ name: 'Jhon', age: 33 })
      expect(jhon.name).toMatch(/jhon/i)
      expect(jhon.age).toBe(33)
    })

    it('should greet with name jean', () => {
      const jean = person("Jean", 29)
      expect(jean.greet()).toMatch(/Hola/i)
    })
    
  })
})

//1. no lleva mucho esfuerza // manejar un carro
//2. para tareas complicadas // resolver una ecuación 