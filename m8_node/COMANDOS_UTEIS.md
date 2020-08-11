# Comandos úteis para NodeJS

Inicializar wizard para criar `package.json` (coloque `-y` para criar sem perguntar
nada)

```bash
npm init
```

Baixar e instalar as bibliotecas de um projeto já existente e que estão
referenciadas dentro do arquivo `package.json`

```bash
npm i
```

Baixar e instalar uma biblioteca de forma LOCAL e relacionar ela no `package.json`

```bash
npm i <nome-lib> --save
```

Baixar e instalar uma biblioteca de forma LOCAL que só será usada para testes no
   modo desenvolvimento e relacionar ela no `package.json`

```bash
npm i <nome-lib> --save-dev
// ou
npm i <nome-lib> -D
```

Baixar e instalar uma biblioteca de forma LOCAL
  > Ficará disponível apenas dentro de uma pasta chamada `node_modules` dentro de
         um projeto ou pasta determinado por você

```bash
npm i <nome-lib>
```

Baixar e instalar uma biblioteca de forma GLOBAL
  > Será instalada diretamente na raíz do node, logo poderá ser usada por qualquer
          projeto

```bash
npm i -g <nome-lib>
```

Executar scripts personalizados de um `package.json`

```bash
npm run <nome-script>
```
