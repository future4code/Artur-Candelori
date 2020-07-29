import {validateCharacter} from "../src/ex1"

describe("Testando validateCharacter", () => {

    test("Deve retornar falso para nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 100,
            defense: 100
        })

        expect(result).toBe(false)
    })
    
    test("Deve retornar false para vida vazia", () => {
        const result = validateCharacter({
            name: "Test",
            life: undefined,
            strength: 100,
            defense: 100
        })

        expect(result).toBe(false)
    })
    
    test("Deve retornar false para força vazia", () => {
        const result = validateCharacter({
            name: "Test",
            life: 1500,
            strength: undefined,
            defense: 100
        })

        expect(result).toBe(false)
    })
    
    test("Deve retornar false para defesa vazia", () => {
        const result = validateCharacter({
            name: "Test",
            life: 1500,
            strength: 100,
            defense: undefined
        })

        expect(result).toBe(false)
    })
    
    test("Deve retornar false para defesa negativa", () => {
        const result = validateCharacter({
            name: "Test",
            life: 1500,
            strength: 100,
            defense: -100
        })

        expect(result).toBe(false)
    })
    
    test("Deve retornar true para defesa 0", () => {
        const result = validateCharacter({
            name: "Test",
            life: 1500,
            strength: 100,
            defense: 0
        })

        expect(result).toBe(true)
    })
    
    test("Deve retornar true para todas informções válidas", () => {
        const result = validateCharacter({
            name: "Test",
            life: 1500,
            strength: 100,
            defense: 100
        })

        expect(result).toBe(true)
    })
})