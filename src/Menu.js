import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Create Player"
        buttonStyle={styles.buttonStyle}
        type="outline"
        raised
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Create Player")}
      />
      <Button
        title="View/Edit Players"
        buttonStyle={styles.buttonStyle}
        type="outline"
        raised
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("View Players")}
      />
      <Button
        title="Create Competition"
        buttonStyle={styles.buttonStyle}
        type="outline"
        raised
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Create Competition")}
      />
      <Button
        title="Edit Competition"
        buttonStyle={styles.buttonStyle}
        type="outline"
        raised
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Edit Competition Stack")}
      />
      <Button
        title="Add Scores"
        buttonStyle={styles.buttonStyle}
        type="outline"
        raised
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Add Player Score")}
      />
      <Button
        title="View Scores"
        buttonStyle={styles.buttonStyle}
        type="outline"
        raised
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("View Player Scores")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonStyle: {
    borderColor: 'rgba(78, 116, 289, 1)',
  },
  titleStyle: {
    color: 'rgba(78, 116, 289, 1)'
  }
})