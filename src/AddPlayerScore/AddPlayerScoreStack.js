import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPlayerScoreMenu from './AddPlayerScoreMenu';
import SelectCompetition from './SelectCompetition';
import SelectPlayerForCompetition from './SelectPlayerForCompetition';
import SelectCompetitionRound from './SelectCompetitionRound';
import AddPlayersCompetitionScore from './AddPlayersCompetitionScore';
import SelectPlayersCompetitionBow from './SelectPlayersCompetitionBow'
import SelectPlayersCompetitionStage from './SelectPlayersCompetitionStage'

const Stack = createNativeStackNavigator()

export default function AddPlayerScoreStack({navigation}) {

	return (
		<Stack.Navigator initialRouteName="AddPlayerScoreMenu" options={{headerShown:false}} screenOptions={{animation:"slide_from_right", animationDuration:20}}>
			<Stack.Screen name="Add Player Score Menu" component={AddPlayerScoreMenu}/>			
			<Stack.Screen name="Select Competition" component={SelectCompetition}/>			
			<Stack.Screen name="Select Round" component={SelectCompetitionRound}/>			
			<Stack.Screen name="Select Player" component={SelectPlayerForCompetition}/>			
			<Stack.Screen name="Select Player's Stage" component={SelectPlayersCompetitionStage}/>			
			<Stack.Screen name="Select Player's Bow" component={SelectPlayersCompetitionBow}/>			
			<Stack.Screen name="Add Player's Competition Score" component={AddPlayersCompetitionScore}/>			
		</Stack.Navigator>	
	)
}




