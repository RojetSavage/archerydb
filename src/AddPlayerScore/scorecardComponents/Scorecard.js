import { StyleSheet, Text, View } from 'react-native'
import ScorecardRow from './ScorecardRow'
import ScorecardHeader from './ScorecardHeader'
import { useEffect } from 'react'
import useScorecardContext from '../../contexts/ScorecardContextProvider'
import axios from 'axios';

export default function Scorecard({ results }) {
	const { resetSelectedCell } = useScorecardContext();


	useEffect(() => {
		resetSelectedCell()
	}, []) 


	return (
		<View style={styles.container}>
			<ScorecardHeader />

			{results.map((row, idx) => <ScorecardRow end={results[idx]} idx={idx} endNumber={idx+1}/>)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent:"center",
		alignItems:"center"
	}
})