# Anotações sobre o modelo E/R

## 1. SGBD (Sistemas Gerenciadores de Banco de Dados)

- Alguns exemplos de SGB relacionais: MySQL, Oracle e outros.

## 2. MySQL usa a linguagem SQL

- Linguagem de consulta estruturada (Structured Query Language).

## 3. Modelo E/R (entidade/relacionamento)

- Paradigma em que o banco de dados se baseia.

## 4. Entidade

- A tabela onde os dados estão armazenados (estão armazenados de forma tabular);
- Nela, existirão as colunas e as linhas/tuplas:
  - | ID  | Marca | Modelo | Ano  | ... |
    |:---:|-------|--------|:----:|:---:|
    |  1  |  xyz  |  abcd  | 2000 | ... |
    |  2  |  zyz  |  dcba  | 2001 | ... |

## 5. Relacionamento

- É a relação de dados entre uma tabela (entidade) com outra tabela, permitindo
  tratar dados e obter um outro dado;
- Por exemplo, ter tabela de cliente, outra produto, e na tabela pedido
  relacionar estas duas tabelas para obter dados das mesmas.

## 6. Esquema

- É a definição de como os dados serão armazenados, definindo tipo de dado
  (números, strings, etc.), restrições, etc.;
- As restrições irão validar seus dados;
- As linhas/tuplas devem seguir o esquema definido (exemplo: se estiver na
  coluna ano e foi definido que é número e 4 chars, esta célula da linha deve obedecer).

## 7. Tipos mais conhecidos

- Data, números inteiros, números com casas decimais, textos, etc.;
- Dados binários: BLOB (Binary Large Object) e CLOB (Character Large Object)
  para armazenar dados muito compridos;
- Não é interessante armazenar arquivos estáticos como imagens, vídeos, etc.,
  para não pesar no banco de dados, então, só se coloca um link/endereço para
  referenciá-los.
