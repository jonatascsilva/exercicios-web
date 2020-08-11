-- Inserindo cidades no modo hard (tendo que saber o id do estado)
INSERT INTO cidades (nome, area, estado_id)
VALUES      ('Campinas', 795, 28);

INSERT INTO cidades (nome, area, estado_id)
VALUES      ('Niterói', 133.9, 22);

-- Inserindo cidades e selecionando id indiretamente pela sigla
INSERT INTO cidades (nome, area, estado_id)
VALUES      (
              'Caruaru',
              920.6,
              (
                SELECT id
                FROM   estados
                WHERE  sigla = 'PE'
              )
            );

INSERT INTO cidades (nome, area, estado_id)
VALUES      (
              'Juazeiro do Norte',
              248.2,
              (
                SELECT id
                FROM   estados
                WHERE  sigla = 'CE'
              )
            );

-- Conferindo inserção
SELECT *
FROM   cidades