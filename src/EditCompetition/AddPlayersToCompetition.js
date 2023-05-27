import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import Archer from './Archer';

export default function AddPlayersToCompetition({ route }) {
	const { id } = route.params;
	const [competitionPlayers, setCompetitionPlayers] = useState([]);
	const [allArchers, setAllArchers] = useState([]);
	const [loadingData, setLoadingData] = useState(true);
	const [toggleUpdate, setToggleUpdate] = useState(false);
	let competitionArcherIds = competitionPlayers.length != 0 ? competitionPlayers?.map(archer => archer.archer_id) : [];

	useEffect(() => {
		fetch('http://192.168.170.46:3001/competition/id', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id })
		})
			.then(res => res.json())
			.then(data => {
				setCompetitionPlayers(data)
			})

		fetch('http://192.168.170.46:3001/archer')
			.then(res => res.json())
			.then(data => {
				setAllArchers(data.map(archer => {
					return {
						...archer,
						archerId: id
					}
				}))
				setLoadingData(false)
			})

	}, [toggleUpdate])


	return (
		<ScrollView>
			<Text style={styles.header}>Remove Players From Competition</Text>

			{loadingData ? <Text style={styles.loading}>Loading...</Text> : competitionPlayers.map((archer, idx) => <Archer {...archer} setToggleUpdate={setToggleUpdate} key={idx} inComp={true} compId={id} />)}

			<Text style={styles.header}>Add Players To Competition</Text>

			{loadingData ? <Text style={styles.loading}>Loading...</Text> :
				allArchers.map((archer, idx) => {

					if (!competitionArcherIds.includes(archer.id)) {
						return (
							<Archer {...archer} setToggleUpdate={setToggleUpdate} archer_id={archer.id} key={idx} inComp={false} compId={id} competitionPlayers={competitionPlayers} />
						)
					}		
				})
			}

		</ScrollView>
	)
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