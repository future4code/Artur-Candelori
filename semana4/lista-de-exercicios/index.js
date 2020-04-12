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