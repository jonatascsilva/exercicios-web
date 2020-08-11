-- Criando a tabela (entidade) cidades usando DDL

-- Defini as seguintes colunas:
-- id        | Inteiros e não aceita número negativo  | Deve ser preenchido | Incrementa automaticamente
-- nome      | Char variável (ocupa de 0 a 255 chars) | Deve ser preenchido
-- estado_id | Inteiros e não aceita número negativo  | Deve ser preenchido
-- area      | Decimal no formato XXXXXXXX.XX         | Deve ser preenchido
 
-- Defini as seguintes chaves:
-- id como PK
-- estado_id como FK, referenciando-a com a coluna id da tabela estados
CREATE TABLE IF NOT EXISTS cidades (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  estado_id INT UNSIGNED NOT NULL,
  area DECIMAL(10,2),
  PRIMARY KEY (id),
  FOREIGN KEY (estado_id) REFERENCES estados (id)
);

-- Verificando se as colunas e a tabela foram criadas
SHOW COLUMNS
FROM cidades;