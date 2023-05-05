import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const width = Dimensions.get('window').width - 10;
const itemPerRow = 10;
const gap = 1;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;


export default function ScorecardHeaderRow() {
  return (
	<>
		<View style={styles.grid}>
			<View style={styles.gridItem}><Text>end</Text></View>
			<View style={styles.endItem}><Text>1</Text></View>
			<View style={styles.endItem}><Text>2</Text></View>
			<View style={styles.endItem}><Text>3</Text></View>
			<View style={styles.endItem}><Text>4</Text></View>
			<View style={styles.endItem}><Text>5</Text></View>
			<View style={styles.endItem}><Text>6</Text></View>
			<View style={styles.gridItem}><Text>avg</Text></View>
			<View style={styles.gridItem}><Text>score</Text></View>
		</View>
	</>
  )
}

const styles = StyleSheet.create({
	grid: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		// marginVertical: -(gap / 2),
		// marginHorizontal: -(gap / 2),
	
	},
	endItem: {
		borderWidth:1,
		borderColor:"black",
		height: 45,
		marginHorizontal: gap / 2,
		minWidth: childWidth +5,
		maxWidth: childWidth +5,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"rgb(240,240,240)"
	},
	gridItem: {
		borderWidth:1,
		borderColor:"black",
		height: 45,
		marginHorizontal: gap / 2,
		minWidth: childWidth + 5,
		maxWidth: childWidth + 5,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"rgb(240,240,240)"

	}
})