import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingVertical: 30,
    backgroundColor: '#0277bd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 24
  }
})

export default Header

