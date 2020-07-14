### Exercício 1
a) Sim, pois com strings a quantidade de caracteres disponíveis é maior, logo há mais combinações.
b) 
```
import {v4} from "uuid"

export class IdGenerator {
    public generate(): string {
        return v4();
    }
}
```
### Exercício 2
a) Primeiro, userTableName recebe o nome da tabela que ira guardar os usuários. Em seguida, connection estabelece a conexão com o banco de dados. Por último, create user é a função que adiciona um novo usuário a tabela.
b)
```
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
c)
```
import knex from "knex"

export class UserDatabase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        }
    })
    private static TABLE_NAME = "User"

    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.connection
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
    }
}
```
d)
```
const userDatabase = new UserDatabase()

const newUser = userDatabase.createUser("01", "a@a.com", "1234")
```
### Exercício 3
a) Diz que o valor de process.env.JWT_KEY será uma string. Porque é necessário que esse argumento seja uma string, mas o programa não sabe qual é o tipo da variável process.env.JWT. Dessa forma o typescript não dá erro.
b)
```
interface AuthenticationData {
    id: string
}

export class Authenticator {
    private static EXPIRES_IN = "1min"

    generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {id: input.id},
            process.env.JWT_KEY as string,
            {expiresIn: Authenticator.EXPIRES_IN}
        )
        return token
    }
}
```
### Exercício 4
a)
```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const userDatabase = new UserDatabase()
    await userDatabase.createUser(id, userData.name, userData.email, userData.password)

    const authenticator = new Authenticator()
    const token = authenticator.generateToken({id})

    res.status(200).send({token})

  } catch(err) {
    res.status(400).send({err})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
```
b)
```
if (!req.body.email || req.body.email.indexOf("@") === -1) {
    throw new Error("Email inválido")
}
```
c)
```
if (!req.body.password || req.body.password.length < 6) {
    throw new Error("Senha inválida")
}
```
### Exercício 5
a)
```
export class UserDatabase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        }
    })
    private static TABLE_NAME = "User"

    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string
    ): Promise<void> {
        try {
            await this.connection
            .insert({
                id,
                name,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    }

    async getUserByEmail(email: string): Promise<any> {
        try {
            const result = 
            await this.connection
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email})

            return result[0]
        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    }
}
```
b)
```
const userDatabase = new UserDatabase()
const userByEmail = userDatabase.getUserByEmail("a@a.com")
```
### Exercício 6
a)
```
app.post("/login", async (req: Request, res: Response) => {
  try {

    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserByEmail(userData.email)

    if(user.id !== userData.password) {
      throw new Error("Senha inválida")
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken({id: user.id})

    res.status(200).send({token})

  } catch(err) {
    res.status(400).send({err})
  }
})
```
b)
```
if (!req.body.email || req.body.email.indexOf("@") === -1) {
    throw new Error("Email inválido")
}
```
### Exercício 7
a) Diz que o valor de payload pode ser de qualquer tipo. Porque não sabemos qual será o tipo desse valor.
b)
```
export class Authenticator {
    private static EXPIRES_IN = "1min"

    generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {id: input.id},
            process.env.JWT_KEY as string,
            {expiresIn: Authenticator.EXPIRES_IN}
        )
        return token
    }

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        const result = {
            id: payload.id
        }
        return result
    }
}
``` 
### Exercício 8
a) Dentro da classe UserDatabase:
```
async getUserById(id: string): Promise<any> {
    try {
        const result = 
        await this.connection
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({id})

        return result[0]
    } catch (err) {
        throw new Error(err.sqlMessage || err.message)
    }
}
```
b)
```
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticator = new Authenticator()
    const authenticationData = authenticator.getData(token)

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserById(authenticationData.id)

    res.status(200).send({user})

  } catch(err) {
    res.status(400).send({error: err.message})
  }
})
```