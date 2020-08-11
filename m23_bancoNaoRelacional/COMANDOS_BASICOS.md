# Comandos básicos (MongoDB)

> Executar comandos em um terminal como Bash, PowerShell, etc. (importante a
> pasta do MongoDB estar nas variáveis de ambiente para que os comandos sejam
> reconhecidos).

## Banco de dados

---

Inicializar banco de dados (deixe executando para que o BD fique ativo):

```bash
mongod
```

Shell do MongoDB para fazer requisições no banco de dados:

```bash
mongo
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
> ln0 ... db.estados.insert({
> ln1 ... nome: "Rio de Janeiro",
> ln2 ... sigla: "RJ",
> ln3 ... regiao: "Sudeste",
> ln4 ... cidades: [{
> ln5 ... nome: "Niterói",
> ln6 ... area: 133.9,
> ln7 ... populacao: 487562
> ln8 ... }]
> ln9 ... })
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
db.<nome-collection>.find(<opcional: filtro>)
```

Consultar todos os docs em uma collection no formato de um objeto:

```bash
db.<nome-collection>.find(<opcional: filtro>).pretty()
```

Consultar apenas uma doc

```bash
db.<nome-collection>.findOne(<opcional: filtro>)
```

Consultar docs com operador lógico

```bash
db.<nome-collection>.find({$<operador-logico>: [{<filtro1>}, {<filtro2>}, {<...>}]}).pretty()
```

Consultar docs com a existência (ou não existência) de uma propriedade

```bash
db.<nome-collection>.find({<nome-propriedade>: {$exists: <true-ou-false>}}).pretty()
```

Consultar docs pulando uma determinada quantidade de docs (útil para paginação)

```bash
db.<nome-collection>.find().skip(<numero-saltos>)
```

Consultar docs limitando a quantidade de docs retornadas (útil para paginação)

```bash
db.<nome-collection>.find().limit(<numero-retornos>)
```

Obter a quantidade de docs em uma collection

```bash
db.<nome-collection>.count()
```

Consultar docs com filtro e receber os atributos selecionados (`1` ou `true`
permite atributo, `0` ou `false` não permite)

```bash
db.<nome-collection>.find({<filtro>}, {<atributo-1>: true, <atributo-2>: false, ...})
```

## Consultas agregadas em Docs

---

> - É usada para fazer consultas mais complexas
> - As consultas agregadas se baseiam no pipes and filters, onde o resultado de
>   um filtro (estágio) é passado para outro filtro, e assim sucessivamente até
>   obter o dado desejado.

Consultando docs com:

- 1º estágio: Filtrar por determinados atributos

```bash
db.<nome-collection>.aggregate([
  { $project: { <atributo1>: true, <atributo2>: false, ... } }
])
```

Consultando docs com:

- 1º estágio: Filtrar por determinados atributos
- 2º estágio: Somar conteúdo de um determinado atributo e colocar resultado em um único novo atributo para cada doc

```bash
db.<nome-collection>.aggregate([
  { $project: { <atributo1>: true, <nome-novo-atributo>: { $sum: "$<atributo2>" } } }
])
```

Consultando docs com:

- 1º estágio: Filtrar por determinados atributos
- 2º estágio: Somar conteúdo de um determinado atributo e colocar resultado em um único novo atributo para cada doc
- 3º estágio: Agrupando as somas do estágio 2 em um único atributo (é preciso informar o `_id`, nesse caso não vamos usar e deixamos `null`)
- 4º estágio: Retirando o atributo `_id` do resultado e exibindo somente o total

```bash
db.<nome-collection>.aggregate([
  { $project: { <atributo1>: true, <nome-novo-atributo>: { $sum: "$<atributo2>" } } }
  { $group: { _id: null, <total-novo-atributo>: { $sum: "$<nome-novo-atributo>" } }
  { $project; { _id: false, <total-novo-atributo>: true } }
])
```
