-- Tabela: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    researcher BOOLEAN DEFAULT FALSE
);

-- Tabela: user_forms
CREATE TABLE user_forms (
    id SERIAL PRIMARY KEY,
    id_users INTEGER REFERENCES users(id),
    age INTEGER,
    gender VARCHAR,
    education VARCHAR,
    home_type VARCHAR,
    family VARCHAR,
    family_income VARCHAR,
    home_members INTEGER,
    full_name VARCHAR(255),
    social_name INTEGER,
    phone_number VARCHAR(40),
    country VARCHAR(30),
    state VARCHAR(255),
    city VARCHAR(255),
    neighborhood VARCHAR(255),
    choice VARCHAR(50)
);

-- Tabela: why_dog
CREATE TABLE why_dog (
    id SERIAL PRIMARY KEY,
    child_company BOOLEAN DEFAULT FALSE,
    adult_company BOOLEAN DEFAULT FALSE,
    appearance BOOLEAN DEFAULT FALSE,
    dog_company BOOLEAN DEFAULT FALSE,
    teach_responsibility BOOLEAN DEFAULT FALSE,
    friends BOOLEAN DEFAULT FALSE,
    protection BOOLEAN DEFAULT FALSE,
    help_old_owner BOOLEAN DEFAULT FALSE,
    save_life BOOLEAN DEFAULT FALSE,
    cuteness BOOLEAN DEFAULT FALSE,
    he_chose_me BOOLEAN DEFAULT FALSE,
    gift BOOLEAN DEFAULT FALSE,
    other TEXT
);

-- Tabela: other_pets
CREATE TABLE other_pets (
    id SERIAL PRIMARY KEY,
    cats INTEGER,
    dogs INTEGER,
    other INTEGER
);

-- Tabela: has_dog_forms
CREATE TABLE has_dog_forms (
    id SERIAL PRIMARY KEY,
    id_user INTEGER REFERENCES users(id),
    name VARCHAR(20),
    gender VARCHAR(10),
    owner VARCHAR(20),
    neutered BOOLEAN,
    how_long INTEGER,
    is_first BOOLEAN,
    id_other_pets INTEGER REFERENCES other_pets(id),
    dog_age INTEGER,
    breed VARCHAR(255),
    where_got VARCHAR(20),
    payed BOOLEAN,
    age_got INTEGER,
    dog_personality TEXT,
    id_why_dog INTEGER REFERENCES why_dog(id),
    good_characteristics VARCHAR(255),
    involved_people VARCHAR(255),
    have_dog_cant_keep BOOLEAN,
    cant_keep_description VARCHAR(255),
    veterinary_last_years INTEGER,
    about TEXT
);

-- Tabela: had_dog_forms
CREATE TABLE had_dog_forms (
    id SERIAL PRIMARY KEY,
    id_users INTEGER REFERENCES users(id),
    name VARCHAR(20),
    yours VARCHAR(30),
    how_long_with INTEGER,
    is_first BOOLEAN,
    other_pets INTEGER,
    id_other_pets INTEGER REFERENCES other_pets(id),
    age_got INTEGER,
    neutered BOOLEAN,
    months_neutered INTEGER,
    breed VARCHAR(255),
    where_got VARCHAR(30),
    price VARCHAR(60),
    id_why_dog INTEGER REFERENCES why_dog(id),
    characteristics_keep TEXT,
    who_chose_name VARCHAR(50),
    what_liked_most TEXT,
    didnt_like TEXT,
    vet INTEGER,
    vet_reasons TEXT,
    stop_living_with DATE,
    age_at_time INTEGER,
    why_stopped TEXT,
    another_dog BOOLEAN,
    why TEXT
);

-- Tabela: why_have_dog
CREATE TABLE why_have_dog (
    id SERIAL PRIMARY KEY,
    child_company BOOLEAN DEFAULT FALSE,
    adult_company BOOLEAN DEFAULT FALSE,
    parents_had BOOLEAN DEFAULT FALSE,
    teach_responsibility BOOLEAN DEFAULT FALSE,
    friends_have BOOLEAN DEFAULT FALSE,
    protection BOOLEAN DEFAULT FALSE,
    tv BOOLEAN DEFAULT FALSE,
    other TEXT
);

-- Tabela: never_had_forms
CREATE TABLE never_had_forms (
    id SERIAL PRIMARY KEY,
    id_users INTEGER REFERENCES users(id),
    dog_size VARCHAR(10),
    fur VARCHAR(10),
    color_preference VARCHAR(20),
    gender VARCHAR(10),
    age INTEGER,
    breed VARCHAR,
    id_why_have_dog INTEGER REFERENCES why_have_dog(id),
    name VARCHAR(50),
    why_name VARCHAR(50),
    buy BOOLEAN DEFAULT FALSE,
    adopt BOOLEAN DEFAULT FALSE,
    when_include DATE,
    expected_personality TEXT,
    dog_expenses BOOLEAN,
    dog_expenses_value DECIMAL
);

-- Tabela: dont_want_forms
CREATE TABLE dont_want_forms (
    id SERIAL PRIMARY KEY,
    id_users INTEGER REFERENCES users(id),
    why TEXT
);

-- Tabela: contact_user_forms
CREATE TABLE contact_user_forms (
    id SERIAL PRIMARY KEY,
    id_users INTEGER REFERENCES users(id),
    full_name VARCHAR(255),
    social_name VARCHAR(30),
    phone VARCHAR(30)
);