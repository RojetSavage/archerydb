import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
export default function Scorecard() {
  return (
	<View style={styles.scorecardRow}>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.emptyInput}><Text></Text></TouchableOpacity>
		<TouchableOpacity style={styles.input}><Text style={styles.text}>Total</Text></TouchableOpacity>
	</View>
  )
}

const styles = StyleSheet.create({
	scorecardRow: {
		width:Dimensions.get('window').width * 0.8,
		height:Dimensions.get('window').height * 0.06,
		flexDirection:"row",
		marginTop:2,
		justifyContent:"center",
		alignItems:"center",

	},
	input: {
		width:Dimensions.get('window').width * 0.8 / 7,
		height:Dimensions.get('window').height * 0.06,
		alignItems:"center",
		justifyContent:"center",
		marginLeft:10
	},
	text: {
	},
	emptyInput: {
		alignItems:"center",
		justifyContent:"center",
		width:Dimensions.get('window').width * 0.8 / 7,
		height:Dimensions.get('window').height * 0.06,
		
	}
})

