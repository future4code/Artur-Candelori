"use strict";
const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let conta = 0;
switch (operacao) {
    case 'add':
        conta = num1 + num2;
        break;
    case 'sub':
        conta = num1 - num2;
        break;
    case 'mult':
        conta = num1 * num2;
        break;
    case 'div':
        conta = num1 / num2;
        break;
    default:
        console.log("Operação inválida");
}
console.log(`A resposta é: ${conta}`);
//# sourceMappingURL=index.js.map