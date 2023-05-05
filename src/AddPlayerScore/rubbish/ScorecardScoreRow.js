import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScoreCell from './ScoreCell';

const width = Dimensions.get('window').width - 10;
const itemPerRow = 10;
const gap = 1;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;


export default function ScorecardScoreRow({ idx, scorecard, setScorecard }) {

	return (
		<>
			<View style={styles.grid}>
				<View style={styles.gridItem}><Text>{idx + 1}</Text></View>

				{Object.entries(scorecard[`end${idx + 1}`]).map((entry, idx) => 
					<ScoreCell 	idx={idx} key={idx} arrowScore={entry[1]} arrowName={entry[0]} setScorecard={setScorecard}/>
				)}

				{/* <View style={styles.gridItem}><Text>{(Object.values(endScore).reduce((sum, num) => sum + num) / 6).toFixed(1)}</Text></View>
				<View style={styles.gridItem}><Text>{Object.values(endScore).reduce((sum, num) => sum + num)}</Text></View> */}
			</View>


		</>
	)
}

const styles = StyleSheet.create({
	grid: {
		display: 'flex',
		flexDirection: 'row',
	},
	gridItem: {
		borderWidth: 1,
		borderColor: "black",
		height: 45,
		marginHorizontal: gap / 2,
		minWidth: childWidth + 5,
		maxWidth: childWidth + 5,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: 30,
		height: 40,
		textAlign:"center",
		justifyContent:"center",
		alignItems:"center"
	},
	dialog: {
		height: 200,
		backgroundColor:"white",
		borderRadius:10,

	}
})