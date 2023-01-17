-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS odd_cartoons;
DROP TABLE IF EXISTS silly_animals;
DROP TABLE IF EXISTS crazy_places;
DROP TABLE IF EXISTS used_cars;
DROP TABLE IF EXISTS cool_stores;

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

 create table crazy_places (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	latitude VARCHAR(50),
	longitude VARCHAR(50),
	time_zone VARCHAR(50)
);
insert into crazy_places (latitude, longitude, time_zone) 
values 
(62.3078106, 22.0530364, 'Europe/Helsinki'),
 (58.4536208, 33.3707377, 'Europe/Moscow'),
 (11.9704485, -86.0886366, 'America/Managua'),
 (60.053638, 29.9846651, 'Europe/Moscow'),
 (51.3854243, 20.9619096, 'Europe/Warsaw');

 create table used_cars (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	car VARCHAR(50),
	currency VARCHAR(50),
	year VARCHAR(50),
	color VARCHAR(50)
);
insert into used_cars (car, currency, year, color) 
VALUES 
('Aspire', 'Ruble', 1996, 'Turquoise'),
('4Runner', 'Rupiah', 1994, 'Yellow'),
('Mustang', 'Krona', 2006, 'Puce'),
('Town & Country', 'Dollar', 2008, 'Pink'),
('XG300', 'Yuan Renminbi', 2001, 'Turquoise');

create table cool_stores (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	company VARCHAR(50),
	department VARCHAR(50),
	item VARCHAR,
	price VARCHAR(50)
);

insert into cool_stores (company, department, item, price) 
values 
('Kuvalis Group', 'Clothing', 'shoe lace', '$4.60'),
 ('Feeney, Abbott and Bednar', 'Home', 'throw pillow', '$19.46'),
 ('Will, Mohr and Konopelski', 'Jewelry', 'nose ring', '$2.34'),
 ('Lueilwitz Group', 'Electronics', 'VHS camera', '$14.19'),
 ('Upton and Sons', 'Music', 'Beach Boys', '$14.34');