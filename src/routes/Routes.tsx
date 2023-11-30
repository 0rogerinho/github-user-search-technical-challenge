// react-navigation-stack
import { createStackNavigator } from '@react-navigation/stack'
// screen
import { Home } from '../screen'

const Stack = createStackNavigator()

export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>

  )
}
