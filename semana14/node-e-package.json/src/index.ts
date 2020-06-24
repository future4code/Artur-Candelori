//Ex 1
//a)Usando o process.argv
//b)
const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])

const frase: string = `Olá, ${nome}! Você tem ${idade} anos.`

console.log(frase)
//c)
const frase2: string = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`

console.log(frase2)

//Ex 2
// const operacao: string = process.argv[2]
// const num1: number = Number(process.argv[3])
// const num2: number = Number(process.argv[4])

// let conta: number = 0

// switch(operacao) {
//     case 'add':
//         conta = num1 + num2
//         break
//     case 'sub':
//         conta = num1 - num2
//         break
//     case 'mult':
//         conta = num1 * num2
//         break
//     case 'div':
//         conta = num1 / num2
//         break
//     default:
//         console.log("Operação inválida")                
// }

// console.log(`A resposta é: ${conta}`)

//Ex 3
// import * as fs from 'fs'

// const arquivo: string = process.argv[2]
// const tarefa: string = process.argv[3]

// fs.appendFileSync(arquivo, tarefa)