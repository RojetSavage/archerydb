import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { ListItem, Avatar, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Competition({ id, date, name }) {
	const [isEditing, setIsEditing] = useState(false)
	const navigation = useNavigation();

	return (
		<>
			{/* <TouchableOpacity onPress={() => navigation.navigate("Select Player", { id })} > */}
			<TouchableOpacity onPress={() => navigation.navigate("Select Round", { competitionId: id })} >
				<ListItem >
					<Image source={require('../../assets/crown.png')} style={{ height: 40, width: 40 }} />
					<ListItem.Content style={styles.listItemContainer}>
						<View >
							<ListItem.Title>{name != undefined ? name : `Competition ${id}`}</ListItem.Title>
							<ListItem.Subtitle>{`${date.slice(0, 10)}`}</ListItem.Subtitle>
						</View>

						<Button type="clear" >
							<Icon name="chevron-right" color="black" />
						</Button>

					</ListItem.Content>
				</ListItem>
			</TouchableOpacity>

		</>
	)
}

const styles = StyleSheet.create({
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
})