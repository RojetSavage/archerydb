import db from "../db.js";


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
	const { isCompetitionScore, competitionId, archerId, roundName, stageId, bowType } = req.body;

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
	const { stageScoreId } = req.body;

	db.query(`INSERT INTO end (stage_score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score) VALUES
	(${stageScoreId}, 1, '0', '0', '0', '0', '0', '0'), 
	(${stageScoreId}, 2, '0', '0', '0', '0', '0', '0'), 
	(${stageScoreId}, 3, '0', '0', '0', '0', '0', '0'), 
	(${stageScoreId}, 4, '0', '0', '0', '0', '0', '0'), 
	(${stageScoreId}, 5, '0', '0', '0', '0', '0', '0'), 
	(${stageScoreId}, 6, '0', '0', '0', '0', '0', '0')`, 
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

	db.query(`SELECT id AS "stageScoreId" FROM stage_score WHERE is_competition_score=${isCompetitionScore} AND competition_id=${competitionId} AND archer_id=${archerId} AND round_name="${roundName}" AND stage_id=${stageId} AND bow_type="${bowType}"`, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result)
		}
	})
}
