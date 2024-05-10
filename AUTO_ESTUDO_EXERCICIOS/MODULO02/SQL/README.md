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
**country** | País de residência do usuário | Varchar 
**state** | Estado de residência do usuário | Varchar
**city** | Cidade de residência do usuário | Varchar
**neighborhood** | Bairro de residência do usuário | Varchar
**choice** | Escolha do usuário (possíveis valores: has_dog, had_dog, want_to, dont_want) | Varchar / Selection

### Tabela: contact_user_forms
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único do formulário de contatos (PK) | Varchar
**id_users** | Chave estrangeira referenciando a tabela users (FK) | Varchar
**full_name** | Nome completo do usuário | Varchar
**social_name** | Nome social do usuário | Varchar
**phone** | Número de telefone do cliente | Varchar

### Tabela: has_dog_forms
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único do formulário de usuário (PK) | Varchar
**id_user** | Chave estrangeira referenciando a tabela users (FK) | Varchar
**name** | Nome do cachorro | Varchar
**gender** | Gênero do cachorro | Varchar / Selection
**owner** | Proprietário do cachorro | Varchar
**neutered** | Indica se o cachorro foi castrado | Boolean / Binary
**how_long** | Tempo que o usuário possui o cachorro | Integer
**is_first** | Indica se é o primeiro cachorro do usuário | Boolean / Binary
**id_other_pets** | Chave estrangeira referenciando a tabela other_pets (FK) | Varchar
**dog_age** | Idade do cachorro | Integer
**breed** | Raça do cachorro | Varchar
**where_got** | Local onde o usuário obteve o cachorro | Varchar / Selection
**payed** | Indica se o usuário pagou pelo cachorro | Boolean / Binary
**age_got** | Idade do cachorro quando foi adotado ou comprado | Integer
**dog_personality** | Personalidade do cachorro | Text
**id_why_dog** | Chave estrangeira referenciando a tabela why_dog (FK) | Varchar
**good_characteristics** | Características positivas do cachorro | Text
**involved_people** | Pessoas envolvidas com a decisão de ter cachorro | Varchar
**have_dog_cant_keep** | Indica se o usuário possui um cachorro, mas não pode mais cuidar dele | Boolean / Binary
**cant_keep_description** | Descrição do motivo pelo qual o usuário não pode mais cuidar do cachorro | Text
**veterinary_last_years** | Quantidade de visitas ao veterinário nos últimos anos | Integer
**about** | Descrição do cachorro caso alguém queira adotá-lo | Text


### Tabela: had_dog_forms
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único do formulário de usuário que já teve um cachorro (PK) | Varchar
**id_users** | Chave estrangeira referenciando a tabela users (FK) | Varchar
**name** | Nome do cachorro | Varchar
**yours** | Proprietário do cachorro | Varchar
**how_long_with** | Tempo que o usuário ficou com o cachorro | Integer
**is_first** | Indica se é o primeiro cachorro do usuário | Boolean / Binary
**other_pets** | Indica se o usuário possui outros animais de estimação | Boolean / Binary
**id_other_pets** | Chave estrangeira referenciando a tabela other_pets (FK) | Varchar
**age_got** | Idade do cachorro quando foi adotado | Integer
**neutered** | Indica se o cachorro foi castrado | Boolean / Binary
**months_neutered** | Meses que tinha ao ser castrado | Integer
**breed** | Raça do cachorro | Varchar
**where_got** | Local onde o usuário obteve o cachorro | Varchar
**price** | Preço pago pelo cachorro | Integer
**id_why_dog** | Chave estrangeira referenciando a tabela why_dog (FK) | Varchar
**characteristics_keep** | Características do cachorro que levaram o usuário a mantê-lo | Text
**who_chose_name** | Quem escolheu o nome do cachorro | Varchar / Selection
**what_liked_most** | O que o usuário mais gostou nas primeiras semanas do cachorro | Text
**didnt_like** | O que o usuário não gostou no cachorro | Text
**vet** | Quantidade de visitas ao veterinário | Integer
**vet_reasons** | Motivos para visitas ao veterinário | Text
**stop_living_with** | Data em que o usuário parou de viver com o cachorro | Date
**age_at_time** | Idade do cachorro na época | Integer
**why_stopped** | Motivos para parar de viver com o cachorro | Text
**another_dog** | Indica se o usuário teria outro cachorro | Boolean / Binary 
**why** | Motivo para possuir outro cachorro | Text

