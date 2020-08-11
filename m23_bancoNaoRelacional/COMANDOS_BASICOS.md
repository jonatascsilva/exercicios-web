# Comandos básicos (MongoDB)

> Executar comandos em um terminal como Bash, PowerShell, etc. (importante a
> pasta do MongoDB estar nas variáveis de ambiente para que os comandos sejam
> reconhecidos).

## Banco de dados

---

Inicializar banco de dados:

```bash
mongodb
```

Exibir banco de dados:

```bash
show dbs
```

Começar a usar um banco de dados (se não existir, cria um na memória, mas não
persiste até que algum dado seja adicionado):

```bash
use <nome-do-db>
```

## Collections

---

Criar collections:

```bash
db.createCollection(<nome-collection>)
```

Exibir collections:

```bash
show collections
```

Apagar collection (se apagar todas as collections de um db, ele automaticamente
não será mais persistido):

```bash
db.<nome-collection>.drop()
```

## Docs

---

> **Observação:** Para inserir múltiplas linhas em determinada chamada, basta não fechar o
> símbolo atual "[({" e apertar enter em cada linha digitada, exemplo:
> 
> ```bash
> ... nome: "Rio de Janeiro",
> ... sigla: "RJ",
> ... regiao: "Sudeste",
> ... cidades: [{
> ... nome: "Niterói",
> ... area: 133.9,
> ... populacao: 487562
> ... }]
> ... })
> ```

Criar/inserir dados/docs em uma collection:

```bash
db.<nome-collection>.insert(<dados-formato-json>)
```

Atualizar/inserir docs em uma collection:

```bash
db.<nome-collection>.save(<dados-formato-json>)
```

Consultar todos os docs em uma collection:

```bash
db.<nome-collection>.find()
```

Consultar todos os docs em uma collection no formato de um objeto:

```bash
db.<nome-collection>.find().pretty()
```
