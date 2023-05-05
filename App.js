import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/Menu';
import CreatePlayer from './src/CreatePlayer';
import CreateCompetition from './src/CreateCompetition/CreateCompetition';
import ViewPlayerScore from './src/ViewPlayerScore';
import ViewPlayers from './src/ViewPlayers/ViewPlayers';
import EditCompetitionStack from './src/EditCompetition/EditCompetitionStack';
import AddPlayerScoreStack from './src/AddPlayerScore/AddPlayerScoreStack';
import { ScorecardContextProvider } from './src/contexts/ScorecardContextProvider';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScorecardContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Create Player" component={CreatePlayer} />
          <Stack.Screen name="View Players" component={ViewPlayers} />
          <Stack.Screen name="Create Competition" component={CreateCompetition} />
          <Stack.Screen name="Edit Competition Stack" component={EditCompetitionStack} options={{ headerShown: false }} />
          <Stack.Screen name="Add Player Score" component={AddPlayerScoreStack} options={{ headerShown: false }} />
          <Stack.Screen name="View Player Scores" component={ViewPlayerScore} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScorecardContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
