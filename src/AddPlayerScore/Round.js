import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function Round({ roundName, idx, competitionId, playerName, archerId, archerClassification }) {
	const navigation = useNavigation();

	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate("Select Player's Stage", {roundName, competitionId, playerName, archerClassification, archerId})}>
				<ListItem >
					<ListItem.Content style={styles.listItemContainer}>
						<View >
							<ListItem.Title>{roundName}</ListItem.Title>
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