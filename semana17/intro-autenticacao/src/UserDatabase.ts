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
}

const userDatabase = new UserDatabase()

const newUser = userDatabase.createUser("01", "User", "a@a.com", "1234")

const userByEmail = userDatabase.getUserByEmail("a@a.com")