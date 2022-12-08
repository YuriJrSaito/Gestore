# Gestore em Electron

**Descrição**

Software de gestão voltado para empresas de varejo no ramo de vestuário, seu objetivo é facilitar os processos rotineiros da empresa, auxiliando no controle e monitoramento de modo geral, ajudando os gestores em suas decisões e agilizando os procedimentos fundamentais da empresa.

Foi feito principalmente em react.js e node.js, mas para a distribuição o projeto foi integrado ao electron.js

**Como usar**

O arquivo package.json contém alguns comandos:

```
# Inicia o aplicativo em modo de desenvolvimento, acessa o http://localhost:3000 do react
npm run iniciar

# Inicia o empacotamento do aplicativo, a saída ira para /dist
npm run electron-pack

--Entre outros comandos para desenvolvimento

```
**Estrutura de diretórios**

Estrutura de diretórios:

```
|
|-- /build (saída da built da aplicação react)
|
|-- /build-server (saída da built da aplicação node)
|
|-- /dist (saída do empacotamento do aplicativo em electron)
|
|-- /public (contém o index.html)
|
|-- /scripts (scripts auxiliares)
|
|-- /server (arquivos do node com express)
|
|-- /src (arquivos do react (neste caso a build também está aqui))
```