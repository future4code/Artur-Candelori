### Exercício 1
a) Deleta a coluna salary da tabela Actor
b) Muda a coluna 'gender' por uma coluna 'sex' de tipo VARCHAR(6)
c) Mantém o nome e o tipo da coluna 'gender' mas muda o número de caracteres de 6 para 255
d)
```
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100)
```
### Exercício 2
a)
```
UPDATE Actor
SET name = "nome", birth_date = "1999-09-09"
WHERE id = "123"
```
b)
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
c)
```
UPDATE Actor
SET 
    name = "nome", 
    birth_date = "1999-09-09",
    salary = 500000,
    gender = "male"
WHERE id = "005"    
```
d)0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não dá erro, apenas diz que 0 linhas foram afetadas, ou seja, nada mudou.
```
UPDATE Actor
SET name = "nome"
WHERE id = "100";
```
### Exercício 3
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```
### Exercício 4
a)
```
SELECT MAX(salary) FROM Actor
```
b)
```
SELECT MIN(salary) FROM Actors WHERE gender = "female"
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)
```
SELECT SUM(salary) FROM Actor
```
### Exercício 5
a) O resultado mostra uma tabela com número de linhas cujo gender = "male" e cujo gender = "female", ou seja, mostra o número de linhas agrupados por gender.
b)
```
SELECT id, name
FROM Actor
ORDER BY name DESC
```
c)
```
SELECT *
FROM Actor
ORDER BY salary ASC
```
d)
```
SELECT *
FROM Actor
ORDER BY salary DESC LIMIT 3
```
e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender
```
### Exercício 6
a)
```
ALTER TABLE Film
ADD playing_limit_date DATE
```
b)
```
ALTER TABLE Film
CHANGE rating rating FLOAT
```
c)
```
UPDATE Film
SET playing_limit_date = "2020-07-07"
WHERE id = "001";

UPDATE Film
SET playing_limit_date = "2020-07-06"
WHERE id = "002";
```
d)0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Novamente ao tentar mudar uma linha que não existe não hove erro, apenas não houve mudança na tabela.
```
DELETE FROM Movie
WHERE id = "001";

UPDATE Movie
SET synopsis = "teste"
WHERE id = "001";
```
### Exercício 7
a) 2
```
SELECT COUNT(*)
FROM Film
WHERE rating > 7.5;
```
b) 9
```
SELECT AVG(rating)
FROM Film;
```
c)
```
SELECT COUNT(*)
FROM Film
WHERE playing_limit_date >= CURDATE();
```
d)
```
SELECT COUNT(*)
FROM Film
WHERE release_date > CURDATE()
```
e)
```
SELECT MAX(rating)
FROM Film
```
f)
```
SELECT MIN(rating)
FROM Film
```
### Exercício 8
a)
```
SELECT * FROM Film
ORDER BY title
```
b)
```
SELECT * FROM Film
ORDER BY title DESC
LIMIT 5
```
c)
```
SELECT * FROM Film
WHERE playing_limit_date >= CURDATE()
ORDER BY release_date DESC
LIMIT 3
```
d)
```
SELECT * FROM Film
ORDER BY rating DESC
LIMIT 3
```


