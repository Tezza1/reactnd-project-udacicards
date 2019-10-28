import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DeckItem = props => {
  return(
    <TouchableOpacity activeOpacity={0.7}  onPress={() => {}}>
      <View style={styles.listItem}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderColor: '#90a4ae',
    borderWidth: 1,
    // ios
    shadowColor: '#607d8b',
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.5,
    // android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#eceff1'
  },
  title: {
    color: '#607d8b',
    fontSize: 16
  }
})

export default DeckItem
