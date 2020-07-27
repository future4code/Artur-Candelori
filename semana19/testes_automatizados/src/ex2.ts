enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

interface User {
    name: string
    age: number
    nacionality: NACIONALITY
}

interface Casino {
    name: string
    location: LOCATION
}

interface Result {
    brazilians: ResultItem
    americans: ResultItem
}

interface ResultItem {
    allowed: string[]
    unallowed: string[]
}

function verifyAge(casino: Casino, users: User[]): Result {
    const result: Result = {
        brazilians: {
            allowed: [],
            unallowed: []
        },
        americans: {
            allowed: [],
            unallowed: []
        }
    }

    if(casino.location === LOCATION.BRAZIL) {
        for(let user of users) {
            if(user.age >= 18) {
                result.brazilians.allowed.push(user.name)
            } else {
                result.brazilians.unallowed.push(user.name)
            }
        }
    } else if(casino.location === LOCATION.EUA) {
        for(let user of users) {
            if (user.age >= 21) {
                result.americans.allowed.push(user.name)
            } else {
                result.americans.unallowed.push(user.name)
            }
        }
    }

    return result
}