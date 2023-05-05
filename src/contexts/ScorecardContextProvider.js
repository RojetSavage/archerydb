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

	function handleValueChange(setter, value) {
		setter(prevState => {
			return prevState.map((end, endIdx) => {
				return end.map((arrow, arrowIdx) => {
					if (endIdx + 1 === selectedCell.end && arrowIdx + 1 === selectedCell.arrow ) {
						return value 
					} else {
						return prevState[endIdx][arrowIdx] 
					}
				})
			})
		})
	}


	return (
		<ScorecardContext.Provider value={{
			handleSelectScoreCell,
			handleValueChange,
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