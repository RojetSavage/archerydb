/*										**	
**				 						**
**	    	Adding Definitions			**
**										**
**										*/


INSERT INTO archer_classification (classification) VALUES 
	('Female Open'),
	('Male Open'),
	('50+ Female'),
	('50+ Male'),
	('60+ Female'),
	('60+ Male'),
	('70+ Female'),
	('70+ Male'),
	('Under 21 Female'),
	('Under 21 Male'),
	('Under 18 Female'),
	('Under 18 Male'),
	('Under 16 Female'),
	('Under 16 Male'),
	('Under 14 Female'),
	('Under 14 Male')

INSERT INTO bow (type) VALUES 
	('recurve'),
	('compound'), 
	('recurve longbow'), 
	('compound barebow'), 
	('longbow');

INSERT INTO round_type (id, ends, target_diameter) VALUES 
	('30*', 5, 80),   --30 *    id 1
	('30+', 5, 122),  --30 +    id 2
	('36*', 6, 80),   --36 *    id 3
	('36+', 6, 122)   --36 +    id 4

INSERT INTO distance (distance) VALUES
	(10),
	(20),
	(30),
	(40),
	(50),
	(60),
	(70),
	(90)

INSERT INTO archer (classification_type, name, birthdate, gender) VALUES 
('Female Open', 'Irene Moser', '1975-12-05', 'female'),
('Female Open', 'Kaitlin Brereton', '1975-12-05', 'female'),
('Male Open', 'Robert Hurley', '1993-10-12', 'male'),
('Male Open', 'Hayden Whiteford', '1997-12-05', 'male'),
('Male Open', 'Ari Fadida', '1996-11-18', 'male')

INSERT INTO stage (round_type, distance) VALUES
-- WA90/1440
('36+', 90),
('36+', 70),
('36*', 50),
('36*', 30),

-- WA70/1440
('36+', 70),
('36+', 60),
('36*', 50),
('36*', 30),

-- WA60/1440
('36+', 60),
('36+', 50),
('36*', 40),
('36*', 30),

-- AA50/1440
('36+', 50),
('36+', 40),
('36*', 30),
('36*', 20),

-- AA40/1440
('36+', 40),
('36+', 30),
('36*', 30),
('36*', 20),

-- Long Sydney
('30+', 90),
('30+', 70),
('30+', 60),
('30+', 50),

-- Sydney
('30+', 70),
('30+', 60),
('30+', 50),
('30+', 40),

-- Long Brisbane
('30+', 90),
('30+', 70),
('30*', 60),
('30*', 50),

-- Brisbane
('30+', 70),
('30+', 60),
('30*', 50),
('30*', 40),

-- Adelaide
('30+', 60),
('30+', 50),
('30*', 40),
('30*', 30),

-- Short Adelaide
('30+', 50),
('30+', 40),
('30*', 30),
('30*', 20),

-- Hobart
('30+', 90),
('30+', 70),
('30+', 50),

-- Perth
('30+', 70),
('30+', 60),
('30+', 50)


INSERT INTO round (name, total_arrows, possible_score) VALUES
('WA90/1440', 144, 1440),
('WA70/1440', 144, 1440),
('WA60/1440', 144, 1440),
('AA50/1440', 144, 1440),
('AA40/1440', 144, 1440),
('Long Sydney', 120, 1200),
('Sydney', 120, 1200),
('Long Brisbane', 120, 1200),
('Brisbane', 120, 1200),
('Adelaide', 120, 1200),
('Short Adelaide', 120, 1200),
('Hobart', 90, 900),
('Perth', 90, 900)


