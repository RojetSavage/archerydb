-- enumeration type data --

START TRANSACTION;

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
		('Under 14 Male');

	INSERT INTO bow (type) VALUES 
		('Recurve'),
		('Compound'), 
		('Recurve Barebow'), 
		('Compound Barebow'), 
		('Longbow');

	INSERT INTO round_type (id, ends, target_diameter) VALUES 
		('30*', 5, 80),
		('30+', 5, 122),
		('36*', 6, 80), 
		('36+', 6, 122);

	INSERT INTO distance (distance) VALUES
		(10),
		(20),
		(30),
		(40),
		(50),
		(60),
		(70),
		(90);

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
		('30+', 50);


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
	('Perth', 90, 900);


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
	('Perth',50);


	INSERT INTO available_competition_rounds (round_name, archer_classification, bow_type) VALUES 
	('WA90/1440', 'Male Open', 'Recurve'),
	('WA90/1440', 'Male Open', 'Compound'),
	('WA90/1440', 'Under 21 Male', 'Recurve'),
	('WA90/1440', 'Under 21 Male', 'Compound'),

	('WA70/1440', 'Male Open', 'Recurve Barebow'),
	('WA70/1440', 'Male Open', 'Compound Barebow'),
	('WA70/1440', 'Female Open', 'Recurve'),
	('WA70/1440', 'Female Open', 'Compound'),
	('WA70/1440', '50+ Male', 'Recurve'),
	('WA70/1440', '50+ Male', 'Compound'),
	('WA70/1440', 'Under 21 Male', 'Recurve Barebow'),
	('WA70/1440', 'Under 21 Male', 'Compound Barebow'),
	('WA70/1440', 'Under 21 Female', 'Recurve'),
	('WA70/1440', 'Under 21 Female', 'Compound'),
	('WA70/1440', 'Under 18 Male', 'Recurve'),
	('WA70/1440', 'Under 18 Male', 'Compound'),

	('WA60/1440', 'Male Open', 'Longbow'),
	('WA60/1440', 'Female Open', 'Recurve Barebow'),
	('WA60/1440', 'Female Open', 'Compound Barebow'),
	('WA60/1440', '50+ Male', 'Recurve Barebow'),
	('WA60/1440', '50+ Male', 'Compound Barebow'),
	('WA60/1440', '50+ Female', 'Recurve'),
	('WA60/1440', '50+ Female', 'Compound'),
	('WA60/1440', '50+ Female', 'Recurve Barebow'),
	('WA60/1440', '50+ Female', 'Compound Barebow'),
	('WA60/1440', '60+ Male', 'Recurve'),
	('WA60/1440', '60+ Male', 'Compound'),
	('WA60/1440', '60+ Male', 'Compound Barebow'),
	('WA60/1440', '60+ Male', 'Recurve Barebow'),
	('WA60/1440', '70+ Male', 'Recurve'),
	('WA60/1440', '70+ Male', 'Compound'),
	('WA60/1440', '70+ Male', 'Compound Barebow'),
	('WA60/1440', '70+ Male', 'Recurve Barebow'),
	('WA60/1440', 'Under 21 Male', 'Longbow'),
	('WA60/1440', 'Under 21 Female', 'Recurve Barebow'),
	('WA60/1440', 'Under 21 Female', 'Compound Barebow'),
	('WA60/1440', 'Under 18 Male', 'Recurve'),
	('WA60/1440', 'Under 18 Male', 'Compound'),
	('WA60/1440', 'Under 18 Male', 'Compound Barebow'),
	('WA60/1440', 'Under 18 Male', 'Recurve Barebow'),
	('WA60/1440', 'Under 18 Female', 'Recurve'),
	('WA60/1440', 'Under 18 Female', 'Compound'),

	('AA50/1440', 'Female Open', 'Longbow'),
	('AA50/1440', '50+ Male', 'Longbow'),
	('AA50/1440', '50+ Female', 'Longbow'),
	('AA50/1440', '60+ Male', 'Longbow'),
	('AA50/1440', '60+ Female', 'Recurve'),
	('AA50/1440', '60+ Female', 'Compound'),
	('AA50/1440', '60+ Female', 'Compound Barebow'),
	('AA50/1440', '60+ Female', 'Recurve Barebow'),
	('AA50/1440', '60+ Female', 'Longbow'),
	('AA50/1440', '70+ Female', 'Recurve'),
	('AA50/1440', '70+ Female', 'Recurve Barebow'),
	('AA50/1440', '70+ Female', 'Compound'),
	('AA50/1440', '70+ Female', 'Compound Barebow'),
	('AA50/1440', '70+ Female', 'Longbow'),
	('AA50/1440', 'Under 21 Female', 'Longbow'),
	('AA50/1440', 'Under 18 Male', 'Longbow'),
	('AA50/1440', 'Under 18 Female', 'Recurve Barebow'),
	('AA50/1440', 'Under 18 Female', 'Compound Barebow'),
	('AA50/1440', 'Under 18 Female', 'Longbow'),
	('AA50/1440', 'Under 16 Male', 'Recurve'),
	('AA50/1440', 'Under 16 Male', 'Compound'),
	('AA50/1440', 'Under 16 Female', 'Recurve'),
	('AA50/1440', 'Under 16 Female', 'Compound'),

	('AA40/1440', 'Under 16 Male', 'Recurve Barebow'),
	('AA40/1440', 'Under 16 Male', 'Compound Barebow'),
	('AA40/1440', 'Under 16 Male', 'Longbow'),
	('AA40/1440', 'Under 16 Female', 'Recurve Barebow'),
	('AA40/1440', 'Under 16 Female', 'Compound Barebow'),
	('AA40/1440', 'Under 16 Female', 'Longbow'),
	('AA40/1440', 'Under 14 Male', 'Recurve'),
	('AA40/1440', 'Under 14 Male', 'Compound'),
	('AA40/1440', 'Under 14 Male', 'Compound Barebow'),
	('AA40/1440', 'Under 14 Male', 'Recurve Barebow'),
	('AA40/1440', 'Under 14 Male', 'Longbow'),
	('AA40/1440', 'Under 14 Female', 'Recurve'),
	('AA40/1440', 'Under 14 Female', 'Compound'),
	('AA40/1440', 'Under 14 Female', 'Compound Barebow'),
	('AA40/1440', 'Under 14 Female', 'Recurve Barebow'),
	('AA40/1440', 'Under 14 Female', 'Longbow');

COMMIT;

