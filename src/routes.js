import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from './containers/homeContainer';
import Login from './containers/loginContainer';
import Register from './containers/registerContainer';

const Stack = createStackNavigator();

function AppRoutes() {

  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeContainer}   options={{ title: 'Welcome Home' }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>

);

}

export default AppRoutes;