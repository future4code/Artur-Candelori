### Exercício 1
a) Uma chave estrangeira estabelece uma relação entre duas tabelas, fazendo referência a uma primary key de outra tabela.
b)
```
INSERT INTO Rating VALUES(
    "001",
    "Não gostei",
    0,
    "001"
);

INSERT INTO Rating VALUES(
    "002",
    "Mais ou menos",
    5,
    "002"
);

INSERT INTO Rating VALUES(
    "003",
    "Razoável",
    7,
    "003"
);

INSERT INTO Rating VALUES(
    "004",
    "Muito bom!",
    10,
    "004"
);

```
c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_artur_candelori_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Film` (`id`))
A query devolveu erro porque não encontrou a foreign key indicada.
```
INSERT INTO Rating VALUES(
    "005",
    "Teste",
    10,
    "100"
);
```
d)
```
ALTER TABLE Film
DROP COLUMN rating;
```
e)Error Code: 1054. Unknown column 'rating' in 'where clause'
Retornou erro, pois não foi possível encontrar a coluna rating após ela ter sido deletada.
```
DELETE FROM Film
WHERE rating != NULL;
```
### Exercício 2
a) Essa tabela possui duas colunas: o id dos filmes e o id dos atores, portanto cada linha indica que o aquele filme foi estrelado por aquele ator.
b)
```
INSERT INTO MovieCast VALUES(
    "001",
    "001"
);

INSERT INTO MovieCast VALUES(
    "001",
    "002"
);

INSERT INTO MovieCast VALUES(
    "001",
    "003"
);

INSERT INTO MovieCast VALUES(
    "002",
    "001"
);

INSERT INTO MovieCast VALUES(
    "002",
    "004"
);

INSERT INTO MovieCast VALUES(
    "003",
    "002"
);
```
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_artur_candelori_db`.`FilmCast`, CONSTRAINT `FilmCast_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Film` (`id`))
Retornou erro, pois não encontrou um filme com o id especificado.
```
INSERT INTO MovieCast VALUES(
    "100",
    "001"
);
```
d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_artur_candelori_db`.`FilmCast`, CONSTRAINT `FilmCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não é possível deletar um ator cujo id é uma foreign key de outra tabela.
```
DELETE FROM Actor
WHERE id = "001";
```
### Exercício 3
a) A query mostra elementos em comum das duas tabelas. ON determina quais são os dados em comum que os elementos de cada tabela precisam ter para aparecer na seleção.
b)
```
SELECT id, title FROM Film
INNER JOIN Rating ON Film.id = Rating.film_id;
```
### Exercício 4
a)
```

```
b)
```

```
c)
```

```
### Exercício 5
a)
b)
```

```
c)
d)
```

```
### Exercício 6
a)
b)
```

```
c)
```

```
d)
```

```