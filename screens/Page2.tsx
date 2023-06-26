import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from './Login';

const Tab = createBottomTabNavigator();

const Page2 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};
export default Page2;

// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const BottomTabBar = () => {
//   const [selectedTab, setSelectedTab] = useState('Home');

//   const handleTabPress = (tabName: React.SetStateAction<string>) => {
//     setSelectedTab(tabName);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={{
//           ...styles.tabItem,
//           ...(selectedTab === 'Home' && styles.selectedTab),
//         }}
//         onPress={() => handleTabPress('Home')}>
//         <MaterialCommunityIcons
//           name={selectedTab === 'Home' ? 'home' : 'home-outline'}
//           size={24}
//           color={selectedTab === 'Home' ? '#000000' : '#888888'}
//         />
//         <Text style={styles.tabTitle}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           ...styles.tabItem,
//           ...(selectedTab === 'Account' && styles.selectedTab),
//         }}
//         onPress={() => handleTabPress('Account')}>
//         <MaterialCommunityIcons
//           name={selectedTab === 'Account' ? 'account' : 'account-outline'}
//           size={24}
//           color={selectedTab === 'Account' ? '#000000' : '#888888'}
//         />
//         <Text style={styles.tabTitle}>Account</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           ...styles.tabItem,
//           ...(selectedTab === 'Profile' && styles.selectedTab),
//         }}
//         onPress={() => handleTabPress('Profile')}>
//         <MaterialCommunityIcons
//           name={selectedTab === 'Profile' ? 'face' : 'face-outline'}
//           size={24}
//           color={selectedTab === 'Profile' ? '#000000' : '#888888'}
//         />
//         <Text style={styles.tabTitle}>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#DDDDDD',
//     justifyContent: 'space-around',
//     paddingVertical: 8,
//   },
//   tabItem: {
//     alignItems: 'center',
//   },
//   selectedTab: {
//     backgroundColor: '#DDDDDD',
//   },
//   tabTitle: {
//     fontSize: 12,
//     marginTop: 2,
//   },
// });

// export default BottomTabBar;

// // import {Box, Center, HStack, Icon, NativeBaseProvider} from 'native-base';
// // import React, {useState, useEffect} from 'react';
// // import {
// //   SafeAreaView,
// //   Text,
// //   View,
// //   Image,
// //   Pressable,
// //   TouchableHighlight,
// // } from 'react-native';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// // function App() {
// //   const [selected, setSelected] = React.useState(1);
// //   return (
// //     <NativeBaseProvider>
// //       <Box
// //         flex={1}
// //         bg="white"
// //         safeAreaTop
// //         width="100%"
// //         maxW="300px"
// //         alignSelf="center">
// //         <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
// //           <TouchableHighlight
// //             underlayColor="transparent"
// //             style={{
// //               opacity: selected === 0 ? 1 : 0.5,
// //               paddingVertical: 3,
// //               flex: 1,
// //             }}
// //             onPress={() => setSelected(0)}>
// //             <View style={{alignItems: 'center'}}>
// //               <MaterialCommunityIcons
// //                 name={selected === 0 ? 'home' : 'home-outline'}
// //                 size={16}
// //                 color="white"
// //                 style={{marginBottom: 1}}
// //               />
// //               <Text style={{color: 'white', fontSize: 12}}>Home</Text>
// //             </View>
// //           </TouchableHighlight>

// //           <TouchableHighlight
// //             underlayColor="transparent"
// //             style={{
// //               opacity: selected === 0 ? 1 : 0.5,
// //               paddingVertical: 3,
// //               flex: 1,
// //             }}
// //             onPress={() => setSelected(0)}>
// //             <View style={{alignItems: 'center'}}>
// //               <MaterialCommunityIcons
// //                 name={selected === 0 ? 'home' : 'home-outline'}
// //                 size={16}
// //                 color="white"
// //                 style={{marginBottom: 1}}
// //               />
// //               <Text style={{color: 'white', fontSize: 12}}>Profile</Text>
// //             </View>
// //           </TouchableHighlight>
// //           <TouchableHighlight
// //             underlayColor="transparent"
// //             style={{
// //               opacity: selected === 0 ? 1 : 0.5,
// //               paddingVertical: 3,
// //               flex: 1,
// //             }}
// //             onPress={() => setSelected(0)}>
// //             <View style={{alignItems: 'center'}}>
// //               <MaterialCommunityIcons
// //                 name={selected === 0 ? 'home' : 'home-outline'}
// //                 size={16}
// //                 color="white"
// //                 style={{marginBottom: 1}}
// //               />
// //               <Text style={{color: 'white', fontSize: 12}}>Account</Text>
// //             </View>
// //           </TouchableHighlight>
// //         </HStack>
// //       </Box>
// //     </NativeBaseProvider>
// //   );
// // }
// // export default App;
