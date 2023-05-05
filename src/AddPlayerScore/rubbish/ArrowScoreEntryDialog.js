import { StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import { Dialog, Button } from '@rneui/base';

export default function ArrowScoreEntryDialog({ setIsDialogVisible, isDialogVisible, arrowScore, arrowName, setScorecard }) {
	const [ newArrowScore, setNewArrowScore ] = useState(0)

	function handleScoreChange(arrowName, newScore) {
		// setScorecard(prevState => {
		// 	return {
		// 		...prevState,
		// 		[arrowName]: {
		// 			...prevState[arrowName],
		// 			[arrowName]: newScore
		// 		}
		// 	}
		// })
	}

	function handleSubmit() {
		//do async stuff
		setIsDialogVisible(false);
	}

	return (
		<Dialog 
		isVisible={isDialogVisible} 
		onBackdropPress={() => setIsDialogVisible(false)} 
		overlayStyle={styles.dialog} >
			<Dialog.Title 
				title={"Enter Score for arrow"} />
			<TextInput 
				style={styles.input}
				value={arrowScore}
				keyboardType='numeric' 
				onChangeText={(text) => handleScoreChange(arrowName, text)}>
			</TextInput>
			
			<Button 
				title={"Enter"} 
				onPress={() => handleSubmit()}>
			</Button>
		</Dialog>
	)
}

const styles = StyleSheet.create({
	dialog: {
		height: 200,
		backgroundColor:"white",
		borderRadius:10
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		paddingLeft:10,
		color:"black"
	  },
})