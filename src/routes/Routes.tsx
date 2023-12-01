// react-navigation-stack
import { createStackNavigator } from '@react-navigation/stack'
// screen
import { Home, User } from '../screen'

const Stack = createStackNavigator()

export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='User' component={User} />
    </Stack.Navigator>

  )
}
