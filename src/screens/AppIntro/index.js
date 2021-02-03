import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  TEXT_COLOR_BOLD,
  TEXT_COLOR_REGULAR,
  FONT_BOLD,
  FONT_LIGHT,
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
} from '../../Constants';

import img1 from '../../../assets/images/1.png';
import img2 from '../../../assets/images/2.png';
import img3 from '../../../assets/images/3.png';

import icon1 from '../../../assets/images/desk.png';

import {appIntroStore} from './store';

const slides = [
  {
    key: 'somethun',
    title: 'Bank',
    text:
      'Get monthly free transfers, a free debit \ncard and smarter budgeting. ',
    image: img1,
    backgroundColor: BACKGROUND_COLOR,
    icon: icon1,
  },
  {
    key: 'somethun-dos',
    title: 'Save',
    text:
      'Earn more interest on your savings and \nsave automatically when you spend',
    image: img2,
    backgroundColor: BACKGROUND_COLOR,
  },
  {
    key: 'somethun1',
    title: 'Credit',
    text: 'Get instant overdraft when you use your \nKuda accoun actively.',
    image: img3,
    backgroundColor: BACKGROUND_COLOR,
  },
];

const AppIntro = (props) => {
  const setIntroFinished = appIntroStore(
    React.useCallback((state) => state.setIntroFinished),
  );
  const _renderItem = ({item}) => {
    return (
      <View style={[styles.container, {backgroundColor: item.backgroundColor}]}>
        <View style={{flex: 1}} />
        <Image style={styles.image} source={item.image} />
        <View style={{marginTop: 35, marginLeft: 35}}>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            {/* <Image
              source={item.icon}
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
                marginTop: 5,
              }}
            /> */}
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  };
  const _onDone = () => {
    setIntroFinished(true);
  };
  const nextBtn = () => {
    return (
      <View style={styles.btn}>
        <Text style={styles.btnTex}>Next</Text>
      </View>
    );
  };

  const doneBtn = () => {
    return (
      <View style={styles.btn}>
        <Text style={styles.btnTex}>Next</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.skipBtn}>Skip</Text>
      </TouchableOpacity>
      <AppIntroSlider
        keyExtractor={(item) => item.title}
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        activeDotStyle={{backgroundColor: '#00FF00'}}
        renderNextButton={nextBtn}
        bottomButton={true}
        renderDoneButton={doneBtn}
        dotStyle={{backgroundColor: '#f4f4f4'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  image: {
    alignSelf: 'center',
    width: 240,
    height: 240,
    borderRadius: 150,
  },
  title: {
    fontSize: 34,
    color: TEXT_COLOR_BOLD,
    fontFamily: FONT_BOLD,
    // paddingVertical: 5,
  },
  text: {
    fontSize: 20,
    color: TEXT_COLOR_REGULAR,
    fontFamily: FONT_LIGHT,
    paddingTop: 10,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginHorizontal: 22,
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTex: {
    color: '#fff',
    fontFamily: FONT_BOLD,
    fontSize: 18,
  },
  skipBtn: {
    paddingTop: 20,
    color: '#00FF00',
    fontFamily: FONT_LIGHT,
    fontSize: 25,
    alignSelf: 'flex-end',
    paddingHorizontal: 24,
  },
});

export default AppIntro;
