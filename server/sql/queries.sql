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
