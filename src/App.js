import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import AppIntro from './screens/AppIntro';
import {FONT_LIGHT, TEXT_COLOR_REGULAR, PRIMARY_COLOR} from './Constants';
import Routes from './screens/Router';
import {appIntroStore} from './screens/AppIntro/store';

export default function App() {
  const getIntroFinished = appIntroStore(
    React.useCallback((state) => state.getIntroFinished),
  );
  React.useEffect(() => {
    getIntroFinished();
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_COLOR} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
