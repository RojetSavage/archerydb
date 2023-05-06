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

	return (
		<ScorecardContext.Provider value={{
			handleSelectScoreCell,
			// handleValueChange,
			resetSelectedCell,
			selectedCell
		}}>
			{children}
		</ScorecardContext.Provider>
	)
}

export default function useScorecardContext() {
	return useContext(ScorecardContext);
}