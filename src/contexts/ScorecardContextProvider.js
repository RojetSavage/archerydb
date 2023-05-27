import { useContext, createContext, useState } from 'react';

const ScorecardContext = createContext();

export const ScorecardContextProvider = function({ children }) {
	const [selectedCell, setSelectedCell] = useState({end:0, arrow:0});
	
	function handleSelectScoreCell(end, arrow) {
		if (selectedCell.end === end && selectedCell.arrow === arrow) {
			resetSelectedCell();
		} else {
			setSelectedCell({end, arrow})
		}
	}

	function resetSelectedCell() {
		setSelectedCell({end:0, arrow:0});
	}

	function getEndTotal(end) {
		let scores = Object.entries(end);
		let sum = 0;
	
		for (let i = 2; i < 8; i++) {
			console.log(scores[i][1])
			if (scores[i][1] === "M") {
				sum += 0;
				continue;
			} else if (scores[i][1] === "X") {
				sum+= 10;
				continue
			} else {
				sum += Number(scores[i][1]);
			}
		}
	
		return sum;
	}

	return (
		<ScorecardContext.Provider value={{
			handleSelectScoreCell,
			resetSelectedCell,
			selectedCell,
			getEndTotal
		}}>
			{children}
		</ScorecardContext.Provider>
	)
}

export default function useScorecardContext() {
	return useContext(ScorecardContext);
}