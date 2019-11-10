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
    justifyContent: 'center',
    borderColor: '#90a4ae',
    borderWidth: 1,
    // ios
    shadowColor: '#607d8b',
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: 0.3,
    // android
    elevation: 5,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'staatliches'
  }
})

export default Header

