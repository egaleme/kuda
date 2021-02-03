import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {AppBackBtn, Input} from '../../../shared';
import {
  PRIMARY_COLOR,
  BACKGROUND_COLOR,
  TEXT_COLOR_BOLD,
  FONT_REGULAR,
  TEXT_COLOR_REGULAR,
  FONT_BOLD,
  LIGHT_COLOR,
} from '../../../Constants';

import logo from '../../../../assets/images/kuda-logo.png';

//const [secureTextEntry, setSecureTextEntry] = React.useState(true);

export default function Start(props) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    isFocused: true,
    secureTextEntryPass: true,
    isPassError: false,
    confBorder: BACKGROUND_COLOR,
  });

  const handleFocus = () => setState({...state, isFocused: false});

  const handleBlur = () => setState({...state, isFocused: true});

  return (
    <View style={styles.root}>
      <AppBackBtn
        icon={<Feather name="help-circle" color={PRIMARY_COLOR} size={20} />}
        navigation={props.navigation}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={logo} style={{width: 50, height: 50}} />
        <Text style={styles.title}>Hey there !</Text>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text, {marginTop: 10}]}>Email</Text>
        <Input
          style={[
            styles.textInput,
            {
              borderBottomColor:
                state.email.length > 0 ? PRIMARY_COLOR : BACKGROUND_COLOR,
              borderBottomWidth: 1,
            },
          ]}
          placeholderTextColor={LIGHT_COLOR}
          value={state.email}
          onChangeText={(text) => setState({...state, email: text})}
          keyboardType="email-address"
          placeholder="youremail@mail.com"
          autoCapitalize="none"
        />

        <Text style={[styles.text, {marginTop: 10}]}>Password</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 53,
            backgroundColor: '#fff',
            borderBottomColor:
              state.password.length > 0 ? PRIMARY_COLOR : BACKGROUND_COLOR,
            borderBottomWidth: 1,
          }}>
          <Input
            style={[
              styles.textInput,
              {width: '90%'},
              //   {
              //     borderBottomColor:
              //       state.password.length > 0 || state.isFocused === true
              //         ? PRIMARY_COLOR
              //         : BACKGROUND_COLOR,
              //     borderBottomWidth: 2,
              //   },
            ]}
            placeholderTextColor={LIGHT_COLOR}
            value={state.password}
            onChangeText={(text) => setState({...state, password: text})}
            secureTextEntry={state.secureTextEntryPass}
            placeholder="........"
            autoCapitalize="none"
            onBlur={handleBlur}
          />
          <TouchableOpacity
            style={{paddingRight: 20}}
            onPress={() =>
              setState({
                ...state,
                secureTextEntryPass: !state.secureTextEntryPass,
              })
            }>
            <Feather
              size={20}
              name={state.secureTextEntryPass ? 'eye-off' : 'eye'}
              color="#00000070"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          disabled={state.email.length === 0 || state.password.length === 0}
          activeOpacity={0.7}
          style={[
            styles.btn,
            {
              marginTop: 20,
              opacity:
                state.email.length === 0 || state.password.length === 0
                  ? 0.5
                  : 1,
            },
          ]}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    marginHorizontal: 22,
    // marginTop: 20,
    // justifyContent: 'center',
    // flex: 1,
  },
  title: {
    fontFamily: FONT_BOLD,
    fontSize: 22,
    color: TEXT_COLOR_BOLD,
  },
  text: {
    fontFamily: FONT_REGULAR,
    color: TEXT_COLOR_REGULAR,
    fontSize: 16,
  },
  textInput: {
    // marginTop: 24,
    //paddingLeft: 10,
    color: PRIMARY_COLOR,
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
});
