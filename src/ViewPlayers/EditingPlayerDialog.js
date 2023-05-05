import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { Dialog, Input, CheckBox, Button } from '@rneui/base'
import useCreatePlayer from '../../hooks/useCreatePlayer'

export default function EditingPlayerDialog({ isEditing, setIsEditing, currentName, currentBirthdate, currentGender, id, setToggleUpdate }) {
	const { handleBirthdateInput, setBirthdate, setName, handleUserInput, handleSubmitEdit, setGender, showError, isSubmitDisabled, name, birthdate, gender } = useCreatePlayer();

	useEffect(() => {
		setGender(currentGender);
		setName(currentName)
		setBirthdate({year: currentBirthdate.slice(0,4), month: currentBirthdate.slice(5,7), day: currentBirthdate.slice(8,10)})
	}, [])

	function submitEditForm(id) {
		handleSubmitEdit(id)
		setIsEditing(false)
		setToggleUpdate(prevState => !prevState)
	}

	return (
		<Dialog isVisible={isEditing} onBackdropPress={() => setIsEditing(false)} overlayStyle={styles.container}>

			<Text style={styles.text}>Editing Existing Player</Text>

				<Input
					placeholder='Enter New Player Name...'
					onChange={(event) => handleUserInput(event)}
					style={{ borderWidth: 1, padding: 10 }}
					value={name}
				/>
				
				<View style={{ flexDirection: "row", justifyContent:"space-around" }}>

					<Input
						placeholder='DD'
						value={birthdate.day === 0 ? "" : birthdate.day}
						keyboardType='numeric'
						onChange={(e) => handleBirthdateInput('day', e)}
						style={{ borderWidth: 1, padding: 10 }}
						containerStyle={{ width: 80 }}
						maxLength={2}
					/>
					<Input
						placeholder='MM'
						keyboardType='numeric'
						value={birthdate.month === 0 ? "" : birthdate.month}
						onChange={(e) => handleBirthdateInput('month', e)}
						style={{ borderWidth: 1, padding: 10 }}
						containerStyle={{ width: 80 }}
						maxLength={2}
					/>
					<Input
						placeholder='YYYY'
						keyboardType='numeric'
						value={birthdate.year === 0 ? "" : birthdate.year}
						onChange={(e) => handleBirthdateInput('year', e)}
						style={{ borderWidth: 1, padding: 10 }}
						containerStyle={{ width: 120 }}

						maxLength={4}
					/>
				</View>

				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<CheckBox
						checked={gender === "Male"}
						onPress={() => setGender("Male")}
						checkedIcon="dot-circle-o"
						uncheckedIcon="circle-o"
						title="Male"
						containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
					/>
					<CheckBox
						checked={gender === "Female"}
						onPress={() => setGender("Female")}
						checkedIcon="dot-circle-o"
						uncheckedIcon="circle-o"
						title="Female"
						containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
					/>
				</View>

				<Button
					title="SIGN UP"
					disabled={isSubmitDisabled}
					titleStyle={{ fontWeight: '700' }}
					buttonStyle={styles.buttonStyle}
					containerStyle={styles.buttonContainer}
					onPress={() => submitEditForm(id)}
				/>


			{showError && <Text style={styles.error}>Birthdatde is an invalid date.</Text>}
		</Dialog>

	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
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