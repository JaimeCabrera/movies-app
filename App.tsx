import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {Fade} from './src/screens/Fade';
// import {LogBox} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <Fade />
    </NavigationContainer>
  );
};
export default App;

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);
