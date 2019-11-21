import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ResultScreen = props => {
  return(
    <View style={styles.screen}>
        <Button title='Go there' onPress={() => {
          props.navigation.navigate({routeName: 'Quiz'})
        }}/>
      <Text>This is the ResultScreen</Text>
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

export default ResultScreen
