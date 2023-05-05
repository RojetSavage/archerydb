import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function Round({ roundName, idx, competitionId, possibleScore, totalArrows }) {
	const navigation = useNavigation();

	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate("Select Player", { competitionId, roundName })}>
				<ListItem >
					<ListItem.Content style={styles.listItemContainer}>
						<View >
							<ListItem.Title>{roundName} - {totalArrows} arrows.</ListItem.Title>
							<ListItem.Subtitle>Max Score Possible: {possibleScore} </ListItem.Subtitle>
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