🗺️ Busca CEP - PWA
1. Sobre o Projeto
Descrição da aplicação: O Busca CEP é uma aplicação web simples e direta que permite aos usuários consultar informações de endereço a partir de um número de CEP utilizando a API do ViaCEP.
Objetivo da aplicação: O objetivo principal desta versão do projeto é evoluir uma aplicação web tradicional para uma Aplicação Web Progressiva (PWA - Progressive Web App). Com isso, a aplicação se torna mais profissional, sendo instalável em dispositivos móveis e desktops, capaz de funcionar (parcial ou totalmente) sem conexão com a internet, e hospedada publicamente para acesso de qualquer usuário.
Tecnologias utilizadas:
HTML5
CSS3
JavaScript 
Fetch API (Consumo da API ViaCEP)
PWA (Service Workers e Web App Manifest)

--------------------------------------------------------------------------------
2. Conceitos de PWA
O que é uma PWA? Uma PWA (Progressive Web App) é uma aplicação web construída com tecnologias web comuns (HTML, CSS e JavaScript), mas que age e se comporta como um aplicativo nativo. Ela oferece uma experiência de usuário otimizada, unindo o melhor da web e dos aplicativos de celular.
Principais características:
Instalável: O usuário pode "instalar" o site na tela inicial do seu celular ou computador como se fosse um aplicativo nativo, sem precisar passar por uma loja de aplicativos (App Store ou Play Store).
Offline (Service Worker): Graças aos Service Workers, a aplicação pode armazenar arquivos em cache, permitindo que o aplicativo abra e funcione mesmo quando o usuário estiver sem internet ou com uma conexão muito instável.
Responsividade: A interface se adapta perfeitamente a qualquer tamanho de tela, seja no celular, tablet ou desktop, garantindo uma boa navegação.
manifest.json: É um arquivo de configuração no formato JSON que informa ao navegador sobre a aplicação web (como nome, ícones, cores de tema e de fundo). É ele que permite que o navegador mostre o prompt de "Adicionar à Tela Inicial".
Service Worker: É um script em JavaScript que o navegador roda em segundo plano, separado da página web. Ele atua como um "proxy" de rede, interceptando requisições, gerenciando o cache e viabilizando o funcionamento offline.

--------------------------------------------------------------------------------
3. Como rodar o projeto localmente
Para testar este projeto em sua máquina local, siga os passos abaixo:
Clone o repositório ou baixe os arquivos para o seu computador.
Abra a pasta do projeto em um editor de código (como o VS Code).
Inicie um servidor local. Você pode fazer isso de duas formas:
Usando a extensão Live Server (VS Code): Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".
Ou rodando um servidor local via terminal (ex: Node.js/http-server ou Python):
Acesse o endereço http://localhost:8080 (ou a porta informada pelo servidor) no seu navegador. Nota: Para testar o Service Worker e as funcionalidades PWA localmente, o uso do localhost ou de um servidor local é obrigatório, pois não funcionam abrindo o arquivo HTML diretamente (file://).

--------------------------------------------------------------------------------
4. Como fazer o deploy
A aplicação foi publicada utilizando a plataforma Netlify. Abaixo está o passo a passo realizado:
Upload do Projeto: Acessei o painel do Netlify e fiz login. Fui até a seção de "Sites" e arrastei a pasta do meu projeto finalizado (contendo o index.html, manifest.json, service-worker.js, etc.) para a área de upload manual (Deploy manually).
Configuração: Após o upload, o Netlify gerou um link aleatório. Fui em "Site settings" > "Domain management" > "Options" > "Edit site name" para alterar a URL para algo mais amigável, seguindo o padrão da atividade (buscacep-joaopaulo-nr.netlify.app). Como as PWAs exigem conexão segura, o Netlify automaticamente fornece o certificado HTTPS necessário.
Link final da aplicação: 👉 [https://buscacep-joaopaulo.netlify.app](https://buscacep-joaopaulo.netlify.app/)
