START TRANSACTION;

	DROP TABLE IF EXISTS end;
   	DROP TABLE IF EXISTS stage_score;
	DROP TABLE IF EXISTS competition_rounds;
	DROP TABLE IF EXISTS competition_archers;
	DROP TABLE IF EXISTS competition;
	DROP TABLE IF EXISTS available_competition_rounds;
	DROP TABLE IF EXISTS round_stages;
	DROP TABLE IF EXISTS round;
	DROP TABLE IF EXISTS stage;
	DROP TABLE IF EXISTS round_type;
	DROP TABLE IF EXISTS bow;
	DROP TABLE IF EXISTS archer_classification;
	DROP TABLE IF EXISTS distance;
	DROP TABLE IF EXISTS archer;

	CREATE TABLE bow(
		type VARCHAR(30) PRIMARY KEY UNIQUE NOT NULL 	
	);
	CREATE TABLE archer_classification(
		classification VARCHAR(50) PRIMARY KEY UNIQUE NOT NULL
	);

	CREATE TABLE distance (
		distance INT PRIMARY KEY NOT NULL UNIQUE
	);

	CREATE TABLE archer (
		id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
		name VARCHAR(50) NOT NULL,
		classification_type VARCHAR(50) NOT NULL,
		birthdate DATE NOT NULL,
		gender VARCHAR(10) NOT NULL,
		FOREIGN KEY (classification_type) REFERENCES archer_classification(classification)
	);


	CREATE TABLE round_type (
		id VARCHAR(3) PRIMARY KEY UNIQUE NOT NULL,
		ends INT NOT NULL,
		target_diameter INT NOT NULL
	);

	CREATE TABLE stage (
		id INT NOT NULL UNIQUE AUTO_INCREMENT,
		round_type VARCHAR(3) NOT NULL,
		distance INT NOT NULL,
		FOREIGN KEY (round_type) REFERENCES round_type(id),
		FOREIGN KEY (distance) REFERENCES distance(distance)
	);

	CREATE TABLE round (
		name VARCHAR(20) PRIMARY KEY UNIQUE NOT NULL,
		total_arrows INT NOT NULL,
		possible_score INT NOT NULL,
		is_valid BOOLEAN NOT NULL DEFAULT true,
		invalidation_date DATE DEFAULT NULL
	);

	CREATE TABLE round_stages (
		round_name VARCHAR(20) NOT NULL,
		stage_id INT NOT NULL,
		FOREIGN KEY (round_name) REFERENCES round(name),
		FOREIGN KEY (stage_id) REFERENCES stage(id)
	);


	CREATE TABLE available_competition_rounds(
		id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
		round_name VARCHAR(20) NOT NULL,
		archer_classification VARCHAR(50) NOT NULL,
		bow_type VARCHAR(30) NOT NULL,
		FOREIGN KEY (round_name) REFERENCES round(name),
		FOREIGN KEY (archer_classification) REFERENCES archer_classification(classification),
		FOREIGN KEY (bow_type) REFERENCES bow(type)
	);


	CREATE TABLE competition(
		id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
		name VARCHAR(50),
		is_club_championship BOOLEAN NOT NULL,
		date DATE NOT NULL
	);

	CREATE TABLE competition_rounds(
		id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
		competition_id INT NOT NULL,
		round_name VARCHAR(20) NOT NULL,
		FOREIGN KEY (round_name) REFERENCES round(name),
		FOREIGN KEY (competition_id) REFERENCES competition(id)
	);

	CREATE TABLE competition_archers(
		id INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,	
		competition_id INT NOT NULL,
		archer_id INT NOT NULL,
		FOREIGN KEY (competition_id) REFERENCES competition(id),
		FOREIGN KEY (archer_id) REFERENCES archer(id)
	);

	CREATE TABLE stage_score (
		id INT UNIQUE NOT NULL AUTO_INCREMENT,
		date_played DATETIME NOT NULL DEFAULT NOW(),
		is_competition_score BOOLEAN NOT NULL,
		competition_id INT,						
		archer_id INT NOT NULL,							
		round_name VARCHAR(20) NOT NULL,						
		stage_id INT NOT NULL,				
		bow_type VARCHAR(30) NOT NULL,
		played_round BOOLEAN NOT NULL DEFAULT FALSE,
		stage_total INT NOT NULL DEFAULT 0,
		is_verified boolean default false,
		FOREIGN KEY (competition_id) REFERENCES competition(id),
		FOREIGN KEY (archer_id) REFERENCES archer(id),
		FOREIGN KEY (round_name) REFERENCES round(name),
		FOREIGN KEY (stage_id) REFERENCES stage(id),
		FOREIGN KEY (bow_type) REFERENCES bow(type)
	);

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
		end_total INT NOT NULL DEFAULT 0,
		FOREIGN KEY (stage_score_id) REFERENCES stage_score(id)
	);
	
COMMIT;