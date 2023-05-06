import db from "../db.js";
import { createInsertEndsQuery } from '../../utils/createQueries.js';

export const checkIfStageScoreExists = async (req, res) => {
	const { isCompetitionScore, competitionId, archerId, roundName, stageId, bowType } = req.body;
	console.log(isCompetitionScore, competitionId, archerId, roundName, stageId, bowType)

	db.query(`SELECT count(id) AS "exists" FROM stage_score WHERE is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} AND archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} AND bow_type="${bowType}"`, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result)
		}
	})
}

export const addStageScore = async (req, res) => {
	const { id, isCompetitionScore, competitionId, archerId, roundName, stageId, bowType } = req.body;

	db.query(`INSERT INTO stage_score (is_competition_score, competition_id, archer_id, round_name, stage_id, bow_type) VALUES 
	(${isCompetitionScore},${competitionId},${archerId},"${roundName}", ${stageId},"${bowType}")`, (err, result) => {
		if (err) {
			res.send(err)
		} else {

			res.send(result)
		}
	})
}

export const getStageId = async (req, res) => {
	const { isCompetitionScore, competitionId, archerId, roundName, stageId, bowType } = req.body;

	db.query(`SELECT id AS "stageScoreId" FROM stage_score WHERE is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} AND archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} AND bow_type="${bowType}"`, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result)
		}
	})
}

export const addEndsToStage = async (req, res) => {
	const { stageScoreId, roundType } = req.body;
	const query = createInsertEndsQuery(stageScoreId, roundType);

	db.query(query,
		(err, result) => {
			if (err) {
				res.send(err)
			} else {
				res.send(result)
			}
		})
}

export const getScorecard = async (req, res) => {
	const { isCompetitionScore, competitionId, archerId, roundName, stageId, bowType } = req.body;
	console.log(isCompetitionScore, competitionId, archerId, roundName, stageId, bowType)
	db.query(`
			SELECT e.id, e.end_number, e.arrow1_score, e.arrow2_score, e.arrow3_score, e.arrow4_score, e.arrow5_score, e.arrow6_score 
			FROM end AS e
			INNER JOIN stage_score AS ss ON e.stage_score_id = ss.id
			WHERE ss.is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} and archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} and bow_type="${bowType}";`,
	(err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result)
		}
	})
}

export const updateEnd = async(req, res) => {
	const { id, end_number, arrow1_score, arrow2_score,  arrow3_score,  arrow4_score,  arrow5_score,  arrow6_score } = req.body;	
	console.log(id, end_number, arrow1_score, arrow2_score,  arrow3_score,  arrow4_score,  arrow5_score,  arrow6_score)

	db.query(`UPDATE end SET arrow1_score="${arrow1_score}", arrow2_score="${arrow2_score}", arrow3_score="${arrow3_score}", arrow4_score="${arrow4_score}", arrow5_score="${arrow5_score}", arrow6_score="${arrow6_score}" WHERE id=${id} and end_number=${end_number}`, 

	(err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result)
		}
	});
}