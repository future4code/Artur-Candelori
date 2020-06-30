//Exercício 1
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
  id: string,
  email: string,
  name: string,
  password: string
  ){
  console.log("Chamando o construtor da classe User")
  this.id = id
  this.email = email
  this.name = name 
  this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`
  }
}

// const newUser = new User("1", "artur@email.com", "Artur", "1234")
// console.log(newUser.getId())
// console.log(newUser.getName())
// console.log(newUser.getEmail())

//a) Não
//b) Uma vez

//Exercício 2
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const newCustomer = new Customer("1", "artur@email.com", "Artur", "1234", "0123")

//a) Uma
//b) Uma, porque o super da classe Customer roda o constructor da classe User

//Exercício 3
// console.log(newCustomer.purchaseTotal())
// console.log(newCustomer.getCreditCard())
// console.log(newCustomer.getEmail())
// console.log(newCustomer.getId())
// console.log(newCustomer.getName())

//a) Não, porque a senha é privada e não há nenhum método que retorne seu valor

//Exercício 4
//console.log(newCustomer.introduceYourself())

//Exercício 5
//console.log(newCustomer.introduceYourself())