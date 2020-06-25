//a)
//Não, pois a função get do axios sempre devolve uma Promise<any>
//b)
//Para garantir que os dados retornados são do mesmo tipo que foi indicado na função
//c)
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`)

    return users.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}