INSERT INTO round_stages (round_name, stage_id) VALUES
('WA90/1440',1),
('WA90/1440',2),
('WA90/1440',3),
('WA90/1440',4),
('WA70/1440',5),
('WA70/1440',6),
('WA70/1440',7),
('WA70/1440',8),
('WA60/1440',9),
('WA60/1440',10),
('WA60/1440',11),
('WA60/1440',12),
('AA50/1440',13),
('AA50/1440',14),
('AA50/1440',15),
('AA50/1440',16),
('AA40/1440',17),
('AA40/1440',18),
('AA40/1440',19),
('AA40/1440',20),
('Long Sydney',21),
('Long Sydney',22),
('Long Sydney',23),
('Long Sydney',24),
('Sydney',25),
('Sydney',26),
('Sydney',27),
('Sydney',28),
('Long Brisbane', 29),
('Long Brisbane',30),
('Long Brisbane',31),
('Long Brisbane',32),
('Brisbane',33),
('Brisbane',34),
('Brisbane',35),
('Brisbane',36),
('Adelaide',37),
('Adelaide',38),
('Adelaide',39),
('Adelaide',40),
('Short Adelaide',41),
('Short Adelaide',42),
('Short Adelaide',43),
('Short Adelaide',44),
('Hobart', 45),
('Hobart', 46),
('Hobart', 47),
('Perth',48),
('Perth',49),
('Perth',50)


INSERT INTO available_competition_rounds (round_name, archer_classification, bow_type) VALUES 
('WA90/1440', 'Male Open', 'Recurve'),
('WA90/1440', 'Male Open', 'Compound'),
('WA90/1440', 'Under 21 Male', 'Compound'),
('WA90/1440', 'Under 21 Male', 'Compound'),

('WA70/1440', 'Male Open', 'Recurve'),
('WA70/1440', 'Male Open', 'Compound Barebow'),
('WA70/1440', 'Female Open', 'Recurve'),
('WA70/1440', 'Female Open', 'Compound'),
('WA70/1440', '50+ Male', 'Recurve'),
('WA70/1440', '50+ Male', 'Compound'),
('WA70/1440', 'Under 21 Male', 'Recurve'),
('WA70/1440', 'Under 21 Male', 'Compound Barebow'),
('WA70/1440', 'Under 21 Female', 'Recurve'),
('WA70/1440', 'Under 21 Female', 'Compound'),
('WA70/1440', 'Under 18 Male', 'Recurve'),
('WA70/1440', 'Under 18 Male', 'Compound'),

('WA60/1440', 'Male Open', 'Longbow'),
('WA60/1440', 'Female Open', 'Recurve'),
('WA60/1440', 'Female Open', 'Compound Barebow'),
('WA60/1440', '50+ Male', 'Recurve'),
('WA60/1440', '50+ Male', 'Compound Barebow'),
('WA60/1440', '50+ Female', 'Recurve'),
('WA60/1440', '50+ Female', 'Compound'),
('WA60/1440', '50+ Female', 'Compound Barebow'),
('WA60/1440', '60+ Male', 'Recurve'),
('WA60/1440', '60+ Male', 'Compound'),
('WA60/1440', '60+ Male', 'Compound Barebow'),
('WA60/1440', 'Under 21 Male', 'Longbow'),
('WA60/1440', 'Under 21 Female', 'Recurve'),
('WA60/1440', 'Under 21 Female', 'Compound Barebow'),
('WA60/1440', 'Under 18 Male', 'Recurve'),
('WA60/1440', 'Under 18 Male', 'Compound'),
('WA60/1440', 'Under 18 Male', 'Compound Barebow'),
('WA60/1440', 'Under 18 Female', 'Recurve'),
('WA60/1440', 'Under 18 Female', 'Compound'),

('AA50/1440', 'Female Open', 'Longbow'),
('AA50/1440', '50+ Male', 'Longbow'),
('AA50/1440', '50+ Female', 'Longbow'),
('AA50/1440', '60+ Male', 'Longbow'),
('AA50/1440', '70+ Female', 'Recurve'),
('AA50/1440', '70+ Female', 'Compound'),
('AA50/1440', '70+ Female', 'Compound Barebow'),
('AA50/1440', '70+ Female', 'Longbow'),
('AA50/1440', 'Under 21 Female', 'Longbow'),
('AA50/1440', 'Under 18 Male', 'Longbow'),
('AA50/1440', 'Under 18 Female', 'Recurve'),
('AA50/1440', 'Under 18 Female', 'Compound Barebow'),
('AA50/1440', 'Under 18 Female', 'Longbow'),
('AA50/1440', 'Under 16 Male', 'Recurve'),
('AA50/1440', 'Under 16 Male', 'Compound'),
('AA50/1440', 'Under 16 Female', 'Recurve'),
('AA50/1440', 'Under 16 Female', 'Compound'),

