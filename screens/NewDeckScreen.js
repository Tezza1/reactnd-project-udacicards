import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import CreateDeck from '../components/CreateDeck'

const NewDeckScreen = props => {
  return(
    <View style={styles.screen}>
      <Header title={"Udacicard's Japanese Builder"} />
      <View style={styles.cardView} >
        <CreateDeck navigation={props.navigation} />
      </View>
    </View>
  )
}

NewDeckScreen.navigationOptions = {
  headerTitle: 'Add Deck',
  headerStyle: {
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  headerTintColor: '#0277bd'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardView: {
    padding: 50,
    marginBottom: 150
  }
})

export default NewDeckScreen