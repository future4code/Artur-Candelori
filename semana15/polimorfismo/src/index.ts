//Exercício 1
export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Artur",
  registrationNumber: 1,
  consumedEnergy: 0,

  calculateBill: () => {
    return 2;
  }
}
//a) Todas. Porque em uma interface todas as propriedades são públicas.
// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

//Exercício 2
export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}
//a) error TS2511: Cannot create an instance of an abstract class.
//new Place("123")
//b) Precisaríamos criar uma classe filha e então instanciá-la.

//Exercício 3
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
	) {
	  super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}

// const newResidence: Place = new Residence(3, "123")
// console.log(newResidence.getCep())
// const newCommerce = new Commerce(2, "234")
// console.log(newCommerce.getCep())
// const newIndustry = new Industry(10, "345")
// console.log(newIndustry.getCep())

//Exercício 4
class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string,
  ) {
    super(residentsQuantity, cep)
  }

  public getCpf(): string {
    return this.cpf
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
//a) getCpf, calculateBill, getResidentsQuantity e getCep. 
//Porque a classe herda os métodos de Residence, Place e Client.

//Exercício 5
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  public getCnpj(): string {
    return this.cnpj
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}

//a) Ambas são herdeiras da classe Place e implementam Client.
//b) CommercialClient é filha da classe Commerce e ResidentialClient é filha da classe Residence.

//Exercício 6
class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegister: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep)
  }

  public getIndustrialRegister(): string {
    return this.industrialRegister
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
  }
}

//a) Industry. Porque queremos que ela tenha as propriedades e métodos da classe Industry.
//b) Client. Mesmo motivo.
//c) Porque não queremos mudar os valores de suas propriedades.

//Exercícios 7 e 8
class ClientManager {
  private clients: Client[] = []

  public registerClient(client: Client): void {
    this.clients.push(client)
  }

  public getClientsQuantity(): number {
    return this.clients.length
  }

  public calculateBillofClient(registrationNumber: number): number {
    const foundClient = this.clients.find(client => {
      return client.registrationNumber === registrationNumber
    })

    if(foundClient) {
      return foundClient.calculateBill()
    }

    return 0
  }

  public calculateTotalIncome(): number {
    let total: number = 0
    this.clients.forEach(client => {
      total += client.calculateBill()
    })
    return total
  }

  public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1)
    }
  }
}