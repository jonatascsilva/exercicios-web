CREATE TABLE IF NOT EXISTS empresas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  -- Em casos onde não será feito operações, não é interessante usar int, e sim
  -- varchar, iremos alterar o tipo dessa coluna depois
  cnpj INT UNSIGNED,
  PRIMARY KEY (id),
  UNIQUE KEY (cnpj)
);

SHOW COLUMNS
FROM empresas;

-- Criando tabela intermediária para simular n:n entre cidades e empresas
-- TINYINT é o formato boolean do SQL
CREATE TABLE IF NOT EXISTS empresas_unidades (
  empresa_id INT UNSIGNED NOT NULL,
  cidade_id INT UNSIGNED NOT NULL,
  sede TINYINT(1) NOT NULL,
  FOREIGN KEY (empresa_id) REFERENCES empresas (id),
  FOREIGN KEY (cidade_id) REFERENCES cidades (id),
  PRIMARY KEY (empresa_id, cidade_id)
);

SHOW COLUMNS
FROM empresas_unidades;