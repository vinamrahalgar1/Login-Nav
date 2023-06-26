import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Status = (props: any) => {
  console.log('props===>', props);
  const goBack = () => {
    props.navigation.pop();
  };
  const navigateToNext = () => {
    props.navigation.navigate('Page2');
  };

  const navigateToBottomTab = () => {
    props.navigation.navigate('BottomTab');
  };
  const navigateToTabbar = () => {
    props.navigation.navigate('TabBar');
  };
  return (
    <View>
      <Button onPress={() => goBack()} title="Back" />
      <View style={{padding: 30}}></View>

      <Button onPress={() => navigateToNext()} title="Bottom Tab Home" />
      <View style={{padding: 30}}></View>

      <Button onPress={() => navigateToTabbar()} title="Tab Bar" />

      <View style={{padding: 30}}></View>

      <Button onPress={() => navigateToBottomTab()} title="Tab 2" />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
