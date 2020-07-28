export interface User {
    name: string
    balance: number
}

export function performPurchase(user: User, value: number): User | undefined {
    if(user.balance >= value) {
        const newUser = user
        newUser.balance -= value
        return newUser
    }

    return undefined
}

const user: User = {
    name: "Teste",
    balance: 10
}

console.log(performPurchase(user, 5))