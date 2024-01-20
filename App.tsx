import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation';
import COLORS from './src/assets/Colors';

const MyTheme = {
  ...DefaultTheme,
  Colors: {
    ...DefaultTheme.colors,
    background: COLORS.HEX_BLACK,
  },
};

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme = {MyTheme}>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App;