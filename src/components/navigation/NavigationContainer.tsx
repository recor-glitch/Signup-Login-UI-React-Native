import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../auth/login/Login';
import Welcome from '../auth/components/welcome/Welcome';
import Splash from '../splash/Splash';
import Register from '../auth/register/Register';
import Profile from '../profile/Profile';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
        headerBackVisible: false,
        headerTransparent: true,
      }}>
      <Stack.Screen component={Login} name="login" />
      <Stack.Screen component={Welcome} name="welcome" />
      <Stack.Screen component={Splash} name="splash" />
      <Stack.Screen component={Register} name="register" />
      <Stack.Screen component={Profile} name="profile" />
    </Stack.Navigator>
  );
};

export default NavContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
