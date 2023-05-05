import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { Dialog, Input, CheckBox, Button } from '@rneui/base'

export default function EditingPlayerDialog({ isEditing, setIsEditing, id, name, isClubChampionship, date, setToggleUpdate }) {
	const [compDate, setCompDate] = useState({year:date.slice(0,4), month:date.slice(5,7), day:date.slice(8,10)})
	
	function handleCompDateChange(key, e) {
		let { text } = e.nativeEvent;
		setCompDate(prevState => {
			return {
				...prevState,
				[key]:text
			}
		})
	}


	function handleSubmitEdit() {
		// fetch('http://')
	}


	function submitEditForm(id) {
		handleSubmitEdit(id)
		setIsEditing(false)
		setToggleUpdate(prevState => !prevState)
	}

	return (
		<Dialog isVisible={isEditing} onBackdropPress={() => setIsEditing(false)} overlayStyle={styles.container}>

			<Text style={styles.text}>Edit Competition Info</Text>

				<Input
					placeholder='Enter New Competition Name (if applicable)'
					// onChange={(event) => handleUserInput(event)}
					style={{ borderWidth: 1, padding: 10 }}
					value={name}
				/>
				
				<View style={{ flexDirection: "row", justifyContent:"space-around" }}>

					<Input
						placeholder='DD'
						value={compDate.day}
						keyboardType='numeric'
						onChange={(e) => handleCompDateChange('day', e)}
						style={{ borderWidth: 1, padding: 10 }}
						containerStyle={{ width: 80, marginTop: 20 }}
						maxLength={2}
					/>
					<Input
						placeholder='MM'
						keyboardType='numeric'
						value={compDate.month}
						onChange={(e) => handleCompDateChange('month', e)}
						style={{ borderWidth: 1, padding: 10 }}
						containerStyle={{ width: 80, marginTop: 20 }}
						maxLength={2}
					/>
					<Input
						placeholder='YYYY'
						keyboardType='numeric'
						value={compDate.year}
						onChange={(e) => handleCompDateChange('year', e)}
						style={{ borderWidth: 1, padding: 10 }}
						containerStyle={{ width: 120, marginTop: 20 }}

						maxLength={4}
					/>
				</View>

				<Text style={{fontSize: 16}}>Club Championship?</Text>

				<View style={{ flexDirection: "row", justifyContent: "center" }}>

					<CheckBox
						checked={isClubChampionship === 1}
						// onPress={() => setGender("Male")}
						checkedIcon="dot-circle-o"
						uncheckedIcon="circle-o"
						title="True"
						containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
					/>
					<CheckBox
						checked={isClubChampionship === 0}
						// onPress={() => setGender("Female")}
						checkedIcon="dot-circle-o"
						uncheckedIcon="circle-o"
						title="False"
						containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
					/>
				</View>

				<Button
					title="Save"
					titleStyle={{ fontWeight: '700' }}
					buttonStyle={styles.buttonStyle}
					containerStyle={styles.buttonContainer}
					onPress={() => submitEditForm(id)}
				/>
		</Dialog>

	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
	container: {
		backgroundColor: "white",
		justifyContent:"center",
		alignItems:"center",
		borderColor: 'yellow',
		borderWidth: 1
	},
	error: {
		fontWeight: "bold",
		color: "red"
	},
	buttonStyle: {
		backgroundColor: 'rgba(92, 99,216, 1)',
		borderColor: 'transparent',
		borderWidth: 0,
		borderRadius: 5,
	},
	buttonContainer: {
		width: 200,
		height: 45,
		marginHorizontal: 50,
		marginVertical: 10,
	}
})