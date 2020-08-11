-- Criando novo estado fictício forçando o uso de um ID
INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES      (1000, 'Novo', 'NV', 'Sul', 2.54)

-- Observe que esse outro novo estado continuará do ID 1000, e não ocupar os IDs
-- que estavam vazios antes
INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES      ('Mais novo', 'MN', 'Norte', 2.51)

SELECT *
FROM   estados