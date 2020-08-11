# 1. SQL (Structured Query Language)

- Case insensitive;
- O símbolo ; é opcional durante as requisições, porém, se for executar vários
  comandos de uma vez só, colocar ; só no último comando;
- Dividida em 4 partes:
  - DML (Data Manipulation Language);
  - DDL (Data Definition Language);
  - DCL (Data Control Language);
  - TCL (Transaction Control Language).

## 1.1. DML

- Básico da manipulação de dados (CRUD), sendo criar, ler, atualizar e apagar;
- Comandos:
  - `INSERT`
  - `SELECT`
  - `UPDATE`
  - `DELETE`

## 1.2. DDL

- Definição do esquema do seu banco de dados, definindo restrições, tipos de
  dados, etc.;
- Comandos:
  - `CREATE`
  - `ALTER`
  - `DROP`
  - `DELETE`

## 1.3. DCL
  
- Definição dos acessos, permissões e de segurança do usuário (o *admin* que irá
  determinar isso);
- Comandos:
  - `GRANT`
  - `DENY`
  - `REVOKE`

## 1.4. TCL

- Definição das transações;
- Exemplo:
  > Conta em dois bancos e se deseja transferir dinheiro entre elas, é preciso
  que remova dinheiro em uma conta e adicionar na outra, logo, é preciso que as
  duas operações sejam feitas de forma consistente, para que não haja falhas, ou
  seja, é preciso que tudo nos dois bancos tenham tido sucesso para que a
  transação seja feita, caso contrário, volta para o estado inicial.
- Comandos:
  - `BEGIN TRANSACTION`
  - `COMMIT`
  - `ROLLBACK`
