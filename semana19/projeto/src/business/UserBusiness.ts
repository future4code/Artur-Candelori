import { IdGenerator } from "../services/IdGenerator"
import { UserDatabase } from "../data/UserDatabase"
import { LoginInputDTO, User } from "../model/User"
import { HashManager } from "../services/HashManager"

export class UserBusiness {
    public async signup(email: string, name: string, password: string, role: string): Promise<string> {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const userDatabase = new UserDatabase()

        await userDatabase.signup(id, name, email, password, role)

        return id
    }

    public async getUserByEmail(input: LoginInputDTO) {

        const userDatabase = new UserDatabase()
        const user: User = await userDatabase.getUserByEmail(input.email)

        const hashManager = new HashManager()
        const hashCompare = await hashManager.compare(input.password, user.getPassword())

        if(!hashCompare) {
            throw new Error("Invalid password")
        }

        return user
    }
}