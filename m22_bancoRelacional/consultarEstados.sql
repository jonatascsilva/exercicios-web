-- Fazendo consulta de todas as colunas da tabela estados
/* Observe que este tipo de consulta (sem filtrar, pedindo só algumas linhas) é
muito ruim, pois se existir milhares de dados, o sistema congela */
SELECT *
FROM   estados;

/* Consulta apenas das colunas nome e sigla e renomeando (apenas aqui em minha
consulta) como as colunas serão exibidas */
-- Testei case insensitive
SELECT nOmE AS 'Nome do Estado',
       SiGLA AS 'UF'
FROM   estados;

/* Agora quero trazer os estados filtrados pela região */
SELECT nome AS 'Nome do Estado',
       sigla AS 'UF'
FROM   estados
WHERE  regiao = 'Sul';

/* Agora quero trazer os estados filtrados pela quantidade da população e
organizados de forma ascendente */
SELECT   nome,
         regiao,
         populacao
FROM     estados
WHERE    populacao >= 10
ORDER BY populacao;

/* Agora quero trazer os estados filtrados pela quantidade da população e
organizados de forma descendente */
SELECT   nome,
         regiao,
         populacao
FROM     estados
WHERE    populacao >= 10
ORDER BY populacao DESC;