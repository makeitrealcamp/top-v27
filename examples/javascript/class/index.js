class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hola me llamo ${this.name} !!!`);
  }
}

//instancia
const pedro = new Person('Pedro Perez')
pedro.greet()


// Herencia
class User extends Person {
  constructor(name, email, password){
    super(name)
    this.email = email
    this.password = password
  }

  register() {
    console.log(`Registro de ${this.name}`);
  }
}

const u1 = new User('Jhon Doe', 'jhondoe@test.com', 'test1234' )
u1.greet()
u1.register()

console.log(u1);