import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { ListItem, Avatar, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import EditCompetitionDialog from './EditCompeitionDialog';

export default function Competition({ id, date, name, is_club_championship, setToggleUpdate }) {
	const [isEditing, setIsEditing] = useState(false)
	const navigation = useNavigation();

	return (
		<>
		<TouchableOpacity onPress={() => navigation.navigate("Competition Edit Menu", {id})}>

			<ListItem >
				<Image source={require('../../assets/crown.png')} style={{height:40, width:40}}/>
				<ListItem.Content style={styles.listItemContainer}>
					<View >
						<ListItem.Title>{name != undefined ? name : `Competition ${id}`}</ListItem.Title>
						<ListItem.Subtitle>{`${date.slice(0,10)}`}</ListItem.Subtitle>
					</View>

					<Button type="clear" onPress={() => setIsEditing(true)} >
						<Icon name="edit" type="feather" color="black" />
					</Button>

				</ListItem.Content>
			</ListItem>
		</TouchableOpacity>

		{isEditing && <EditCompetitionDialog isEditing={isEditing} setIsEditing={setIsEditing} setToggleUpdate={setToggleUpdate} id={id} isClubChampionship={is_club_championship} date={date} name={name}/>}

		</>
	)
}

const styles = StyleSheet.create({
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
})