
-- Select all from archer table --
SELECT * FROM archer

-- Create new archer --
INSERT INTO archer (name, birthdate, gender, classification_type) VALUES ('${name}', '${birthdate}', '${gender}', '${classification_type}' )

-- Update archer information --
UPDATE archer SET name = '${name}', birthdate = '${birthdate}', classification_type = '${classification_type}', gender = '${gender}' WHERE id = ${id}






-- select all competitions --
SELECT * FROM competition

-- select all players in a certian competition --
SELECT competition_archers.archer_id, archer.name, archer.classification_type, archer.gender, archer.birthdate FROM competition_archers INNER JOIN archer ON competition_archers.archer_id=archer.id WHERE competition_archers.competition_id = ${id}

-- adds an archer to a competition --
INSERT INTO competition_archers (competition_id, archer_id) VALUES ('${compId}', '${archerId}')

-- removes an archer from a competition --
DELETE FROM competition_archers WHERE competition_id=${compId} AND archer_id=${archerId}

-- creates a new competition --
INSERT INTO competition (name, date, is_club_championship) VALUES ('${name}', '${date}', '${clubChampionship ? 1 : 0}')

--  selects all rounds --
SELECT * FROM round

-- selects all rounds in a certain competition --
SELECT competition_rounds.competition_id, competition_rounds.round_name, round.total_arrows, round.possible_score FROM competition_rounds INNER JOIN round ON competition_rounds.round_name=round.name WHERE competition_id = ${competitionId}

-- adds rounds to a competition --
INSERT INTO competition_rounds (competition_id, round_name) VALUES(${competitionId}, '${roundName}')

-- removes rounds from a competition --
DELETE FROM competition_rounds WHERE competition_id=${competitionId} AND round_name='${roundName}'

-- selects a players rounds given their classification --
SELECT DISTINCT round_name FROM available_competition_rounds WHERE archer_classification='${archerClassification}'

-- selects a players available bows given a competition and round --
select distinct bow_type from available_competition_rounds where round_name="${roundName}" and archer_classification="${archerClassification}"

-- gets available states given a certain competition round --
SELECT round_stages.round_name, stage.round_type, stage.distance, stage.id FROM round_stages INNER JOIN stage ON round_stages.stage_id = stage.id WHERE round_name="${roundName}"

-- Determine which players can compete in a round --
SELECT a.name, a.classification_type, a.gender, a.id, ca.competition_id AS comp_id
	FROM archer AS a
	JOIN competition_archers AS ca
	ON a.id = ca.archer_id
	WHERE competition_id=${competitionId} AND a.classification_type IN (
		SELECT acr.archer_classification 
		FROM available_competition_rounds AS acr
		WHERE acr.round_name = "${roundName}"
	)








-- check if a score exists --
SELECT count(id) AS "exists" FROM stage_score WHERE is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} AND archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} AND bow_type="${bowType}"

-- adds a players score for a stage --
INSERT INTO stage_score (is_competition_score, competition_id, archer_id, round_name, stage_id, bow_type) VALUES 
	(${isCompetitionScore},${competitionId},${archerId},"${roundName}", ${stageId},"${bowType}")

-- gets the stage id for a competition --
SELECT id AS "stageScoreId" FROM stage_score WHERE is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} AND archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} AND bow_type="${bowType}"

-- adds end score to a stage --
INSERT INTO end (stage_score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score) VALUES
(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0'),
(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0'),
(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0'),
(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0'),
(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0'),
(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0')

-- gets a players scorecard given a specified competition round, stage and bow --
SELECT e.id, e.end_number, e.arrow1_score, e.arrow2_score, e.arrow3_score, e.arrow4_score, e.arrow5_score, e.arrow6_score 
FROM end AS e
INNER JOIN stage_score AS ss ON e.stage_score_id = ss.id
WHERE ss.is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} and archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} and bow_type="${bowType}"

-- updates the score for an end --
UPDATE end SET arrow1_score="${arrow1_score}", arrow2_score="${arrow2_score}", arrow3_score="${arrow3_score}", arrow4_score="${arrow4_score}", arrow5_score="${arrow5_score}", arrow6_score="${arrow6_score}" WHERE id=${id} and end_number=${end_number}


-- Find all players in a given competition
-- filter by who is shooting a specific competition round
SELECT a.name, a.classification_type, a.gender, ca.competition_id AS comp_id
FROM archer AS a
JOIN competition_archers AS ca
ON a.id = ca.archer_id
WHERE competition_id=1 AND a.classification_type IN (
	SELECT acr.archer_classification 
    FROM available_competition_rounds AS acr
    WHERE acr.round_name = "WA90/1440"
)

--check if score exists / count entries--
SELECT count(id) AS "exists" FROM stage_score WHERE is_competition_score=1 AND competition_id=1 AND archer_id=3 AND round_name="WA90/1440" AND stage_id=1 AND bow_type="Recurve"
SELECT id FROM stage_score WHERE is_competition_score=1 AND competition_id=1 AND archer_id=3 AND round_name="WA90/1440" AND stage_id=1 AND bow_type="Recurve"

-- select the ends for a given scorecard. 
SELECT e.end_number, e.arrow1_score, e.arrow2_score, e.arrow3_score, e.arrow4_score, e.arrow5_score, e.arrow6_score 
FROM end AS e
INNER JOIN stage_score AS ss ON e.stage_score_id = ss.id
WHERE ss.is_competition_score="" AND competition_id="" and archer_id="" AND round_name="" AND stage_id="" and bow_type="";
