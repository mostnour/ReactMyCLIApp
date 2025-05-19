import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from '../screens/HomeScreen/HomeScreen';
//import ArticleDetails from '../screens/ArticleDetails/ArticleDetails';
// import ScreenNames from './ScreenNames';
// import { ArticleType } from '../types/ArticleType';
//import AuthStack from './Stacks/Auth.stack';
import StackNames from './StackNames';
// import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AuthStack from './Stacks/Auth.stack';
import MainTabs from './Tabs/MainTabs';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticleDetails} /> */}
      <Stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <Stack.Screen name={StackNames.MainTabs} component={MainTabs} />
    </Stack.Navigator>
  );
}

/* export type MainStackParamList = {
  [ScreenNames.HomeScreen] : undefined,
  [ScreenNames.ArticleDetails] : {
    article : ArticleType
  },
} */

export type MainStackParamList = {
  [StackNames.AuthStack] : undefined,
  [StackNames.MainTabs]: undefined,
};

