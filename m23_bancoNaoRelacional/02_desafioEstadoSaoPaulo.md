# Exercício

Dentro do banco de dados `wm`, inserir na collections `estados` as seguintes informações:

- **Estado:**
  - nome: São Paulo, sigla: SP, regiao: Sudeste
- **Cidades desse estado:**
  - nome: Campinas, area: 795.7, prefeito: Jonas Donizette, populacao: 1081000
  - nome: Guarulhos, populacao: 1325000
  - nome: Sorocaba, distanciaCapital: 87, populacao: 644919
- **Observação:**
  - As cidades precisam ter um ID gerado pelo próprio MongoDB.

Meu código:

```bash
db.estados.insert({
  nome: "São Paulo",
  sigla: "SP",
  regiao: "Sudeste",
  cidades: [{
      _id: new ObjectId(),
      nome: "Campinas",
      area: 795.7,
      prefeito: "Jonas Donizette",
      populacao: 1081000 
    }, {
      _id: ObjectId(),
      nome: "Guarulhos",
      populacao: 1325000 
    }, {
      _id: ObjectId(),
      nome: "Sorocaba",
      distanciaCapital: 87,
      populacao: 644919
  }]
})
```
