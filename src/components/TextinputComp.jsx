import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';

const TextinputComp = ({placeholder, value, onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'black'}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default TextinputComp;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(50),
    borderBottomWidth: 1,
    // marginHorizontal: moderateScale(16),
    borderBottomColor: '#8B8787',
  },
  input: {
    flex: 1,
    // paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(14),
    fontFamily: fontFamily.regular,
    color: 'black',
  },
});
