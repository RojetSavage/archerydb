import { StyleSheet, View } from 'react-native'
import {useEffect} from 'react';
import Keyboard from './scorecardComponents/Keyboard';
import RoundInfo from './scorecardComponents/RoundInfo';
import Scorecard from './scorecardComponents/Scorecard'
import SaveButton from './scorecardComponents/SaveButton';
import useScorecard from '../../hooks/useScorecard';

export default function AddPlayersCompetitionScore({ route }) {
	const { playerName, competitionId, archerClassification, bowType, roundName, archerId, roundType, distance, stageId } = route.params;
	const {scorecard, alterScorecard, saveScorecard, toggleUpdate} = useScorecard(true, competitionId, archerId, roundName, stageId, bowType, roundType)
	useEffect(() => {
	}, [toggleUpdate])

	return (	
		<View style={styles.container}>
			<RoundInfo playerName={playerName} archerClassification={archerClassification} bowType={bowType} roundType={roundType} distance={distance} roundName={roundName} />
			<Scorecard results={scorecard}  />
			<Keyboard alterScorecard={alterScorecard} />
			<SaveButton save={saveScorecard} />
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



