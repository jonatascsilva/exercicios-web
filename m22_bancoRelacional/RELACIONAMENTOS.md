# 1. Relacionamentos

- Utilizado para relacionar dados de uma tabela com outra(s);
- A única existente é a 1:n, porém, é possível derivar para 1:1 e n:n.

## 1.2. Característica do relacionamento (unidirecional)

- NÃO pode (não dá certo) fazer relacionamento bidirecional, é preciso definir
  quem será a tabela pai e a tabela filho;
- Logo, não pode ter o cruzamento das chaves PK nas duas tabelas;
  - **Tabela: Cidade**
    - | ID  | Nome |
      |:---:|:----:|
      |  1  | ...  |
      |  2  | ...  |
  - **Tabela: Prefeito**
    - | ID  | Nome | Cidade_ID |
      |:---:|:----:|:---------:|
      |  1  | ...  |     1     |
      |  2  | ...  |     2     |

## 1.3. Exemplo de relacionamento 1 para n

- Ana é mãe de João e Júlia;
- Bia é mãe de Gui;
- As tabelas para relacionar esses dados:
  - **Tabela: Mãe**
    - | ID  | Nome |
      |:---:|------|
      |  1  | Ana  |
      |  2  | Bia  |
  - **Tabela: Filho** (coluna Mae_Cod é uma FK)
    - | Cod | Nome  | Mae_Cod |
      |:---:|-------|:-------:|
      |  1  | João  |    1    |
      |  2  | Gui   |    2    |
      |  3  | Júlia |    1    |
- Quando se faz o relacionamento das tabelas, é adicionado a coluna PK da tabela
  pai e essa coluna agora será uma chave estrangeira (FK, Foreign Key), com a
  característica de que poderá ter repetição.

## 1.4. Exemplo de relacionamento 1 para 1

- Caso não deseje que ela tenha repetição, basta adicionar a opção Unique para a
  coluna FK:
  - **Tabela: Marido**
    - | ID  | Nome |
      |:---:|:----:|
      |  1  | ...  |
      |  2  | ...  |
  - **Tabela: Esposa** (coluna Marido_Cod deve ser FK e do tipo Unique, num
    casamento monogâmico)
    - | Cod | Nome | Marido_Cod |
      |:---:|:----:|:----------:|
      |  1  | ...  |      3     |
      |  2  | ...  |      2     |
      |  3  | ...  |      1     |

## 1.5. Exemplo de relacionamento n para n

- É preciso criar uma tabela intermediária para relacionar a chave PK das duas
  tabelas à serem relacionadas, ou seja, preciso simular 1 para n nas duas
  tabelas para à tabela intermediária, assim simulando n para n;
- Logo, teremos duas colunas FK, e estas duas colunas juntas formarão uma nova
        PK:
  - **Tabela: Tio**
    - | ID  | Nome |
      |:---:|:----:|
      |  1  | ...  |
      |  2  | ...  |
  - **Tabela: Sobrinho**
    - | ID  | Nome |
      |:---:|:----:|
      |  1  | ...  |
      |  2  | ...  |
  - **Tabela: Tio_Sob**
    - | Tio_ID | Sob_ID |
      |:------:|:------:|
      |    1   |    1   |
      |    2   |    1   |
