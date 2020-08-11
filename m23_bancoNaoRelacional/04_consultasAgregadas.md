# Consultas agregadas no MongoDB

Consultar todas as docs e exibir somente o nome dos estados e os nomes
das cidades dos estados, se existir

```bash
db.estados.aggregate([
  { $project: {nome: 1, "cidades.nome": 1, _id: 0} }
])
```

Somar a população de cada cidade pra cada estado, e depois somar toda a
população de cada estado e exibir em um único atributo

```bash
db.estados.aggregate([
    { $project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0} },
    { $group: {_id: null, populacaoTotal: {$sum: "$populacao" }} },
    { $project: { _id: 0, populacaoTotal: 1 } },
])
```
