import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default headerRight = (id) => {
	const navigation = useNavigation();

	function handlePress() {
		navigation.navigate("Add Rounds To Comp")
	}
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() => handlePress()}
			>
				<Text style={{
					fontSize: 18,
					marginRight: 10,
					color: "green"
				}}
				>
					Next
				</Text>
			</TouchableOpacity>)
	}
}