# 1. Chave primária (PK, primary key)

## 1.1 Características

- Única: Deve ser única dentro de uma tabela;
- Não vazia: Não aceita valores vazios;
- Não muda.

## 1.2 Exemplo

- Tabela Cliente, defino coluna Código como PK;
- **Nota:** A coluna código é uma Surrogate key (chave sintética): criada
  artificialmente, e não possui valor significativo para o usuário:
  - | Cód. |  Nome  | Email | CPF |
    |:----:|:------:|:-----:|:---:|
    |  1   |   Ana  |  ...  | ... |
    |  2   |   Bia  |  ...  | ... |
    |  3   | Carlos |  ...  | ... |

## 1.3 Observação

- Posso definir PK com valores que fazem sentido para o usuário, como por
  exemplo, o CPF:
  - |  Nome  | Email | CPF |
    |:------:|:-----:|:---:|
    |   Ana  |  ...  | ... |
    |   Bia  |  ...  | ... |
    | Carlos |  ...  | ... |
- Neste caso, a coluna CPF será uma Natural key (chave natural): possui valor na
  vida real para o usuário, mas isso pode gerar problemas, principalmente se
  houver erro e você cadastrar erroneamente estes valores (assim, ficando muito
  difícil para mudar, já que a característica da PK não se altera, pelo menos
  não de forma fácil).
