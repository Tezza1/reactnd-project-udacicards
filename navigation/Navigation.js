import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import DeckScreen from '../screens/DeckScreen'
import QuizScreen from '../screens/QuizScreen'
import AddScreen from '../screens/AddScreen'
import AnswerScreen from '../screens/AnswerScreen'
import ResultScreen from '../screens/ResultScreen'
import { Ionicons } from '@expo/vector-icons'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Deck: DeckScreen,
  Quiz: QuizScreen,
  Add: AddScreen,
  Answer: AnswerScreen,
  Result: ResultScreen,
})

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: () => (<Ionicons name={'ios-home'} size={25} horizontal={true} color={'white'}/>)
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#0277bd',
    labelStyle: {
      fontFamily: 'openSansBold',
      fontSize: 18,
    },
    style: {
      borderTopWidth: 1,
      borderTopColor: '#90a4ae',
      // ios
      shadowColor: '#607d8b',
      shadowRadius: 2,
      shadowOpacity: 0.3,
      // android
      elevation: 5,
    }
  }
})

export default createAppContainer(BottomTabNavigator)
