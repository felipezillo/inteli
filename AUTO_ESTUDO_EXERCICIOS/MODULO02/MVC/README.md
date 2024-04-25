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
- Users:
  É o controlador que irá cuidar dos usuários, responsável por listar as informações e registrá-las, informar o usuário o que for necessário, cadastrar um usuário novo e logar o usuário no site. Cada uma dessas se relaciona com uma ou mais páginas do site, representadas nas views, assim como cada método também se relaciona com o modelo "Users" descrito acima.

- Forms:
  São os formulários que deverão ser respondidos pelo usuário, sendo o controlador responsável por apresentar as informações/perguntas na tela e coletar as respostas do usuário, armazenando-as no banco de dados.

### Views (Views):
- Home Page:
  É a página inicial que será exibida pela aplicação. Nela estarão contidos: um header, um local onde haverá informações sobre o INSPA e um local onde haverá informações sobre o projeto Abandono - em si.

- Formulário:
  É a página que serão exibidos os formulários a serem respondidos pelo usuário...

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

