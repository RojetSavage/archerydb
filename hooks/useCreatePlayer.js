import { StyleSheet } from 'react-native'
import { useState } from 'react'
import getArcherClassification from '../utils/getArcherClassification'
import { isExists } from 'date-fns';

export default function useCreatePlayer() {
	const [name, setName] = useState("");
	const [birthdate, setBirthdate] = useState({ day: 0, month: 0, year: 0 });
	const [gender, setGender] = useState("");

	let isBirthdateValid = isExists(Number(birthdate.year), Number(birthdate.month) - 1, Number(birthdate.day)) 
	let isBirthdateEntered = birthdate.year != 0 && birthdate.month != 0 && birthdate.day != 0
	let showError = !isBirthdateValid && isBirthdateEntered;
	let isSubmitDisabled = name === "" || birthdate.day === 0 || birthdate.month === 0 || birthdate.year === 0 || gender === ""|| !isBirthdateValid;
	let formattedBirthdate = `${birthdate.year}-${birthdate.month}-${birthdate.day}`

	function handleSubmit() {
		fetch('http://10.1.1.140:3001/archer', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ name, birthdate: formattedBirthdate, gender, classification_type: getArcherClassification(gender, new Date(formattedBirthdate)) })
		})
	}

	function handleBirthdateInput(key, event) {
		let { text } = event.nativeEvent;

		setBirthdate(prevState => {
			return {
				...prevState,
				[key]: text
			}
		})
	}

	function handleUserInput(event) {
		let {text} = event.nativeEvent;
		setName(text);
	}

	function handleSubmitEdit(id) {
		fetch('http://10.1.1.140:3001/archer/id', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id, name, birthdate: formattedBirthdate, gender, classification_type: getArcherClassification(gender, new Date(formattedBirthdate)) })
		})	}

	return {
		handleBirthdateInput,
		handleSubmit,
		handleSubmitEdit,
		handleUserInput,
		setGender,
		setBirthdate,
		setName,
		name, 
		birthdate,
		gender,
		isSubmitDisabled,
		showError,
	}
}






const styles = StyleSheet.create({})