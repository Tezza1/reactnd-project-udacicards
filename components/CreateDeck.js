import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { addDeck, setDeck } from '../store/actions/decks'

const CreateDeck = props => {
  const [enteredDeck, setEnteredDeck] = useState('')
  const [inputError, setInputError] = useState(false)
  let errorDisplay = ''

  const inputTextHandler = (e) => {
    setEnteredDeck(e)
  }

  const cancelHandler = () => {
    setEnteredDeck('')
    setInputError(false)
    Keyboard.dismiss()
  }

  const addHandler = () => {
    if(enteredDeck === '') {
      setInputError(true)
    } else {
      props.addDeck(enteredDeck)
      cancelHandler()
      props.setDeck(enteredDeck)
      props.navigation.navigate({ routeName: 'Deck' })
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

  return (
    <View style={styles.inputView}>
      {errorDisplay}
      <TextInput
        placeholder='Add a New Card Deck'
        style={styles.textInput}
        textAlign={'center'}
        onChangeText={inputTextHandler}
        value={enteredDeck}
      />
      <View style={styles.buttons}>
        <Button
          title='Cancel'
          color="red"
          onPress={cancelHandler}
        />
        <Button
          title='Create Deck'
          onPress={()=>{addHandler()}}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  textInput: {
    width: '80%',
    padding: 10,
    fontSize: 18,
    borderBottomColor: '#90a4ae',
    borderBottomWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addDeck: (title) => dispatch(addDeck(title)),
    setDeck: (title) => dispatch(setDeck(title))
  }
}

export default connect(null, mapDispatchToProps)(CreateDeck)