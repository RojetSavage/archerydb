import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RoundInfo({ playerName, archerClassification, bowType, roundType, distance, roundName }) {
	return (
		<View style={styles.textInfo}>
			<Text style={styles.text}>{`${playerName}, ${archerClassification}, ${bowType}`}</Text>
			<Text style={styles.text}>{`${roundType}, ${distance} meters, ${roundName}`}</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	textInfo: {
		alignItems:"center",
		marginTop:10,
	},
	text: {
		fontSize: 15,
		marginBottom:10
	}
})