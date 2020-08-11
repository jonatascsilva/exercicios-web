-- Fazendo consulta com o select e where para exibir apenas as tuplas que estejam relacionadas
SELECT e.sigla AS Estado,
       c.nome AS Cidade,
       e.regiao AS Região
FROM   estados e,
       cidades c
WHERE  e.id = c.estado_id;

-- Fazendo consulta com o select e inner join para exibir apenas as tuplas que estejam relacionadas
SELECT     c.nome AS Cidade,
           e.nome AS Estado,
           regiao AS Região
FROM       estados e
INNER JOIN cidades c ON e.id = c.estado_id;