import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Coffee from './src/screens/TabScreen/Home';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
