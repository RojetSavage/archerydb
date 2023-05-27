export function getRandomBirthday() {
	let day = Math.ceil(Math.random() * 28)
	if (day < 10) {
		day = '0'.concat(String(day))
	}

	let month = Math.ceil(Math.random() * 11)

	
	let year = 2013 - Math.ceil(Math.random() * 100)
	return `${year}-${month}-${day}`;
}


export function getRandomDate(yearsDiff) {
	let day = Math.ceil(Math.random() * 28)
	if (day < 10) {
		day = '0'.concat(String(day))
	}

	let month = Math.ceil(Math.random() * 11)

	
	let year = 2023 + Math.ceil(Math.random() * yearsDiff)
	return `${year}-${month}-${day}`;	
}