import { StyleSheet, View } from 'react-native'
import { ListItem, Avatar, Button, Icon } from '@rneui/base'

export default function Archer({ archer_id, compId, name, gender, classification_type, inComp, setToggleUpdate }) {
	const endpointURL = inComp ? 'http://10.1.1.140:3001/competition/archer/remove' : 'http://10.1.1.140:3001/competition/archer/add'

	
	function handleSubmit() {
		fetch(endpointURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ archerId: archer_id, compId:compId })
		})
		setToggleUpdate(prevState => !prevState)
	}

	return (
		<ListItem bottomDivider>
			<Avatar
				rounded
				source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
			/>
			<ListItem.Content style={styles.listItemContainer}>
				<View >
					<ListItem.Title>{name}</ListItem.Title>
					<ListItem.Subtitle>{`${gender} - ${classification_type}`}</ListItem.Subtitle>
				</View>

				<Button type="clear" onPress={() => handleSubmit(archer_id)} >
					<Icon name={ inComp ? "minus" : "plus"} type="feather" color="black" />
				</Button>
			</ListItem.Content>
		</ListItem>
	)
}

const styles = StyleSheet.create({
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
})