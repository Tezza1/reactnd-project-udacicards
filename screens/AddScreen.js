import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Keyboard } from 'react-native'
import Header from '../components/Header'

const AddScreen = props => {
  const [enteredQuestion, setEnteredQuestion] = useState('')
  const [enteredAnswer, setEnteredAnswer] = useState('')
  const [inputError, setInputError] = useState(false)
  let errorDisplay = ''

  const inputQTextHandler = (e) => {
    setEnteredQuestion(e)
  }

  const inputATextHandler = (e) => {
    setEnteredAnswer(e)
  }

  const cancelHandler = () => {
    setEnteredQuestion('')
    setEnteredAnswer('')
    setInputError(false)
    Keyboard.dismiss()
  }

  const addHandler = () => {
    if(enteredDeck === '') {
      setInputError(true)
    } else {
      cancelHandler()
    }
  }

  if(inputError){
    errorDisplay = (
      <View>
        <Text style={styles.errorText}>Please add a title</Text>
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
            onPress={()=>{
              props.navigation.navigate({routeName: 'Quiz'})
            }}
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
    justifyContent: 'center',
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
  }
})

export default AddScreen
