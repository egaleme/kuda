import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Start from './Start';
import BVN from './Bvn';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="BVN" component={BVN} />
    </Stack.Navigator>
  );
}
