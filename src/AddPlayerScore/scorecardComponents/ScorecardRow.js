import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import useScorecardContext from '../../contexts/ScorecardContextProvider'

// function getTotalEndScore(end) {
// 	return end.reduce((sum, value) => {
// 		if (value === "X") return sum + 10
// 		else if (value === "M") return sum
// 		else return sum + Number(value)
// 	}, 0)
// }

export default function ScorecardRow({ end, idx, endNumber }) {
	// let total = end.reduce((sum, num) => sum + num, 0)
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

			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 1)} style={getCellStyles(endNumber,1)}><Text style={styles.text}>{end.arrow1_score === 0 ? "" : end.arrow1_score}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 2)} style={getCellStyles(endNumber,2)}><Text style={styles.text}>{end.arrow2_score === 0 ? "" : end.arrow2_score}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 3)} style={getCellStyles(endNumber,3)}><Text style={styles.text}>{end.arrow3_score === 0 ? "" : end.arrow3_score}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 4)} style={getCellStyles(endNumber,4)}><Text style={styles.text}>{end.arrow4_score === 0 ? "" : end.arrow4_score}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 5)} style={getCellStyles(endNumber,5)}><Text style={styles.text}>{end.arrow5_score === 0 ? "" : end.arrow5_score}</Text></TouchableOpacity>
			<TouchableOpacity onPress={() => handleSelectScoreCell(endNumber, 6)} style={getCellStyles(endNumber,6)}><Text style={styles.text}>{end.arrow6_score === 0 ? "" : end.arrow6_score}</Text></TouchableOpacity>
			<View style={{...getCellStyles(undefined, undefined), marginLeft:10 }}><Text style={styles.text}>{ 50 }</Text></View>
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