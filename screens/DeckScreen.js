import React, { useState, useEffect  } from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { quizProgress, quizNumber } from '../store/actions/decks'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'

const DeckScreen = props => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState('')
  const [errors, setErrors] = useState(false)
  let errorText = ''

  useEffect(() => {
    setTitle(props.deck.title)
    setQuestions(props.deck.questions)
  })

  const errorCheck = () => {
    if(!props.deck.questions.length){
      setErrors(true)
    } else {
      props.navigation.navigate({routeName: 'Quiz'})
    }
  }

  if(errors) {
    errorText = "Deck must contain a question"
  } else {
    errorText = ''
  }

  const handleStartQuiz = () => {
    props.quizProgress(true)
    props.quizNumber(0)
    errorCheck()
  }

  return(
    <View style={styles.screen}>
      <NavigationEvents
        onWillFocus={() => setQuestions(props.deck.questions)}
      />
      <View>
        <Header title={"Udacicard's Japanese Builder"}/>
      </View>
      <View style={styles.textArea}>
        <View style={styles.mainText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subText}>Questions in this deck: {questions.length}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title='Add card'
            style={styles.button}
            onPress={()=>{
              setErrors(false)
              props.navigation.navigate({routeName: 'Add'})
            }}
          />
          <Button
            title='Start quiz'
            color="green"
            style={styles.button}
            onPress={handleStartQuiz}
          />
        </View>
        <View>
          <Text style={styles.errorText}>{errorText}</Text>
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
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40
  },
  mainText: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  title :{
    fontFamily: 'openSansBold',
    color: '#0277bd',
    fontWeight: 'bold',
    fontSize: 20
  },
  subText: {
    marginTop: 20,
    fontStyle: 'italic',
    fontSize: 18
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 30
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

const mapDispatchToProps = dispatch => {
  return {
    quizProgress: (reset) => dispatch(quizProgress(reset)),
    quizNumber: (num) => dispatch(quizNumber(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen)
