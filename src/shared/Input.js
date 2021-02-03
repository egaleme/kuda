import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';

import {FONT_REGULAR, LIGHT_COLOR} from '../Constants';

const styles = StyleSheet.create({
  inputField: {
    height: 52,
    // width: '100%',
    // color: '#7093A1',
    backgroundColor: '#FFF',
    // borderColor: '#7093A1',
    fontFamily: FONT_REGULAR,
    fontSize: 17,
    paddingLeft: 10,
    // color: '#7093A1',
  },
});

export function Input(props) {
  return (
    <>
      <TextInput
        value={props.value}
        multiline={props.multiline || false}
        onChangeText={props.onChangeText}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry || false}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor || LIGHT_COLOR}
        style={[styles.inputField, props.style]}
        underlineColorAndroid="transparent"
        editable={props.editable}
      />

      {props.errorText && (
        <Text style={{fontFamily: FONT_REGULAR, color: 'red', fontSize: 10}}>
          {props.errorText}
        </Text>
      )}
    </>
  );
}
