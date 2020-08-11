-- Criando a tabela (entidade) cidades usando DDL

-- Defini as seguintes colunas:
-- id        | Inteiros e não aceita número negativo  | Deve ser preenchido | Incrementa automaticamente
-- nome      | Char variável (ocupa de 0 a 255 chars) | Deve ser preenchido
-- cidade_id | Inteiros e não aceita número negativo  | Pode ou não ser preenchido
 
-- Defini as seguintes chaves:
-- id como PK
-- cidade_id como UK, não pode haver repetição
-- cidade_id como FK, referenciando-a com a coluna id da tabela cidade
CREATE TABLE IF NOT EXISTS prefeitos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  cidade_id INT UNSIGNED,
  PRIMARY KEY (id),
  UNIQUE KEY (cidade_id),
  FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);

-- Verificando se as colunas e a tabela foram criadas
SHOW COLUMNS
FROM prefeitos;