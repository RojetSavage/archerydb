import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function Stage({ roundName, stageId, idx, competitionId, playerName, archerId, archerClassification, roundType, distance }) {
	const navigation = useNavigation();

	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate("Select Player's Bow", {archerId, roundName, roundType, distance, competitionId, playerName, archerClassification, stageId})}>
				<ListItem >
					<ListItem.Content style={styles.listItemContainer}>
						<View >
							<ListItem.Title>{`${distance} meters - ${roundType.slice(0,2) === "36" ? "6" : "5"} Ends`}</ListItem.Title>
							<ListItem.Subtitle>{`${roundType[2] === "*" ? "80cm Face" : "122cm Face"}`}</ListItem.Subtitle>

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