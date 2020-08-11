-- Inserindo prefeitos (deixando um sem associar cidade)
INSERT INTO prefeitos (nome, cidade_id)
VALUES      (
              'Rodrigo Neves',
              (
                SELECT id
                FROM   cidades
                WHERE  nome = 'Niterói'
              )
            ),
            (
              'Raquel Lyra',
              (
                SELECT id
                FROM   cidades
                WHERE  nome = 'Caruaru'
              )
            ),
            (
              'Zenaldo Coutinho',
              NULL
            );

-- Verificando inserção
SELECT *
FROM   prefeitos;

-- Conferindo se é possível ter dois null em UK (sim, é possível, pois permiti o
-- uso do NULL nessa coluna)
INSERT INTO prefeitos (nome, cidade_id)
VALUES      ('Rafael Greca', NULL);
-- O que não é possível é ter o mesmo id!
INSERT INTO prefeitos (nome, cidade_id)
VALUES      ('Rodrigo Pinheiro', 3);