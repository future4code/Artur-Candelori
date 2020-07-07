### Exercício 1
a) NOT NULL indica que esse valor não pode ser nulo
b) SHOW DATABASES mostra uma tabela com os bancos de dados a que tenho acesso, e SHOW TABLES mostra uma tabela com as tabelas que foram criadas.
c) SHOW Actor retorna um erro de sintaxe, 1064. Porém, usar DESCRIBE Actor mostra uma tabela com informações sobre Actor.

### Exercício 2
a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) O erro aconteceu porque o id é uma primary key, portanto seu valor deve ser único.
c) Error Code: 1136. Column count doesn't match value count at row 1.
Número de colunas não é o mesmo número de valores da linha 1.
Quer dizer que os atributos no INSERT não batem com os no VALUES. O correto seria:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d)Error Code: 1364. Field 'name' doesn't have a default value
Campo 'name' não tem um valor default.
Como name é NOT NULL, não podemos adicionar um ator sem um nome ou sem ter estabelecido um nome default. Corrigindo:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Genebildo Geremias",
  400000,
  "1949-04-18", 
  "male"
);
```
e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor de data incorreto: '1950' para coluna 'birth_date' na linha 1.
A data deve estar entre aspas:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Didi Mocó",
  300000,
  "1940-03-26", 
  "male"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Xuxa",
  1000000,
  "1965-03-26", 
  "female"
);
```
### Exercício 3
a)
```
SELECT * FROM Actor WHERE gender = "female";
```
b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c)0 row(s) returned
O comando não retornou nenhum resultado porque não nenhuma linha cuja coluna gender seja "invalid".
d)
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```
e) A coluna 'nome' não existe, o correto seria 'name':
```
SELECT id, name from Actor WHERE id = "002";
```
### Exercício 4
a) A busca deve satisfazer duas condições, sendo que a primeira pode ser satisfeita de mais de uma maneira. Por exemplo, se salary = 500000 e name = Artur ou name = Jason. Já name = Artur ou name = Jason e salary = 100000 não será retornado, pois só uma condição é satisfeita.
b)
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```
c)
```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```
d)
```
SELECT * FROM Actor 
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5
a) Cria uma tabela com id, título, sinopse, data de lançamento e nota.
```
CREATE TABLE Film (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    synopsis TEXT,
    release_date DATE,
    rating INT
);
```
b)
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    "7"
);
```
c)
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    "10"
);
```
d)
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    "8"
);
```
e)
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
	"004",
    "À meia-noite levarei sua alma",
    "O sádico e cruel coveiro Zé do Caixão pretende gerar um filho perfeito para dar continuidade ao seu sangue. No entanto, sua mulher não consegue engravidar e ele acaba violentando a mulher do seu melhor amigo. A moça agredida pelo coveiro quer se suicidar com o intuito de regressar do mundo dos mortos e levar a alma de Zé do Caixão.",
    "1964-11-09",
    "8"
);
```
### Exercício 5
a)
```
SELECT id, title, rating FROM Film WHERE id = "004";
```
b)
```
SELECT * FROM Film WHERE title = "À meia-noite levarei sua alma";
```
c)
```
SELECT id, title, synopsis FROM Film WHERE rating >= 7;
```
### Exercício 6
a)
```
SELECT * FROM Film WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Film WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
```
c)
```
SELECT * FROM Filme WHERE release_date < "2020-06-07";
```
d)
```
SELECT * FROM Film 
WHERE release_date < "2020-06-07" AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND rating > 7;
```


