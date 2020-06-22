//a)
const minhaString: string = 10
// Ao dar tsc aparece um erro: error TS2322: Type '10' is not assignable to type 'string'.

//b)
const meuNumero: number = 10
// Usando o union type number | string:
const myNumber: number | string = "number"

//c)
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "John Doe",
    idade: 25,
    corFavorita: "vermelho"
}

//d)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const artur: Pessoa = {
    nome: "Artur",
    idade: 29,
    corFavorita: "azul"
}

const zenildo: Pessoa = {
    nome: "Zenildo",
    idade: 35,
    corFavorita: "laranja"
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 20,
    corFavorita: "verde"
}

//e)
enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type PessoaDoisPontoZero = {
    corPreferida: Cores,
    nome: string,
    idade: number
}