import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //function doIt
  const doIt = () => {
    console.log("Hello From Console")
  }

  return (
    <View style={styles.container}>
      <Text onPress={doIt}>Hello World</Text>
        <StatusBar style="auto" />
    </View>
  );
}

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
