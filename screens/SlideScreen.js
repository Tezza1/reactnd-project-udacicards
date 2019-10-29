import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SlideScreen = props => {
  return(
    <View style={styles.screen}>
        <Button title='Go there' onPress={() => {
          props.navigation.navigate({routeName: 'Quiz'})
        }}/>
      <Text>This is the SlideScreen</Text>
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

export default SlideScreen
