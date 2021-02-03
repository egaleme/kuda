import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppIntro from '../screens/AppIntro';
import Auth from '../screens/Auth';
import Main from '../screens/Main';

import {PRIMARY_COLOR} from '../Constants';
import {useAuthStore} from '../screens/Auth/store';
import {appIntroStore} from '../screens/AppIntro/store';

function AppNavigatorScreen(props) {
  const currentStack = useAuthStore(
    React.useCallback((state) => state.currentStack),
  );
  return (
    <>
      {currentStack === 0 && <Auth />}
      {currentStack === 1 && <Main navigation={props.navigation} />}
    </>
  );
}

const AppStack = createStackNavigator();

export default function AppScreen(props) {
  const [loading, setLoading] = React.useState(true);

  const introFinished = appIntroStore(
    React.useCallback((state) => state.introFinished),
  );

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 220);
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating color={PRIMARY_COLOR} size={30} />
      </View>
    );
  } else {
    return (
      <AppStack.Navigator headerMode="none">
        {introFinished === true ? (
          <AppStack.Screen
            name="AppNavigatorScreen"
            component={AppNavigatorScreen}
          />
        ) : (
          <AppStack.Screen name="AppIntro" component={AppIntro} />
        )}
      </AppStack.Navigator>
    );
  }
}
