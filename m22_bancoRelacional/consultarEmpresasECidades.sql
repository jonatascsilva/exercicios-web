-- Consultando empresas sede e cidades relacionadas com WHERE
SELECT e.nome AS Empresa,
       c.nome AS Cidade
FROM   empresas AS e,
       empresas_unidades AS eu,
       cidades AS c
WHERE  e.id = eu.empresa_id
  AND  c.id = eu.cidade_id
  AND  sede;

-- Usando INNER JOIN
SELECT     e.nome Empresa,
           c.nome Cidade
FROM       empresas e
INNER JOIN empresas_unidades eu ON e.id = eu.empresa_id
INNER JOIN cidades c ON c.id = eu.cidade_id
AND        eu.sede;

-- Consultando empresas em cidades que possuem prefeitos
SELECT     e.nome Empresa,
           c.nome Cidade,
           p.nome Prefeito
FROM       empresas e
INNER JOIN empresas_unidades eu ON e.id = eu.empresa_id
INNER JOIN cidades c ON c.id = eu.cidade_id
INNER JOIN prefeitos p ON c.id = p.cidade_id
AND        eu.sede;