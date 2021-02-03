import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
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

//const [secureTextEntry, setSecureTextEntry] = React.useState(true);

export default function Start(props) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    confPassword: '',
    referralcode: '',
    isFocused: true,
    secureTextEntryPass: true,
    secureTextEntryconfPass: true,
    isPassError: false,
    confBorder: BACKGROUND_COLOR,
  });

  const handleFocus = () => setState({...state, isFocused: false});

  const handleBlur = () => setState({...state, isFocused: true});

  React.useEffect(() => {
    if (state.confPassword !== state.password && state.confPassword !== '') {
      setState({...state, isPassError: true});
    } else {
      setState({...state, isPassError: false});
    }
  }, [state.confPassword]);

  return (
    <View style={styles.root}>
      <AppBackBtn title="1/6" navigation={props.navigation} />
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Start</Text>
        <Text style={[styles.text, {paddingVertical: 10}]}>
          Open a Kuda account with a few details.
        </Text>
        <Text style={[styles.text, {paddingTop: 10}]}>
          Your password must have at least 8
        </Text>
        <Text style={styles.text}>
          characters including letters and a number.
        </Text>
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

        <Text style={[styles.text, {marginTop: 10}]}>Confirm Password</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 53,
            backgroundColor: '#fff',
            borderBottomColor:
              state.confPassword.length > 0 ? PRIMARY_COLOR : BACKGROUND_COLOR,
            borderBottomWidth: 1,
          }}>
          <Input
            style={[
              styles.textInput,
              {width: '90%'},

              // {
              //   borderBottomColor:
              //     state.confPassword.length > 0 || state.isFocused === true
              //       ? PRIMARY_COLOR
              //       : BACKGROUND_COLOR,
              //   borderBottomWidth: 2,
              // },
            ]}
            placeholderTextColor={LIGHT_COLOR}
            value={state.confPassword}
            onChangeText={(text) => setState({...state, confPassword: text})}
            secureTextEntry={state.secureTextEntryconfPass}
            placeholder="........"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={{paddingRight: 20}}
            onPress={() =>
              setState({
                ...state,
                secureTextEntryconfPass: !state.secureTextEntryconfPass,
              })
            }>
            <Feather
              size={20}
              name={state.secureTextEntryconfPass ? 'eye-off' : 'eye'}
              color="#00000070"
            />
          </TouchableOpacity>
        </View>
        {state.isPassError ? (
          <Text style={{fontFamily: FONT_REGULAR, color: 'red', fontSize: 10}}>
            Password does not match
          </Text>
        ) : null}

        <Text style={[styles.text, {marginTop: 10}]}>
          Referral Code (Optional)
        </Text>
        <Input
          style={[
            styles.textInput,
            {
              borderBottomColor:
                state.referralcode.length > 0
                  ? PRIMARY_COLOR
                  : BACKGROUND_COLOR,
              borderBottomWidth: 1,
            },
          ]}
          placeholderTextColor={LIGHT_COLOR}
          value={state.referralcode}
          onChangeText={(text) => setState({...state, referralcode: text})}
          placeholder="XXXXXXXXX"
          autoCapitalize="none"
        />
        <View style={{marginTop: 15}}>
          <Text style={[styles.text, {textAlign: 'center'}]}>
            For information on what we do
          </Text>
          <Text style={[styles.text, {textAlign: 'center'}]}>
            with your data, please read our
          </Text>
          <Text
            style={[
              styles.text,
              {textAlign: 'center', color: '#00FF00', paddingTop: 10},
            ]}>
            Privacy Notice
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('BVN')}
          disabled={
            state.email.length === 0 ||
            state.password.length === 0 ||
            state.confPassword.length === 0
          }
          activeOpacity={0.7}
          style={[
            styles.btn,
            {
              marginTop: 10,
              opacity:
                state.email.length === 0 ||
                state.password.length === 0 ||
                state.confPassword.length === 0
                  ? 0.5
                  : 1,
            },
          ]}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 20,
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
