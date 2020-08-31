import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "Lama_Users"
    
    public async signup(id: string, name: string, email: string, password: string, role: string) {

        try {
            await super.getConnection()
            .insert({
                id,
                name,
                email,
                password,
                role
            })
            .into(UserDatabase.TABLE_NAME)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getUserByEmail(email: string): Promise<User> {

        try {
            
            const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email})

            return User.toUserModel(result[0])

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}