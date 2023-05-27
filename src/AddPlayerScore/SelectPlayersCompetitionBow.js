import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Bow from './Bow';

export default function SelectPlayersCompetitionBow({ route }) {
	const { archerId, stageId, roundName, roundType, distance, competitionId, playerName, archerClassification } = route.params;
	const [playersAvailableBows, setPlayersAvailableBows] = useState([])

	useEffect(() => {
		fetch('http://192.168.170.46:3001/competition/rounds/archer/bow/id', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ roundName, archerClassification })
		})
			.then(res => res.json())
			.then(data => {
				setPlayersAvailableBows(data)
			})
	}, [])

	return (
		<View>
			{playersAvailableBows.map(bow => <Bow stageId={stageId} roundType={roundType} distance={distance} archerId={archerId} roundName={roundName} competitionId={competitionId} playerName={playerName} archerClassification={archerClassification} bowType={bow.bow_type} key={bow.bow_type}/>)}
		</View>
	)
}

const styles = StyleSheet.create({})