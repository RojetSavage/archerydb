import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/base'

export default function CompetitionEditMenu({ navigation, route }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Button
        title="Add / Remove Players"
        onPress={() => navigation.navigate("Add Players To Comp", { id })}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <Button
        title="Add / Remove Rounds"
        onPress={() => navigation.navigate("Add Rounds To Comp", { id })}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})