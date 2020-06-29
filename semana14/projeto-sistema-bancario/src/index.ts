import * as moment from "moment"
import * as fs from "fs"

moment.locale("pt-br")

type transaction = {
    amount: number,
    date: moment.Moment,
    description: string
}

type account = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    statement: transaction[]
}

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

function createAccount(name: string, cpf: number, birthDate: string): void {

    const birthDay = moment(birthDate, "DD/MM/YYYY")
    const diff: number = moment().diff(birthDay, "years")
    
    if (diff > 18) {

        const accounts: account[] = getAllAccounts()

        const newAccount: account = {
            name: name,
            cpf: cpf,
            birthDate: birthDate,
            balance: 0,
            statement: []
        }

        accounts.push(newAccount)

        const updatedAccounts: string = JSON.stringify(accounts)

        fs.writeFileSync('accounts.json', updatedAccounts)

    } else {
        console.log("Data de nascimento inválida")
    }
}

function getAccountBalance(name: string, cpf: number): void {

    const accounts = getAllAccounts()

    accounts.filter((account: any) => {
        if(account.name === name || account.cpf === cpf) {
            console.log(account.balance)
        }
    })
}

function addToBalance(name: string, cpf: number, amount: number): void {

    const accounts = getAllAccounts()

    for(let account of accounts) {
        if(account.name === name || account.cpf === cpf) {
            account.balance += amount
            account.statement.push({
                amount: amount,
                date: moment().format("DD/MM/YYYY"),
                description: "Depósito"
            })
        }
    }

    const updatedAccounts: string = JSON.stringify(accounts)

    fs.writeFileSync('accounts.json', updatedAccounts)
}

function payBill(name:string, cpf: number, amount: number, description: string, date: string = moment().format("DD/MM/YYYY")): void {

    const paymentDate = moment(date, "DD/MM/YYYY")
    const currentDate = moment().format("DD/MM/YYYY")
    
    if(paymentDate.diff(currentDate, "days") < 0) {
        console.log("Data inválida")
        return
    }

    const accounts = getAllAccounts()

    for(let account of accounts) {
        if(account.name === name || account.cpf === cpf) {

            if(amount > account.balance) {
                console.log("Saldo insuficiente")
                return
            }

            account.balance -= amount
            account.statement.push({
                amount: -amount,
                date: date,
                description: description
            })
        }
    }

    const updatedAccounts: string = JSON.stringify(accounts)

    fs.writeFileSync('accounts.json', updatedAccounts)
}

function transfer(name: string, cpf: number, recipientName: string, recipientCpf: number, amount: number) {

    const accounts = getAllAccounts()

    for(let account of accounts) {
        if(account.name === name || account.cpf === cpf) {

            if(amount > account.balance) {
                console.log("Saldo insuficiente")
                return
            }

            account.balance -= amount
            account.statement.push({
                amount: -amount,
                date: moment().format("DD/MM/YYYY"),
                description: "Transferência"
            })
        }
    }
    
    for(let account of accounts) {
        if(account.name === recipientName || account.cpf === recipientCpf) {

            account.balance += amount
            account.statement.push({
                amount: amount,
                date: moment().format("DD/MM/YYYY"),
                description: "Transferência"
            })
        }
    }

    const updatedAccounts: string = JSON.stringify(accounts)

    fs.writeFileSync('accounts.json', updatedAccounts)
}