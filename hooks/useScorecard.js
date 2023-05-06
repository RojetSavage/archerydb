import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useScorecard(isCompetitionScore, competitionId, archerId, roundName, stageId, bowType, roundType) {
	const [scorecard, setScorecard] = useState([]);
	const [toggleUpdate, setToggleUpdate] = useState(false);

	useEffect(() => {
		createScorecardIfNotExists();
	}, [])

	useEffect(() => {
		getScorecard();
	}, [toggleUpdate])

	function alterScorecard(endNumber, arrowNumber, newScore) {
		if (!endNumber || !arrowNumber) return;
		else {
			let newScorecard = [...scorecard];
			newScorecard[endNumber - 1][arrowNumber] = newScore;
	
			setScorecard(newScorecard);
		}
	}

	function saveScorecard() {
		let promiseArray = [];
		
		scorecard.forEach(end => {
			promiseArray.push(fetch("http://10.1.1.140:3001/score/ends/update", {
				method:"POST",
				headers: {
					"Content-Type":"application/json"
				},
				body: JSON.stringify({
					id:end.id, 
					end_number:end.end_number, 
					arrow1_score:end.arrow1_score, 
					arrow2_score: end.arrow2_score,  
					arrow3_score: end.arrow3_score,  
					arrow4_score: end.arrow4_score,  
					arrow5_score: end.arrow5_score,  
					arrow6_score: end.arrow6_score
				 })
			}))
		})
		Promise.all(promiseArray).then(_ => console.log("Updated all ends"))
	}

	function getScorecard() {
		axios.post('http://10.1.1.140:3001/score/scorecard', {
			isCompetitionScore, 
			competitionId,
			archerId,
			roundName,
			stageId,
			bowType
		})
		.then(res => {
			setScorecard(res.data)
		})
	}

	function createScorecardIfNotExists() {
			axios.post('http://10.1.1.140:3001/score/exists', {
				isCompetitionScore, 
				competitionId,
				archerId,
				roundName,
				stageId,
				bowType
			}).then(res => {
				let exists = res.data[0].exists; 

				//create scorecard if not exists
				if (!exists) {	
					axios.post('http://10.1.1.140:3001/score/add', {
						isCompetitionScore, 
						competitionId,
						archerId,
						roundName,
						stageId,
						bowType
					}).then(res => {

						//get scorecard id now that it does exist
						axios.post('http://10.1.1.140:3001/score/id', {
							isCompetitionScore, 
							competitionId,
							archerId,
							roundName,
							stageId,
							bowType
						})
						.then(res => {
							//add 6 ends attached to the stage_score_id
							const { stageScoreId } = res.data[0]
							console.log("stage score id", stageScoreId)
							axios.post('http://10.1.1.140:3001/score/ends/add', {
								stageScoreId,
								roundType
							})
							.then(res => {
								setToggleUpdate(prevState => !prevState)
							})
						})
					})
				}
			})
	}
	
	return {
		scorecard,
		alterScorecard,
		saveScorecard,
		toggleUpdate
	}
}