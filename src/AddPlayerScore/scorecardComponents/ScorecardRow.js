import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import useScorecardContext from '../../contexts/ScorecardContextProvider'

function getTotalEndScore(end) {
	return end.reduce((sum, value) => {
		if (value === "X") return sum + 10
		else if (value === "M") return sum
		else return sum + Number(value)
	}, 0)
}

export default function ScorecardRow({ end, idx, endNumber }) {
	let total = end.reduce((sum, num) => sum + num, 0)
	const {selectedCell, handleSelectScoreCell, handleValueChange} = useScorecardContext();

	function getCellStyles(end, arrow) {
		return {
			width: Dimensions.get('window').width * 0.8 / 7,
			height: Dimensions.get('window').height * 0.06,
			borderWidth: 1,
			borderColor: "black",
			borderRadius: 5,
			backgroundColor: selectedCell.end === end && selectedCell.arrow === arrow ? "yellow" : "white",
			alignItems: "center",
			justifyContent: "center",
		}
	}

	return (
		<View style={styles.scorecardRow}>
			<TouchableOpacity><Text style={{...styles.text, marginRight: 4}}>{`End: ${endNumber}`}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 1)} style={getCellStyles(endNumber,1)}><Text style={styles.text}>{end[0] === 0 ? "" : end[0]}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 2)} style={getCellStyles(endNumber,2)}><Text style={styles.text}>{end[1] === 0 ? "" : end[1]}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 3)} style={getCellStyles(endNumber,3)}><Text style={styles.text}>{end[2] === 0 ? "" : end[2]}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 4)} style={getCellStyles(endNumber,4)}><Text style={styles.text}>{end[3] === 0 ? "" : end[3]}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 5)} style={getCellStyles(endNumber,5)}><Text style={styles.text}>{end[4] === 0 ? "" : end[4]}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 6)} style={getCellStyles(endNumber,6)}><Text style={styles.text}>{end[5] === 0 ? "" : end[5]}</Text></TouchableOpacity>
			<View style={{...getCellStyles(undefined, undefined), marginLeft:10 }}><Text style={styles.text}>{ getTotalEndScore(end) }</Text></View>
		</View>
	)
}

const styles = StyleSheet.create({
	scorecardRow: {
		justifyContent:"center",
		alignItems:"center",
		width: Dimensions.get('window').width * 0.8,
		height: Dimensions.get('window').height * 0.06,
		flexDirection: "row",
		marginTop: 2
	},
	input: {
		width: Dimensions.get('window').width * 0.8 / 7,
		height: Dimensions.get('window').height * 0.06,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontWeight:"bold"
	},

})