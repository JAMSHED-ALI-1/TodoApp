import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const ButtonComp = ({title, onPress, disable}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.buttonBox}
      disabled={disable}
      activeOpacity={0.7} // Adds a slight opacity change when pressed
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonBox: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fontFamily.medium,
  },
});
