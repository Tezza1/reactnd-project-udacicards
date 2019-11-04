import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const QuizScreen = props => {
  console.log(props.navigation.getParam('categoryId'))
  return(
    <View style={styles.screen}>
      <Text>This is the QuizScreen</Text>
      <View>
        <Button title="Go back" onPress={() => {
          props.navigation.goBack()
        }}/>
        <Button title="Home" onPress={() => {
          props.navigation.popToTop()
        }}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default QuizScreen
