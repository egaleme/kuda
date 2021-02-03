import * as React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Registration from './Registration';
import Signing from './Signin';
import {
  PRIMARY_COLOR,
  TEXT_COLOR_BOLD,
  TEXT_COLOR_REGULAR,
  FONT_BOLD,
  FONT_REGULAR,
  BACKGROUND_COLOR,
} from '../../Constants';
import loginImage from '../../../assets/images/login-image2.png';

function Index(props) {
  return (
    <View style={styles.root}>
      <View style={{flex: 1}} />
      <Image source={loginImage} style={{alignSelf: 'center'}} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Welcome to your</Text>
        <Text style={styles.title}>Freedom.</Text>
      </View>
      <View style={{marginHorizontal: 22, marginTop: 20}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => props.navigation.navigate('Registration')}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.navigate('Signing')}
        style={styles.signingContainer}>
        <Text style={styles.haveAcctText}>Have an account?</Text>
        <Text style={styles.signingText}>Signin</Text>
      </TouchableOpacity>
      {/* <View style={{flex: 1}} /> */}
    </View>
  );
}

const Stack = createStackNavigator();

export default function Auth(props) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Index} name="Index" />
      <Stack.Screen component={Signing} name="Signing" />
      <Stack.Screen component={Registration} name="Registration" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontFamily: FONT_BOLD,
    fontSize: 31,
    color: TEXT_COLOR_BOLD,
    fontWeight: '700',
    lineHeight: 38,
  },
  btn: {
    padding: 16,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontFamily: FONT_BOLD,
    fontSize: 18,
    letterSpacing: 2,
  },
  signingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9,
  },
  signingText: {
    fontFamily: FONT_BOLD,
    fontSize: 18,
    color: '#00FF00',
  },
  haveAcctText: {
    fontFamily: FONT_BOLD,
    fontSize: 18,
    color: TEXT_COLOR_BOLD,
    marginRight: 5,
  },
});
