import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const CreateDeck = props => {
  const [enteredDeck, setEnteredDeck] = useState('')

  const inputTextHandler = (e) => {
    setEnteredDeck(e)
  }

  return (
    <View style={styles.inputView}>
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
          style={styles.button}
          color="red"
          onPress={() => {}}
        />
        <Button
          title='Add'
          style={styles.button}
          onPress={() => props.onAddDeck(enteredDeck)}
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
    // ios
    shadowColor: '#607d8b',
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    // android
    elevation: 5
  },
  buttons: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10
  }
});

export default CreateDeck
