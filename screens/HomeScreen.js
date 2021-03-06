import React from 'react'
import { NavigationEvents } from 'react-navigation'
import { connect } from 'react-redux'
import { handleGetDecks } from '../store/actions/decks'
import { StyleSheet, View, Button, ScrollView } from 'react-native'
import Header from '../components/Header'
import DeckItem from '../components/DeckItem'
import { Ionicons } from '@expo/vector-icons'

class HomeScreen extends React.Component {
  state = {
    decks: []
  }

  componentDidMount(){
    this.retrieveData()
  }

  retrieveData = async () => {
    await this.props.getDecks()
      .then(i => this.getData())
    return 'done'
  }

  getData = () => {
    const { decks } = this.props
    let arrDecks = []
    if (Object.getOwnPropertyNames(decks).length === 0) {
      console.log('')
    } else {
      for (let key in decks) {
        let value = decks[key]
        arrDecks.push({key: key, item: value})
      }
    }
    this.setState({
      decks: arrDecks
    })
  }

  myButton = (
    <Ionicons.Button
      name="ios-add-circle-outline"
      backgroundColor='#3b5998'
      onPress={() => { this.props.navigation.navigate({ routeName: 'New' })}}>
      Add Deck
  </Ionicons.Button>
  )

  render(){
    return (
      <View style={styles.screen}>
        <NavigationEvents
          onWillFocus={() => {
            this.retrieveData()
          }}
        />
        <View>
          <Header title={"Udacicard's Japanese Builder"} />
        </View>
        <View style={styles.cardView} >
          <ScrollView>
            {this.state.decks.map(i => {
              return <DeckItem key={i.key} title={i.item.title} questions={i.item.questions.length} navigation={this.props.navigation} />
            })}
          </ScrollView>
          <View style={styles.buttonArea}>
            {this.myButton}
          </View>
        </View>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
  headerStyle: {
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  headerTintColor: '#0277bd'
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  cardView: {
    padding: 50,
    marginBottom: 100
  },
  buttonArea: {
    paddingTop: 10,
  }
});

const mapStateToProps = state => {
  return {
    decks: state.decks.decks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDecks: () => dispatch(handleGetDecks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
