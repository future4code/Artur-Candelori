const despesas = [
    {valor: 10, tipo: "alimentacao", descricao: ""},
    {valor: 15, tipo: "transporte", descricao: ""},
    {valor: 20, tipo: "lazer", descricao: ""},
    {valor: 25, tipo: "alimentacao", descricao: ""},
];

const despesasDetalhadas = despesas.filter( numero => {
    return numero.valor > 13 && numero.valor < 30 && numero.tipo === "alimentacao"
});
            
const valores = despesas.map((despesa, index, array) => {
    return despesa.valor
});

function soma() {
    let total = 0;
    for (valor of valores) {
        total += valor;
    }
    return total;
}