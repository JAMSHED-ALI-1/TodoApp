import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import TextinputComp from '../components/TextinputComp';
import ButtonComp from '../components/ButtonComp';
import fontFamily from '../styles/fontFamily';

const Addtask = ({}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 18, gap: 20, marginTop: '10%'}}>
      <TextinputComp placeholder={'Title'} onchange />
      <TextinputComp placeholder={'Detail'} />
      <ButtonComp title={'ADD'} />
      <View></View>
    </View>
  );
};

export default Addtask;

const styles = StyleSheet.create({});
