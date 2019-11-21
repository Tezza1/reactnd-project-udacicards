import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { createTabsNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../screens/HomeScreen'
import DeckScreen from '../screens/DeckScreen'
import QuizScreen from '../screens/QuizScreen'
import AddScreen from '../screens/AddScreen'
import AnswerScreen from '../screens/AnswerScreen'
import ResultScreen from '../screens/ResultScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Deck: DeckScreen,
  Quiz: QuizScreen,
  Add: AddScreen,
  Answer: AnswerScreen,
  Result: ResultScreen
})

export default createAppContainer(AppNavigator)
