import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const DeckItem = props => {
  return(
    <TouchableOpacity activeOpacity={0.7}  onPress={() => {}}>
      <View style={styles.listItem}>
        <Ionicons name='ios-arrow-forward' size={24} color={'#607d8b'}/>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 10,
    borderColor: '#90a4ae',
    borderWidth: 1,
    // ios
    shadowColor: '#607d8b',
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    // android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'openSansBold',
    color: '#607d8b',
    fontSize: 16,
    marginLeft: 10
  }
})

export default DeckItem
