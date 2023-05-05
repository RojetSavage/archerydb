import { StyleSheet, Text, View, } from 'react-native'
import { CheckBox, Button } from '@rneui/themed';
import { Input } from '@rneui/base';
import useCreatePlayer from '../hooks/useCreatePlayer';

export default function CreatePlayer() {
	const { handleBirthdateInput, handleUserInput, handleSubmit, setGender, name, birthdate, gender, isSubmitDisabled, showError } = useCreatePlayer();


	return (
		<View style={styles.container}>
			<Text style={styles.text}>Create A New Player</Text>

			<Input
				placeholder='Enter New Player Name...'
				onChange={(event) => handleUserInput(event)}
				style={{borderWidth:1, padding: 10, backgroundColor:"white"}}
				value={name}
				containerStyle={{ width: 300, marginTop: 20}}
			/>
			<View style={{flexDirection:"row"}}>

				<Input
					placeholder='DD'
					value={birthdate.day === 0 ? "" : birthdate.day}
					keyboardType='numeric'
					onChange={(e) => handleBirthdateInput('day', e)}
					style={{borderWidth:1, padding: 10, backgroundColor:"white"}}
					containerStyle={{ width:75, marginTop: 20}}
					maxLength={2}
					/>
				<Input
					placeholder='MM'
					keyboardType='numeric'
					value={birthdate.month === 0 ? "" : birthdate.month}
					onChange={(e) => handleBirthdateInput('month', e)}
					style={{borderWidth:1, padding: 10, backgroundColor:"white"}}
					containerStyle={{ width:75, marginTop: 20}}
					maxLength={2}
					/>
				<Input
					placeholder='YYYY'
					keyboardType='numeric'
					value={birthdate.year === 0 ? "" : birthdate.year}
					onChange={(e) => handleBirthdateInput('year', e)}
					style={{borderWidth:1, padding: 10, backgroundColor:"white"}}
					containerStyle={{ width: 150, marginTop: 20}}

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
			  onPress={() => handleSubmit()}
            />

			{showError && <Text style={styles.error}>Birthdatde is an invalid date.</Text> }
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	error: {
		fontWeight:"bold",
		color:"red"
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

