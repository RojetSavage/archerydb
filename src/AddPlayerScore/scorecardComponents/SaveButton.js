import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

export default function SaveButton() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Button containerStyle={styles.button} title={"Cancel"} onPress={() => navigation.goBack()} />
			<Button containerStyle={{ ...styles.button, marginLeft: 20 }} title={"Save"}  />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row"
	},
	button: {
		borderRadius: 10,
		width: 150,
		marginBottom: 20
	}
})