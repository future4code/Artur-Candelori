import * as moment from "moment"
import * as fs from "fs"

moment.locale("pt-br")

type transaction = {
    amount: number,
    date: number,
    description: string
}

type account = {
    name: string,
    cpf: number,
    birthDate: moment.Moment,
    balance: number,
    statement: transaction[]
}

function createAccount(name: string, cpf: number, birthDate: moment.Moment): void {

    const diff: number = moment().diff(birthDate, "years")
    
    if (diff > 18) {
//substituir por const accounts = getAllAccounts()
        const fileName: string = 'accounts.json'
        const fileBuffer: Buffer = fs.readFileSync(fileName)
        const fileText: string = fileBuffer.toString()
        const accounts: account[] = JSON.parse(fileText)

        const newAccount: account = {
            name: name,
            cpf: cpf,
            birthDate: birthDate,
            balance: 0,
            statement: []
        }

        accounts.push(newAccount)

        const updatedAccounts: string = JSON.stringify(accounts)

        fs.writeFileSync(fileName, updatedAccounts)

    } else {
        console.log("Data de nascimento inválida")
    }
}

// const name = process.argv[2]
// const cpf = Number(process.argv[3])
// const birthDate = moment(process.argv[4], "DD/MM/YYYY")

// createAccount(name, cpf, birthDate)

function getAllAccounts(): any {
    const fileName: string = 'accounts.json'
    const fileBuffer: Buffer = fs.readFileSync(fileName)
    const fileText: string = fileBuffer.toString()
    const accounts: account[] = JSON.parse(fileText)

    const accountList: any = accounts.map(
        (account: any) => {
            return {
                name: account.name,
                cpf: account.cpf,
                birthDate: account.birthDate,
                balance: account.balance,
                statement: account.statement
            }
        }
    )

    return accountList
}

//console.log(getAllAccounts())

function getAccountBalance(name: string, cpf: number): void {

    const accounts = getAllAccounts()

    accounts.filter((account: any) => {
        if(account.name === name || account.cpf === cpf) {
            console.log(account.balance)
        }
    })
}

// const name = process.argv[2]
// const cpf = Number(process.argv[3])

// console.log(getAccountBalance(name, cpf))

function addToBalance(name: string, cpf: number, amount: number): void {

    const accounts = getAllAccounts()

    for(let account of accounts) {
        if(account.name === name || account.cpf === cpf) {
            account.balance += amount
        }
    }

    const updatedAccounts: string = JSON.stringify(accounts)

    fs.writeFileSync('accounts.json', updatedAccounts)
}

// const name = process.argv[2]
// const cpf = Number(process.argv[3])
// const amount = Number(process.argv[4])

// addToBalance(name, cpf, amount)