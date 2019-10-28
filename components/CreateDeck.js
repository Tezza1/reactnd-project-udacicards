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
          title='Add Deck'
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
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  },
  buttons: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10
  }
});

export default CreateDeck
