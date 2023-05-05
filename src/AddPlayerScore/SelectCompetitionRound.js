import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Round from './Round';

export default function SelectCompetitionRound({ route }) {
	const { playerName, competitionId, archerClassification, archerId } = route.params;
	const [playersAvailableRounds, setPlayersAvailableRounds] = useState([])

	useEffect(() => {
		fetch('http://10.1.1.140:3001/competition/rounds/archer/id', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ archerClassification })
		})
			.then(res => res.json())
			.then(data => {
				setPlayersAvailableRounds(data)
			})
	}, [])

	return (
		<View>
			{playersAvailableRounds.map((round, idx) => <Round archerId={archerId} idx={idx} key={idx} roundName={round.round_name} competitionId={competitionId} playerName={playerName} archerClassification={archerClassification} />)}
		</View>
	)
}

const styles = StyleSheet.create({})