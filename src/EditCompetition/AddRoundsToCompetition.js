import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import Round from './Round'

export default function AddRoundsToCompetition({ route }) {
	const { id } = route.params;
	const [loading, setLoading] = useState(true)
	const [toggleUpdate, setToggleUpdate] = useState(true)

	const [allRounds, setAllRounds] = useState([])
	const [competitionRounds, setCompetitionRounds] = useState([])

	let competitionRoundNames = competitionRounds.map(round => round.round_name) 

	useEffect(() => {
		fetch('http://192.168.170.46:3001/competition/rounds')
			.then(res => res.json())
			.then(data => {
				setAllRounds(data);
				setLoading(false);
			})

		fetch('http://192.168.170.46:3001/competition/rounds/id', {
			method:"POST",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({competitionId: id})
		})
			.then(res => res.json())
			.then(data => {
				setCompetitionRounds(data);
			})		
	}, [toggleUpdate])

	if (loading) {
		return <Text style={styles.loading}>Loading...</Text>
	} else {
		return (
			<ScrollView>
				<Text style={styles.header}>Remove Rounds From Competition</Text>

				{loading ? <Text style={styles.loading}>Loading...</Text> : null }

				{competitionRounds.map((round, idx) => <Round name={round.round_name} total_arrows={round.total_arrows} inComp={true} competitionId={id} setToggleUpdate={setToggleUpdate}/> )}	

				<Text style={styles.header}>Add Rounds To Competition</Text>
				
				{allRounds.map((round, idx) => {
					if (!competitionRoundNames.includes(round.name)) {
						return (
							<Round {...round} inComp={false} competitionId={id} setToggleUpdate={setToggleUpdate}/>
							)
						} 
					})
				}					

			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		textAlign: "center",
		fontSize: 20,
		margin: 20
	},
	loading: {
		textAlign: "center",
		fontSize: 20,

	}
})