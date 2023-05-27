-- create a transaction where upon changing any of the end scores, and therefore the end totals, the stage score entry also updates it's stage total field. 


-- select all stages shot by a given archer (archer_id) --
SELECT * FROM 
	(SELECT sq.archer_id, ss.competition_id, ss.round_name, ss.stage_id, ss.bow_type, ss.stage_total FROM 
		(SELECT ss.archer_id, e.stage_score_id,  e.end_total 
		FROM end AS e
		INNER JOIN stage_score AS ss ON e.stage_score_id = ss.id
		WHERE ss.archer_id = 28) as sq
		INNER JOIN stage_score AS ss
		ON sq.stage_score_id=ss.id) AS ssq
	INNER JOIN stage 
	ON stage.id=ssq.stage_id
GROUP BY ssq.stage_id        
ORDER BY round_name, stage_total DESC 


-- see all ends and their scores
SELECT sq.archer_id, ss.competition_id, ss.round_name, ss.stage_id, ss.bow_type, sq.end_total FROM 
	(SELECT ss.archer_id, e.stage_score_id, e.end_total 
	FROM end AS e
	INNER JOIN stage_score AS ss ON e.stage_score_id = ss.id
	WHERE ss.archer_id = 28) as sq
	INNER JOIN stage_score AS ss
	ON sq.stage_score_id=ss.id

-- Look up round_scores for an archer (archer_id, round_name)
SELECT date_played, id, competition_id, round_name, count(stage_id) AS stages_count, bow_type, sum(stage_total) AS total_round_score FROM archerydb.stage_score 
WHERE archer_id=857 AND round_name="AA50/1440"
GROUP BY competition_id
BETWEEN 2024-01-12 AND 2024-01-14
ORDER BY total_round_score DESC

-- Look up archers best score for a round (archer_id, round_name)
SELECT date_played, id, competition_id, round_name, count(stage_id) AS stages_count, bow_type, sum(stage_total) AS total_round_score FROM archerydb.stage_score 
WHERE archer_id=857 AND round_name="AA50/1440"
GROUP BY competition_id
BETWEEN 2024-01-12 AND 2024-01-14
ORDER BY total_round_score DESC
LIMIT 1

-- Look up ALL rounds and their scores and who shot the highest scoring round.
SELECT ss.date_played, ss.competition_id, ss.archer_id, ss.round_name, ss.bow_type, sum(ss.stage_total) AS round_total FROM archerydb.stage_score AS ss
GROUP BY competition_id, archer_id, round_name
ORDER BY round_total DESC

-- Look up all scores for a specific round and see who shot it -- 
SELECT ss.date_played, a.name, a.classification_type, a.gender, ss.competition_id, ss.round_name, ss.bow_type, sum(ss.stage_total) AS round_total FROM archerydb.stage_score AS ss
INNER JOIN archer AS a
ON ss.archer_id = a.id
WHERE round_name="WA60/1440" 
GROUP BY competition_id, archer_id, round_name
ORDER BY round_total DESC

-- Look up definitions of rounds (round_name);
SELECT round_name, distance, ends, target_diameter FROM 
	(SELECT rs.round_name, rs.stage_id, s.round_type, s.distance FROM round_stages AS rs
	JOIN stage AS s
	ON rs.stage_id=s.id) as sq
JOIN round_type AS rt
ON sq.round_type=rt.id
WHERE round_name="Sydney"







SET profiling = 1;


CREATE INDEX date_played_index
ON stage_score (date_played);