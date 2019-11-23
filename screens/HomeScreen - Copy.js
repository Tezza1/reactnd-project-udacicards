import React, { useState, useEffect } from 'react'
import { NavigationEvents } from 'react-navigation'
import { connect } from 'react-redux'
// import { getDecks } from '../store/actions/decks'
import { handleGetDecks } from '../store/actions/decks'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../components/Header'
import CreateDeck from '../components/CreateDeck'
import DeckItem from '../components/DeckItem'

const HomeScreen = props => {
  const [deckList, setDeckList] = useState([])

  useEffect(() => {
    // props.getDecks()
    // getData()
  })

  const getData = () => {
    const { decks } = props

    if (typeof decks === 'undefined'){
      console.log('')
    } else if (!deckList.length) {
      for (let key in decks) {
        setDeckList(prev => [
          ...prev,
          {
            key: Math.random().toString(),
            title: decks[key].title,
            questions: decks[key].questions.length
          }
        ])
      }
    } else {
      setDeckList([])
      for (let key in decks) {
          setDeckList(prev => [
          ...prev,
          {
            key: Math.random().toString(),
            title: decks[key].title,
            questions: decks[key].questions.length
          }
        ])
      }
    }
  }

  const addDeckHandler = title => {
    // setDeckList([...deckList, enteredDeck])
    setDeckList(prev => [
      ...prev,
      {
        key: Math.random().toString(),
        title: title
      }
    ])
  }

  return (
    <View style={styles.screen}>
      <NavigationEvents
        onWillFocus={() => {
          // getData()
        }}
      />
      <View>
        <Header title={"Udacicard's Japanese Builder"}/>
      </View>
      <View style={styles.cardView} >
        <CreateDeck onAddDeck={addDeckHandler}/>
        {/* <ScrollView></ScrollView> */}
        <FlatList
          data = { deckList }
          renderItem= {i => (
              <DeckItem title={i.item.title} questions={i.item.questions} navigation={props.navigation} />
            )}
          extraData={ deckList }
          />
      </View>
    </View>
  )
}

HomeScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  cardView: {
    padding: 50
  }
});

const mapStateToProps = state => {
  return {
    decks: state.decks.decks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getDecks: () => dispatch(getDecks())
    getDecks: () => dispatch(handleGetDecks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
