import React, { useState, useEffect  } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

const DeckScreen = props => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState('')

  useEffect(() => {
    setTitle(props.deck.title)
    setQuestions(props.deck.questions)
  })


  DeckScreen.navigationOptions = navigationData => {
    return {
      headerTitle: navigationData.navigation.getParam('title'),
      headerStyle: {
        fontFamily: 'openSans',
        fontWeight: 'bold'
      },
      headerTintColor: '#0277bd'
    }
  }

  return(
    <View style={styles.screen}>
      <View>
        <Button title='Go there' onPress={() => {
          props.navigation.navigate({routeName: 'Slide'})
        }}/>
        <Text>This is the DeckScreen</Text>
        <Text>{title}</Text>
        <Text>{questions.length}</Text>
      </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    // flex: 1,
    margin: 15,
    height: 150
  }
})

const mapStateToProps = state => {
return {
  deck: state.questions.currentDeck
}
}

export default connect(mapStateToProps)(DeckScreen)
