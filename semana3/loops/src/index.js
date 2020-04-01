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