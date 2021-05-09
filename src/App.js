/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Posts from './Views/Posts';
import Post from './Views/Post';
import CreatePost from './Views/CreatePost'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {

  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Posts}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
