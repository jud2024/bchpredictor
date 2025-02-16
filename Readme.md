📥 Instalar e Configurar o Termux

1. Baixe o Termux na Play Store (ou F-Droid).


2. Atualize os pacotes antes de começar:

apt update && apt upgrade -y



🚀 Instalando as Dependências

🔹 1. Instalar o Node.js e Git

pkg install nodejs git -y

🔹 2. Clonar o Repositório

git clone https://github.com/seu-usuario/bch-auth.git
cd bch-auth

🔹 3. Instalar os Pacotes do Node.js

npm install

▶️ Rodando o Projeto

🔹 1. Iniciar o Proxy (porta 3000)

node proxy.js

🔹 2. Servir o index.html no localhost:5050

Com o http-server:

npm install -g http-server
http-server -p 5050

Ou com Python (caso tenha instalado):

python -m http.server 5050


Agora, acesse http://localhost:5050 pelo navegador do seu celular.


---

📌 Observação

Se estiver rodando no celular, o Termux não permite acesso externo ao localhost.
Solução: Pegue o IP do seu celular e acesse pelo navegador em outro dispositivo.

ifconfig

Copie o IP (exemplo 192.168.1.10) e acesse:

http://192.168.1.10:5050


Agora seu projeto está rodando no Termux! 🎉

