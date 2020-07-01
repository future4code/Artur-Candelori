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

const newResidence: Place = new Residence(3, "123")
console.log(newResidence.getCep())
const newCommerce = new Commerce(2, "234")
console.log(newCommerce.getCep())
const newIndustry = new Industry(10, "345")
console.log(newIndustry.getCep())