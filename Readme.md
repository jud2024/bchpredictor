BCH Predictor Com termux 📱 (celular)

Este projeto fornece uma interface de autenticação para BCH.games usando um proxy WebSocket.

🚀 Tecnologias

HTML + JavaScript (Front-end)

Node.js + Express (Proxy WebSocket)

http-proxy-middleware (Middleware para redirecionamento WebSocket)


📦 Instalação

1. Clone o repositório

git clone https://github.com/jud2024/bchpredictor.git
cd bchpredictor


2. Instale as dependências

npm install



▶️ Como Rodar

🔹 1. Iniciar o Proxy (porta 3000)

node proxy.js

🔹 2. Servir o index.html (porta 5050)

Com Node.js (http-server)

npm install -g http-server
http-server -p 5050

Com Python (http.server)

python -m http.server 5050


Agora, acesse http://localhost:5050 no navegador.

📜 Como Usar

1. Insira seu auth_token_v1 no campo de autenticação.


2. Clique no botão Login.


3. O WebSocket tentará autenticar e retornará seu nome de usuário.



📌 Estrutura do Projeto

bchpredictor/
│── index.html        # Página principal
│── proxy.js          # Servidor Proxy WebSocket
│── package.json      # Dependências do projeto
└── README.md         # Documentação

📄 Licença

Este projeto é de código aberto. Sinta-se livre para modificar e usar!


---

Se precisar de ajustes ou quiser adicionar mais informações, me avise!

