import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { setDeck } from '../store/actions/questions'

const DeckItem = props => {
  return(
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => {
      props.setDeck(props.title)
      props.navigation.navigate({
        routeName: 'Deck',
        params: {
          title: props.title
        }
      })
    }}>
      <View style={styles.listItem}>
        <Ionicons name='ios-arrow-forward' size={24} color={'white'}/>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

  /* <View>
        <Button title='Go there' onPress={() => {
          props.navigation.navigate({routeName: 'Deck'})
        }}/>
        </View>
  */

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
    backgroundColor: '#0277bd'
  },
  title: {
    fontFamily: 'openSansBold',
    color: 'white',
    fontSize: 16,
    marginLeft: 10
  }
})

const mapDispatchToProps = dispatch => {
  return {
    setDeck: (title) => dispatch(setDeck(title))
  }
}

export default connect(null, mapDispatchToProps)(DeckItem)
