import React, { useState, useEffect  } from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

const DeckScreen = props => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState('')

  useEffect(() => {
    setTitle(props.deck.title)
    setQuestions(props.deck.questions)
  })

  return(
    <View style={styles.screen}>
      <View>
        <Header title={"Udacicard's Japanese Builder"}/>
      </View>
      <View style={styles.textArea}>
        <View style={styles.mainText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subText}>Questions in this deck:</Text>
          <Text>{questions.length}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title='Add card'
            style={styles.button}
            onPress={()=>{}}
          />
          <Button
            title='Start quiz'
            color="green"
            style={styles.button}
            onPress={()=>{
              props.navigation.navigate({routeName: 'Quiz'})
            }}
          />
        </View>
      </View>
    </View>
  )
}

DeckScreen.navigationOptions = {
  headerTitle: 'Deck Info',
  headerStyle: {
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  headerTintColor: '#0277bd'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  textArea: {
    alignItems: 'center'
  },
  mainText: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  title :{
    fontFamily: 'openSansBold',
    color: '#0277bd',
    fontWeight: 'bold',
    fontSize: 20
  },
  subText: {
    marginTop: 20
  },
  buttons: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10
  }
})

const mapStateToProps = state => {
return {
  deck: state.decks.currentDeck
}
}

export default connect(mapStateToProps)(DeckScreen)
