import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Archer from './Archer'

export default function SelectPlayerForCompetition({ route }) {
	const { id } = route.params;
	const [competitionArchers, setCompetitionArchers] = useState([])

	useEffect(() => {
		fetch('http://10.1.1.140:3001/competition/id', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id })
		})
			.then(res => res.json())
			.then(data => {
				setCompetitionArchers(data)
			})
	}, [])

	return (
		<View>
			{competitionArchers.map((archer, idx) => <Archer competitionId={id} archerId={archer.archer_id} archerName={archer.name} classificationType={archer.classification_type} idx={idx} />)}
		</View>
	)
}

const styles = StyleSheet.create({})

