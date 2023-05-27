import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, CheckBox, Button } from '@rneui/base'
import { useState} from 'react';
import { isExists } from 'date-fns';

export default function CreateCompetition() {
	const [name, setName] = useState('');
	const [clubChampionship, setClubChampionship] = useState(false);
	const [date, setDate] = useState({day:0, month:0, year:0});

	let isDateValid = isExists(Number(date.year), Number(date.month) - 1, Number(date.day)) 
	let isDateEntered = date.year != 0 && date.month != 0 && date.day != 0
	let showError = !isDateValid && isDateEntered;
	let isSubmitDisabled = name === "" || date.day === 0 || date.month === 0 || date.year === 0 || !isDateValid;
	let formattedDate = `${date.year}-${date.month}-${date.day}`

	function handleDateInput(key, event) {
		let { text } = event.nativeEvent;

		setDate(prevState => {
			return {
				...prevState,
				[key]: text
			}
		})
	}

	function handleSubmit() {
		fetch('http://192.168.170.46:3001/competition/add', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({name, date: formattedDate, clubChampionship})
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Create A New Competition</Text>

			<Input
				placeholder='Enter New Competition Name...'
				onChange={(event) => setName(event.nativeEvent.text)}
				style={{ borderWidth: 1, padding: 10, backgroundColor:"white" }}
				value={name}
				containerStyle={{ width: 300, marginTop: 20, }}
			/>
			<View style={{ flexDirection: "row" }}>

				<Input
					placeholder='DD'
					value={date.day === 0 ? "" : date.day}
					keyboardType='numeric'
					onChange={(e) => handleDateInput('day', e)}
					style={{ borderWidth: 1, padding: 10, backgroundColor:"white" }}
					containerStyle={{ width: 75, marginTop: 20 }}
					maxLength={2}
				/>
				<Input
					placeholder='MM'
					keyboardType='numeric'
					value={date.month === 0 ? "" : date.month}
					onChange={(e) => handleDateInput('month', e)}
					style={{ borderWidth: 1, padding: 10, backgroundColor:"white" }}
					containerStyle={{ width: 75, marginTop: 20 }}
					maxLength={2}
				/>
				<Input
					placeholder='YYYY'
					keyboardType='numeric'
					value={date.year === 0 ? "" : date.year}
					onChange={(e) => handleDateInput('year', e)}
					style={{ borderWidth: 1, padding: 10, backgroundColor:"white" }}
					containerStyle={{ width: 150, marginTop: 20 }}

					maxLength={4}
				/>
			</View>

			<Text style={styles.text}>Club Championship?</Text>

			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<CheckBox
					checked={clubChampionship}
					onPress={() => setClubChampionship(true)}
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					title="True"
					containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
				/>
				<CheckBox
					checked={!clubChampionship}
					onPress={() => setClubChampionship(false)}
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					title="False"
					containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
				/>
			</View>

			<Button
				title="CREATE"
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