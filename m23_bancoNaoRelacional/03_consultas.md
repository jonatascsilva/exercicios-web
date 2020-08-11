# Consultas no MongoDB

Consultar todas as docs

```bash
db.estados.find()
```

Consultar todas as docs em formato de Objeto

```bash
db.estados.find().pretty()
```

Consultar primeira doc

```bash
db.estados.findOne()
```

Consultar doc específica

```bash
db.estados.findOne({sigla: "RJ"})
```

Consultar docs com operador lógico `OR`

```bash
db.estados.find({$or: [{sigla: "RJ"}, {sigla: "AC"}]}).pretty()
```

Consultar docs que possuam a propriedade `populacao`

```bash
db.estados.find({populacao: {$exists: true}}).pretty()
```

Consultar à partir da segunda doc e retornar com o limite de somente duas docs

```bash
db.estados.find().skip(1).limit(2)
```

Obter a quantidade de docs em uma collection

```bash
db.estados.count()
```

Consultar docs com filtro e exibindo somente alguns atributos

```bash
db.estados.find({sigla: "SP"}, {nome: 1, sigla: true, _id: false})
```

Consultar os nomes das cidades da doc do estado de SP

```bash
db.estados.find({sigla: "SP"}, {"cidades.nome": 1, _id: 0})
```
