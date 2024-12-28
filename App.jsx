// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Rootstack from './src/navigator/Rootstack';
import {StatusBar} from 'react-native';
import {COLORS} from './src/styles/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.primary} />
      <Rootstack />
    </NavigationContainer>
  );
}
