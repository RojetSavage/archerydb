import db from "../db.js";

export const getAllCompetitions = async (req, res) => {

	db.query('SELECT * FROM competition', (error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}


export const getCompetitionPlayers = async (req, res) => {
	const { id } = req.body;
	console.log(id)
	db.query(`SELECT competition_archers.archer_id, archer.name, archer.classification_type, archer.gender, archer.birthdate FROM competition_archers INNER JOIN archer ON competition_archers.archer_id=archer.id WHERE competition_archers.competition_id = ${id}`, (error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const addArcherToCompetition = async (req, res) => {
	const { archerId, compId } = req.body;
	db.query(`INSERT INTO competition_archers (competition_id, archer_id) VALUES ('${compId}', '${archerId}')`, (error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const removeArcherFromCompetition = async (req, res) => {
	const { archerId, compId } = req.body;
	console.log(archerId, compId)
	db.query(`DELETE FROM competition_archers WHERE competition_id=${compId} AND archer_id=${archerId}`, (error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const addNewCompetition = async (req, res) => {
	const { name, date, clubChampionship } = req.body;

	db.query(`INSERT INTO competition (name, date, is_club_championship) VALUES ('${name}', '${date}', '${clubChampionship ? 1 : 0}')`, (error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const getAllCompetitionRounds = async (req, res) => {

	db.query(`SELECT * FROM round`, (error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const getCompetitionRounds = async (req, res) => {
	const { competitionId } = req.body;

	db.query(`SELECT competition_rounds.competition_id, competition_rounds.round_name, round.total_arrows, round.possible_score FROM competition_rounds INNER JOIN round ON competition_rounds.round_name=round.name WHERE competition_id = ${competitionId}`, 
	(error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const addRoundToCompetition = async (req, res) => {
	const { competitionId, roundName } = req.body;
	console.log(competitionId, roundName)


	db.query(`INSERT INTO competition_rounds (competition_id, round_name) VALUES(${competitionId}, '${roundName}')`, 
	(error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const removeRoundFromCompetition = async (req, res) => {
	const { competitionId, roundName } = req.body;
	console.log(competitionId, roundName)

	db.query(`DELETE FROM competition_rounds WHERE competition_id=${competitionId} AND round_name='${roundName}'`, 
	(error, result) => {
		if (error) {
			res.send(error)
		} else {
			console.log(result)
			res.send(result)
		}
	}) 
}

export const getPlayersAvailableRounds = async (req, res) => {
	const { archerClassification } = req.body;
	
	console.log(archerClassification)
	db.query(`SELECT DISTINCT round_name FROM available_competition_rounds WHERE archer_classification='${archerClassification}'`, 

	(error, result) => {
		if (error) {
			console.log(error)
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const getPlayersAvailableBows = async (req, res) => {
	const { roundName, archerClassification } = req.body;
	
	db.query(`select distinct bow_type from available_competition_rounds where round_name="${roundName}" and archer_classification="${archerClassification}"`, 
	(error, result) => {
		if (error) {
			console.log(error)
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}

export const getCompetitionStages = async (req, res) => {
	const { roundName } = req.body;

	console.log(roundName)
	db.query(`SELECT round_stages.round_name, stage.round_type, stage.distance, stage.id FROM round_stages INNER JOIN stage ON round_stages.stage_id = stage.id WHERE round_name="${roundName}"`, 

	(error, result) => {
		if (error) {
			console.log(error)
			res.send(error)
		} else {
			res.send(result)
		}
	}) 
}


