function createInsertEndsQuery(stageScoreId, roundType) {
	let baseQuery = [`INSERT INTO end (stage_score_id, end_number, arrow1_score, arrow2_score, arrow3_score, arrow4_score, arrow5_score, arrow6_score) VALUES `];
	let ends = roundType[1] === 6 ? 6 : 6;
	let values = [];
	
	for (let i = 0; i< ends; i++) {
		values.push(`(${stageScoreId}, ${i+1}, '0', '0', '0', '0', '0', '0')`)
	}

	values = values.join(', ');
	baseQuery.push(values)
	let finalQuery = baseQuery.join(' ');

	console.log("function final query", finalQuery)
	return finalQuery;
}

export {
	createInsertEndsQuery
}