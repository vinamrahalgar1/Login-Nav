import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Home = (props: any) => {
  const navigateToStatus = () => {
    props.navigation.navigate('Status');
  };
  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };

  const RenderSomething = () => {
    const [count, setCount] = useState(0);
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>You clicked {count} times</Text>
        <Button onPress={() => setCount(count + 1)} title="Click!" />

        <View style={{padding: 10, backgroundColor: 'white', flex: 1}}>
          <Text style={styles.baseText}>Hello </Text>
          <Text style={styles.baseText}>Welcome!</Text>

          <View
            style={{
              padding: 7,
              backgroundColor: 'orange',
              paddingBottom: 50,
              marginBottom: 30,
            }}>
            <Text style={{fontFamily: '', fontSize: 30, fontStyle: 'italic'}}>
              SEEMA M T, JAI SHREE RAM, HASSAN
            </Text>
          </View>
          <Button onPress={() => navigateToStatus()} title="Next" />
          <View style={{padding: 30}}></View>
          <Button onPress={() => navigateToLogin()} title="Login" />

          {/* <ScrollView style={styles.scrollView}>
            <Text style={styles.baseText}>
              HELLO Use the DUMMY parameter to specify that: No device or
              external storage space is to be allocated to the data set. No
              disposition processing is to be performed on the data set. For
              BSAM and QSAM, no input or output operations are to be performed o
            </Text>
          </ScrollView> */}
        </View>
      </View>
    );
  };
  return <RenderSomething />;
};

export default Home;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'black',
    padding: 30,
    fontStyle: 'italic',
  },
  scrollView: {
    backgroundColor: 'brown',
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
