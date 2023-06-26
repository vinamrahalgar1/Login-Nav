import {View, Button, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Status from './screens/Status';
import Page2 from './screens/Page2';
import Login from './screens/Login';
import TabBar from './screens/TabBar';
import BottomTab from '../Demo2/screens/BottomTab';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
