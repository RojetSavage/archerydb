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