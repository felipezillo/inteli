# Arquitetura MVC
- Nome do Projeto: Abandono 0
- Descrição: Aplicação web para coletar dados de pessoas que possuem animais de estimação (pets) e apresentá-los intuitivamente aos pesquisadores.
- Arquitetura: MVC (Model-View-Controller)
- Ferramenta de Diagramação: draw.io

### Modelos (Models):
- users (id, nome, email, admin)
O modelo user relaciona-se ao Controller Users, de modo que é onde ficará registrado as informações dos usuários.

- respostas (id, id_user, pergunta, resposta)
O modelo respostas relaciona-se ao Controller Forms, de modo que é onde ficará registrado as respostas de cada pergunta respondida pelo usuário.


### Controladores (Controllers):
- Liste os controladores do seu projeto e suas responsabilidades.
- Users (
- Descreva as ações (methods) de cada controlador e seus parâmetros de entrada e saída.
- Explique como os controladores interagem com os modelos e views.

### Views (Views):
- Liste as views do seu projeto e sua função.

### Infraestrutura:

- Descreva os componentes de infraestrutura do seu projeto, como bancos de dados, APIs externas e outras dependências.
- Explique como a infraestrutura se integra à arquitetura MVC.


### Justifique as escolhas feitas e como elas impactam o projeto.
#### Implicações da Arquitetura:
Descreva as implicações da arquitetura em termos de escalabilidade, manutenção, testabilidade e outros aspectos importantes.

### Recursos Adicionais:
Documentação do Sails.js: https://github.com/balderdashy/sails
Tutorial do draw.io: https://m.youtube.com/watch?v=w3zm-wbmlpc
Exemplos de diagramas MVC: https://www.lucidchart.com/pages/templates

