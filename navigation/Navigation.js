import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { createTabsNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../screens/HomeScreen'
import DeckScreen from '../screens/DeckScreen'
import SlideScreen from '../screens/SlideScreen'
import QuizScreen from '../screens/QuizScreen'
import AddScreen from '../screens/AddScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Deck: DeckScreen,
  Slide: SlideScreen,
  Quiz: QuizScreen,
  Add: AddScreen
})

export default createAppContainer(AppNavigator)
