import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import Header from '../components/Header'
import CreateDeck from '../components/CreateDeck'
import DeckItem from '../components/DeckItem'

const HomeScreen = props => {
  const [deckList, setDeckList] = useState([])

  const addDeckHandler = (title) => {
    // setDeckList([...deckList, enteredDeck])
    setDeckList(prev => [
      ...prev,
      {key: Math.random().toString(), title: title}
    ])
  }
  return (
    <View style={styles.screen}>
      <View>
        <Button title='Go there' onPress={() => {
          props.navigation.navigate({routeName: 'Deck'})
        }}/>
      </View>
      <View style={styles.cardView} >
        <CreateDeck onAddDeck={addDeckHandler}/>
        {/* <ScrollView></ScrollView> */}
        <FlatList
          data={deckList}
          renderItem= {i => (
              <DeckItem title={i.item.title} />
            )}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  cardView: {
    padding: 50
  }
});

export default HomeScreen

