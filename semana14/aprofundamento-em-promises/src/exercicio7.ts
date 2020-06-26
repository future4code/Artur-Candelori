import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
	id: string;
	name: string;
	email: string;
}

const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
      name,
      email
    });
};

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title: title,
        content: content,
        date: date
    })
}

const getSubscribers = async (): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data
}

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

const createAndSendNotifications = async () => {
    try {
      await createNews(
        "Novidade a caminho",
        "Labenu: uma nova escola de programação",
        1590522289000
      );
  
      const users = await getSubscribers();
  
      await sendNotifications(users, "Testando mensagens");
    } catch (err) {
      console.log("err: ", err.message);
    }
};

const getAllNotifications = async (): Promise<any> => {
    const users = await getSubscribers();
  
    const notificationPromises = [];
    for (const user of users) {
      notificationPromises.push(
        axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
      );
    }
  
    const result = await Promise.all(notificationPromises);
  
    const dataFromResult = result.map((res) => res.data);
  
    return dataFromResult;
};

const main = async () => {
    await createAndSendNotifications()

    await getAllNotifications()
}

main()