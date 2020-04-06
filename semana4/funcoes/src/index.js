/*
Exercício 1
a. array = []
b. array = [0,1,0,1,2,3]
c. array = [0,1,0,1,2,3,0,1,2,3,4,5]

Exercício 2
a. Imprime as posições dos valores dentro do array: 0; 2; undefined
b. Sim, pois os valores do array e da variável são do mesmo tipo

Exercício 3
A função devolve um array com a soma dos elementos em uma 
posição e o produto dos elementos em outra.
somaEproduto
*/
//Exercício 4//
//a.//
/*
let idadeCanina = (idadeHumana) => {
    return idadeHumana*7;
}
*/
//b.// 
/*
let informacoes = (nome,idade,endereco,estudante) => {
    const nome = prompt("Qual é o seu nome?");
    let idade = Number(prompt("Quantos anos você tem?"));
    let endereco = prompt("Qual é o seu endereço?");
    let estudante = Boolean(prompt("Você é estudante?"));
    if (estudante === true) {
        estudante = String("sou");
    } else {
        estudante = String("não sou");
    }

    return ("Eu sou "+nome+", tenho "+idade+" anos, moro em "+endereco+" e "+estudante+" estudante.");
}*/
//Exercício 5//
/*
let seculo = (ano) => {
    const ano = Number(prompt("Insira o ano:"));
    const romanos = [""]   
    
    
}

console.log("O ano "+ano+" pertence ao século "+seculo);
*/

let ano = Number(prompt("Insira o ano:"));

let qualSeculo = (ano) => {

    let seculo;
    
    const anos = [1000];
    for (i=1001; i <= 2020; i += 100) {
        anos.push(i);
    }
    
    const seculos = ["IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","IXX","XX","XXI"];
    
    if (ano >= anos[anos.length - 1]) {
        
        seculo = seculos[anos.length - 1];
    
    } else {
        
        for (i=0; i < anos.length; i++) {
        
            if (ano >= anos[i] && ano < anos[i+1]) {
                seculo = seculos[i+1];
            } 
        }
    }
    
    return ("O ano "+String(ano)+" pertence ao século "+seculo);

}

console.log(qualSeculo(ano));