import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addQuiz, setDeck } from '../store/actions/decks'
import { View, Text, Button, TextInput, StyleSheet, Keyboard } from 'react-native'
import Header from '../components/Header'

const AddScreen = props => {
  const [enteredQuestion, setEnteredQuestion] = useState('')
  const [enteredAnswer, setEnteredAnswer] = useState('')
  const [inputError, setInputError] = useState(false)
  const [successDisplay, setSuccessDisplay] = useState(<Text></Text>)
  let errorDisplay = ''

  const inputQTextHandler = (e) => {
    setEnteredQuestion(e)
    setSuccessDisplay(<Text></Text>)
  }

  const inputATextHandler = (e) => {
    setEnteredAnswer(e)
    setSuccessDisplay(<Text></Text>)
  }

  const cancelHandler = () => {
    setEnteredQuestion('')
    setEnteredAnswer('')
    setInputError(false)
    Keyboard.dismiss()
  }

  const addHandler = () => {
    if(enteredQuestion === '' || enteredAnswer === '') {
      setInputError(true)
    } else {
      props.addQuiz({
        question: enteredQuestion,
        answer: enteredAnswer
      })
      props.setDeck(props.currentDeck.title)
      setSuccessDisplay(<Text style={styles.successText}>Succesfully added to Deck</Text>)
      // props.navigation.goBack()
      cancelHandler()
    }
  }

  if(inputError){
    errorDisplay = (
      <View>
        <Text style={styles.errorText}>Please complete the form</Text>
      </View>
    )
  } else {
    errorDisplay = <View></View>
  }

  return(
    <View style={styles.screen}>
      <Header title={"Udacicard's Japanese Builder"}/>
      <View style={styles.textArea}>
        <View style={styles.mainText}>
          <Text style={styles.title}>Add a question</Text>
        </View>
          {errorDisplay}
          {successDisplay}
          <TextInput
            placeholder='Add a Question'
            style={styles.textInput}
            textAlign={'center'}
            onChangeText={inputQTextHandler}
            value={enteredQuestion}
          />
          <TextInput
            placeholder='Add the Answer'
            style={styles.textInput}
            textAlign={'center'}
            onChangeText={inputATextHandler}
            value={enteredAnswer}
          />
        <View style={styles.buttons}>
          <Button
            title='Cancel'
            color='red'
            style={styles.button}
            onPress={cancelHandler}
          />
          <Button
            title='Add'
            style={styles.button}
            onPress={addHandler}
          />
        </View>
      </View>
    </View>
  )
}

AddScreen.navigationOptions = {
  headerTitle: 'Add Question',
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
  textArea: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40
  },
  textInput: {
    width: '70%',
    padding: 10,
    fontSize: 18,
    borderBottomColor: '#90a4ae',
    borderBottomWidth: 1,
    marginBottom: 10
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
  buttons: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  successText: {
    color: 'green',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
})

mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck
  }
}

mapDispatchToProps = dispatch => {
  return {
    addQuiz: (question) => dispatch(addQuiz(question)),
    setDeck: (title) => dispatch(setDeck(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
