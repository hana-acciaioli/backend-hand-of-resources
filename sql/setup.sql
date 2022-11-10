-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS odd_cartoons;

create table odd_cartoons (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
	catch_phrase VARCHAR,
	avatar VARCHAR
);

INSERT INTO odd_cartoons(name, catch_phrase, avatar)
values ('The rigid nerd','Mandatory user-facing protocol', 'https://robohash.org/abomnisassumenda.png?size=50x50&set=set1');
values ( 'The pessimst','Devolved interactive contingency', 'https://robohash.org/ipsumdelenitiid.png?size=50x50&set=set1');
values ( 'The woke analyst','Adaptive asynchronous projection', 'https://robohash.org/istequibusdamquod.png?size=50x50&set=set1');
values ( 'The troll','Assimilated web-enabled orchestration', 'https://robohash.org/molestiasdebitisesse.png?size=50x50&set=set1');
values ( 'The workoholic manager','Future-proofed demand-driven workforce', 'https://robohash.org/rationereprehenderittotam.png?size=50x50&set=set1');