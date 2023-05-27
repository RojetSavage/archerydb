import {Dimensions} from 'react-native';

export function getCellStyles(end, arrow, selectedCell) {
	return {
		width: Dimensions.get('window').width * 0.8 / 7,
		height: Dimensions.get('window').height * 0.06,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		backgroundColor: selectedCell.end === end && selectedCell.arrow === arrow ? "yellow" : "white",
		alignItems: "center",
		justifyContent: "center",
	}
}