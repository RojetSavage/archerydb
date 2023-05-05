import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Archer from './Archer'

export default function ViewPlayers() {
	const [archers, setArchers] = useState([]);
	const [toggleUpdate, setToggleUpdate] = useState(false);
	const [loading, setLoading] = useState(true);

	async function getArchers() {
		fetch('http://10.1.1.140:3001/archer')
		.then(res => res.json())
		.then(data => {
			setArchers(data);
			setLoading(false);
		})
		.catch(err => console.error(err))
	}

	useEffect(() => {
		getArchers();
	}, [toggleUpdate]) 

	if (loading) {
		return (
			<Text style={styles.loading}>Loading...</Text>
		)
	} else return (

		<ScrollView>
			{archers.map((archer, idx) => <Archer {...archer} key={archer.name.concat(idx)} setToggleUpdate={setToggleUpdate}/>)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	loading: {
		textAlign:"center",
		fontSize:20,
		margin:20
	}
})
