import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditCompetition from './EditCompetition';
import CompetitionEditMenu from './CompetitionEditMenu';
import AddPlayersToCompetition from './AddPlayersToCompetition';
import AddRoundsToCompetition from './AddRoundsToCompetition';
import headerRight from '../../styles/headerRight';

const Stack = createNativeStackNavigator()

export default function EditCompetitionStack({navigation}) {

	return (
		<Stack.Navigator initialRouteName="Edit Competition" options={{headerShown:false}} screenOptions={{animation:"slide_from_right", animationDuration:20}}>
			<Stack.Screen name="Edit Competition" component={EditCompetition}/>			
			<Stack.Screen name="Competition Edit Menu" component={CompetitionEditMenu}/>			
			<Stack.Screen name="Add Players To Comp" component={AddPlayersToCompetition}/>			
			<Stack.Screen name="Add Rounds To Comp" component={AddRoundsToCompetition}/>			
		</Stack.Navigator>	
	)
}




