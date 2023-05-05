import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import ScorecardHeaderRow from './ScorecardHeaderRow';
import ScorecardScoreRow from './ScorecardScoreRow';

function getScorecardInitState(ends) {
  let scorecardInitState = {}

  for (let i = 0; i < ends; i++) {
    scorecardInitState[`end${i + 1}`] = { arrow1: 0, arrow2: 0, arrow3: 0, arrow4: 0, arrow5: 0, arrow6: 0 }
  }
  return scorecardInitState;
}

export default function Scorecard({ roundType }) {
  const ends = roundType.slice(0, 2) === "30" ? 5 : 6
  const [scorecard, setScorecard] = useState(getScorecardInitState(ends));

  function getScorecardRows() {
    let scorecardRows = [];
    for (let i = 0; i < ends; i++) {
      scorecardRows.push(<ScorecardScoreRow idx={i} scorecard={scorecard} setScorecard={setScorecard} />)
    }
    return scorecardRows;
  }

  return (
    <View>
      <ScorecardHeaderRow />
      {getScorecardRows()}
    </View>
  )
}

const styles = StyleSheet.create({})
