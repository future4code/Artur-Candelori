import axios from 'axios'

//a)
//GET /subscribers/all
//b)
//Promise<any[]>
//c)
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    
    console.log(users.data)
    return users.data;
};

getSubscribers()