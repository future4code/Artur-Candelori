import axios from 'axios'

//a)
//Uma arrow function não precisa ser nomeada, e quando
//retorna apenas um valor pode ser escrita de maneira reduzida
//b)
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

const getSubscribers = async (): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`)

    console.log(users.data)
    return users.data
}

getSubscribers()