import React from 'react'
import { connect } from 'react-redux'
import { handleGetDecks } from '../store/actions/decks'
import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import Header from '../components/Header'
import CreateDeck from '../components/CreateDeck'
import DeckItem from '../components/DeckItem'

class HomeScreen extends React.Component {
  state = {
    decks: []
  }

  componentDidMount(){
    const retrieveData = async () => {
      await this.props.getDecks()
        .then(i => this.getData())
      return 'done'
    }
    retrieveData()
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

  addDeckHandler = () => {

  }

  render(){
    return (
      <View style={styles.screen}>
        <View>
          <Header title={"Udacicard's Japanese Builder"} />
        </View>
        <View style={styles.cardView} >
          <CreateDeck onAddDeck={this.addDeckHandler} />
          <ScrollView>
            {this.state.decks.map(i => {
              return <DeckItem key={i.key} title={i.item.title} questions={i.item.questions.length} navigation={this.props.navigation} />
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  cardView: {
    padding: 50
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
