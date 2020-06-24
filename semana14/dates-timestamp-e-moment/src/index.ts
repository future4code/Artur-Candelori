import * as moment from 'moment'

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
function infoEvento(eventos: evento[]): void {
    eventos.forEach(function(entry) {
        console.log("Nome: ", entry.nome)
        console.log("Horário de início: ", entry.inicio)
        console.log("Horário de fim: ", entry.fim)
        console.log("Descrição: ", entry.descricao)
    })
}

console.log(infoEvento(agenda))