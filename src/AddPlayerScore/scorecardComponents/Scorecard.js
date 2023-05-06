import { StyleSheet, Text, View } from 'react-native'
import ScorecardRow from './ScorecardRow'
import ScorecardHeader from './ScorecardHeader'
import { useEffect } from 'react'
import useScorecardContext from '../../contexts/ScorecardContextProvider'

export default function Scorecard({ results }) {
	const { resetSelectedCell } = useScorecardContext();

	useEffect(() => {
		resetSelectedCell()
	}, []) 

	return (
		<View style={styles.container}>
			<ScorecardHeader />
			{results.map((end, idx) => <ScorecardRow key={idx} end={end} idx={idx} endNumber={end.end_number} />)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent:"center",
		alignItems:"center"
	}
})