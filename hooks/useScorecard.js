import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useScorecard(isCompetitionScore, competitionId, archerId, roundName, stageId, bowType) {
	const [scorecard, setScorecard] = useState([]);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const createScorecardIfNotExists = async (isCompetitionScore, competitionId, archerId, roundName, stageId, bowType) => {
			await axios.post('http://10.1.1.140:3001/score/exists', {
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
								stageScoreId
							})
							.then(res => {
								console.log("added ends", res.data)
								// this should trigger the rerender to go through scorecard exists which reruns the get scorecard query
								setToggle(prevState => !prevState)
							})
						})
					})
				}

				// Get Scorecard
				axios.post('http://10.1.1.140:3001/score/exists', {
					isCompetitionScore, 
					competitionId,
					archerId,
					roundName,
					stageId,
					bowType
				})
				.then(res => {
					setScorecard(res.data[0])
				})
			})
		}
		createScorecardIfNotExists(isCompetitionScore, competitionId, archerId, roundName, stageId, bowType);
	}, [])

	return {
	}
}



// useEffect(() => {
// 	const createScorecardIfNotExists = async (isCompetitionScore, competitionId, archerId, roundName, stageId, bowType) => {
// 		axios.post('http://10.1.1.140:3001/score/exists', {
// 			isCompetitionScore, 
// 			competitionId,
// 			archerId,
// 			roundName,
// 			stageId,
// 			bowType
// 		}).then(res => {
// 			let exists = res.data[0].exists; 

// 			if (!exists) {	// create scorecard
// 				await axios.post('http://10.1.1.140:3001/score/add', {
// 					isCompetitionScore, 
// 					competitionId,
// 					archerId,
// 					roundName,
// 					stageId,
// 					bowType
// 				})


				
// 				// create ends
// 			} else {
// 				//get scorecard
// 			}
// 		})
// 	}

// 	createScorecardIfNotExists(isCompetitionScore, competitionId, archerId, roundName, stageId, bowType);

// }, [])