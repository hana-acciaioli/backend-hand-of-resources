-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS odd_cartoons;
DROP TABLE IF EXISTS silly_animals;

create table odd_cartoons (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
	catch_phrase VARCHAR,
	avatar VARCHAR
);

INSERT INTO odd_cartoons(name, catch_phrase, avatar) 
VALUES
 ('The rigid nerd','Mandatory user-facing protocol', 'https://robohash.org/abomnisassumenda.png?size=50x50&set=set1'),
 ( 'The pessimst','Devolved interactive contingency', 'https://robohash.org/ipsumdelenitiid.png?size=50x50&set=set1'),
 ( 'The woke analyst','Adaptive asynchronous projection', 'https://robohash.org/istequibusdamquod.png?size=50x50&set=set1'),
 ( 'The troll','Assimilated web-enabled orchestration', 'https://robohash.org/molestiasdebitisesse.png?size=50x50&set=set1'),
 ( 'The workoholic manager','Future-proofed demand-driven workforce', 'https://robohash.org/rationereprehenderittotam.png?size=50x50&set=set1');

 create table silly_animals (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50),
	color VARCHAR(50),
	animal_type VARCHAR(50)
);
insert into silly_animals (name, color, animal_type) 
values 
('Bell', 'Khaki', 'Seven-banded armadillo'),
 ('Helenelizabeth', 'Red', 'North American red fox'),
 ('Korella', 'Purple', 'Blue shark'),
 ('Aharon', 'Purple', 'Swamp deer'),
 ('Alika', 'Turquoise', 'Ferret, black-footed'),
 ('Billy', 'Green', 'Macaw, red and blue');