import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Archer from './Archer'

export default function SelectPlayerForCompetition({ route }) {
	const { competitionId, roundName } = route.params;
	const [competitionArchers, setCompetitionArchers] = useState([]);

	useEffect(() => {
		fetch('http://192.168.170.46:3001/competition/id/round', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ competitionId, roundName })
		})
			.then(res => res.json())
			.then(data => {
				setCompetitionArchers(data)
			})
	}, [])

	return (
		<View>
			{competitionArchers.map((archer, idx) => <Archer competitionId={competitionId} archerId={archer.id} archerName={archer.name} key={idx}r classificationType={archer.classification_type} idx={idx} roundName={roundName} />)}
		</View>
	)
}

const styles = StyleSheet.create({})

