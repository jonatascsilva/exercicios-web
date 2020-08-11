-- Assim como o UPDATE, é muito importante o uso do WHERE para não afetar a
-- tabela inteira!

-- Apagando um registro (considerando que a sigla é unique key)
DELETE FROM estados
WHERE       sigla = 'MN'

-- Apagando vários registros (onde id >= 1000)
DELETE FROM estados
WHERE       id >= 1000

SELECT *
FROM   estados