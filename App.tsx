import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavContainer from './src/components/navigation/NavigationContainer';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['myapp://'],
        config: {
          screens: {
            Login: {
              path: 'login',
            },
            Profile: {
              path: 'profile',
            },
          },
        },
      }}>
      <StatusBar backgroundColor="rgba(178,216,216,0.5)" />
      <NavContainer />
    </NavigationContainer>
  );
};

export default App;
