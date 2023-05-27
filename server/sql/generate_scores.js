import jsonData from './insert_data.json' assert {type:"json"};
import fs from 'node:fs'
import { classificationRounds, stages } from './archeryData.js';
import { getRandomDate } from './utils.js'

function initializeWriteStream() {
	const scoresStream = fs.createWriteStream('./4 - insert_scores.txt');
	const endsStream = fs.createWriteStream('./5 - insert_ends.txt');

	return [endsStream, scoresStream];
}

//created hashmap of archers indexed by competition they played in for faster lookup.
function reformatCompetitionArchers(competitionArchers) {
	let archers = {};

	competitionArchers.forEach(archer => {
		if (archers[archer.competition_id]) {
			archers[archer.competition_id].push(archer.archer_id)
		} else {
			archers[archer.competition_id] = [archer.archer_id];
		}
	});
	return archers;
}

const competition_archers = reformatCompetitionArchers(jsonData.competition_archers)

function generateInsertScoreStatements(textStream, endsStream) {
	textStream.write("INSERT INTO stage_score (id, is_competition_score, competition_id, archer_id, round_name, stage_id, bow_type, played_round, stage_total) values \n");
	endsStream.write("INSERT INTO end (stage_score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score, end_total) values \n")
	
	let for_query_stage_score_id = 0;
	
	//for each competition
	//for each of that comp id's archers
	Object.keys(competition_archers).forEach(competition_id => {
		let for_query_competition_id = competition_id

		let competitionArcherIds = competition_archers[competition_id];

		//for each archer in that competition
		competitionArcherIds.forEach(compArcherId => {
			let for_query_archer_id = compArcherId;

			//get achers classification
			let archerInComp = jsonData.archers.find(archer => archer.id === compArcherId);
			
			//get the rounds that an archer can shoot
			let playersAvailableCompetitionRounds = classificationRounds[archerInComp.classification_type];

			//get the rounds in that competition
			playersAvailableCompetitionRounds.forEach(playersRound => {
				let for_query_round_name = playersRound[0];
				let for_query_bow_type = playersRound[2];
				
				// get the stages in that round
				let playersRoundStages = stages[for_query_round_name];

				// for each stage add the number of ends
				playersRoundStages.forEach(stage => {
					let for_query_stage_id = stage.id; 
					for_query_stage_score_id++;
					let for_query_stage_total = createEnds(for_query_stage_score_id, endsStream);
					createScorecard(textStream, for_query_stage_score_id, for_query_competition_id, for_query_archer_id, for_query_round_name, for_query_stage_id, for_query_bow_type, for_query_stage_total);
				})
			})
		})
	})
}

function createScorecard(textStream, scorecardId, compId, archerId, roundName, stageId, bowType, stageTotal) {
	textStream.write(`(${scorecardId}, ${true}, ${compId}, ${archerId}, "${roundName}", ${stageId}, "${bowType}", ${true}, ${stageTotal}), \n`)
}

function createEnds(stageId, endsStream) {
	let stageTotal = 0;
	let possibleScores = ['1','2','3','4','5','6','7','8','9','X', 'M'];
	
	for (let i = 0; i< 6; i++) {
		let endScores = [ possibleScores[Math.round(Math.random() * 10)], possibleScores[Math.round(Math.random() * 10)], possibleScores[Math.round(Math.random() * 10)], possibleScores[Math.round(Math.random() * 10)], possibleScores[Math.round(Math.random() * 10)], 
		possibleScores[Math.round(Math.random() * 10)]];

		let endTotal = getEndTotal(endScores);
		stageTotal += endTotal;

		endsStream.write(`(${stageId}, ${i + 1}, "${endScores[0]}", "${endScores[1]}", "${endScores[2]}", "${endScores[3]}", "${endScores[4]}", "${endScores[5]}", ${endTotal}), \n`)
	}

	return stageTotal
}

function getEndTotal(end) {
	return end.reduce((sum, num) => {
		if (num == "M") return sum + 0;
		else if (num == "X") return sum + 10;
		else return sum+Number(num);
	}, 0)
}

function main() {
	const [ endsStream, scoresStream ] = initializeWriteStream()
	generateInsertScoreStatements(scoresStream, endsStream);

	console.warn("REMEMBER TO DELETE TRAILING COMMA FROM INSERT STATEMENT")
}

main();




