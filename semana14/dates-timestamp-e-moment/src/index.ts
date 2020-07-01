import * as moment from 'moment'

moment.locale("pt-br")

//Ex1
//a)
type evento = {
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment
}
//b)
const agenda: evento[] = [
    {
        nome: "Entrevista",
        descricao: "Entrevista de emprego",
        inicio: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
        fim: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
    },
    {
        nome: "Lavar a roupa",
        descricao: "Auto-explicativo",
        inicio: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        fim: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
    }
]

//Ex2
//a)
// function infoEvento(eventos: evento[]): void {
//     eventos.forEach(evento => {
//         console.log("Nome: ", evento.nome)
//         console.log("Horário de início: ", evento.inicio.format("DD/MM/YYYY [às] HH:mm"))
//         console.log("Horário de fim: ", evento.fim.format("DD/MM/YYYY [às] HH:mm"))
//         console.log("Descrição: ", evento.descricao)
//     })
// }
//b)
//const dataLondres = data.add(3, "hours")

//Ex3
function infoEvento(eventos: evento[]): void {
    eventos.forEach(evento => {
        const duracao = evento.fim.diff(evento.inicio, "minutes")

        const diasAteEvento = evento.inicio.diff(moment(), "days")

        console.log("Nome: ", evento.nome)
        console.log("Horário de início: ", evento.inicio.format("DD/MM/YYYY [às] HH:mm"))
        console.log("Horário de fim: ", evento.fim.format("DD/MM/YYYY [às] HH:mm"))
        console.log("Descrição: ", evento.descricao)
        console.log("Duração: ", duracao)
        console.log("Dias até o evento: ", diasAteEvento)
    })
}

//Ex4
function criarEvento(
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment
): void {
    if (nome === undefined || descricao === undefined || inicio === undefined || fim === undefined) {
        console.log("Dados inválidos")
        return
    }

    const tempoRestanteInicio = inicio.diff(moment(), "seconds")
    const duracao = fim.diff(inicio, "seconds")
    
    if (tempoRestanteInicio < 0 || duracao < 0) {
        console.log("Data inválida")
        return
    }

    agenda.push({nome, descricao, inicio, fim})
}