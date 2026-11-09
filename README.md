# Dev City 🎮

Pequeno projeto de estudo desenvolvido acompanhando uma videoaula,
com uma interface de seleção de personagens inspirada em GTA.

O objetivo foi praticar HTML, CSS e JavaScript, além de explorar
uma integração com inteligência artificial usando Puter.js.

## Funcionalidades

- Seleção dos personagens Lucia, Jason e CJ.
- Atualização da imagem, do nome e da cor do personagem selecionado.
- Escolha de uma foto do computador pelo botão de câmera.
- Integração experimental com IA para transformar a foto em uma
  ilustração inspirada na arte promocional de GTA.

## Tecnologias utilizadas

- HTML5: estrutura da página.
- CSS3: estilos, posicionamento e aparência dos personagens.
- JavaScript: eventos, manipulação do DOM e operações assíncronas.
- FileReader: leitura da foto selecionada.
- Puter.js: integração com o serviço de geração de imagens.
- Google Fonts: fonte Bangers.

## Como executar

1. Clone este repositório ou baixe os arquivos.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server, caso ainda não a tenha.
4. Clique com o botão direito em `index.html`.
5. Selecione “Open with Live Server”.
6. No navegador, clique nos avatares para trocar de personagem.

Para experimentar a integração com IA, clique na câmera,
selecione uma foto e conclua a autenticação no Puter,
caso seja solicitada.

O projeto não exige instalação de dependências com npm
nem configuração de um backend próprio.

## Status da integração com IA

A integração está em fase de testes e ainda precisa de
validação completa da geração e da exibição da imagem.

Seu funcionamento depende de acesso à internet, autenticação
no Puter e disponibilidade de uso na conta.

A transparência do fundo e o enquadramento da imagem gerada
também precisam ser verificados.

## Aprendizados

- Organização de arquivos HTML, CSS, JavaScript e imagens.
- Manipulação de elementos da página com JavaScript.
- Uso de eventos para responder às ações do usuário.
- Leitura de arquivos locais com FileReader.
- Uso de async/await e integração com serviços externos.

## Próximas melhorias

- Validar o fluxo completo de transformação da foto.
- Exibir um indicador durante a geração.
- Tratar erros e cancelamento da seleção de arquivo.
- Melhorar a adaptação do layout para telas menores.

## Créditos

Projeto desenvolvido para estudo a partir de uma videoaula.

Tema visual inspirado na série Grand Theft Auto,
da Rockstar Games.
