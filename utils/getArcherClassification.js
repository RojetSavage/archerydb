import { differenceInYears } from "date-fns"

export default function getArcherClassification(gender, birthdate) {
	let age = differenceInYears(new Date(), birthdate);

	if (age > 21 && age < 50) {
		return `${gender} Open`
	} else if (age < 14) {
		return `Under 14 ${gender}`
	} else if (age < 16) {
		return `Under 16 ${gender}`
	} else if (age < 18) {
		return `Under 18 ${gender}`
	} else if (age < 21) {
		return `Under 21 ${gender}`
	} else if (age > 70) {
		return `70+ ${gender}`
	} else if (age > 60) {
		return `60+ ${gender}`
	} else if (age > 50) {
		return `50+ ${gender}`
	} 
}