('AA40/1440', 'Under 16 Male', 'Recurve'),
('AA40/1440', 'Under 16 Male', 'Compound Barebow'),
('AA40/1440', 'Under 16 Male', 'Longbow'),
('AA40/1440', 'Under 16 Female', 'Recurve'),
('AA40/1440', 'Under 16 Female', 'Compound Barebow'),
('AA40/1440', 'Under 16 Female', 'Longbow'),
('AA40/1440', 'Under 14 Male', 'Recurve'),
('AA40/1440', 'Under 14 Male', 'Compound'),
('AA40/1440', 'Under 14 Male', 'Compound Barebow'),
('AA40/1440', 'Under 14 Male', 'Longbow'),
('AA40/1440', 'Under 14 Female', 'Recurve'),
('AA40/1440', 'Under 14 Female', 'Compound'),
('AA40/1440', 'Under 14 Female', 'Compound Barebow'),
('AA40/1440', 'Under 14 Female', 'Longbow')


insert into archer (name, classification_type, birthdate, gender) values 
('Josie Aiers', 'Male Open', '2022-09-23', 'Female'),
('Cori Riccelli', 'Male Open', '2022-06-05', 'Male'),
('Adelle Clemenceau', 'Female Open', '2022-05-23', 'Female'),
('Katti Mulqueeny', '50+ Female', '2022-12-26', 'Female'),
('Olwen Stidson', '50+ Female', '2022-10-05', 'Female'),
('Devinne Gilcrist', '50+ Female', '2022-04-30', 'Female'),
('Nettie Royson', '50+ Female', '2022-11-21', 'Female'),
('Jeffrey Vasyatkin', 'Male Open', '2022-07-28', 'Male'),
('Amy Ferenczi', 'Male Open', '2022-09-27', 'Female'),
('Rusty Yarranton', 'Male Open', '2022-10-11', 'Male'),
('Burnard Rime', 'Male Open', '2022-05-22', 'Male'),
('Chas Stendall', '50+ Male', '2022-05-03', 'Male'),
('Eartha Goldsworthy', '50+ Male', '2022-09-02', 'Female'),
('Moira Balazin', '50+ Male', '2023-01-20', 'Female'),
('Ailee Delve', '50+ Male', '2022-08-25', 'Female'),
('Myrta Thirst', 'Female Open', '2022-08-31', 'Female'),
('Marvin Mangenet', 'Male Open', '2022-12-11', 'Male'),
('Rinaldo D''eye', 'Male Open', '2023-01-22', 'Male'),
('Denis Duffield', 'Male Open', '2022-12-25', 'Male'),
('Kakalina Eby', 'Male Open', '2022-10-16', 'Female'),
('Brock Caff', 'Male Open', '2023-01-18', 'Male'),
('Jenilee Romayne', 'Female Open', '2022-07-12', 'Female'),
('Addy Eardley', 'Male Open', '2023-03-31', 'Female'),
('Thatch Malacrida', 'Male Open', '2023-03-08', 'Male'),
('Matthias Bergeon', 'Male Open', '2023-03-31', 'Male'),
('Jeddy McGuire', 'Male Open', '2022-07-12', 'Male'),
('Hedvig Absolon', 'Male Open', '2023-03-26', 'Female'),
('Davidson Millwater', 'Male Open', '2023-01-28', 'Male'),
('Morie Davys', 'Male Open', '2023-02-23', 'Male'),
('Winny Dugald', 'Male Open', '2022-08-15', 'Female'),
('Reinaldos Balloch', 'Male Open', '2022-11-24', 'Male'),
('Alisa Crippell', 'Male Open', '2023-02-02', 'Female'),
('Cherlyn Bondley', 'Male Open', '2022-07-21', 'Female'),
('Archibald Florey', 'Male Open', '2022-09-04', 'Male'),
('Eirena Pollicote', 'Male Open', '2022-07-30', 'Female'),
('Kasey Flatt', 'Under 16 Female', '2022-12-10', 'Female'),
('Sibby Tallis', 'Under 16 Female', '2023-03-25', 'Female'),
('Pauline Gong', 'Under 16 Female', '2022-10-21', 'Female'),
('Janene Tilt', 'Under 16 Female', '2022-07-25', 'Female'),
('Tilly Spellacy', 'Under 16 Female', '2022-10-29', 'Female'),
('Gwenore Scholtz', 'Under 16 Female', '2023-04-16', 'Female'),
('Franciskus Duddy', 'Male Open', '2022-09-07', 'Male'),
('Ashton Sharpin', 'Male Open', '2022-10-13', 'Male'),
('Courtney Wainscoat', 'Male Open', '2022-10-29', 'Male'),
('Janene Dorro', 'Female Open', '2022-09-02', 'Female'),
('Daryl McAndrew', 'Male Open', '2022-10-17', 'Male'),
('Joeann Custy', 'Male Open', '2023-01-22', 'Female'),
('Allix Hancell', 'Male Open', '2023-01-05', 'Female'),
('Josefina Yurmanovev', 'Male Open', '2022-10-17', 'Female'),
('Joletta Guillou', 'Male Open', '2022-12-13', 'Female'),
('Garald Coathup', 'Female Open', '2022-07-24', 'Male'),
('Andrej Drinkel', 'Female Open', '2023-02-15', 'Male'),
('Chester Pinock', 'Female Open', '2022-07-25', 'Male'),
('Tristam Faunt', 'Female Open', '2023-04-06', 'Male'),
('Patsy Windmill', 'Male Open', '2022-07-10', 'Male'),
('Boris Skoughman', 'Male Open', '2022-06-25', 'Male'),
('Junie Gonsalvo', 'Male Open', '2022-05-29', 'Female'),
('Cyndy Kivlin', 'Male Open', '2023-01-13', 'Female'),
('Ysabel Dufore', 'Male Open', '2023-02-03', 'Female'),
('Cchaddie Conklin', 'Male Open', '2022-06-04', 'Male'),
('Ginelle Vaney', 'Male Open', '2023-02-15', 'Female'),
('Jacquelyn MacMeekan', 'Male Open', '2022-07-01', 'Female'),
('Larry Davidovicz', 'Male Open', '2023-04-16', 'Male'),
('Jordain Brokenshire', 'Male Open', '2023-01-16', 'Female'),
('Neron French', 'Male Open', '2022-08-08', 'Male'),
('Rudolph Hoodlass', 'Male Open', '2022-07-28', 'Male'),
('Neville Butler-Bowdon', 'Male Open', '2023-01-26', 'Male'),
('Gard Calcraft', 'Female Open', '2023-03-27', 'Male'),
('Clemmie Offin', 'Female Open', '2022-08-26', 'Female'),
('Gawen Buddle', 'Female Open', '2023-03-20', 'Male'),
('Silas Callander', 'Female Open', '2022-07-18', 'Male'),
('Dorene Skeates', 'Female Open', '2023-01-07', 'Female'),
('Egbert Newlands', 'Female Open', '2023-02-12', 'Male'),
('Bertrando Badwick', 'Male Open', '2023-02-14', 'Male'),
('Jeni Treagus', 'Male Open', '2022-09-17', 'Female'),
('Ethelred McGreil', 'Male Open', '2022-07-06', 'Male'),
('Bernardine Pearsall', 'Male Open', '2022-12-04', 'Female'),
('Wynne Killelay', 'Male Open', '2022-12-30', 'Female'),
('Basil Milne', 'Under 21 Female', '2022-09-30', 'Male'),
('Cosmo McGiven', 'Under 21 Female', '2022-12-06', 'Male'),
('Sherman Englishby', 'Under 21 Female', '2023-02-02', 'Male'),
('Donaugh Allen', 'Under 21 Female', '2023-04-10', 'Male'),
('Kalle De Vuyst', 'Under 21 Female', '2022-12-05', 'Male'),
('Halsey Sloss', '70+ Female', '2022-08-01', 'Male'),
('Adiana Kearns', '70+ Female', '2022-06-16', 'Female'),
('Burk Goalley', '70+ Female', '2023-01-17', 'Male'),
('Andeee Pretor', '70+ Male', '2022-08-10', 'Female'),
('Myra Charity', '70+ Male', '2022-11-19', 'Female'),
('Shay Goldney', '70+ Male', '2023-02-15', 'Male'),
('Ninnetta Brompton', '70+ Male', '2022-08-06', 'Female'),
('Maximo Hayman', 'Male Open', '2022-05-10', 'Male'),
('Jada Tadman', 'Under 18 Female', '2023-01-23', 'Female'),
('Wolfy Tomasian', 'Under 18 Female', '2022-06-27', 'Male'),
('Audrie Reston', 'Under 18 Female', '2022-07-28', 'Female'),
('Barnie Malbon', 'Under 18 Female', '2022-11-11', 'Male'),
('Bobby Tuffs', 'Male Open', '2022-06-10', 'Male'),
('Arlana Meneely', 'Under 18 Male', '2023-03-27', 'Female'),
('Jori Reggiani', 'Under 18 Male', '2022-06-20', 'Female'),
('Cheryl Merington', 'Under 18 Male', '2022-10-30', 'Female'),
('Dannel Fronzek', 'Male Open', '2022-11-06', 'Male')










