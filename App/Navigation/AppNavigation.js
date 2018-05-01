import { StackNavigator } from 'react-navigation'
import View from '../Containers/View'
import LaunchScreen from '../Containers/LaunchScreen'
import ListView from '../Containers/View';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  View: { screen: View },
  ListView: { screen: ListView },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListView',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
