-- Criamos o esquema no MySQL Workbench
-- CREATE SCHEMA web_moderno;
-- USE web_moderno;

-- Criando a tabela (entidade) estado usando DDL

-- Defini as seguintes colunas:
-- id     | Inteiros e não aceita número negativo  | Deve ser preenchido | Incrementa automaticamente
-- sigla  | Char variável (ocupa de 0 a 45 chars)  | Deve ser preenchido
-- regiao | Enumerável (aceita somente o definido) | Deve ser preenchido
-- popul. | Decimal no formato XXX.XX              | Deve ser preenchido
-- popul. | Decimal no formato XXX.XX              | Deve ser preenchido
 
-- Defini as seguintes chaves:
-- id como PK
-- nome como unique key (não pode repetir)
-- sigla como unique key (não pode repetir)
CREATE TABLE estados (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  sigla VARCHAR(2) NOT NULL,
  regiao ENUM(
    'Norte',
    'Nordeste',
    'Centro-Oeste',
    'Sudeste',
    'Sul'
  ) NOT NULL,
  populacao DECIMAL(5, 2) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (nome),
  UNIQUE KEY (sigla)
);

-- Verificando se as colunas e a tabela foram criadas
SHOW COLUMNS
FROM estados;