//Ex 1
//a)
//Através do process.argv
//b)
// const nome: string = process.argv[2]
// const idade: number = Number(process.argv[3])
// console.log("Olá,", nome, "! Você tem ", idade, "anos.")
//Ex 2
var operacao = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);
function doisNumeros(operacao, a, b) {
    switch (operacao) {
        case 'add':
            console.log('Resposta: ', a + b);
            break;
        case 'sub':
            console.log('Resposta: ');
            break;
        case 'mult':
            console.log('Resposta: ');
            break;
        case 'div':
            console.log('Resposta: ');
            break;
        default:
            console.log('Operação inválida');
    }
}