/*										**	
**				 						**
**	    	Adding Competitions			**
**										**
**										*/

INSERT INTO competition (name, is_club_championship, date) VALUES 
("Competition 1", false, "2023-04-17")


INSERT INTO competition_rounds VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4)

INSERT INTO competition_archers (competition_id, archer_id) VALUES 
(1, 3),			
(1, 4),			
(1, 5)




/*									**	
**									**
**			Adding Scores			**
**									**
**									*/

-- Set this score to using a UUID. By having the UUID when we create the score entry I can create and immeditaely associate the end score with it --

INSERT INTO stage_score (is_competition_score, competition_id, archer_id, round_name, stage_id, bow_type) VALUES 
(1, 1, 1, "WA90/1440", 1, "Recurve")

INSERT INTO end (stage_score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score) VALUES
	(uuid, 1, '0', '0', '0', '0', '0', '0'), 
	(uuid, 2, '0', '0', '0', '0', '0', '0'), 
	(uuid, 3, '0', '0', '0', '0', '0', '0'), 
	(uuid, 4, '0', '0', '0', '0', '0', '0'), 
	(uuid, 5, '0', '0', '0', '0', '0', '0'), 
	(uuid, 6, '0', '0', '0', '0', '0', '0')


START TRANSACTION
	INSERT INTO stage_score (id, is_competition_score, competition_id, archer_id, round_name, stage_id, bow_type) VALUES 
	(uuid, 1, 1, 1, "WA90/1440", 1, "Recurve");
	INSERT INTO end (stage_score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score) VALUES
		(uuid, 1, '0', '0', '0', '0', '0', '0'), 
		(uuid, 2, '0', '0', '0', '0', '0', '0'), 
		(uuid, 3, '0', '0', '0', '0', '0', '0'), 
		(uuid, 4, '0', '0', '0', '0', '0', '0'), 
		(uuid, 5, '0', '0', '0', '0', '0', '0'), 
		(uuid, 6, '0', '0', '0', '0', '0', '0')
COMMIT