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

//const newCustomer = new Customer("1", "artur@email.com", "Artur", "1234", "0123")

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

//Exercício 6
class Employee extends User {
  static BENEFITS_VALUE: number = 400;
  protected admissionDate: string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Employee");
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
    return Employee.BENEFITS_VALUE + 400;
  }
}

//const newEmployee = new Employee("1", "artur@email.com", "Artur", "1234", "30/06/2020", 50000)

//a)Uma vez
//b)
// console.log(newEmployee.getAdmissionDate())
// console.log(newEmployee.getBaseSalary())
// console.log(newEmployee.getName())
// console.log(newEmployee.getId())
// console.log(newEmployee.getEmail())
// console.log(newEmployee.calculateTotalSalary())

//Exercício 8
class Seller extends Employee{
  static SELLING_COMISSION: number = 5;
  private salesQuantity: number = 0

  public setSalesQuantity(salesQuantity: number): void {
    this.salesQuantity = salesQuantity
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + Seller.BENEFITS_VALUE + Seller.SELLING_COMISSION * this.salesQuantity
  }
}
//a) Os mesmos parâmetros da classe pai, Employee
//const newSalesperson = new Seller("1", "artur@email.com", "Artur", "1234", "30/06/2020", 50000)
//b) Não foi possível imprimir senha, pois a classe pai não tem nenhum método que retorne seu valor
// console.log(newSalesperson.getAdmissionDate())
// console.log(newSalesperson.getBaseSalary())
// console.log(newSalesperson.getId())
// console.log(newSalesperson.getName())
// console.log(newSalesperson.getEmail())
// console.log(newSalesperson.calculateTotalSalary())

//Exercício 9
//a) Não, pois a classe não tem um método getter para essa propriedade
//newSalesperson.setSalesQuantity(3)

//Exercício 10

//a) "Chamando o construtor da classe User", "Chamando o construtor da classe Employee" e o valor esperado. Porque ao instanciar a classe Seller chamamos os construtores das classes Employee e User
const newSalesperson = new Seller("1", "artur@email.com", "Artur", "1234", "30/06/2020", 50000)
newSalesperson.setSalesQuantity(2)
console.log(newSalesperson.calculateTotalSalary())

//Exercício 11