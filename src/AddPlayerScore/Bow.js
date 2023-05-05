import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function Bow({ archerId, stageId, bowType, roundName, roundType, distance, competitionId, playerName, archerClassification}) {
	const navigation = useNavigation();
	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate("Add Player's Competition Score", { playerName, competitionId, archerClassification, bowType, roundName, archerId, roundType, distance, stageId })}>
				<ListItem >
					<ListItem.Content style={styles.listItemContainer}>
						<View >
							<ListItem.Title>{bowType}</ListItem.Title>
							<ListItem.Subtitle>{archerClassification}</ListItem.Subtitle>
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