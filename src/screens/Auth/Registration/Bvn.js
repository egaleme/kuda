import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  FONT_BOLD,
  FONT_REGULAR,
} from '../../../Constants';
import {AppBackBtn} from '../../../shared';

export default function BVN(props) {
  return (
    <View style={styles.root}>
      <AppBackBtn title="3/6" navigation={props.navigation} />
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
