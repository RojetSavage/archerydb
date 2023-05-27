import { StyleSheet, View } from 'react-native'
import { useState, useEffect } from 'react'
import Stage from './Stage'
export default function SelectPlayersCompetitionStage({ route }) {
	const { roundName, competitionId, playerName, archerClassification, archerId } = route.params;
	const [availableStages, setAvailableStages] = useState([])

	useEffect(() => {
		fetch('http://192.168.170.46:3001/competition/rounds/stages', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ roundName })
		})
			.then(res => res.json())
			.then(data => {
				setAvailableStages(data)
			})
	}, [])

	return (
		<View>
			{availableStages.map((stage, idx) => <Stage stageId={stage.id} archerId={archerId} roundType={stage.round_type} distance={stage.distance} key={idx} idx={idx} roundName={roundName} competitionId={competitionId} playerName={playerName} archerClassification={archerClassification} />)}
		</View>
	)
}

const styles = StyleSheet.create({})