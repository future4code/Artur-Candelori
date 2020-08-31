export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: string
    ) {}

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    getRole() {
        return this.role
    }

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setEmail(email: string) {
        this.email = email
    }

    setPassword(password: string) {
        this.password = password
    }

    setRole(role: string) {
        this.role = role
    }

    public static toUserModel(object: any): User {
        return new User(object.id, object.name, object.email, object.password, object.role)
    }
}

export interface UserInputDTO {
    email: string,
    name: string,
    password: string,
    role: string
}

export interface LoginInputDTO {
    email: string,
    password: string
}