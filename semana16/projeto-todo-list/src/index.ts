import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/**************************************************************/

//Criando as tabelas:

async function createUserTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE TodoListUser (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
      );
    `)

    console.log("Tabela criada com sucesso")

  } catch (error) {
    console.log(error)
  }
}

//createUserTable()

async function createTodoListTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE TodoListTask (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
      );
    `)

    console.log("Tabela criada com sucesso")

  } catch (error) {
    console.log(error)
  }
}

//createTodoListTable()

async function createRelationTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE TodoListResponsibleUserTaskRelation (
        task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
        FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
      );
    `)
  } catch(error) {
    console.log(error)
  }
}

//createRelationTable()

//Criando usuário:

async function createUser(
  id: number = Date.now(),
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  try {
    await connection.raw(`
      INSERT INTO TodoListUser VALUES (
        ${id},
        "${name}",
        "${nickname}",
        "${email}"
      )
    `)
  } catch(error) {
    console.log(error)
  }
}

app.put("/user", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const name = req.params.name
    const nickname = req.params.nickname
    const email = req.params.email
    const user = await createUser(id, name, nickname, email)

    res.status(200).send(user)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});