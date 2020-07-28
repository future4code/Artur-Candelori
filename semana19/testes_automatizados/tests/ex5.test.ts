import {verifyAge, User, NACIONALITY, LOCATION, Casino, Result, ResultItem} from "../src/ex3"

describe("Testando verifyAge", () => {

    test("brazilians.allowed.length deve ser < 2 e > 0", () => {
        const users: User[] = [
            {name: "User 1", age: 19, nacionality: NACIONALITY.BRAZILIAN},
        ]

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })
    
    test("americans.unallowed.length deve ser 0", () => {
        const users: User[] = [
            {name: "User 1", age: 19, nacionality: NACIONALITY.AMERICAN},
        ]

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.americans.unallowed.length).toBe(0)
    })


    test("Arrays unallowed devem conter os nomes dos usuários", () => {
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
    
    test("brazilians.unallowed.length > 1, americans.unallowed.length < 1, americans.allowed.length = 2", () => {
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

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})