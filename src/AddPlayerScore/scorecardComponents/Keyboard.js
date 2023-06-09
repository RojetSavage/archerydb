import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import useScorecardContext from '../../contexts/ScorecardContextProvider'

export default function Keyboard({ alterScorecard }) {
	const {selectedCell} = useScorecardContext();
	console.log(selectedCell)

	return (
		<View style={styles.keyboard}>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, 'X')} style={{ ...styles.baseButton, ...styles.yellow }}><Text style={styles.baseText}>X</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '10')} style={{ ...styles.baseButton, ...styles.yellow }}><Text style={styles.baseText}>10</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '9')} style={{ ...styles.baseButton, ...styles.yellow }}><Text style={styles.baseText}>9</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '8')} style={{ ...styles.baseButton, ...styles.red }}><Text style={styles.baseText}>8</Text></TouchableOpacity>
			</View>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '4')} style={{ ...styles.baseButton, ...styles.black }}><Text style={{ ...styles.baseText, color: "white" }}>4</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '5')} style={{ ...styles.baseButton, ...styles.blue }}><Text style={styles.baseText}>5</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '6')} style={{ ...styles.baseButton, ...styles.blue }}><Text style={styles.baseText}>6</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`, '7')} style={{ ...styles.baseButton, ...styles.red }}><Text style={styles.baseText}>7</Text></TouchableOpacity>
			</View>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`,'3')} style={{ ...styles.baseButton, ...styles.black }}><Text style={{ ...styles.baseText, color: "white" }}>3</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`,'2')} style={{ ...styles.baseButton, ...styles.white }}><Text style={styles.baseText}>2</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`,'1')} style={{ ...styles.baseButton, ...styles.white }}><Text style={styles.baseText}>1</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => alterScorecard(selectedCell.end, `arrow${selectedCell.arrow}_score`,'M')} style={{ ...styles.baseButton, ...styles.white }}><Text style={styles.baseText}>M</Text></TouchableOpacity>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	keyboard: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.5,
		marginBottom: 20
		// borderColor:"black",
		// borderWidth: 1
	},
	row: {
		flexDirection: "row",
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.5 / 3,
		// borderColor:"black",
		// borderWidth: 1
	},
	baseButton: {
		width: Dimensions.get('window').width * 0.7 / 4,
		height: Dimensions.get('window').width * 0.5 / 3,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center"
	},
	baseText: {
		fontSize: 20,
		fontWeight: "bold"
	},
	yellow: {
		backgroundColor: "yellow"
	},
	red: {
		backgroundColor: "red"
	},
	blue: {
		backgroundColor: "blue"
	},
	black: {
		backgroundColor: "black"
	},
	white: {
		backgroundColor: "white"
	},
})