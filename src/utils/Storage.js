import AsyncStorage from '@react-native-async-storage/async-storage';

export const getIntroData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@intro_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const storeIntroData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@intro_Key', jsonValue);
  } catch (e) {
    // saving error
  }
};
