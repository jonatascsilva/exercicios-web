# Criando banco de dados e collection

Criando banco de dados `wm`

```bash
use wm
```

Criando collection `estados` implicitamente durante a inserção do estado `Acre`

```bash
db.estados.insert({nome: "Acre", sigla: "AC", regiao: "Norte"})
```

Criando/atualizando estado `Alagoas`

```bash
db.estados.save({nome: "Alagoas", sigla: "AL", regiao: "Nordeste", populacao: 3322000})
```

Criando estado `Rio de Janeiro` com uma cidade

```bash
db.estados.insert({
  nome: "Rio de Janeiro",
  sigla: "RJ",
  regiao: "Sudeste",
  cidades: [{
    nome: "Niterói",
    area: 133.9,
    populacao: 487562
  }]
})
```
