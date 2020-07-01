//a)
//Promise<void>, porque ela apenas cria a notícia e não retorna nada
//b)
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

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

const main = async () => {
    try {
        await createNews(
            "Novidade a caminho",
            "Labenu: uma nova escola de programação",
            1590522289000
        )
    } catch (err) {
        console.log("err: ", err.message)
    }
}

main()