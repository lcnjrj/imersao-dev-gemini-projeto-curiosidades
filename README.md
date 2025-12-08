Imersão-Alura-DEV-Gemini
Novembro 2025
Projeto final da Imersão

Post no Linkedin

“Estou participando da seleção dos melhores projetos da Imersão Dev com Alura e Google.”
🚨#TerminalDeCuriosidades: Criando Conteúdo Inteligente com Gemini API! 

Apresento meu projeto, onde usei a base de conhecimento dinâmica para cria uma base estática para a página "Terminal de Curiosidades".
Geração IA (Back-End): uso o Gemini API via node.js para gerar curiosidades estruturadas sobre Tecnologia, Linux, Cinema e Música, alinhado aos meus hobbies.
Design e Busca (Front-End) desenvolvido com HTML, CSS e JavaScript.
Este projeto mostra como a Inteligência Artificial pode ser integrada para potencializar a criação de conteúdo estruturado e como um bom design (CSS) faz toda a diferença na apresentação final.
Carrega em monitores e smartphones.

Link GitHub:
https://github.com/lcnjrj/imersao-dev-gemini-projeto-curiosidades
Link GitPagges:
https://lcnjrj.github.io/imersao-dev-gemini-projeto-curiosidades/

Link para post do Linkedin:
https://www.linkedin.com/feed/update/urn:li:activity:7398513558285717504/

# 🤖 Terminal de Curiosidades - API Gemini

> Geração de conteúdo dinâmico com IA do Google Gemini - API Backend com frontend estático

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)

---

## 📋 Sobre o Projeto

O **Terminal de Curiosidades** é uma aplicação web que integra a API Gemini IA do Google para gerar curiosidades e fatos dinâmicos sob demanda. Construído como projeto de aprendizado durante um curso de imersão, demonstra separação backend-frontend, integração com APIs e manipulação de JavaScript assíncrono.

O projeto transforma um backend alimentado por IA em uma experiência de usuário fluida através de uma interface estática em HTML/CSS/JavaScript.

### 🎯 Funcionalidades Principais

- ✨ Geração de curiosidades em tempo real usando Gemini IA
- 🔄 Chamadas assíncronas à API com tratamento de erros adequado
- 🎨 Interface frontend limpa e responsiva
- 📦 Estrutura de código modular (separação backend/frontend)
- 🚀 Deploy local facilitado

---

## 🛠️ Stack Tecnológica

### Backend
- **Node.js** - Runtime JavaScript
- **Gemini API** (Google AI) - Modelo de Linguagem para geração de conteúdo
- **Express.js** *(se usado)* - Roteamento de API

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilização e layout
- **JavaScript Vanilla** - Lógica client-side e consumo de API

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Chave da API Gemini ([Obtenha aqui](https://ai.google.dev/))

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/lcnjrj/imersao-dev-gemini-projeto-curiosidades.git
   cd imersao-dev-gemini-projeto-curiosidades
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` no diretório raiz:
   ```env
   GEMINI_API_KEY=sua_chave_api_gemini_aqui
   PORT=3000
   ```

4. **Execute a aplicação**
   ```bash
   npm start
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador e navegue até:
   ```
   http://localhost:3000
   ```

---

## 📂 Estrutura do Projeto

```
imersao-dev-gemini-projeto-curiosidades/
├── backend/
│   ├── server.js          # Configuração do servidor Node.js
│   ├── gemini-client.js   # Integração com API Gemini
│   └── routes/            # Endpoints da API
├── frontend/
│   ├── index.html         # Estrutura HTML principal
│   ├── styles.css         # Estilização
│   └── script.js          # Lógica client-side
├── .env.example           # Template de variáveis de ambiente
├── package.json           # Dependências do projeto
└── README.md              # Este arquivo
```

---

## 💡 Como Funciona

### Fluxo Backend
1. Cliente solicita uma curiosidade via botão no frontend
2. JavaScript envia requisição HTTP ao backend Node.js
3. Backend chama a API Gemini com prompt configurado
4. Gemini gera resposta (texto da curiosidade)
5. Backend retorna resposta JSON ao frontend

### Fluxo Frontend
1. Usuário clica no botão "Obter Curiosidade"
2. `fetch()` envia requisição GET/POST ao endpoint backend
3. Exibe estado de carregamento enquanto aguarda
4. Parseia resposta JSON e injeta no DOM
5. Trata erros graciosamente com mensagens amigáveis

---

## 🎨 Screenshots

![Interface do Terminal de Curiosidades](./screenshots/main-interface.png)
*Interface principal com curiosidade gerada*

> **Nota:** Adicione screenshots à pasta `screenshots/` para melhor documentação

---

## 🧪 Endpoints da API

### `GET /api/curiosity`
Retorna uma curiosidade gerada aleatoriamente pelo Gemini IA.

**Resposta:**
```json
{
  "success": true,
  "curiosity": "Você sabia que os polvos têm três corações?",
  "timestamp": "2024-12-05T10:30:00Z"
}
```

### `POST /api/curiosity` *(se implementado)*
Gera curiosidade sobre tópico específico.

**Corpo da Requisição:**
```json
{
  "topic": "espaço"
}
```

---


## 📝 Principais Aprendizados

Trabalhar neste projeto me ensinou:

- ✅ **Integração com APIs:** Como autenticar e consumir APIs de IA externas com segurança
- ✅ **JavaScript Assíncrono:** Manipulação de promises, async/await e gerenciamento de erros
- ✅ **Arquitetura Backend:** Separação de responsabilidades entre cliente e servidor
- ✅ **Segurança de Ambiente:** Uso adequado de arquivos `.env` e proteção de chaves de API
- ✅ **Tratamento de Erros:** Degradação graciosa e feedback ao usuário em caso de falhas
- ✅ **Fluxo de Dados JSON:** Serialização/desserialização entre frontend e backend


## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

---

## 👤 Autora

**Luciana J de Faria**

- GitHub: [@lcnjrj](https://github.com/lcnjrj)
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/seu-perfil)
- Portfolio: [lcnjrj.github.io/portfolio_2025](https://lcnjrj.github.io/portfolio_2025/)

---



#ImersãoAluraDEV #GoogleGemini #JavaScript 
#ImersãoAlura @Alura #DesenvolvimentoWeb #IA #Portfólio
#Tech #frontEnd #html #css #js #2025 #Alura
