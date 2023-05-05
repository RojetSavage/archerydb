import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/base'

export default function AddPlayerScoreMenu({navigation}) {

  return (
    <View style={styles.container}>
      <Button
        title="Add Competition Scores"
        onPress={() => navigation.navigate("Select Competition",)}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <Button
        title="Add Non-Competition Scores"
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