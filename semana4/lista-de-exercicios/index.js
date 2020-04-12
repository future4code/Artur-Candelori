/*
Exercícios de leitura de código

1. 
-A função conversorDeMoeda aceita como argumento valoEmDolar
-No seu corpo cria uma variável cotação, que é inserido pelo usuário e convertido para Number
-A funcão retorna uma string com o valor em dólares usado como argumento vezes o valor da cotação inserido pelo usuário
-A variável meuDinheiro armazena o resultado da função conversorDeMoeda com valorEmDolar = 100
-Se usarmos cotação = 5, teremos meuDinheiro = 500
-Imprime no console o valor de meuDinheiro

2.
-A função investeDinheiro recebe dois argumentos: tipoDeInvestimento e valor
-tipoDeInvestimento é uma string, valor é number
-Declara uma variável sem atribuir valor a ela (undefined)
-Usa o switch para determinar o que fazer com o valor dependendo do tipoDeInvestimento
-O produto do valor e o coeficiente é armazenado em valorAposInvestimento
-Função retorna valorAposInvestimento
-novoMontante = 150 * 1.1 = 165
-segundoMontante recebe um tipoDeInvestimento que não é igual a nenhum case, portanto vai para o default
-Imprime 165
-Mostra o alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"

3.
-Decalara uma array com números (numeros) e duas vazias (array1 e array2)
-Para cada elemento da array numeros, verifica se é par
-Se sim, o valor vai para array1, se não vai para array2
-Usa .length para determinar a quantidade de elementos de numeros e imprime no console
-Mostra o número de elementos pares
-Mostra o número de elementos ímpares

4.
-for pega cada elemento de numeros e faz duas verificações
-Se for menor que numero1, numero1 recebe o valor do elemento
-Se for maior que numero2, numero2 recebe o valor do elemento
- (25 < Infinity) = true, então numero1 = 25
- (25 > 0) = true, então numero2 = 25
-Passando por todos os elementos de numeros, numero1 será o maior valor do array e numero2 o menor
-Imprime 1590
-Imprime -10

Exercícios de lógica de programação

1. (booleano3 = true, booleano4 = false)

a) true && false && true = false
b) false || false = false
c) (false || true) && (false || true) = true && true = true
d) !(false && true) || !(true && true) = !false || !true = true || false = true
e) !true && !true || (!false && true && true) = false || true = true

2.
O código não funciona, apenas imprime 0 indefinidamente.
Primeiramente, para evitar um loop infinito, devemos aumentar o valor de i ao fim de cada iteração.
Ainda assim não temos o resultado desejado.
Se usarmos, por exemplo, i++ e quantidadeDeNumerosPares=3, teremos 0, 2, 4, 6.
O número 6 não devia estar ali.
Para isso, basta mudar o sinal de <= para <.
Agora temos 0,2,4.
Logo podemos reescrever o código assim:
    const quantidadeDeNumerosPares
    let i = 0
    while(i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
    }

3.
function tipoTriangulo (a,b,c) {
    if(a === b && b === c) {
        console.log("Equilátero")
    } else if(a !== b && b !== c) {
        console.log("Escaleno")
    } else {
        console.log("Isóceles")
    }
}

4.
function doisNumeros(a,b) {
    const maior;
    const divisivel1;
    const divisivel2;
    const diferenca;

    if(a > b) {
        maior = a
    } else {
        maior = b
    }

    if(a % b === 0) {
        divisivel1 = " é "
    } else {
        divisivel1 = " não é "
    }

    if(b % a === 0) {
        divisivel2 = " é "
    } else {
        divisivel2 = " não é "
    }

    diferenca = maior - menor

    console.log("O maior é: " + maior)
    console.log(a + divisivel1 + "divisível por " + b)
    console.log(b + divisivel2 + "divisível por " + a)
    console.log("A diferença entre eles é " + diferenca)
}

Exercícios de Funções

1. function segundo(array) {
    let maior = -Infinity
    let menor = Infinity

    for(numero of array) {
        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    }

    array.splice(array.indexOf(maior), 1)
    array.splice(array.indexOf(menor), 1)

    let segundoMaior = -Inifinity
    let segundoMenor = Infinity

    for(numero of array) {
        if (numero > segundoMaior) {
            segundoMaior = numero
        }
        if (numero < segundoMenor) {
            segundoMenor = numero
        }
    }

    console.log(segundoMaior)
    console.log(segundoMenor)
}

2.
const alerta = function(x) {
    alert("Hello " + x)
}

alerta("Future4")

Exercícios de Objetos

1.
Arrays são como variáveis, mas armazenam mais de um valor e de forma ordenada.
Objetos são também como variáveis, mas ao invés de apenas um valor possuem atributos com valores independentes, que armazena de forma não ordenada. 
Os dois podem ser utilizados, por exemplo, na criação de uma mailing list.
Cada usuário pode ser registrado como um objeto com nome e endereço de email, e então colocado em um array com os demais usuários cadastrados.

2.
function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 *lado2
    }
}

3. const filmeFavorito = {
    titulo: "Stallone Cobra",
    ano: "1986",
    diretor: "George P. Cosmatos",
    elenco: ["Sylvester Stallone","Brigitte Nielsen","Reni Santoni"]
}

console.log("Venha assistir ao filme "+filmeFavorito.titulo+" , 
de "+filmeFavorito.ano+", dirigido por "+filmeFavorito.diretor+" 
e estrelado por "+filmeFavorito.elenco)

4.
const pessoa = {
    nome: "",
    idade: "",
    email: "",
    endereco: ""
}

function anonimizarPessoa(pessoa) {
    const anonimo = pessoa
    anonimo.nome = "ANÔNIMO"
}

Exercícios de Funções de array

1.
-for(elemento of array){elemento}
-for(i=0; i < array.length; i++){array[i]}
-i = 0; while(i < array.length){array[i]; i++};

2.
a)
const adultos = array.filter((pessoa, index, array) => {
    return pessoa.idade >= 20
})

b)
const criancas = array.filter((pessoa, index, array) => {
    return pessoa.idade < 20
})

3.
a)
const novoArray = array.map((numero, index, array) => {
    return numero*2
})

b)
const novoArray = array.map((numero, index, array) => {
    return String(numero*3)
})

c)
const novoArray = array.map((numero, index, array) => {
    if(numero % 2 === 0){
        return numero+" é par"
    } else {
        return numero+" é ímpar"
    }
}) 