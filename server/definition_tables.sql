-- PRIMARY DEFINITION TABLES --
-- ie. defining what makes up a competition --
CREATE TABLE bow(
	type VARCHAR(30) PRIMARY KEY UNIQUE NOT NULL 	
) 
 
CREATE TABLE archer_classification(
	classification VARCHAR(50) PRIMARY KEY UNIQUE NOT NULL
)

CREATE TABLE distance (
	distance INT PRIMARY KEY NOT NULL UNIQUE
)

CREATE TABLE archer (
	id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	classification_type VARCHAR(50) NOT NULL,
	birthdate DATE NOT NULL,
	gender VARCHAR(10) NOT NULL,
	FOREIGN KEY (classification_type) REFERENCES archer_classification(classification)
)


CREATE TABLE round_type (
	id VARCHAR(3) PRIMARY KEY UNIQUE NOT NULL,
	ends INT NOT NULL,
	target_diameter INT NOT NULL
)

CREATE TABLE stage (
	id INT NOT NULL UNIQUE AUTO_INCREMENT,
	round_type VARCHAR(3) NOT NULL,
	distance INT NOT NULL,
	FOREIGN KEY (round_type) REFERENCES round_type(id),
	FOREIGN KEY (distance) REFERENCES distance(distance)
)

CREATE TABLE round (
	name VARCHAR(20) PRIMARY KEY UNIQUE NOT NULL,
	total_arrows INT NOT NULL,
	possible_score INT NOT NULL
	-- isValid BOOLEAN NOT NULL
);

CREATE TABLE round_stages (
	round_name VARCHAR(20) NOT NULL,
	stage_id INT NOT NULL,
	FOREIGN KEY (round_name) REFERENCES round(name),
	FOREIGN KEY (stage_id) REFERENCES stage(id)
)


CREATE TABLE available_competition_rounds(
	id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
	round_name VARCHAR(20) NOT NULL,
	archer_classification VARCHAR(50) NOT NULL,
	bow_type VARCHAR(30) NOT NULL,
	FOREIGN KEY (round_name) REFERENCES round(name),
	FOREIGN KEY (archer_classification) REFERENCES archer_classification(classification),
	FOREIGN KEY (bow_type) REFERENCES bow(type)
)


-- defining new competitions --
CREATE TABLE competition(
	id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	name VARCHAR(50),
	is_club_championship BOOLEAN NOT NULL,
	date DATE NOT NULL
)

CREATE TABLE competition_rounds(
	id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	competition_id INT NOT NULL,
	round_name VARCHAR(20) NOT NULL,
	FOREIGN KEY (round_name) REFERENCES round(name),
	FOREIGN KEY (competition_id) REFERENCES competition(id)
)

CREATE TABLE competition_archers(
	id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,	
	competition_id INT NOT NULL,
	archer_id INT NOT NULL,
	FOREIGN KEY (competition_id) REFERENCES competition(id),
	FOREIGN KEY (archer_id) REFERENCES archer(id)
)




--Defining new scores--
CREATE TABLE stage_score (
	id INT UNIQUE NOT NULL AUTO_INCREMENT,
	datetime DATETIME NOT NULL DEFAULT current_timestamp(),
	is_competition_score BOOLEAN NOT NULL,
	competition_id INT,						
	archer_id INT NOT NULL,							
	round_name VARCHAR(20) NOT NULL,						
	stage_id INT NOT NULL,				
	bow_type VARCHAR(30) NOT NULL,
	played_round BOOLEAN NOT NULL DEFAULT FALSE,
	FOREIGN KEY (competition_id) REFERENCES competition(id),
	FOREIGN KEY (archer_id) REFERENCES archer(id),
	FOREIGN KEY (round_name) REFERENCES round(name),
	FOREIGN KEY (stage_id) REFERENCES stage(id),
	FOREIGN KEY (bow_type) REFERENCES bow(type)
)

--check if score exists / count entries--
SELECT count(id) AS "exists" FROM stage_score WHERE is_competition_score=1 AND competition_id=1 AND archer_id=3 AND round_name="WA90/1440" AND stage_id=1 AND bow_type="Recurve"


-- IF not equal 1 --
-- Insert a new stage score --
INSERT INTO stage_score (is_competition_score, competition_id, archer_id, round_name, stage_id, bow_type) VALUES 
(1,1,3,"WA90/1440", 1,"Recurve")


CREATE TABLE end(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	stage_score_id INT NOT NULL,
	end_number INT NOT NULL, 
	arrow1_score VARCHAR(2) NOT NULL, 			
	arrow2_score VARCHAR(2) NOT NULL,
	arrow3_score VARCHAR(2) NOT NULL,
	arrow4_score VARCHAR(2) NOT NULL,
	arrow5_score VARCHAR(2) NOT NULL,
	arrow6_score VARCHAR(2) NOT NULL,
	FOREIGN KEY (stage_score_id) REFERENCES stage_score(id)
)

-- get the id for a score --
SELECT id FROM stage_score WHERE is_competition_score=1 AND competition_id=1 AND archer_id=3 AND round_name="WA90/1440" AND stage_id=1 AND bow_type="Recurve"

-- insert the correct number of ends into the score --
INSERT INTO end (score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score) VALUES
(1, 1, '0', '0', '0', '0', '0', '0'),
(1, 2, '0', '0', '0', '0', '0', '0'),
(1, 3, '0', '0', '0', '0', '0', '0'),
(1, 4, '0', '0', '0', '0', '0', '0'),
(1, 5, '0', '0', '0', '0', '0', '0')
(1, 6, '0', '0', '0', '0', '0', '0')



-- As soon as we open up the scorecard 
-- query the database for a stage_score entry and the associated ends
-- populate the scorecard
-- if no entry, create score entry, create 5/6 ends and associate them with the stage_score id 
