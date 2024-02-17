import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import Routes from './src/routes';




function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="#0C0F14" barStyle={"light-content"} translucent={true} />
        <Routes/>
      </View>
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#0C0F14",
  }
})