import db from "../db.js";

export const createArcher = async (req, res) => {
	const { name, birthdate, classification_type, gender } = req.body;

	db.query(`INSERT INTO archer (name, birthdate, gender, classification_type) VALUES ('${name}', '${birthdate}', '${gender}', '${classification_type}' )`, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send("Donezo");
		}
	})
}


export const getAllArchers = async (req, res) => {
		db.query("SELECT * FROM archer LIMIT 100", (err, result) => {
			if (err) {
				res.send(err)
			} else {
				res.send(result);
			}
		})
}

export const updateArcher = async (req, res) => {
	const { name, birthdate, classification_type, gender, id } = req.body;

	db.query(`UPDATE archer SET name = '${name}', birthdate = '${birthdate}', classification_type = '${classification_type}', gender = '${gender}' WHERE id = ${id}`, 
	(error, result) => {
		if (error) {
			res.send(error)
		} else {
			res.send(result)
		}
	})
}