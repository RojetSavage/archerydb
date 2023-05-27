import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Round from './Round';

export default function SelectCompetitionRound({ route }) {
	const { competitionId } = route.params;
	const [availableCompetitionRounds, setAvailableCompetitionRounds] = useState([])

	useEffect(() => {
		fetch('http://192.168.170.46:3001/competition/rounds/id', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ competitionId })
		})
			.then(res => res.json())
			.then(data => {
				setAvailableCompetitionRounds(data)
			})
	}, [])

	return (
		<View>
			{availableCompetitionRounds.map((round, idx) => <Round idx={idx} key={idx} roundName={round.round_name} possibleScore={round.possible_score} competitionId={competitionId} totalArrows={round.total_arrows} />)}
		</View>
	)
}

const styles = StyleSheet.create({})