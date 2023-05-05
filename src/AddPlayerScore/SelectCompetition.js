import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import Competition from './Competition';

export default function SelectCompetition() {
	const [competitions, setCompetitions] = useState([]);

	function fetchCompetitions() {
		fetch('http://10.1.1.140:3001/competition')
			.then(res => res.json())
			.then(data => setCompetitions(data))
	}

	useEffect(() => {
		fetchCompetitions()
	}, [])

	return (
		<View>
			{competitions.map((comp, idx) => <Competition id={comp.id} name={comp.name} date={comp.date} key={idx} />)}
		</View>
	)
}

const styles = StyleSheet.create({})