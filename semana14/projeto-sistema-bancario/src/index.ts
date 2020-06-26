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
    birthDate: number,
    balance: number,
    statement: transaction[]
}
                                                
// function createAccount(
//     name: string, 
//     cpf: number, 
//     birthDate: string
// ) : void {

//     const date: moment.Moment = moment(birthDate, "DD/MM/YYYY")
//     const diff: number = moment().diff(date, "years")

//     if (diff > 18) {
        
//         fs.writeFileSync('tarefas.json',)

//         allAccounts.push({
//         name: name,
//         cpf: Number(cpf),
//         birthDate: date.unix(),
//         balance: 0,
//         statement: []
//         })

//     } else {
//         console.log("Necessário ter ao menos 18 para criar uma conta")
//     }
// }

// function getAllAcounts() : account[] {

// }
//fs.writeFileSync('accounts.json', "Teste")

function createAccount(account: account): void{

    // const filePath: string = 'tarefas.json'
    // const fileBuffer: Buffer = fs.readFileSync(filePath) || []
    // const fileText: string = fileBuffer.toString()
    // const accounts: string[] = JSON.parse(fileText)    

    // tarefas.push(tarefa)

    // const tarefasAtualizadas: string = JSON.stringify(tarefas)

    // fs.writeFileSync(caminhoDoArquivo, tarefasAtualizadas)

    // console.log("Sucesso!")
    console.log(account)
}

const account: string = process.argv[2]

createAccount(account)

const data: any = fs.readFileSync('accounts.json')
const fileText: string = data.toString()
const accounts: any = JSON.parse(fileText)

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

console.log(fileText)
