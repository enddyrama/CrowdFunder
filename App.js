import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNavigator from './src/navigator/MainNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
      
  );
}

export default App;
