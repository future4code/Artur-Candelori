import {Character, validateCharacter} from "../src/ex1"

export function performAttack(attacker: Character, defender: Character) {
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }

    if(attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    } 
}