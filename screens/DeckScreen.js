import React, { useState } from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const DeckScreen = props => {
  const testData = [{key: 'aa', name: 'Bob'}, {key: 'bb', name: 'Bill'}, {key: 'cc', name: 'Jill'}, {key: 'dd', name: 'Liz'}]

  const renderGridItem = data => {
    return (
      <TouchableOpacity onPress={() => {
        props.navigation.navigate({
          routeName: 'Quiz',
          params: {
            // can send any key value pairs you like
            categoryId: data.item.key
          }
        })
      }}>
        <View style={styles.grid}>
          <Text>{data.item.name}</Text>
        </View>
    </TouchableOpacity>
    )
  }

  DeckScreen.navigationOptions = (navigationData) => {
    navigationData.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    // return {
      // headerTitle: selectedCategory.title
    // }
  }

  return(
    <View style={styles.screen}>
      <View>
        <Button title='Go there' onPress={() => {
          props.navigation.navigate({routeName: 'Slide'})
        }}/>
        <Text>This is the DeckScreen</Text>
      </View>
      <View>
        <FlatList
          data = {testData}
          renderItem={renderGridItem}
          numColumns={2}
        />
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

export default DeckScreen
