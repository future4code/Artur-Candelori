### Exercício 1
a) Sim, pois com strings a quantidade de caracteres disponíveis é maior, logo há mais combinações.
b) 
```
import {v4} from "uuid"

export class IdGenerator {
    public generate(): string {
        return v4();
    }
}
```
### Exercício 2
a) Primeiro, userTableName recebe o nome da tabela que ira guardar os usuários. Em seguida, connection estabelece a conexão com o banco de dados. Por último, create user é a função que adiciona um novo usuário a tabela.
b)
```
CREATE TABLE User 
```