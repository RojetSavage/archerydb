import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function Archer({ archerName, classificationType, idx, competitionId, archerId, roundName }) {

	const navigation = useNavigation();
	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate("Select Player's Stage", { playerName: archerName, competitionId: competitionId, archerClassification: classificationType, archerId: archerId, roundName })}>
				
				<ListItem >
					<Text>{`Player: ${idx + 1}`}</Text>
					<ListItem.Content style={styles.listItemContainer}>
						<View >
							<ListItem.Title>{archerName}</ListItem.Title>
							<ListItem.Subtitle>{classificationType}</ListItem.Subtitle>
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