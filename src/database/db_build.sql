BEGIN;

DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  post VARCHAR(255) NOT NULL
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO posts (title , post) VALUES
('BUTTER CHICKEN---7.95€', 'Peito de frango com tomate,natas e manteiga'),
('BUTTER LAMB---8.95€','Borregho com tomate,natas e manteiga'),
('CHICKEN MANGO ---7.45€', 'frago com manga e natas'),
('LAMB MANGO   ---8.45€', 'Borrego com manga e natas'),
('ARROZ DE PATO ---9.45€', 'Duck Rice');

COMMIT;
