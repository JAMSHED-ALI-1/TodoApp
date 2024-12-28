import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import fontFamily from '../styles/fontFamily';

const Header = ({title, navigation, onpressBack}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        // flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      <Icon name="arrowleft" size={25} color={'#fff'} onPress={onpressBack} />
      <Text
        style={{
          color: '#fff',
          marginLeft: 30,
          fontSize: 22,
          fontFamily: fontFamily.bold,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
