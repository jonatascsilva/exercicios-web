-- Consultando a soma total da população de cada região
SELECT   regiao AS 'Região',
         SUM(populacao) AS Total
FROM     estados
GROUP BY regiao
ORDER BY Total DESC;

-- Consultando a populacao total de todos os estados
SELECT   SUM(populacao) AS Total
FROM     estados
ORDER BY Total DESC;

-- Consultando a média da populacao total por estado
SELECT   AVG(populacao) AS Total
FROM     estados
ORDER BY Total DESC;