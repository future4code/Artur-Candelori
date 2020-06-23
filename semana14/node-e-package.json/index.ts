//Ex 1
//a)
//Através do process.argv
//b)
// const nome: string = process.argv[2]
// const idade: number = Number(process.argv[3])

// console.log("Olá,", nome, "! Você tem ", idade, "anos.")

//Ex 2
const operacao: string = process.argv[2]
const a: number = Number(process.argv[3])
const b: number = Number(process.argv[4])

function doisNumeros(operacao: string, a: number, b: number): any {
    switch(operacao) {
        case 'add':
            return (a + b)
        case 'sub':
            console.log('Resposta: ')
            break
        case 'mult':
            console.log('Resposta: ')
            break
        case 'div':
            return 
        default:
            console.log('Operação inválida')    
    }
}

console.log(doisNumeros(operacao, a, b))