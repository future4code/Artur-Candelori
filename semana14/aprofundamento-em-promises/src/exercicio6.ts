//a)
//Faz com que várias Promises aconteçam ao mesmo tempo e espera o resultado de todas
//b)
//A função não precisa esperar enviar uma notificação para então enviar a próxima, o que é mais rápido
//c)
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
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: user.id,
          message: message,
        })
      );
    }
  
    await Promise.all(promiseArray);
};

  

const main = async () => {
    try {
        const users = await axios.get(`${baseUrl}/subscribers/all`)

        await sendNotifications(users.data, "Mensagem teste")
    } catch (err) {
        console.log(err)
    }
}
    
main()