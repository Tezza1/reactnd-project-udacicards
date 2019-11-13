import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../store/actions/questions'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../components/Header'
import CreateDeck from '../components/CreateDeck'
import DeckItem from '../components/DeckItem'

const HomeScreen = props => {
  const [deckList, setDeckList] = useState([])

  useEffect(() => {
    props.getQuestions()
    const { questions } = props

    if (typeof questions === 'undefined'){
      console.log('')
    } else if (!deckList.length) {
      for (let key in questions) {
        setDeckList(prev => [
          ...prev,
          {key: Math.random().toString(), title: questions[key].title}
        ])
      }
    }
  });

  const addDeckHandler = title => {
    // setDeckList([...deckList, enteredDeck])
    setDeckList(prev => [
      ...prev,
      {key: Math.random().toString(), title: title}
    ])
  }

  return (
    <View style={styles.screen}>
      <View>
        <Header title={"Udacicard's Japanese Builder"}/>
      </View>
      <View style={styles.cardView} >
        <CreateDeck onAddDeck={addDeckHandler}/>
        {/* <ScrollView></ScrollView> */}
        <FlatList
          data = { deckList }
          renderItem= {i => (
              <DeckItem title={i.item.title} navigation={props.navigation} />
            )}
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
    questions: state.questions.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => dispatch(getQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

