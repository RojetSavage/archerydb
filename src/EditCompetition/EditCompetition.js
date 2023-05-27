import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import Competition from './Competition';

export default function EditCompetition() {
	const [loading, setLoading] = useState(true);
	const [competitions, setCompetitions] = useState([]);
	const [, setToggleUpdate] = useState([]);

	async function fetchCompetitions() {
		fetch('http://192.168.170.46:3001/competition')
		.then(res => res.json())
		.then(data => {
			setCompetitions(data)
			setLoading(false);
		})
	}

	useEffect(() => {
		fetchCompetitions()
	}, [])


	if (loading) return <Text>Loading...</Text> 
	else return (
		<View>
			{competitions.map((comp, idx) => <Competition {...comp} setToggleUpdate={setToggleUpdate} key={idx}/> )}
		</View>
	)
}

const styles = StyleSheet.create({})