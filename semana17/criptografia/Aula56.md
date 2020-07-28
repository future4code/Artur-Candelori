### Exercício 1
a) Round, também chamado de cost, é um valor relacionado ao tempo de execução do algoritmo. Salt é uma string aleatória que o algoritmo acrescenta à senha antes de criar o hash. 12, pois é o padrão na maioria das libs.
b)
```
import * as bcrypt from 'bcryptjs'

export default class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = 12
        const salt = await bcrypt.genSalt(rounds)
        const cipherText = await bcrypt.hash(text, salt)
        
        return cipherText
    }
}
```
c) Na classe HashManager:
```
public async compare(
        text: string, 
        cipherText: string
    ): Promise<boolean> {
        const result = await bcrypt.compare(text, cipherText)

        return result
    } 
```
### Exercício 2 
a) O cadastro, pois sem ele não temos nenhuma senha criptografada no nosso banco de dados.
b)
```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };
    //modificação
    const hashManager = new HashManager()
    const cipherText = await hashManager.hash(userData.password)

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();          //modificação
    await userDb.createUser(id, userData.email, cipherText);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
c)
```
app.post("/login", async (req: Request, res: Response) => {
  try {
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);
    //modificação
    const hashManager = new HashManager()
    const passwordIsCorrect = await hashManager.compare(userData.password, user.password)
    //modificação
    if (!passwordIsCorrect) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
d) Não, pois esse endpoint usa apenas o token.
### Exercício 3
a)
```
ALTER TABLE User 
ADD COLUMN role ENUM ("NORMAL","ADMIN") DEFAULT "NORMAL";
```
b)
```
import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }
}

interface AuthenticationData {
  id: string
  role: USER_ROLES
}

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}
```
c)
```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    const hashManager = new HashManager()
    const cipherText = await hashManager.hash(userData.password)

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cipherText, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id, 
      role: userData.role
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
d)
```
app.post("/login", async (req: Request, res: Response) => {
  try {
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager()
    const passwordIsCorrect = await hashManager.compare(userData.password, user.password)

    if (!passwordIsCorrect) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: userData.role
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
### Exercício 4
a)
```
if (authenticationData.role !== USER_ROLES.NORMAL) {
    throw new Error("Only a normal user can access this funcionality");
}
```
### Exercício 5
```
app.delete("/user/:id", async function(req: Request, res: Response) {
  try {
    const authenticator = new Authenticator()
    const tokenData = authenticator.getData(req.headers.authorization as string)

    if(tokenData.role !== "ADMIN") {
      throw new Error("Only admin can access this funcionality")
    }

    const userDB = new UserDatabase()
    await userDB.deleteUser(req.params.id)

    res.status(200).send({
      message: "Usuário deletado"
    })

  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
})
```
### Exercício 6
```
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```
### Exercício 7
a, b)
```
import knex from "knex"
import Knex from "knex"

export class BaseDatabase {
    private static connection: Knex | null = null

    protected getConnection(): Knex {
        if(!BaseDatabase.connection) {
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            })
        }

        return BaseDatabase.connection
    }

    public static async destroyConnection(): Promise<void> {
        if (BaseDatabase.connection) {
            await BaseDatabase.connection.destroy()
            BaseDatabase.connection = null
        }
    }
}

import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);

      BaseDatabase.destroyConnection()
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    BaseDatabase.destroyConnection()

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    BaseDatabase.destroyConnection()

    return result[0];
  }
}
```