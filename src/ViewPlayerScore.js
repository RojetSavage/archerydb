import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/base'

export default function ViewPlayerScore({navigation}) {

  return (
    <View style={styles.container}>
      <Button
        title="View Scores By Round"
        onPress={() => navigation.navigate("Select Competition",)}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
	  {/* select from the rounds */}
	  {/* query all scores for the round  */}

      <Button
        title="View Scores By Competition"
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="View Scores By Player"
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