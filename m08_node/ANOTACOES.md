# Anotações sobre o NodeJS

## Node

- É um runtime que usa JS como linguagem
- Pode ser usado tanto no front-end quanto no back-end
- Usa apenas uma thread (ou seja, single thread) para tratar requisições/tarefas
  recebidas do cliente
- Usa a engine V8 (mesma do Chrome) e a biblioteca libuv para tratar I/O

## Módulos do node

- No back-end, cada arquivo js é um módulo
- Tudo o que está nos arquivos é privado, mas posso tornar público exportando
  eles para isso, uso um dos padrões de módulos existentes do node. Os mais
  conhecidos são: ~ CommmonJS ~ ECMAScript 2015

## NPM (Node Packet Manager)

- É um repositório online de pacotes de terceiros (libs) de código aberto para
  usar no node.js
- Localmente, pode usar o npm para baixar/instalar essas bibliotecas offline
- Quando instalo localmente uma biblioteca ela fica disponível dentro da pasta
  node_modules
- Quando uso uma função da biblioteca importada no meu projeto, internamente o
  próprio node vai procurar a pasta do package dentro de node_modules

## Arquivo Package.JSON

- Descreve todo o seu projeto, informando autor, tags, etc.
- Relaciona todas as dependências de bibliotecas, para que quando importar o
  projeto em outro PC possam ser importadas (as bibliotecas) de forma muito mais
  fácil
- Pode ser configurado como as novas atualizações das bibliotecas serão obtidas,
  sendo que há um símbolo no começo da versão (que é organizda em
  major.minor.fixed) que indica o seguinte: Sem símbolo indica que apenas pode a
  versão especificada pode ser utilizada ^ indica que apenas pode ser atualizado
  o minor (pode ir de 0.0.0 para 0.9.9, por exemplo) ~ indica que apenas pode
  ser atualizado o fixed (pode ir de 0.0.0 para 0.0.9, por exemplo)
- É criado também automaticamente um arquivo package-lock.json que serve para
  que a aplicação saiba especificamente qual versão foi usada, qual link foi
  baixada, etc. Útil para garantir a integridade e compatibilidade das versões
  das libs instaladas, mas não é usada pelo dev
