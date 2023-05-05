import { StyleSheet, View } from 'react-native'
import { useState, useEffect } from 'react'
import Keyboard from './scorecardComponents/Keyboard';
import RoundInfo from './scorecardComponents/RoundInfo';
import Scorecard from './scorecardComponents/Scorecard'
import SaveButton from './scorecardComponents/SaveButton';
import useScorecard from '../../hooks/useScorecard';


function getInitState(roundType) {
	let numRounds = roundType.slice(0,2) === "30" ? 5 : 6;
	let rounds= [];

	for (let i = 0; i < numRounds; i++) {
		rounds.push([0,0,0,0,0,0])
	}
	return rounds;
}

export default function AddPlayersCompetitionScore({ route }) {
	const { playerName, competitionId, archerClassification, bowType, roundName, archerId, roundType, distance, stageId } = route.params;
	const [scorecardResults, setScorecardResults] = useState(getInitState("36"))
	const [selectedCell, setSelectedCell] = useState({end:0, arrow: 0})
	
	const res = useScorecard(true, competitionId, archerId, roundName, stageId, bowType)
	
	return (	
		<View style={styles.container}>
		<RoundInfo playerName={playerName} archerClassification={archerClassification} bowType={bowType} roundType={roundType} distance={distance} roundName={roundName} />
		
		<Scorecard results={scorecardResults}  />
		
		<Keyboard setResults={setScorecardResults} />

		<SaveButton />
		</View>
		)
	}
	
	const styles = StyleSheet.create({
		container: {
			flex:1,
			justifyContent:"space-between",
			alignItems:"center"
		},
		textInfo: {
			alignItems:"center",
			marginTop:10,
			
		},
		text: {
			fontSize: 20,
			marginBottom:10
		}
})



