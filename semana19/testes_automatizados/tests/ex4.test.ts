import {verifyAge, User, NACIONALITY, LOCATION, Casino} from "../src/ex3"

describe("Testando verifyAge", () => {

    test("Nome deve aparecer em brazilians.allowed", () => {
        const user: User = {
            name: "Teste",
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const users: User[] = [user]

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.allowed).toContainEqual("Teste")
    })

    test("Nome deve aparecer em americans.allowed", () => {
        const user: User = {
            name: "Teste",
            age: 30,
            nacionality: NACIONALITY.AMERICAN
        }

        const users: User[] = [user]

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.americans.allowed).toContainEqual("Teste")
    })

    test("Users 1 e 2 devem aparecer em brazilians.unallowed, Users 3 e 4 em americans.unallowed", () => {
        const users: User[] = [
            {name: "User 1", age: 19, nacionality: NACIONALITY.BRAZILIAN},
            {name: "User 2", age: 19, nacionality: NACIONALITY.BRAZILIAN},
            {name: "User 3", age: 19, nacionality: NACIONALITY.AMERICAN},
            {name: "User 4", age: 19, nacionality: NACIONALITY.AMERICAN},
        ]

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toContain("User 1")
        expect(result.brazilians.unallowed).toContain("User 2")
        expect(result.americans.unallowed).toContain("User 3")
        expect(result.americans.unallowed).toContain("User 4")
    })
    
    test("Users 1 e 2 devem aparecer em brazilians.unallowed, Users 3 e 4 em americans.allowed", () => {
        const users: User[] = [
            {name: "User 1", age: 19, nacionality: NACIONALITY.BRAZILIAN},
            {name: "User 2", age: 19, nacionality: NACIONALITY.BRAZILIAN},
            {name: "User 3", age: 21, nacionality: NACIONALITY.AMERICAN},
            {name: "User 4", age: 21, nacionality: NACIONALITY.AMERICAN},
        ]

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toContainEqual("User 1")
        expect(result.brazilians.unallowed).toContainEqual("User 2")
        expect(result.americans.allowed).toContainEqual("User 3")
        expect(result.americans.allowed).toContainEqual("User 4")
    })
})