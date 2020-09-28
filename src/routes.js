import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from './containers/homeContainer';
import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';
import ForgotPasswordContainer from './containers/forgotPasswordContainer';

const Stack = createStackNavigator();

function AppRoutes() {

  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeContainer}   options={{ title: 'Welcome Home' }} />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordContainer} />
    </Stack.Navigator>
  </NavigationContainer>

);

}

export default AppRoutes;