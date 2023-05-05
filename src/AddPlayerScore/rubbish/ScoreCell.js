import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ArrowScoreEntryDialog from './ArrowScoreEntryDialog';

const width = Dimensions.get('window').width - 10;
const itemPerRow = 10;
const gap = 1;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

export default function ScoreCell({ idx, arrowName, arrowScore, setScorecard }) {
	const [isDialogVisible, setIsDialogVisible] = useState(false)

	const arrow = `arrow${idx + 1}`
	return (
		<>
			<TouchableOpacity
				onPress={() => setIsDialogVisible(true)}
				style={styles.cell}>
				<Text>
					{arrowScore}
				</Text>
			</TouchableOpacity>

			{isDialogVisible &&
				<ArrowScoreEntryDialog
					arrowName={arrowName}
					arrowScore={arrowScore}
					setIsDialogVisible={setIsDialogVisible}
					isDialogVisible={isDialogVisible}
					setScorecard={setScorecard}
				/>}
		</>
	)
}

const styles = StyleSheet.create({
	cell: {
		borderWidth: 1,
		borderColor: "black",
		height: 45,
		marginHorizontal: 1 / 2,
		minWidth: childWidth +5,
		maxWidth: childWidth +5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(176, 206, 255)"
	},
})