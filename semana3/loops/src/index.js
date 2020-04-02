/*
Loops

Exercício 1:
Faz a soma dos números de 0 a 14. 105.

Exercícios 2:
a. Acrescenta o valor de item ao final de novaLista. Nesse caso, apenas os valores divisíveis por 5.
b. 10,15,25,30
c. Os valores divisiveis por 3: 12,15,18,21,27,30
   Os valores divisiveis por 4: 12
*/
//Exercício 3://

const arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55];

//a.//
let maior = arrayOriginal[0];
let menor = arrayOriginal[0];

for (const item of arrayOriginal) {
    if (item > maior) {
        maior = item;
    } else if (item < menor) {
        menor = item;
    }
}

console.log("O maior número é ",maior," e o menor é ",menor);

//b.//
let novoArray = [];
for (const item of arrayOriginal) {
    novoArray.push(item/10);
}

console.log(novoArray);

//c.//
let arrayPares = [];
for (const item of arrayOriginal) {
    if (item%2 === 0){
        arrayPares.push(item);
    }
}

console.log(arrayPares);

//d.//
arrayStrings = [];
for (let i = 0; i < arrayOriginal.length; i++) {
    arrayStrings.push("O elemento do índex ",i," é ",arrayOriginal[i]);
}
console.log(arrayStrings);

/*
Deasfio 1:

0
00
000
0000

Exemplo de como funciona o código passo-a-passo:

quantidadeTotal = 4  //valores iniciais//
quantidadeAtual = 0  
0 < 4 true           //while 1//
linha = ""
asteriscos = 0       //for 1 do while 1//
0 < 1 true
linha = "0"
asteriscos = 1
1 < 1 false         //for 2 do while 1//
0       //primeiro valor na tela//
quantidadeAtual = 1
1 < 4 true   //while 2//
linha = ""
asteriscos = 0   //for 1 do while 2//
0 < 2 true
linha = "0"
asteriscos = 1   //for 2 do while 2//
1 < 2 true
linha = "00"
asteriscos = 2   //for 3 do while 2//
2 < 2 false
00    //segundo valor na tela//
quantidadeAtual = 2
2 < 4 true    //while 3//
linha = ""
asterisco = 0  //for 1 do while 3//

Etc...
Ou seja, a cada linha o número de 0 é incrementado uma vez
*/
//Desafio 2://

const resposta = Number(prompt("Vamos jogar!"));
let chute = Number(prompt("Chute um número:"));
let tentativas = 1;

while (chute !== resposta) {

    console.log("O número chutado foi: ",chute);
    if(resposta > chute) {
        console.log("Errou, é maior!");
        tentativas++;

    } else {
        console.log("Errou, é menor!");
        tentativas++;
    }

    chute = Number(prompt("Chute um número:"));
}

console.log("O número chutado foi: ",chute);
console.log("Acertou!");
console.log("Número de tentativas: ",tentativas);

//Desafio 3://

console.log("Vamos jogar!");
const resposta = Math.floor((Math.random() * 100) + 1);
let chute = Number(prompt("Chute um número:"));
let tentativas = 1;

while (chute !== resposta) {

    console.log("O número chutado foi: ",chute);
    if(resposta > chute) {
        console.log("Errou, é maior!");
        tentativas++;

    } else {
        console.log("Errou, é menor!");
        tentativas++;
    }

    chute = Number(prompt("Chute um número:"));
}

console.log("O número chutado foi: ",chute);
console.log("Acertou!");
console.log("Número de tentativas: ",tentativas);

/*Ao ler o enunciado imaginei que provavelmente teria que mudar 
apenas a declaração da variável resposta, então restava saber 
como determina-lá aleatoriamente. Felizmente logo no primeiro 
link os exemplos mostravam como fazer isto, então consegui 
fazer a alteração rapidamente.*/