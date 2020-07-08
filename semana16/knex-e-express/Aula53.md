### Exercício 1
a) É a resposta que o MySQL devolve naturalmente. É um array com várias informações além dos dados especificados na query.
b)
```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

  return result[0][0]
}
```
c)
```
const howManyByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
  `)

  const count = result[0][0].count
  return count
}
```
### Exercício 2
a)
```
const updateSalary = async (id: string, salary: number): Promise<void> => {
  await connection("Actor")
    .where({id: id})
    .update({salary: salary})
}
```
b)
```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .where({id: id})
    .del()
}
```
c)
```
const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .where({gender: gender})
    .avg("salary")

  return result[0].average  
}
```
### Exercício 3
### Exercício 4
### Exercício 5
### Exercício 6
### Exercício 7