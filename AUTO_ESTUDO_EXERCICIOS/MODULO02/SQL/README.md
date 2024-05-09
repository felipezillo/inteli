Este documento descreve o modelo lógico de banco de dados relacional desenvolvido para atender aos requisitos definidos pelo parceiro desde a primeira sprint. O modelo foi criado utilizando o formato XML e pode ser visualizado e implementado em sistemas de gerenciamento de banco de dados compatíveis com SQL.

# Objetivo
O objetivo deste modelo é representar as relações entre usuários e seus animais de estimação, capturando informações relevantes sobre os usuários, seus animais de estimação e os motivos pelos quais possuem ou não possuem animais de estimação.

## Entidades e Atributos
### Tabela: users
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** |  Identificador único do usuário (PK) | Varchar
**email** | Endereço de e-mail do usuário | Varchar
**password** | Senha do usuário (criptografada) | Varchar 
**researcher** | Indica se o usuário é um pesquisador | Boolean / Binary

### Tabela: user_forms
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único do formulário do usuário (PK) | Varchar
**id_users** | Chave estrangeira referenciando a tabela users (FK) | Varchar
**age** | Idade do usuário | Integer
**gender** | Gênero do usuário | Varchar
**education** | Nível de escolaridade do usuário | Varchar / Selection
**home_type** | Tipo de residência do usuário | Varchar / Selection
**family** | Composição familiar do usuário (que moram junto) | Varchar
**family_income**  | Renda familiar do usuário | Varchar / Selection
**home_members** | Número de membros na residência do usuário | Integer
**full_name** | Nome completo do usuário | Varchar
**social_name** | Nome social do usuário | Varchar
**phone_number** | Número de telefone do usuário | Varchar
country: País de residência do usuário.
state: Estado de residência do usuário.
city: Cidade de residência do usuário.
neighborhood: Bairro de residência do usuário.
choice: Escolha do usuário (possíveis valores: has_dog, had_dog, want_to, dont_want).

### Tabela: has_dog_forms
id: Identificador único do formulário de usuário que possui um cachorro.
id_user: Chave estrangeira referenciando a tabela users.
name: Nome do cachorro.
gender: Gênero do cachorro.
owner: Proprietário do cachorro.
neutered: Indica se o cachorro foi castrado.
how_long: Tempo que o usuário possui o cachorro.
is_first: Indica se é o primeiro cachorro do usuário.
id_other_pets: Chave estrangeira referenciando a tabela other_pets.
dog_age: Idade do cachorro.
breed: Raça do cachorro.
where_got: Local onde o usuário obteve o cachorro.
payed: Indica se o usuário pagou pelo cachorro.
age_got: Idade do cachorro quando foi adotado.
dog_personality: Personalidade do cachorro.
id_why_dog: Chave estrangeira referenciando a tabela why_dog.
good_characteristics: Características positivas do cachorro.
involved_people: Pessoas envolvidas com o cachorro.
have_dog_cant_keep: Indica se o usuário possui um cachorro, mas não pode mais cuidar dele.
cant_keep_description: Descrição do motivo pelo qual o usuário não pode mais cuidar do cachorro.
veterinary_last_years: Quantidade de visitas ao veterinário nos últimos anos.
about: Descrição do cachorro caso alguém queira adotá-lo.

### Tabela: why_dog
id: Identificador único da razão pela qual o usuário possui um cachorro.
child_company: Indica se o cachorro é companhia para crianças.
adult_company: Indica se o cachorro é companhia para adultos.
appearance: Indica se o usuário gosta da aparência do cachorro.
dog_company: Indica se o cachorro é companhia para outros cachorros.
teach_responsibility: Indica se o cachorro ensina responsabilidade.
friends: Indica se o cachorro faz amigos.
protection: Indica se o cachorro oferece proteção.
help_old_owner: Indica se o cachorro ajuda um antigo proprietário.
save_life: Indica se o cachorro salvou uma vida.
cuteness: Indica se o cachorro é fofo.
he_chose_me: Indica se o cachorro escolheu o usuário.
gift: Indica se o cachorro foi um presente.
other: Outros motivos para possuir um cachorro.

### Tabela: had_dog_forms
id: Identificador único do formulário de usuário que já teve um cachorro.
id_users: Chave estrangeira referenciando a tabela users.
name: Nome do cachorro.
yours: Proprietário do cachorro.
how_long_with: Tempo que o usuário ficou com o cachorro.
is_first: Indica se é o primeiro cachorro do usuário.
other_pets: Indica se o usuário possui outros animais de estimação.
id_other_pets: Chave estrangeira referenciando a tabela other_pets.
age_got: Idade do cachorro quando foi adotado.
neutered: Indica se o cachorro foi castrado.
months_neutered: Meses desde a castração.
breed: Raça do cachorro.
where_got: Local onde o usuário obteve o cachorro.
price: Preço pago pelo cachorro.
id_why_dog: Chave estrangeira referenciando a tabela why_dog.
characteristics_keep: Características do cachorro que levaram o usuário a mantê-lo.
who_chose_name: Quem escolheu o nome do cachorro.
what_liked_most: O que o usuário mais gostou nas primeiras semanas do cachorro.
didnt_like: O que o usuário não gostou no cachorro.
vet: Quantidade de visitas ao veterinário.
vet_reasons: Motivos para visitas ao veterinário.
stop_living_with: Data em que o usuário parou de viver com o cachorro.
age_at_time: Idade do cachorro na época.
why_stopped: Motivos para parar de viver com o cachorro.
another_dog: Indica se o usuário possui outro cachorro.
why: Motivo para possuir outro cachorro.

### Tabela: other_pets
id: Identificador único de outros animais de estimação.
cats: Número de gatos do usuário.
dogs: Número de cachorros do usuário.
other: Outros animais de estimação do usuário.

# Relacionamentos
Um usuário pode preencher muitos formulários, mas cada formulário está associado a apenas um usuário. Portanto, a relação entre users e user_forms é 1:N (um para muitos).
Um usuário pode ter muitos motivos pelos quais possui um cachorro, e cada motivo pode estar associado a muitos usuários. Assim, a relação entre users e why_dog é N:N (muitos para muitos).
Cada formulário de usuário que possui um cachorro está associado a apenas um usuário, mas um usuário pode ter muitos formulários de cachorro. Portanto, a relação entre users e has_dog_forms é 1:N (um para muitos).
Cada formulário de usuário que já teve um cachorro está associado a apenas um usuário, mas um usuário pode ter muitos formulários de cachorro já tiveram. Portanto, a relação entre users e had_dog_forms é 1:N (um para muitos).
A tabela other_pets não possui relacionamentos diretos com outras tabelas, pois armazena apenas informações sobre os animais de estimação do usuário.
