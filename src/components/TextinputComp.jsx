import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';

const TextinputComp = ({
  placeholder,
  value,
  onChange,
  noOflines,
  isMultiline,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'black'}
        style={[
          styles.input,
          {height: isMultiline ? moderateScale(100) : moderateScale(50)},
        ]}
        value={value}
        onChangeText={onChange}
        multiline={isMultiline}
        numberOfLines={noOflines}
      />
    </View>
  );
};

export default TextinputComp;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#8B8787',
  },
  input: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily.regular,
    color: 'black',
    textAlignVertical: 'top', // Ensure text aligns to the top of the input
  },
});
