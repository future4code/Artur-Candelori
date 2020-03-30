/*
Exercícios de interpretação de código:
1.
>a. false
>b. false
>c. false
>d. false
>e. boolean  

2.
a. Array é uma estrutura de dados em que vários 
valores são atribuídos a uma só letiável.
b. 0
c. Usando a propriedade length, ex: console.log(meuArray.length)
d. 
>I. undefined
>II. null
>III. 11
>IV. 3 e 4
>V. 19 e 9
>VI. 3
>VII. 0
*/

//Exercícios de escrita de código://

//1.//
let celsius;
let farenheit;
let kelvin;
//a.//
farenheit = 77;
kelvin = (farenheit - 32)*5/9 + 273.15;
console.log(kelvin);
//b.//
celsius = 80;
farenheit = celsius*9/5 + 32;
console.log(farenheit);
//c.//
celsius = 30;
farenheit = celsius*9/5 + 32;
console.log(farenheit);
kelvin = (farenheit - 32)*5/9 + 273.15;
console.log(kelvin);
//d.//
celsius = prompt("Insira o número de graus celsius que deseja converter:");
farenheit = celsius*9/5 + 32;
console.log(farenheit);
kelvin = (farenheit - 32)*5/9 + 273.15;
console.log(kelvin);

//2.//
const nome = prompt("Qual é o seu nome?");
console.log("Resposta: "+nome);
const idade = prompt("Quantos anos você tem?")
console.log("Resposta: "+idade);
const aniversario = prompt("Qual é o dia do seu aniversário?");
console.log("Resposta: "+aniversario);
const nomePet = prompt("Qual é o nome do seu animal de estimação?");
console.log("Resposta: "+nomePet);
const cidade = prompt("Em que cidade você nasceu?")
console.log("Resposta: "+cidade);

//3.//
//a.//
let quilowattsHora = 280;
let custo = quilowattsHora*0.05;
console.log("Preço: R$"+custo);
//b.//
let desconto = 15;
custo *= (100 - desconto)/100;
console.log("Preço com "+desconto+"% de desconto: R$"+custo);


//Desafios//
//1.//

lb to kg
oz to kg
mi to m
ft to m
gal to l
xic to l

//a.//
let lb = 20;
let kg = lb/2.205;
console.log("20lb equivalem a "+kg+"kg");
//b.//
let oz = 10.5;
let kg = oz*0.00285;
console.log("10.5oz equivalem a "+kg+"kg");
//c.//
let mi = 100;
let m = mi*1609.344;
console.log("100mi equivalem a "+m+"m");
//d.//
let ft = 50;
let m = ft/3.281;
console.log("50ft equivalem a "+m+"m");
//e.//
let gal = 103.56;
let l = gal*3.785;
console.log("103.56gal equivalem a "+l+"l");
//f.//
let xic = 450;
let l = xic/3.52;
console.log("450 xic equivalem a "+l+"l");
//g.//
let lb = prompt("Insira um valor em libras:");
let kg = lb/2.205;
console.log(lb+"lb equivalem a "+kg+"kg");