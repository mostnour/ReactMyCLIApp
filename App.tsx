/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
/*
import {
  SafeAreaView,
} from 'react-native';
 */
// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler';
import MainStack from './src/navigation/mainStack';
// import MainNews from './src/components/MainNews/MainNews';

function App(): React.JSX.Element {
  return (
      //<SafeAreaView> remove this to allow appliction to use Stack Navigation
        <NavigationContainer>
          {/* <HomeScreen /> <MainNews /> */}
          <MainStack />
        </NavigationContainer>
      //</SafeAreaView>
  );
}

export default App;
