import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Component/Weather';
import Constants from 'expo-constants';

export default function App() {
  //function doIt
  const doIt = () => {
    console.log("Hello From Console")
  }

  return (
    <View style={styles.container}>
      <Weather zipCode="90110"/>
        <StatusBar style="auto" />
    </View>
  );
}

//css
const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
