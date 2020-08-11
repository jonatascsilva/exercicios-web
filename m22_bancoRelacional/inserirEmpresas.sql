-- Alterando o tipo do formato aceito na coluna cnpj
ALTER TABLE empresas
MODIFY      cnpj VARCHAR(14);

-- Verificando alteração
SHOW COLUMNS
FROM empresas;
-- Outro modo de verificar
DESC empresas;

-- Inserindo empresas
INSERT INTO empresas (nome, cnpj)
VALUES      ('Bradesco', 95694186000132),
            ('Vale', 27887148000146),
            ('Cielo', 01598317000134);

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES      (
              (
                SELECT id
                FROM   empresas
                WHERE  nome = 'Bradesco'
              ),
              (
                SELECT id
                FROM   cidades
                WHERE  nome = 'Campinas'
              ),
              1
            ),
            (
              (
                SELECT id
                FROM   empresas
                WHERE  nome = 'Bradesco'
              ),
              (
                SELECT id
                FROM   cidades
                WHERE  nome = 'Niterói'
              ),
              0
            ),
            (
              (
                SELECT id
                FROM   empresas
                WHERE  nome = 'Vale'
              ),
              (
                SELECT id
                FROM   cidades
                WHERE  nome = 'Campinas'
              ),
              0
            ),
            (
              (
                SELECT id
                FROM   empresas
                WHERE  nome = 'Vale'
              ),
              (
                SELECT id
                FROM   cidades
                WHERE  nome = 'Niterói'
              ),
              1
            );

SELECT *
FROM   empresas_unidades;