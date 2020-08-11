# Anotações sobre os conceitos gerais da Web

Web (teia, em português):

- Internet utiliza a pilha de procolos TCP/IP;
- TCP/IP utiliza o padrão de projeto Layers (cada camada tem sua responsabilidade, e camada de cima utiliza a de baixo).

## 1.1. As quatro camadas da pilha de protocolos TCP/IP

Camada #4 Aplicação:
> Trata os dados do usuário, criptografia, compressão e os processos que
> utilizarão os dados (distinguindo através das portas)

Camada #3 Transporte:
> Trata o envio/recebimento (cliente/destinatário, respectivamente), aqui opera o
> protocolo TCP e UDP

Camada #2 Internet:
> Conexão/comunicação entre redes, aqui opera o protocolo IP

Camada #1 Rede/Física:
> Relacionado ao meio físico, como endereço físico (MAC) e meio físico (Ethernet, WiFi)

## 1.2. Protocolo HTTP (HyperText Transfer Protocol)

- É um protocolo da camada de aplicação e utiliza a porta 80;
- Há também o HTTPS (HTTP+SSL ou HTTP+TLS) que envia os dados criptografados e utiliza um certificado de uma CA (Certification Authority) para permitir que o usuário descriptografe esses dados;
- HyperText é um texto rico, que possui referências e permite o acesso (à essas refs., como outro site, imagens, scripts, etc.) de forma muito fácil (com um clique);
- Utiliza o HTML (HyperText Markup Language) que é uma linguagem de marcação (não de programação!) de texto para orientar como o browser irá interpretar um website, por exemplo, mas o HTTP pode retornar apenas um video, um JSON, etc., ou seja, não é obrigatório retornar sempre um HTML;
- HTTP possui métodos para serem enviados pelo cliente como o GET (obter parâmetros), POST (publicar parâmetros), PUT (alterar parâmetros) e DELETE (apagar um parâmetro);
- HTTP possui os seguintes status de mensagens:
  - `1XX` - Informação;
  - `2XX` - Sucesso;
  - `3XX` - Redirecionamento;
  - `4XX` - Erro no cliente;
  - `5XX` - Erro no servidor.

## 1.3. DNS (Domain Named Systems)

- Traduz os nomes de domínios (nomes de sites, email, etc.) em um endereço IP, pois é muito mais fácil um humano gravar palavras do que vários números;
- Quando você digita um nome de um site e ele não está no cache do seu access point ou roteador, é feito uma requisição para um servidor DNS na internet, onde este irá retornar o endereço IP para sua máquina para que assim ela acesse o servidor do site que está acessando (tudo isso de forma transparente para você).

## 1.4. Web Services

- É um serviço que uma aplicação execute na web, permitindo também uma
  interoperabilidade entre sistemas diferentes (cliente Windows e servidor
  Linux, exemplo) através do envio das informações/requisições através de
  formatos padronizados entre estes sistemas, como o JSON, XML, etc.;
- É possível trabalhar com dois tipos de Web Service:
  - **SOAP (Simple Object Access Protocol)**: Mais antigo, precisa de software intermediários e é mais burocrático, pois é muito verboso;
    - Formatos: XML, RPC, WSDL
  - **REST (Representative State Transfer)**: Mais recente e melhor de trabalhar, pois pode consumir um serviço até mesmo pelo browser (usando por exemplo, os próprio métodos do HTTP).
    - Formatos: JSON, HTTP
- Para que sua Web Service seja uma RESTful (atenda os requisitos mínimos para ser uma REST), é preciso que atenda os métodos de um cadastro com CRUD (Crete, Update, Read and Delete), como exemplo (foi usado um exemplo de um banco de dados que fornece uma lista de clientes):
  - |    URL       | Método |      Descrição      |
    |:------------:|:------:|:-------------------:|
    | /clientes    |  POST  | Novo cliente        |
    | /clientes    |  GET   | Obtém todos         |
    | /clientes/36 |  GET   | Obtém cliente 36    |
    | /clientes/12 |  PUT   | Atualiza cliente 32 |
    | /clientes/41 | DELETE | Exclui cliente 41   |
- Há duas grandes arquiteturas para aplicar na sua aplicação para prover web services:
  - **SOA**: A aplicação e seus serviços são desenvolvidos e publicados como um todo e gerenciados por um ESB (Enterprise Service Bus), que é provido por um software de terceiros
  - **Micro serviços**: É dividido a aplicação em vários serviços, e cada um é um serviço desenvolvido e publicado à parte dos outros, permitindo uma modularização da sua aplicação (exe.: cada serviço pode ser desenvolvido por linguagens e softwares diferentes)

## 1.5. Computação em nuvem

- A ideia é prover uma solução por demanda para os clientes, sendo que o cliente pode:
  - Pagar pelo que foi utilizado
    - Exemplo: Você possui um site que tem mais
    acesso em dezembro e nos outros meses cai, logo, você vai pagar mais em
    dezembro pois o seu provedor de nuvem teve que alocar mais poder de
    processamento ou memória para atender esta demanda
  - Escalonar a infraestutura
    - Exemplo: Você pode escolher uma máquina com 2
    núcleos de 3GHz, 2GB de RAM e 10GB de SSD, e futuramente pode aumentar o
    poder de processamento/armazenamento tranquilamente depois apenas clicando
    em alguns botões, e sem precisar alterar ou mover nada em sua aplicação
