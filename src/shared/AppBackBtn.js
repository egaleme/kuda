import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {PRIMARY_COLOR, FONT_REGULAR, BACKGROUND_COLOR} from '../Constants';

export function AppBackBtn(props) {
  const handleNav = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={handleNav}>
        <Feather name="chevron-left" size={30} color={PRIMARY_COLOR} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.title}</Text>
      {props.icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: `#7093A199`,
  },
  text: {
    textAlign: 'center',
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontFamily: FONT_REGULAR,
  },
});
