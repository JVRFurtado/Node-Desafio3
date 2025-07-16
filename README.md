# 🛠️ E‑commerce Toolkit: Gerador de QR Code & Senhas • Node.js

> Projeto criado no desafio da formação **Node.js Fundamentals** da [DIO](https://www.dio.me/).  
> Gera **QR Codes** para produtos/links e **senhas seguras** para contas de loja, tudo pelo terminal.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)

---

## ✨ Funcionalidades

| Ferramenta | Descrição |
|------------|-----------|
| **QR Code (Normal)**      | Cria um PNG em `./output/<nome>.png` a partir de um link. |
| **QR Code (Terminal)**    | Mostra o QR Code diretamente no console (ASCII). |
| **Gerador de Senhas**     | Produz senhas aleatórias conforme regras do arquivo `.env`. |



## 🔧 Tecnologias & Pacotes

- **Node.js 18+** • ES Modules (`type: module`)
- **chalk** – cores no console
- **prompt** – coleta de entrada de usuário
- **qrcode** – gera PNG
- **qrcode-terminal** – gera ASCII no terminal



## 📁 Estrutura

```

project-qrcode/
├─ .env                  # Configurações do gerador de senhas
├─ package.json
└─ src/
├─ index.js              # CLI principal
├─ services/
│  ├─ qr-code/           # Geração de QR Code em arquivo
│  ├─ qr-code-terminal/  # Geração de QR Code no terminal
│  └─ password/          # Geração de senhas seguras
└─ prompts-schema/       # Esquemas de perguntas do prompt

````



## ⚙️ Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/JVRFurtado/Node-Desafio3.git
cd project-qrcode

# 2. Instale as dependências
npm run prebuild || npm i || npm install
````



## 🚀 Uso rápido

```bash
# Execute o projeto
npm run start
```

1. **Escolha** a ferramenta
   `1` = QR Code • `2` = Password
2. **Siga** os prompts (link, tipo de QR ou nome do arquivo).
3. **Resultado**: imagem PNG em `./output` ou QR ASCII no terminal, ou senha exibida em verde.



## 🔐 Configurando o gerador de senhas

Edite o arquivo `.env`:

```text
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

Desative (`false`) categorias que não deseja incluir e ajuste o tamanho da senha.



## 📸 Exemplo de Saída

```text
Escolha a ferramenta (1- QRCODE ou 2- PASSWORD): 1
Digite o link para gerar o QR CODE: www.dio.me
Escolha entre o tipo (1- NORMAL ou 2- TERMINAL): 2

QR Code gerado com sucesso:

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ ██ ▄ ▄█ ▄▄▄▄▄ █
█ █   █ █▀ ▀▀██ █   █ █
█ █▄▄▄█ █▄█ ▄ █ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀ ▀ █▄▄▄▄▄▄▄█
█▄ ▀▀▀ ▄▄▀ ▀█ ▀██▄ ▀▀██
█▄▄▄  ▄▄▄█ █▄█▀▄ ▀ ▀ ▀█
███▄█▄▄▄█▀█ ▀▀ ▀█▀▀▀▀ █
█ ▄▄▄▄▄ █  █▀  ▀▀▀▄▀▄██
█ █   █ ██ ▀█ ▀▄▄ ▀██▄█
█ █▄▄▄█ █▀█ ███▄█▄ ▀▄▄█
█▄▄▄▄▄▄▄█▄▄█▄███████▄██
```



## 📜 Licença

Distribuído sob a licença **ISC**.



## 👨‍💻 Autor

Feito com ☕ + 💚 por mim

[LinkedIn](https://linkedin.com/in/joao-vitor-r) • [GitHub](https://github.com/JVRFurtado)



> Sinta‑se à vontade para copiar, personalizar e deixar seu e‑commerce (ou portfólio!) mais profissional com QR Codes prontos e senhas fortes. 😉
