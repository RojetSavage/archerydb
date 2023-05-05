import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useState } from "react";
import EditingPlayerDialog from "./EditingPlayerDialog";

export default function Archer({ name, birthdate, gender, classification_type, id, setToggleUpdate }) {
	const [isEditing, setIsEditing] = useState(false)

	return (
		<>
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

					<Button type="clear" onPress={() => setIsEditing(true)} >
						<Icon name="edit" type="feather" color="black" />
					</Button>

				</ListItem.Content>
			</ListItem>

			{isEditing && <EditingPlayerDialog isEditing={isEditing} setIsEditing={setIsEditing} setToggleUpdate={setToggleUpdate} currentName={name} currentBirthdate={birthdate} currentGender={gender} id={id}/>}

		</>
	)
}

const styles = StyleSheet.create({
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
})