import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./IdGenerator";
import { UserDatabase } from "./UserDatabase";
import { Authenticator } from "./Authenticator";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido")
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha inválida")
    }

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
    res.status(400).send({error: err.message})
  }
})

app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido")
    }

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
    res.status(400).send({error: err.message})
  }
})

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

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
