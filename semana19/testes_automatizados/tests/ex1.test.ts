describe("Testando performPurchase", () => {
    
    test("Deve retornar objeto tipo User com saldo positivo", () => {
        const user: User = {
            name: "Teste",
            balance: 10
        }

        const result = performPurchase(user, 5)

        const newUser = user
        newUser.balance = 5
        
        expect(result).toEqual(newUser)
    })

    test("Deve retornar objeto tipo User com saldo = 0", () => {
        const user: User = {
            name: "Teste",
            balance: 5
        }

        const result = performPurchase(user, 5)

        const newUser = user
        newUser.balance = 0
        
        expect(result).toEqual(newUser)
    })

    test("Deve retornar undefined", () => {
        const user: User = {
            name: "Teste",
            balance: 5
        }

        const result = performPurchase(user, 10)

        expect(result).toEqual(undefined)
    })
})