### Tabela: never_had_forms
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único da tabela | Varchar
**id_users** | Chave estrangeira referenciando a tabela users (FK) | Varchar
**dog_size** | Porte do cachorro | Varchar
**fur** | Tipo de pelagem do cachorro | Varchar
**color_preference** | Cor preferida da pelagem do cachorro | Varchar
**gender** | Gênero do cachorro | Varchar / Selection
**age** | Indica a idade do cachorro | Integer
**breed** | Indica a raça do cachorro | Varchar
**id_why_have_dog** | Chave estrangeira referenciando a tabela why_have_dog (FK) | Varchar
**name** | Indica o nome que o usuário tem em mente para o cão | Varchar
**why_name** | Indica o motivo da escolha do nome | Varchar
**buy** | Indica se o usuário deseja comprar um cachorro | Boolean / Binary
**adopt** | Indica se o usuário deseja adotar um cachorro | Boolean / Binary
**when_include** | Indica se já tem previsão de obter o cachorro | Date
**expected_personality** | Indica qual a personalidade esperada do cão | Text
**dog_expenses** | Indica se o usuário já pesquisou sobre as despesas | Boolean / Binary
**dog_expenses_value** | Indica o valor cotado pelo usuário | Decimal

### Tabela: why_dog
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único da razão pela qual o usuário possui um cachorro (PK) | Varchar 
**child_company** | Indica se o cachorro é para companhia para crianças | Boolean / Selection
**adult_company** | Indica se o cachorro é para companhia para adultos | Boolean / Selection
**appearance** | Indica se é pela aparência do cachorro | Boolean / Selection
**dog_company** | Indica se o cachorro é companhia para outros cachorros | Boolean / Selection
**teach_responsibility** | Indica se é para ensinar responsabilidade | Boolean / Selection
**friends** | Indica se é por influência de amigos | Boolean / Selection
**protection** | Indica se é para proteção do lar | Boolean / Selection
**help_old_owner** | Indica se o cachorro ajuda o antigo proprietário | Boolean / Selection
**save_life** | Indica se é por ter salvado uma vida | Boolean / Selection
**cuteness** | Indica se é porque o cachorro é fofo | Boolean / Selection
**he_chose_me** | Indica se o cachorro escolheu o usuário | Boolean / Selection
**gift** | Indica se o cachorro foi um presente | Boolean / Selection
**other** | Outros motivos para possuir um cachorro | Text

### Tabela: why_have_dog
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único da razão pela qual o usuário quer ter cachorro (PK) | Varchar
**child_company** | Indica se o cachorro é para companhia para crianças | Boolean / Binary
**adult_company** | Indica se o cachorro é para companhia para adultos | Boolean / Binary
**parents_had** | Indica se o cachorro é se o cachorro é porque os pais tinham | Boolean / Binary
**teach_responsibility** | Indica se o cachorro é para ensinar responsabilidade | Boolean / Binary
**friends_have** | Indica se é porque os amigos também têm cachorros | Boolean / Binary
**protection** | Indica se o cachorro é para proteção do lar | Boolean / Binary
**tv** | Indica se é porque viu algo na televisão | Boolean / Binary
**other** | Outros motivos para possuir um cachorro | Text

### Tabela: other_pets
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único de outros animais de estimação (PK) | Varchar
**cats** | Número de gatos do usuário | Integer
**dogs** | Número de cachorros do usuário | Integer
**other** | Outros animais de estimação do usuário | Integer

### Tabela: dont_want_forms
Coluna   | Descrição | Tipo de Dado 
--------- | --------- | --------
**id** | Identificador único do formulário para quem não quer cachorro (PK) | Varchar
**id_users** | Chave estrangeira referenciando a tabela users (FK) | Varchar
**why** | Motivo do usuário não querer cães | Text

# Relacionamentos
Um usuário pode preencher muitos formulários, mas cada formulário está associado a apenas um usuário. Portanto, a relação entre users e user_forms é 1:N (um para muitos).
Um usuário pode ter muitos motivos pelos quais possui um cachorro, e cada motivo pode estar associado a muitos usuários. Assim, a relação entre users e why_dog é N:N (muitos para muitos).
Cada formulário de usuário que possui um cachorro está associado a apenas um usuário, mas um usuário pode ter muitos formulários de cachorro. Portanto, a relação entre users e has_dog_forms é 1:N (um para muitos).
Cada formulário de usuário que já teve um cachorro está associado a apenas um usuário, mas um usuário pode ter muitos formulários de cachorro já tiveram. Portanto, a relação entre users e had_dog_forms é 1:N (um para muitos).
A tabela other_pets não possui relacionamentos diretos com outras tabelas, pois armazena apenas informações sobre os animais de estimação do usuário.
