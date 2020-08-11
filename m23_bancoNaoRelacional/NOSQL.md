# 1. NoSQL (Not Only SQL)

- É case sensitive;
- Classificação dos quatro grandes tipos de bancos NoSQL:
  - Chave/Valor (ex.: Redis);
  - Documentos (ex.: MangoDB);
  - Grafo (ex.: Neo4j);
  - Colunas (ex.: BigTable, Cassandra).

## 1.1. Documentos

- Não possui schema/esquema;
- No banco de dados, existem as collections (semelhantes as tabelas/entidades do
  banco relacional) e em cada collection existem os docs/documentos (semelhantes
  às linhas/tuplas do banco relacional).

## 1.2. Escalonamentos de dados

### 1.2.1. Vertical

- Para armazenar e ter mais poder de processamento dos dados, realizar o
  upgrade de memória, HD, processador, etc. em uma única máquina (geralmente
  esse tipo de escalonamento atinge um limite muito rápido, pois existem
  diversos fatores que determinam o limite).

### 1.2.2. Horizontal

- Para armazenar e ter mais poder de processamento dos dados, armazenar os
  dados em diversas máquinas, dividindo os dados em cada uma delas.
