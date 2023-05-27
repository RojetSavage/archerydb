import { archer_details, roundNames } from './archeryData.js';
import getArcherClassification from '../../utils/getArcherClassification.js'
import { getRandomBirthday, getRandomDate } from './utils.js';
import fs from 'node:fs';

const NUMBER_OF_COMPETITIONS = 100

function initializeWriteStreams() {
	const textStream = fs.createWriteStream('insert_statements.txt');
	const jsonStream = fs.createWriteStream('insert_data.json');
	
	jsonStream.write(`{ `)

	return [textStream, jsonStream]
}

function generateArcherInsertStatements(textStream, jsonStream) {
	textStream.write("INSERT INTO archer (id, name, gender, birthdate, classification_type) values \n");
	
	let archer_inserts = []
	let archer_inserts_json = []
	
	archer_details.forEach(archer => {
		let birthday = getRandomBirthday() 
		let classification = getArcherClassification(archer.gender, new Date(birthday));
	
		archer_inserts.push(`(${archer.id}, "${archer.fullname}", "${archer.gender}", "${birthday}", "${classification}")`);
		archer_inserts_json.push(`{"id": "${archer.id}", "name": "${archer.fullname}", "gender": "${archer.gender}", "birthdate": "${birthday}", "classification_type": "${classification}"}`);
	});
	
	textStream.write(archer_inserts.join(', \n'))
	textStream.write('; \n\n\n\n')
	
	jsonStream.write(`"archers": [`)
	jsonStream.write(archer_inserts_json.join(', \n'))
	jsonStream.write("], \n")
}


function generateCompetitionInsertStatements(textStream, jsonStream) {
	textStream.write("INSERT INTO competition (id, name, is_club_championship, date) values \n");

	let competition_inserts = []
	let competition_inserts_json = []

	for (let i=0; i<NUMBER_OF_COMPETITIONS; i++) {
		let date = getRandomDate(1);

		competition_inserts.push(`(${i+1}, "Competition: ${i + 1}", ${false}, "${date}")`);
		competition_inserts_json.push(`{"id": "${i+1}", "name": "Competition ${i + 1}", "is_club_championship":"false", "date": "${date}"}`);
	}

	textStream.write(competition_inserts.join(', \n'))
	textStream.write('; \n\n\n\n')

	jsonStream.write(`"competitions": [`)
	jsonStream.write(competition_inserts_json.join(', \n'))
	jsonStream.write("], \n")
}

function generateCompetitionArcherInsertStatements(textStream, jsonStream) {
	textStream.write("INSERT INTO competition_archers (competition_id, archer_id) values \n");

	let competition_archer_inserts = []
	let competition_archer_inserts_json = []

	for (let i=0; i<NUMBER_OF_COMPETITIONS; i++) {
		let number_of_archers = Math.ceil(Math.random() * 40)

		for (let j = 0; j < number_of_archers; j++) {
			let archerId = Math.ceil(Math.random() * 1000);

			competition_archer_inserts.push(`(${i + 1}, ${archerId})`);
			competition_archer_inserts_json.push(`{"competition_id": ${i+1}, "archer_id": "${archerId}"}`);
		}
	}

	textStream.write(competition_archer_inserts.join(', \n'))
	textStream.write('; \n\n\n\n')

	jsonStream.write(`"competition_archers": [`)
	jsonStream.write(competition_archer_inserts_json.join(', \n'))
	jsonStream.write("], \n")
}



function generateCompetitionRoundInsertStatements(textStream, jsonStream) {
	textStream.write("INSERT INTO competition_rounds (competition_id, round_name) values \n");
	
	let competition_round_inserts = []
	let competition_round_inserts_json = []
	
	for (let i=0; i<NUMBER_OF_COMPETITIONS; i++) {
		roundNames.forEach(name => {
			competition_round_inserts.push(`(${i + 1}, "${name}")`);
			competition_round_inserts_json.push(`{"competition_id": ${i+1}, "round_name": "${name}"}`);
		})
	}
	
	textStream.write(competition_round_inserts.join(', \n'))
	textStream.write('; \n\n\n\n')
	
	jsonStream.write(`"competition_rounds": [`)
	jsonStream.write(competition_round_inserts_json.join(', \n'))
	jsonStream.write("] \n")
	
	jsonStream.write("}")
}

function endWriteStream(stream) {
	stream.end();
}


function main() {
	const [textStream, jsonStream] = initializeWriteStreams();
	generateArcherInsertStatements(textStream, jsonStream);
	generateCompetitionInsertStatements(textStream, jsonStream);
	generateCompetitionArcherInsertStatements(textStream, jsonStream);
	generateCompetitionRoundInsertStatements(textStream, jsonStream);

	endWriteStream(textStream);
	endWriteStream(jsonStream);
	
	console.error("REMEMBER TO DELETE TRAILING COMMA FROM INSERT STATEMENT")
}


main();

