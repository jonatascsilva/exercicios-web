-- Consultando a interseção de dados
SELECT     *
FROM       cidades c
INNER JOIN prefeitos p ON c.id = p.cidade_id;

-- Consultando a interseção de dados + dados não relacionados do lado esquerdo =
-- tabela cidade (no caso, a referência do FROM é que determina o lado esquerdo)
SELECT    *
FROM      cidades c
LEFT JOIN prefeitos p ON c.id = p.cidade_id;
-- O mesmo resultado com LEFT OUTER JOIN
SELECT          *
FROM            cidades c
LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id;

-- Consultando a interseção de dados + dados não relacionados do lado direito =
-- prefeitos (no caso, a referência do FROM é que determina o lado esquerdo,
-- consequentemente a outra referência é o lado direito)
SELECT     *
FROM       cidades c
RIGHT JOIN prefeitos p ON c.id = p.cidade_id;
-- O mesmo resultado com RIGHT OUTER JOIN
SELECT           *
FROM             cidades c
RIGHT OUTER JOIN prefeitos p ON c.id = p.cidade_id;

-- Consultando todos os dados (interseção + lados direito e esquerdo)
-- Essa sintaxe não é suportada no MySQL, teremos que simular
SELECT     *
FROM       cidades c
FULL JOIN  prefeitos p ON c.id = p.cidade_id;
-- Simulando FULL JOIN
SELECT     *
FROM       cidades c
LEFT OUTER JOIN  prefeitos p ON c.id = p.cidade_id
UNION
SELECT     *
FROM       cidades c
RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- Consultando todas as interseções
SELECT     p.nome AS Prefeito,
           c.nome AS Cidade,
           e.nome AS Estado
FROM       prefeitos p
INNER JOIN cidades c ON c.id = p.cidade_id
INNER JOIN estados e ON e.id = c.estado_id;