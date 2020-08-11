-- Atualizando minha tabela
-- É importante usar o WHERE com o UPDATE, caso contrário, você irá atualizar a
-- tabela INTEIRA!
UPDATE estados
SET    nome = 'Maranhão'
WHERE  sigla = 'MA'

-- Conferindo atualização de algumas formas
SELECT nome
FROM   estados
WHERE  sigla = 'MA'

SELECT estados.nome
FROM   estados
WHERE  sigla = 'MA'

-- Estados possui alias (apelido est para especificar aqui na consulta)
-- É interessante nas consultas com colunas com mesmo nome
SELECT est.nome
FROM   estados est
WHERE  sigla = 'MA'

-- Atualizando novamente outra linha
UPDATE estados
SET    nome = 'Paraná',
       populacao = 11.32
WHERE  sigla = 'PR'

SELECT nome,
       sigla,
       populacao
FROM   estados
WHERE  sigla = 'PR'