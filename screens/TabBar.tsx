import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]} />
);
const FourthRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]} />
);

export default class TabBar extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'First'},
      {key: 'second', title: 'Second'},
      {key: 'third', title: 'Third'},
      {key: 'fourth', title: 'Fourth'},
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute,
        })}
        onIndexChange={index => this.setState({index})}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
