//a)
//Poderiamos encontrar erros. 
//Não, pois forEach não foi feito para ser usado em funções assíncronas
//b)
import axios from 'axios'

type User = {
	id: string;
	name: string;
	email: string;
}

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

const sendNotifications = async (
    users: User[],
    message: string
): Promise<void> => {
    const promiseArray: Promise<any>[] = []
    for (const user of users) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: message,
        })
    }

    console.log("All notifications sent")
}

const main = async () => {
    try {
        const users = await axios.get(`${baseUrl}/subscribers/all`)

        await sendNotifications(users.data, "Mensagem teste")
    } catch (err) {
        console.log(err)
    }
}

main()