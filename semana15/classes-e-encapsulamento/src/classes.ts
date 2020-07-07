class Transaction {
    date: string
    value: number
    description: string

    constructor (
        date: string,
        value: number,
        description: string
    ) {
        this.date = date
        this.value = value
        this.description = description
    }
}

class UserAccount {
    name: string
    age: number
    cpf: string
    balance: number = 0
    transactions: Transaction[] = []

    constructor (
        name: string,
        age: number,
        cpf: string
    ) {
        this.name = name
        this.age = age
        this.cpf = cpf
    }
} 
