import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Button, Icon } from '@rneui/base'

export default function Round({name, total_arrows, inComp, competitionId, setToggleUpdate}) {
	const endpointURL = inComp ? 'http://10.1.1.140:3001/competition/rounds/remove' : 'http://10.1.1.140:3001/competition/rounds/add'

	function handleSubmit() {
		fetch(endpointURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ competitionId: competitionId, roundName: name })
		})
		setToggleUpdate(prevState => !prevState)
	}

	return (
		<ListItem bottomDivider>
			<ListItem.Content style={styles.listItemContainer}>
				<View >
					<ListItem.Title>{name}</ListItem.Title>
					<ListItem.Subtitle>{`Total Arrows: ${total_arrows}`}</ListItem.Subtitle>
				</View>

				<Button type="clear" onPress={() => handleSubmit() }>
					<Icon name={inComp ? "minus" : "plus"} type="feather" color="black" />
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