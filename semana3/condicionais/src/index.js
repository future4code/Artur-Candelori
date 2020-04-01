/*
Exercício 1

O código recebe um valor e o transforma em number. 
Em seguida, testa se o número é divisível por dois ou não (par ou ímpar).
Caso seja par, imprime "Passou no teste.", caso contrário imprime "Não passou no teste."

Exercício 2

a. Para determinar o preço de uma fruta escolhida pelo usuário.
b. "O preço da fruta Maçã é R$2.25"
c. (usando pêra no lugar de banana)
   2*3.5 + 1*2.25 + 3*5.5 + 1*0.30 = 26.05 reais
d. O computador continuaria para o default e o preço mostrado seria 5 reais.

Exercício 3

Uma mensagem de erro dizendo que a variável mensagem não foi definida.
Isso acontece porque o comando console.log(mensagem) está fora do bloco 
onde essa variável foi declarada, ou seja, fora do escopo dela.
*/
//Exercício 4//
//a.//
/*
const num1a = Number(prompt("Insira um número"));
const num2a = Number(prompt("Insira outro número"));

if(num1a > num2a) {
    console.log(num1a, num2a);
}   else {
        console.log(num2a, num1a);   
}*/
//Se os dois números forem iguais a saída é num2a, num1a//
//b.//
/*
const num1b = Number(prompt("Primeiro número:"));
const num2b = Number(prompt("Segundo número"));
const num3b = Number(prompt("Terceiro número:"));
*/
/*
if (num1b > num2b && num1b > num3b) {
    if (num2b > num3b) { 
        console.log(num1b, num2b, num3b);
    }   else {
            console.log(num1b, num3b, num2b);
    }
}
else if (num2b > num1b && num2b > num3b) {
    if (num1b > num3b) {
        console.log(num2b, num1b, num3b);
    }   else {
            console.log(num2b, num3b, num1b);
    }
}
else {
    if (num1b > num2b) {
        console.log(num3b, num1b, num2b);
    }   else {
            console.log(num3b, num2b, num1b);
    }
}
*/
/*
//c.//
if (num1b > num2b && num1b > num3b) {
    if (num2b > num3b) { 
        console.log(num1b, num2b, num3b);
    }   else {
            console.log(num1b, num3b, num2b);
    }
}
else if (num2b > num1b && num2b > num3b) {
    if (num1b > num3b) {
        console.log(num2b, num1b, num3b);
    }   else {
            console.log(num2b, num3b, num1b);
    }
}
else if (num1b===num2b&&num2b===num3b) {                //<---resposta//  
    console.log("Insira ao menos um número diferente"); 
}
else {
    if (num1b > num2b) {
        console.log(num3b, num1b, num2b);
    }   else {
            console.log(num3b, num2b, num1b);
    }
}
*/
//Exercício 5//

//a. https://drive.google.com/file/d/10JDONY4ZlL5p520hcFigP8-CUHbD-kpc/view?usp=sharing //

//b.//
/*
let resposta = prompt("Tem ossos?(s/n)");
if (resposta === "n") {
    console.log("Invertebrado");
}
else {
    resposta = prompt("Tem pêlos?(s/n)");
    if (resposta === "s") {
        resposta = prompt("É racional?(s/n)");
        if (resposta === "s") {
            console.log("Humano");
        }   
        else {
            console.log("Mamífero não-humano");
        }
    }
    else {
        resposta = prompt("Tem penas?(s/n)");
        if (resposta === "s") {
            console.log("Ave");
        }
        else {
            resposta = prompt("É terrestre?(s/n)");
            if (resposta === "n") {
                console.log("Peixe");
            }
            else {
                resposta = prompt("Passa parte da vida em ambiente aquático?");
                if (resposta === "s") {
                    console.log("Anfíbio");
                }
                else {
                    console.log("Réptil");
                }
            }
        }   
    }
}
*/
//Deasfio//
//Coleta os dados do usuário//
let nome = prompt("Nome completo:");
let tipo = prompt("Jogo doméstico ou internacional?(DO/IN)");
let etapa = prompt("Semi-final, decisão de terceiro lugar ou final? (SF/DT/FI)");
let categoria = prompt("Qual categoria?(1/2/3/4)");
let quantidade = Number(prompt("Quantos ingressos?"));
let preco;

//Determina o preço de um ingresso em reais//
if (etapa === "SF"){
    switch (categoria){
        case("1"):
            preco = 1320;
            break;
        case("2"):
            preco = 880;
            break;
        case("3"):
            preco = 550;
            break;
        case("4"):
            preco = 220;
            break;
        default:
            console.log("Valor inválido");
            break;    
    }
    etapa = "Semi-final"; 
    //Troca a sigla da etapa pelo nome inteiro para depois aparecer na saída//
}
if (etapa === "DT"){
    switch (categoria){
        case("1"):
            preco = 660;
            break;
        case("2"):
            preco = 440;
            break;
        case("3"):
            preco = 330;
            break;
        case("4"):
            preco = 170;
            break;
        default:
            console.log("Valor inválido");
            break;    
    }
    etapa = "Decisão do 3º lugar";
}
if (etapa === "FI"){
    switch (categoria){
        case("1"):
            preco = 1980;
            break;
        case("2"):
            preco = 1320;
            break;
        case("3"):
            preco = 880;
            break;
        case("4"):
            preco = 330;
            break;
        default:
            console.log("Valor inválido");
            break;    
    }
    etapa = "Final";
}

//Saída//
console.log("---Dados da compra---");
console.log("Nome do cliente: "+nome);
if (tipo === "IN") {
    console.log("Tipo do jogo: Internacional");
} else {
    console.log("Tipo do jogo: Doméstico");
}
console.log("Etapa do jogo: "+etapa);
console.log("Categoria: "+categoria);
if (quantidade > 1) { //Determina se ingresso está no plural ou singular//
    console.log("Quantidade de Ingressos: ",quantidade," ingressos");
} else {
    console.log("Quantidade de Ingressos: 1 ingresso");
}
console.log("---Valores---");
if (tipo === "IN") { //Determina se preço está em dólares ou reais//
    preco /= 4.10;
    console.log("Valor do ingresso: U$",preco);
    preco *= quantidade; //Multiplica o preço de um ingresso pela quantidade//
    console.log("Valor total: U$",preco);
} else {
    console.log("Valor do ingresso: R$",preco);
    preco *= quantidade;
    console.log("Valor total: R$",preco);
}
