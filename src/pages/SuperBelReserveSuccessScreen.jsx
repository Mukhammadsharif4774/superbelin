import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import SuperBelHeader from '../components/SuperBelHeader';
import SuperBelComponent from '../components/SuperBelComponent';
import Success from '../assets/success_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'SuperBelHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <SuperBelHeader />

      <Image
        source={Success}
        style={{
          width: width * 0.9,
          height: width * 0.9,
          alignSelf: 'center',
          marginTop: '15%',
          objectFit: 'contain',
        }}
      />

      <SuperBelComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  description: {
    backgroundColor: COLORS.main,
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 25,
    paddingHorizontal: 50,
  },
});
